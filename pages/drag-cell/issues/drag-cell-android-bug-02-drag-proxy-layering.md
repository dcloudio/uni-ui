# Android Bug 02：独立拖拽代理层在层级与命中上表现不稳定

## 标题建议

`Android 平台中，独立拖拽代理层在 fixed / absolute / z-index 复合场景下，容易出现遮挡、层级错乱和命中不一致`

## 问题描述

在拖拽组件中，如果采用“独立拖拽代理层”方案：

- 原位置 item 只保留占位或透明
- 另渲染一个独立节点跟随手指移动

在 `uni-app x` Android 平台中，这种做法比 Web 更容易出现以下异常：

- 拖拽中的 item 被其他 item 遮挡
- 拖拽中的 item 跑到删除条下面
- `z-index` 看起来没有按预期生效
- 删除条命中区域和拖拽 item 的视觉位置不一致

## 预期结果

- 独立拖拽层稳定显示在最上层
- 删除条与拖拽层的层级关系可控
- 视觉位置与命中区域一致

## 实际结果

- Android 上更容易出现代理层被遮挡
- 到了删除区附近后，视觉和命中会错位
- 代理层既承担视觉又承担触摸时，问题更明显

## 初步判断

这更像是 Android 端在 `fixed / absolute / z-index` 复合场景下，层级覆盖与绘制顺序不稳定；如果再叠加触摸接管，风险会进一步放大。

---

## 复现代码示意

```vue
<template>
  <view class="drag-cell">
    <view
      v-for="(item, index) in list"
      :key="index"
      class="drag-cell-item"
      :class="activeIndex == index ? 'drag-cell-item-placeholder' : ''">
      <slot :item="item" :index="index"></slot>
    </view>

    <view
      v-if="dragging && activeIndex >= 0"
      class="drag-cell-drag-proxy"
      :style="dragProxyStyle">
      <slot :item="list[activeIndex]" :index="activeIndex"></slot>
    </view>

    <view v-if="showDeleteBar" class="drag-cell-delete-bar">
      <text class="drag-cell-delete-text">拖到此处删除</text>
    </view>
  </view>
</template>

<script setup lang="uts">
const dragging = ref(false)
const activeIndex = ref(-1)
const dragOffsetX = ref(0)
const dragOffsetY = ref(0)
const activeViewLeft = ref(0)
const activeViewTop = ref(0)

const dragProxyStyle = computed(() : string => {
  return `position: fixed; left: ${activeViewLeft.value}px; top: ${activeViewTop.value}px; z-index: 30; transform: translateX(${dragOffsetX.value}px) translateY(${dragOffsetY.value}px) scale(1.12);`
})
</script>

<style>
.drag-cell {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
}

.drag-cell-item-placeholder {
  opacity: 0;
}

.drag-cell-drag-proxy {
  position: fixed;
  z-index: 30;
  pointer-events: none;
}

.drag-cell-delete-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 56px;
  z-index: 20;
}
</style>
```

---

## 复现步骤

1. 使用拖拽代理层，而不是直接拖动 item 本体
2. 长按任意宫格或标签进入拖动
3. 拖向列表底部或删除条区域
4. 观察拖拽中的 item 是否始终覆盖在最上层

## 演进后的结论

这次联调后，结论需要更新为：

- 不是“代理层完全不能用”
- 而是“**代理层不能同时承担触摸接管和视觉显示两种职责**”

## 当前稳定规避方式

- 原始 item 保留在原触摸树中，继续接收拖动事件
- 代理层只负责视觉显示
- 删除命中基于代理矩形做平台分支计算

也就是说，当前 Android 的稳定方案其实仍然使用了代理层，但它只是“视觉代理层”，而不是“触摸代理层”。

## 当前结论

在 `uni-app x` Android 平台中，风险更高的是“独立拖拽代理层接管整条拖拽链路”的实现方式；如果必须使用代理层，建议把它限制为纯视觉用途。
