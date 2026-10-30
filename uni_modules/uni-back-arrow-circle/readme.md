# uni-back-arrow-circle 圆形返回按钮

使用旋转边框绘制箭头，保留圆形背景和 28px × 28px 点击区域。App 的箭头子 view 使用 flatten；Web、小程序使用 ::after 伪元素。支持系统暗黑模式，无字体或图片依赖。

## 使用

将模块放入项目的 `uni_modules` 目录后，通过 easycom 使用：

```vue
<template>
  <uni-back-arrow-circle class="back" @click="onBackClick" />
</template>

<script setup lang="ts">
  const onBackClick = () => {
    // 默认只触发 click，由调用方处理返回。
    uni.navigateBack({})
  }
</script>

<style>
  .back {
    --back-arrow-color: #ffffff;
    --back-arrow-width: 1px;
    background-color: rgba(0, 0, 0, 0.3);
  }
</style>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| autoBack | boolean | false | 点击后是否自动调用 uni.navigateBack({}) 返回上一页 |

默认只触发 `click`，由调用方处理导航、关闭弹层或确认后再返回。需要组件自动返回上一页时，显式开启：

```vue
<uni-back-arrow-circle :auto-back="true" />
```

请使用 `:auto-back="true"` 传入布尔值。开启自动返回后，组件先触发 `click`，随后调用 `uni.navigateBack({})`，不会等待异步点击处理完成；需要离开确认时，保持默认关闭，在确认后自行调用导航 API。

## 事件

| 事件 | 说明 |
| --- | --- |
| click | 点击时触发，无参数；当 autoBack 为 true 时随后返回上一页。 |

## 样式

通过根节点的 class 或 style 定制背景、位置等样式，无需 externalClasses。

| CSS 变量 | 默认值 | 说明 |
| --- | --- | --- |
| --back-arrow-color | 浅色 #000000，深色 #ffffff | 箭头颜色；显式设置后覆盖深浅色默认值 |
| --back-arrow-width | 2px | 箭头边框线宽 |

默认外边距为 6px，圆形背景直径为 28px。
