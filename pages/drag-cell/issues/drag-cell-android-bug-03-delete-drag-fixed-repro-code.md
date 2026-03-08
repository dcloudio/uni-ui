# `uni-drag-cell` Android Bug 03 复现代码快照

本文保存的是**绕过前**用于复现 Android 删除模式拖拽失效的关键组件代码片段，避免后续组件继续兼容修改后，无法再用当前源码直接复现问题。

补充说明：
- 后续已经验证：不只是激活项自己切 `fixed` 会触发问题
- 拖拽中的祖先容器切成 `fixed` 也会触发同类故障
- 因此这份快照主要用于说明“原始问题是如何被触发的”

## 1. 关键模板结构

```vue
<!-- #ifdef APP-ANDROID -->
<view class="drag-cell" :class="containerClass" :style="containerStyle">
  <view
    v-for="(item, index) in innerList"
    :key="itemIds.length > index ? itemIds[index] : index"
    class="drag-cell-item"
    :class="getItemClass(index)"
    :style="getItemStyle(index)"
    @touchstart.stop="onItemTouchStart($event, index)"
    @touchmove="onItemTouchMove"
    @touchend="onItemTouchEnd"
    @touchcancel="onItemTouchEnd">
    <view class="drag-cell-item-inner">
      <view class="drag-cell-slot-content">
        <slot :item="item" :index="index"></slot>
      </view>
    </view>
  </view>

  <view v-if="showDeleteBar" class="drag-cell-delete-bar">
    <text class="drag-cell-delete-text">{{ deleteBarText }}</text>
  </view>

  <view
    v-if="dragging"
    class="drag-cell-drag-layer"
    @touchmove.stop.prevent="onItemTouchMove"
    @touchend="onItemTouchEnd"
    @touchcancel="onItemTouchEnd">
  </view>
</view>
<!-- #endif -->
```

## 2. 关键样式分支

```ts
const getItemStyle = (index : number) : string => {
  let widthStyle = 'width: auto;'
  let positionStyle = ''
  let zIndexStyle = 'z-index: 1;'
  let transitionStyle = 'transition-duration: 200ms;'
  let transformStyle = 'translateX(0px) translateY(0px)'

  const currentContainerLayout = containerLayout.value
  if (dragging.value == true && index < layouts.value.length && currentContainerLayout != null) {
    const sourceLayout = layouts.value[index]
    const baseLeft = sourceLayout.left - currentContainerLayout.left
    const baseTop = sourceLayout.pageTop - currentContainerLayout.pageTop
    widthStyle = ''

    if (activeIndex.value == index && showClose.value == true) {
      positionStyle = `position: fixed; left: ${activeViewLeft.value}px; top: ${activeViewTop.value}px; width: ${sourceLayout.width}px; height: ${sourceLayout.height}px;`
      zIndexStyle = 'z-index: 30;'
      transitionStyle = 'transition-duration: 0ms;'
      transformStyle = `translateX(${dragOffsetX.value}px) translateY(${dragOffsetY.value}px) scale(${activeDragScale.value})`
    } else {
      positionStyle = `position: absolute; left: ${baseLeft}px; top: ${baseTop}px; width: ${sourceLayout.width}px; height: ${sourceLayout.height}px;`
    }
  }

  return `${widthStyle}${positionStyle}${zIndexStyle}${transitionStyle}transform: ${transformStyle};`
}
```

## 3. 触摸移动链路

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

## 4. 复现页面建议

优先使用这些示例：

- 示例 4：可新增并删除的标签
- 示例 5：带删除功能的图标宫格
- 示例 6：九宫格图片选择

共同特征：

- `show-close="true"`
- 长按进入拖拽后，需要把 item 拖到底部删除条
