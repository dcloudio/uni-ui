# Android Bug 01：3 列宫格拖拽预览时出现重叠 / 遮挡 / 错位

## 标题建议
`Android 平台 flex-wrap 宫格在高频 transform + transition 预览排序时出现重叠、遮挡和绘制顺序错误`

## 问题描述
在 `uni-app x` 的 Android 平台中，使用 `flex-direction: row` + `flex-wrap: wrap` 构建 3 列宫格，并在拖拽排序过程中对多个兄弟节点持续执行 `transform: translate(...)` 且带有 `transition-duration` 动画时，会出现以下异常：

- 某些宫格没有移动到正确预览位置
- 某些宫格重叠在一起
- 某个宫格被另一个宫格遮挡
- 逻辑顺序已经变化，但视觉顺序仍然错误

该问题在拖动路径较复杂时更容易复现，例如：
- 拖着第 1 项多绕几圈
- 再拖到第 7 / 8 / 9 项附近
- 不松手，仅观察拖动中的预览

## 预期结果
- 拖动过程中，其他宫格应稳定地移动到碰撞预览位置
- 不应出现重叠、遮挡、错位
- 视觉顺序应与实时预览顺序一致

## 实际结果
- 会出现宫格重叠
- 会出现宫格被其他宫格挡住
- 有时日志显示目标索引已经正确变化，但界面仍错误显示

## 已观察到的一个典型现象
- 拖动中的 `宫格1` 已经进入下方区域
- `宫格6` 按预览顺序应被顶开或显示在新位置
- 实际上 `宫格6` 被 `宫格7` 挡住，看起来像绘制顺序错了

## 初步判断
更像是 Android 平台渲染层问题，而不是拖拽碰撞算法问题：
- `hoverIndex` / 目标索引的日志是合理的
- 预览顺序更新是发生了的
- 但多兄弟节点在 `flex-wrap` 中高频 `transform + transition` 时，Android 端的合成 / 重绘可能发生异常

## 当前绕过方式
- 保留实时碰撞预览
- Android 平台关闭拖动过程中的预览动画
- 必要时将拖动阶段改成冻结布局，再用绝对定位渲染所有 item

关闭预览动画后，当前问题明显缓解或消失。

---

## 最小复现代码

### 页面代码
```vue
<template>
  <view style="padding: 15px;">
    <uni-drag-cell v-model="gridList" :column="3" @change="onGridChange">
      <template #default="{ item }">
        <view class="grid-slot">
          <view class="grid-item">
            <text class="grid-text">{{ (item as UTSJSONObject)['name'] }}</text>
          </view>
        </view>
      </template>
    </uni-drag-cell>
  </view>
</template>

<script setup lang="uts">
const gridList = ref<UTSJSONObject[]>([
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
</script>

<style>
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
</style>
```

### 组件关键实现特征
触发问题的关键不在业务数据，而在拖动中的预览策略：

```ts
const getItemStyle = (index : number) : string => {
  let transitionStyle = 'transition-duration: 200ms;'
  let transformStyle = 'translateX(0px) translateY(0px)'

  if (dragging.value == true) {
    if (activeIndex.value == index) {
      transformStyle = `translateX(${dragOffsetX.value}px) translateY(${dragOffsetY.value}px) scale(1.12)`
    } else {
      const targetPosition = findPreviewPosition(itemIds.value[index])
      const sourceLayout = layouts.value[index]
      const targetLayout = layouts.value[targetPosition]
      const deltaX = targetLayout.left - sourceLayout.left
      const deltaY = targetLayout.pageTop - sourceLayout.pageTop
      transformStyle = `translateX(${deltaX}px) translateY(${deltaY}px)`
    }
  }

  return `${transitionStyle}transform: ${transformStyle};`
}
```

---

## 复现步骤
1. 打开 3 列宫格拖拽页面
2. 长按 `宫格1` 进入拖动状态
3. 不松手，在宫格区域中多绕几圈
4. 将 `宫格1` 拖到 `宫格7 / 宫格8 / 宫格9` 一带
5. 观察拖动中的预览，而不是松手后的最终结果

## 复现概率
- 简单直线拖动：不一定复现
- 绕圈、来回滑动后：明显更容易复现

## 补充说明
从现有日志看，`hover-grid active=0 from=... to=...` 的切换是正常的，因此更像是 Android 对多个 flex 子项并行动画时的绘制异常。
