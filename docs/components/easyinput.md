### Easyinput 增强输入框
``uni-easyinput``，代码块： uEasyinput。

easyinput 组件是对原生input组件的增强 ，是专门为配合表单组件[uni-forms](https://ext.dcloud.net.cn/plugin?id=2773)而设计的，easyinput 内置了边框，图标等，同时包含 input 所有功能


::: warning 注意事项

为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些必要的错误使用。

- 组件需要依赖 `sass` 插件 ，请自行手动安装
- 如使用过程中有任何问题，或者您对uni-ui有一些好的建议，欢迎加入 uni-ui 交流群：871950839
:::

### 平台差异说明

暂不支持在nvue页面中使用

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`componets`。

如需通过`npm`方式使用`uni-ui`组件，另行文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件

```html
<uni-easyinput type="text" v-model="name"></uni-easyinput>
```

## API

### Easyinput Props

|属性名							| 类型						|	可选值 		| 		默认值					| 说明|
|:-:								| :-:						|:-:				| :-:								| :-:	|	
|value 							|String/ Number	| -				 	|	-									|输入内容|
|type	   						|String 				| 见 type Options |text| 				输入框的类型（默认text） |
|clearable	   			|Boolean				|-	|true| 是否显示右侧清空内容的图标控件(输入框有内容，且获得焦点时才显示)，点击可清空输入框内容|
|autoHeight	   			|Boolean				| -	|true|	是否自动增高输入区域，type为textarea时有效|
|placeholder	   		|String 				| -	|-|	输入框的提示文字|
|placeholderStyle 	|String 				| -	|-|	placeholder的样式(内联样式，字符串)，如"color: #ddd"|
|focus	   					|Boolean				| -	|false|	是否自动获得焦点|
|disabled	   				|Boolean				| -	|false|	是否不可输入|
|maxlength	   			|Number | -	|140|	最大输入长度，设置为 -1 的时候不限制最大长度|
|confirmType	   		|String | -	|done|	设置键盘右下角按钮的文字，仅在type="text"时生效|
|errorMessage	  		|String | -	|-|	显示的错误提示内容，如果为空字符串或者false，则不显示错误信息|
|clearSize	   			|Number | -	|15|	清除图标的大小，单位px|
|prefixIcon	   			|String	| -	|-|输入框头部图标	|
|suffixIcon	   			|String	| -	|-|输入框尾部图标|
|trim	   						|Boolean| -	|-|	是否自动去除两端的空格|
|inputBorder	   		|Boolean| -	|false|	是否显示input输入框的边框|


#### Type Options

|属性名		| 说明																								|
|:-:			| :-:																								|
|text			|文本输入键盘																					|
|textarea	|多行文本输入键盘																			|
|password	|密码输入键盘																					|
|number		|数字输入键盘，注意iOS上app-vue弹出的数字键盘并非9宫格方式	|
|idcard		|身份证输入键盘，仅支持微信、支付宝、百度、QQ小程序					|
|digit		|带小数点的数字键盘，仅支持微信、支付宝、百度、头条、QQ小程序	|

#### ConfirmType Options

平台差异与 [input](https://uniapp.dcloud.io/component/input) 相同

|属性名	| 说明							|
|:-:		| :-:							|
|send		|右下角按钮为“发送”	|
|search	|右下角按钮为“搜索”	|
|next		|右下角按钮为“下一个”|
|go			|右下角按钮为“前往”	|																																																			
|done		|右下角按钮为“完成”	|
	

### Easyinput Events

|事件称名			|说明																	|								
|:-:				|:-:																	|										
|input			|任意表单项被校验后触发，返回表单校验信息		|


