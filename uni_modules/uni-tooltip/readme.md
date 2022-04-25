
## tooltip 文字提示
> **组件名：uni-tooltip**
> 代码块： `utooltip`

常用于展示鼠标 hover 时的提示信息。

> 遮挡不住原生组件

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件

```html
<uni-tooltip :text="tooltip显示的内容" />

<uni-tooltip :text="tooltip显示的内容" >
	<button>被包裹的组件</button>
</uni-tooltip>
```




## API

### Tooltip Props

|属性名		|类型	|默认值	|说明				|
|:-:		|:-:	|:-:	|:-:				|
|text		|String	|		|显示的内容		|
|width		|Number	|		|Tooltip 宽度		|
|placement	|String	|left		|Tooltip 的出现位置, 目前只支持left	|


### Tooltip Slots

|名称|说明|					
|:-:|:-:|						
|default|被 Tooltip 包裹的组件|


## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/tooltip/tooltip](https://hellouniapp.dcloud.net.cn/pages/extUI/tooltip/tooltip)