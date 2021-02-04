

## Section 标题栏
> 代码块： `uSection`


标题栏，用于显示标题。

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件

```html
<uni-section title="只有主标题"></uni-section>
<uni-section title="竖线装饰" sub-title="副标题" type="line"></uni-section>
<uni-section title="圆形装饰" sub-title="副标题" type="circle"></uni-section>
```

## API

### Section Props

|属性名		|类型	|默认值	|说明												|
|:-:		|:-:	|:-:	|:-:												|
|type		|String	|-		|标题装饰类型 ，可选值：line（竖线）、circle（圆形）|
|title		|String	|-		|主标题												|
|sub-title	|String	|-		|副标题												|
