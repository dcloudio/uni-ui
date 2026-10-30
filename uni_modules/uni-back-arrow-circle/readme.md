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

## 事件

| 事件 | 说明 |
| --- | --- |
| click | 点击时触发，无参数；随后组件默认返回上一页，监听事件不会取消返回。 |

## 样式

通过根节点的 class 或 style 定制背景、位置等样式，无需 externalClasses。

| CSS 变量 | 默认值 | 说明 |
| --- | --- | --- |
| --back-arrow-color | 浅色 #000000，深色 #ffffff | 箭头颜色；显式设置后覆盖深浅色默认值 |
| --back-arrow-width | 2px | 箭头边框线宽 |

默认外边距为 6px，圆形背景直径为 28px。

## 验证状态

已检查条件编译结构。当前环境的 HBuilderX 因处理器兼容错误无法启动，各平台编译和运行效果尚待验证；package.json 中平台支持暂标记为待确认。
