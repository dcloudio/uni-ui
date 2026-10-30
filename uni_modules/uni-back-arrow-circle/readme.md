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
    // 点击通知；组件随后自动执行 uni.navigateBack({})。
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
| autoBack | boolean | true | 点击后是否自动调用 uni.navigateBack({}) 返回上一页 |

需要自行处理导航、关闭弹层或确认后再返回时，关闭自动返回：

```vue
<uni-back-arrow-circle :auto-back="false" @click="handleBack" />
```

关闭自动返回后仍触发 `click`。请使用 `:auto-back="false"` 传入布尔值。组件不会等待异步点击处理完成；需要离开确认时，应关闭自动返回，在确认后自行调用导航 API。

## 事件

| 事件 | 说明 |
| --- | --- |
| click | 点击时触发，无参数；当 autoBack 为 true 时随后返回上一页；监听事件或返回 false 不会取消默认返回。 |

## 样式

通过根节点的 class 或 style 定制背景、位置等样式，无需 externalClasses。

| CSS 变量 | 默认值 | 说明 |
| --- | --- | --- |
| --back-arrow-color | 浅色 #000000，深色 #ffffff | 箭头颜色；显式设置后覆盖深浅色默认值 |
| --back-arrow-width | 2px | 箭头边框线宽 |

默认外边距为 6px，圆形背景直径为 28px。
