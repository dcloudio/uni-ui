# uni-refresh-box

自定义下拉刷新组件。

本组件封装了 scroll-view 的下拉刷新功能，使用者只需通过 v-model 绑定刷新状态即可实现完整的下拉刷新功能。

本组件自带一个全平台通用的下拉刷新样式，即左边一个 loading 圈，右边为下拉刷新相关的文字。

## 基本用法

```vue
<template>
  <uni-refresh-box v-model:refreshing="refreshing" @refresh="onRefresh">
    <view v-for="i in list" :key="i">
      <text>{{ i }}</text>
    </view>
  </uni-refresh-box>
</template>

<script setup lang="uts">
const list = ref([1, 2, 3, 4, 5])
const refreshing = ref(false)

function onRefresh() {
  // 模拟异步请求
  setTimeout(() => {
    list.value.push(list.value.length + 1)
    refreshing.value = false  // 结束刷新
  }, 1500)
}
</script>
```

## 自定义文字

```vue
<uni-refresh-box
  v-model:refreshing="refreshing"
  pulling-text="继续下拉"
  loosing-text="释放刷新"
  loading-text="加载中..."
  @refresh="onRefresh"
>
  <!-- 内容 -->
</uni-refresh-box>
```

## 自定义样式

通过 `text-class` 和 `loading-class` 可自定义文字和 loading 的样式：

```vue
<uni-refresh-box
  v-model:refreshing="refreshing"
  text-class="custom-text"
  loading-class="custom-loading"
  @refresh="onRefresh"
>
  <!-- 内容 -->
</uni-refresh-box>

<style>
.custom-text {
  color: #007aff;
  font-size: 16px;
}
.custom-loading {
  border-color: #007aff;
}
</style>
```

通过根class和根style，可自定义刷新区域的布局，如将 loading 和文字改为上下排列：

```vue
<uni-refresh-box
  v-model:refreshing="refreshing"
  style="flex-direction: column;"
  @refresh="onRefresh"
>
  <!-- 内容 -->
</uni-refresh-box>
```

## 自定义 loading 动画

通过 `loading` 插槽可完全自定义 loading 区域，如使用 GIF 或 animation-view：

```vue
<uni-refresh-box v-model:refreshing="refreshing" @refresh="onRefresh">
  <template #loading="{ state }">
    <image
      v-if="state === 2"
      src="/static/loading.gif"
      style="width: 30px; height: 30px;"
    />
    <image
      v-else
      src="/static/pull-down.png"
      style="width: 30px; height: 30px;"
    />
  </template>
  <!-- 内容 -->
</uni-refresh-box>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| refreshing | Boolean | false | 是否正在刷新（v-model 双向绑定） |
| threshold | Number | 45 | 触发刷新的下拉阈值(px) |
| pullingText | String | '下拉刷新' | 下拉过程中的提示文字 |
| loosingText | String | '松手刷新' | 下拉超过阈值的提示文字 |
| loadingText | String | '正在刷新' | 刷新中的提示文字 |
| completeText | String | '' | 刷新完成的提示文字 |
| textClass | String | '' | 文字样式类名 |
| loadingClass | String | '' | loading 样式类名 |

## Events

| 事件 | 参数 | 说明 |
| :-- | :-- | :-- |
| update:refreshing | boolean | refreshing 变化时触发（用于 v-model） |
| refresh | - | 触发刷新时触发 |
| state-change | state: number | 状态变化时触发（用于控制自定义动画播放/暂停） |

### state 状态说明

| 值 | 说明 |
| :-- | :-- |
| 0 | 下拉中（未达到阈值） |
| 1 | 松手可刷新（已达到阈值） |
| 2 | 刷新中 |
| 3 | 刷新完成（复位中） |

## Slots

| 名称 | 说明 | 插槽参数 |
| :-- | :-- | :-- |
| loading | 自定义图标 | - |

## Methods

| 方法名 | 说明 |
| :-- | :-- |
| stopRefresh | 手动结束刷新 |
