---
url : pages/vue/section/section
---

## Section 标题栏
::: tip 组件名：uni-section
代码块： `uSection`
:::

标题栏组件，主要用于文章、列表详情等标题展示。

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件

```html
<uni-section class="mb-10" title="基础用法" sub-title="副标题"></uni-section>

<uni-section class="mb-10" title="竖线装饰" sub-title="副标题" type="line"></uni-section>

<uni-section class="mb-10" title="装饰器插槽" sub-title="副标题">
  <template v-slot:decoration>
    <view class="decoration"></view>
  </template>
</uni-section>

<uni-section class="mb-10" title="默认插槽" sub-title="副标题">默认插槽内容</uni-section>

<uni-section class="mb-10" title="主标题">
  <template v-slot:right>
    right slot
  </template>
</uni-section>
```

## API

### Section Props

|属性名|类型|默认值|说明|
|:-:|:-:|:-:|:-:|
|type|String|-|装饰类型，可选值：line（竖线）、circle（圆形）、square（方形）|
|title|String|-|主标题|
|titleFontSize|String| 14px |主标题字体大小|
|titleColor|String| #333 |主标题字体颜色|
|subTitle|String|-|副标题|
|subTitleFontSize|String| 12px |副标题字体大小|
|subTitleColor|String| #999 |副标题字体颜色|
|padding|Boolean/String| false |默认插槽容器的 padding 值，传入类型为 Boolean 时，设置为 10px 或 0|

### Section Events

|事件名|事件说明|返回参数|
|:-:|:-:|:-:|
|@click	|点击 Section 触发事件| -|
