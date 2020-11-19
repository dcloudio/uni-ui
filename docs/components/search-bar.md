---
url : pages/vue/search-bar/search-bar
---

## SearchBar 搜索栏
> 组件名：``uni-search-bar``，代码块： uSearchBar。

搜索栏组件

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`componets`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

## 基本用法

在 ``template`` 中使用组件

```html
<!-- 基本用法 -->
<uni-search-bar @confirm="search" @input="input" />

<!-- 自定义Placeholder -->
<uni-search-bar placeholder="自定placeholder" @confirm="search"/>

<!-- 设置圆角 -->
<uni-search-bar :radius="100" @confirm="search"/>
```

## API

### SearchBar Props

|属性名				|类型		|可选值						|默认值	|说明							|
|:-:					|:-:		|:-:							|:-:	|:-:								|
|radius				|Number	|	-								|10		|搜索栏圆角，单位rpx		|
|maxlength		|Number	|	-								|100	|输入最大长度					|
|placeholder	|String	|	-								|搜索	|搜索栏Placeholder		|
|**clearButton**	|String	|	always/auto/none|auto	|是否显示清除按钮			|
|**cancelButton**	|String	|	always/auto/none|auto	|是否显示取消按钮			|
|cancelText		|String	|	-								|取消	|取消按钮的文字				|
|bgColor			|String	|	-								|#F8F8F8|输入框背景颜色			|

#### ClearButton Options

| 属性名	| 说明							|
| :-:		| :-:							|
| always| 一直显示					|
| auto	| 输入框不为空时显示	|
| none	| 一直不显示				|

#### CancelButton Options

| 属性名	| 说明							|
| :-:		| :-:							|
| always| 一直显示					|
| auto	| 输入框不为空时显示	|
| none	| 一直不显示				|


### SearchBar Events

|事件称名		|说明									|返回参数			|
|:-:			|:-:									|:-:				|
|@confirm	|输入框 confirm 事件		|e={value:Number}	|
|@input		|value 改变时触发事件		|e={value:Number}	|
|@cancel	|点击取消按钮时触发事件 	|e={value:Number}	|
