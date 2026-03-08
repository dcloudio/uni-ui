# `uni-drag-cell` 复现代码汇总

本文汇总目前用于复现平台差异和 Android 问题的代码片段，便于单独提取到测试工程或向官方反馈。

## 1. 示例页面中的 3 列宫格用法

来源：`pages/drag-cell/drag-cell.uvue`

```vue
<uni-drag-cell v-model="gridList3" :column="3" @change="onGridChange">
  <template #default="{ item }">
    <view class="grid-slot">
      <view class="grid-item">
        <text class="grid-text">{{ (item as UTSJSONObject)['name'] }}</text>
      </view>
    </view>
  </template>
</uni-drag-cell>
```

```ts
const gridList3 = ref<UTSJSONObject[]>([
  { name: '宫格1' },
  { name: '宫格2' },
  { name: '宫格3' },
  { name: '宫格4' },
  { name: '宫格5' },
  { name: '宫格6' },
  { name: '宫格7' },
  { name: '宫格8' },
  { name: '宫格9' }
])

const onGridChange = (list : UTSJSONObject[]) => {
  console.log('grid list changed:', list)
}
```

```css
.grid-slot {
  width: 100%;
  padding: 5px;
}

.grid-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #28a745;
  border-radius: 8px;
  height: 80px;
}

.grid-text {
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
}
```

---

## 2. 触发 Android 重叠问题的关键渲染逻辑

下面这类逻辑，在 Android 平台的宫格场景里最容易触发问题：

```ts
const getItemStyle = (index : number) : string => {
  let zIndexStyle = 'z-index: 1;'
  let transitionStyle = 'transition-duration: 200ms;'
  let transformStyle = 'translateX(0px) translateY(0px)'

  if (dragging.value == true) {
    if (activeIndex.value == index) {
      zIndexStyle = 'z-index: 30;'
      transitionStyle = 'transition-duration: 0ms;'
      transformStyle = `translateX(${dragOffsetX.value}px) translateY(${dragOffsetY.value}px) scale(1.12)`
    } else {
      const currentItemId = itemIds.value[index]
      const targetPosition = findPreviewPosition(currentItemId)
      if (targetPosition >= 0 && targetPosition < layouts.value.length) {
        const sourceLayout = layouts.value[index]
        const targetLayout = layouts.value[targetPosition]
        const deltaX = targetLayout.left - sourceLayout.left
        const deltaY = targetLayout.pageTop - sourceLayout.pageTop
        transformStyle = `translateX(${deltaX}px) translateY(${deltaY}px)`
      }
    }
  }

  return `${zIndexStyle}${transitionStyle}transform: ${transformStyle};`
}
```

### 特征
- active item 跟手移动
- 非 active item 根据预览顺序做位移
- 多个兄弟节点在拖动过程中持续更新 `transform`
- 非 active item 带有过渡动画

这套方案在 Web 上表现较稳定，但 Android 宫格场景中会出现重叠、遮挡和错位。

---

## 3. Android 坐标系差异相关代码

Android 平台同一次拖动中，不同测量来源可能处于不同坐标系，因此需要补偿：

```ts
const activeViewLeft = ref(0)
const activeViewTop = ref(0)
const dragCoordOffsetX = ref(0)
const dragCoordOffsetY = ref(0)

function beginDrag(index : number, clientX : number, clientY : number) : void {
  startTouchX.value = clientX
  startTouchY.value = clientY
  dragOffsetX.value = 0
  dragOffsetY.value = 0
  dragCoordOffsetX.value = layouts.value[index].left - activeViewLeft.value
  dragCoordOffsetY.value = layouts.value[index].pageTop - activeViewTop.value
}
```

### 说明
如果不做这层补偿，Android 端会出现：
- 长按后 item 飞走
- item 和手指不贴合
- 碰撞区域错位

---

## 4. Web 删除条坐标修正代码

Web 平台中，删除条命中计算需要叠加 `windowTop`：

```ts
const getWebWindowTopOffset = () : number => {
  // #ifdef WEB
  return uni.getWindowInfo().windowTop
  // #endif
  // #ifndef WEB
  return 0
  // #endif
}

const measureDeleteBar = () => {
  const windowTopOffset = getWebWindowTopOffset()
  deleteBarLayout.value = {
    left,
    pageTop: top + windowTopOffset,
    right,
    bottom: bottom + windowTopOffset
  }
}
```

### 说明
如果不加这层修正，Web 上删除条会提前约一个导航栏高度进入“松手删除”状态。

---

## 5. 当前已验证稳定的 Android 绕过策略

### 策略 A：关闭宫格拖动中的预览动画
```ts
// #ifdef APP-ANDROID
if (dragging.value == true && columnCount.value > 0) {
  transitionStyle = 'transition-duration: 0ms;'
}
// #endif
```

### 策略 B：拖动阶段冻结布局
思路：
- 先测量每个 item 的绝对位置
- 拖动阶段给容器定高
- 所有 item 改为 `position: absolute`
- active item 自己移动，非 active item 只根据目标位置直接跳转

这种方式更接近“自己实现一层稳定布局”，可以降低 Android 在 `flex-wrap + transform` 下的渲染异常概率。

---

## 6. 建议的最小复现步骤

### 复现 Android 重叠问题
1. 打开 3 列宫格示例
2. 长按 `宫格1`
3. 不松手，绕几圈
4. 再拖到 `宫格7 / 8 / 9`
5. 观察预览中的其他宫格是否重叠或被遮挡

### 复现 Web 删除条坐标偏移问题
1. 打开带删除条的示例
2. 长按可删除 item
3. 向底部删除条拖动
4. 观察是否在未接触删除条时提前切换为“松手删除”

---

## 7. 建议向官方提交时的拆分方式

建议拆成两个 Android issue：
- `flex-wrap + 多兄弟 transform + transition` 渲染错乱
- `fixed / absolute drag proxy` 覆盖层级不稳定

Web 相关问题则作为平台差异说明，不一定算底层 bug，更像坐标体系差异或编译行为差异。

---

## 8. Android 删除模式下 `fixed + drag-layer` 导致后续拖动失效

下面这类实现，在 Android 删除模式下容易复现“长按后 item 放大，但后续不再跟手移动，页面开始滚动”的问题：

```vue
<view
  v-if="dragging"
  class="drag-cell-drag-layer"
  @touchmove.stop.prevent="onItemTouchMove"
  @touchend="onItemTouchEnd"
  @touchcancel="onItemTouchEnd">
</view>
```

```ts
if (activeIndex.value == index && showClose.value == true) {
  positionStyle = `position: fixed; left: ${activeViewLeft.value}px; top: ${activeViewTop.value}px; width: ${sourceLayout.width}px; height: ${sourceLayout.height}px;`
  transformStyle = `translateX(${dragOffsetX.value}px) translateY(${dragOffsetY.value}px) scale(${activeDragScale.value})`
}
```

更完整的复现依据见：
- `pages/drag-cell/issues/drag-cell-android-bug-03-delete-drag-fixed-loses-touchmove.md`
- `pages/drag-cell/issues/drag-cell-android-bug-03-delete-drag-fixed-repro-code.md`
