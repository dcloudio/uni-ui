# Android Bug 03：删除拖拽场景中切换到 `fixed` 后，`touchmove` 易丢失

## 标题建议

`Android 平台同一触摸序列中，如果当前触摸目标树切换到 position: fixed，后续 touchmove 可能丢失并退化为页面滚动`

## 问题描述

在 `uni-app x` Android 平台中，拖拽排序组件开启底部删除条后，长按某个 item 进入拖拽态时：

- item 会先正常进入激活状态
- 会出现放大反馈
- 但后续不再继续跟手移动
- 页面反而开始滚动

这说明：

- 长按触发本身是成功的
- 拖拽状态切换本身也是成功的
- 问题出在进入拖拽后的连续 `touchmove` 没有稳定继续派发给组件

## 预期结果

- 长按进入拖拽态后，后续 `touchmove` 持续交给拖拽组件
- item 持续跟手移动
- 页面不应接管为普通滚动

## 实际结果

- item 只在激活瞬间放大
- 后续不再拖动
- 页面开始滚动

## 更容易复现的条件

- 组件开启 `showClose`
- 在同一触摸序列中，把激活项或其祖先节点切换为 `position: fixed`
- 或同时动态插入全屏透明拖拽层

---

## 已验证的实验结论

### 实验 A：去掉 `fixed`，也去掉 `drag-layer`

结果：

- item 可以继续拖动
- 但拖动范围被限制在当前示例区域内
- 进入别的区域时会被裁剪

说明：

- 这不是最终方案
- 但能证明触摸连续性恢复了

### 实验 A-2：恢复激活项 `fixed`，继续去掉 `drag-layer`

结果：

- 又回到“长按后放大，但后续拖不动，页面开始滚动”

说明：

- 仅仅把激活项自己切到 `fixed`，就足以触发该问题

### 实验 B：不让激活项 `fixed`，改成祖先容器在拖拽时切 `fixed`

结果：

- 仍会回到“闪一下 / 放大 / 后续拖不动”

说明：

- 不只是激活项本身，祖先容器在同一触摸序列中切到 `fixed` 也会破坏后续 `touchmove`

---

## 当前结论

Android 上可以较明确地认定：

- **同一触摸序列中，不应改变当前触摸目标树的定位语义为 `position: fixed`**

无论改变的是：

- 激活项本身
- 还是激活项祖先容器

都可能导致后续 `touchmove` 丢失，最终页面滚动接管手势。

---

## 当前稳定绕过方案

组件最终采用的 Android 删除拖拽方案为：

1. 原始 item 保持在原触摸树中，继续接收 `touchmove`
2. 原始激活项在视觉上隐藏
3. 额外渲染一个固定定位的视觉代理层，负责“看起来在全屏拖动”
4. 删除条命中基于代理矩形做 Android 专用计算

这个方案的关键点是：

- **代理层只负责视觉，不负责接管触摸链路**

---

## 后续新增观察：删除条命中还存在 Android 坐标系差异

在采用“固定视觉代理层”绕过后，又发现新的平台差异：

- 代理层使用的是接近视口坐标的矩形
- 删除条通过 `selectorQuery().boundingClientRect()` 量到的矩形，和代理层不总在同一坐标系

实际日志里曾出现：

- 代理矩形 `top ≈ 500`
- 删除条矩形 `top ≈ 1792`

两者明显不在同一坐标系，导致：

- 删除条不高亮
- 松手也不删除

后续组件侧又继续做了两层修正：

1. Android 删除条命中单独使用 fallback 公式
2. 当 `activeContentInsetTop / activeContentInsetBottom` 异常时，退回使用代理外框命中

当前版本经过这两步修正后，Android 删除功能已恢复正常。

---

## 最小复现代码特征

### 1. 删除模式下，拖拽阶段切换为 `fixed`

```ts
if (activeIndex.value == index && showClose.value == true) {
  positionStyle = `position: fixed; left: ${activeViewLeft.value}px; top: ${activeViewTop.value}px; width: ${sourceLayout.width}px; height: ${sourceLayout.height}px;`
  zIndexStyle = 'z-index: 30;'
  transitionStyle = 'transition-duration: 0ms;'
  transformStyle = `translateX(${dragOffsetX.value}px) translateY(${dragOffsetY.value}px) scale(${activeDragScale.value})`
}
```

### 2. 拖动过程依赖后续 `touchmove` 持续进入同一链路

```ts
const onItemTouchMove = (event : Any) => {
  const touchEvent = event as UniTouchEvent
  const touch = touchEvent.touches[0]
  if (dragging.value == true) {
    touchEvent.preventDefault()
  }
  moveDrag(touch.clientX, touch.clientY)
}
```

### 3. 删除模式下叠加全屏拖拽层或代理层

```vue
<view
  v-if="dragging"
  class="drag-cell-drag-layer"
  @touchmove.stop.prevent="onItemTouchMove"
  @touchend="onItemTouchEnd"
  @touchcancel="onItemTouchEnd">
</view>
```

---

## 复现步骤

1. 打开带删除功能的拖拽示例
2. 长按任意一个可删除 item
3. item 进入放大态后，继续拖动
4. 观察 item 是否继续跟手

## 复现现象

- item 仅在进入拖拽态瞬间放大
- 后续不再跟手移动
- 页面滚动开始生效

---

## 给引擎侧的建议结论

这条问题建议作为 Android 平台的：

- **触摸事件连续性问题**
- **触摸目标树在同一手势中切换定位语义的兼容问题**

提交给引擎团队继续排查。

组件侧当前已经有稳定绕过，但底层兼容性问题仍然成立。
