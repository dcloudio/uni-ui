

## Badge 数字角标
> 代码块： `uBadge`


数字角标一般和其它控件（列表、9宫格等）配合使用，用于进行数量提示，默认为实心灰色背景，

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件

```html
<uni-badge text="1"></uni-badge>
<uni-badge text="2" type="purple" @click="bindClick"></uni-badge>
<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
```


## API

### Badge Props

|属性名		|类型		|默认值	|说明																											|
|:-:		|:-:		|:-:	|:-:					 																						|
|text		|String		|-		|角标内容																										|
|type		|String		|default|颜色类型，可选值：default（灰色）、primary（蓝色）、success（绿色）、warning(黄色)、error(红色)|
|size		|String		|normal|Badge 大小，可取值：normal、small|
|inverted	|Boolean	|false	|是否无需背景颜色，为 true 时，背景颜色将变为文字的字体颜色														|

### Badge Events

|事件名	|事件说明			|返回参数	|
|:-:	|:-:				|:-:		|
|@click	|点击 Badge 触发事件| -			|


