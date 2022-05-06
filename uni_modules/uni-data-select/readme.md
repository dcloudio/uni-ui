

## DataSelect 数据驱动的下拉框
> **组件名：uni-data-select**
> 代码块： `uDataSelect`

当选项过多时，使用下拉菜单展示并选择内容

本组件要解决问题包括：

1. 数据绑定型组件：给本组件绑定一个data，会自动渲染一组候选内容。再以往，开发者需要编写不少代码实现类似功能
2. 自动的表单校验：组件绑定了data，且符合[uni-forms](https://ext.dcloud.net.cn/plugin?id=2773)组件的表单校验规范，搭配使用会自动实现表单校验

在uniCloud开发中，`DB Schema`中配置了enum枚举等类型后，在web控制台的[自动生成表单](https://uniapp.dcloud.io/uniCloud/schema?id=autocode)功能中，会自动生成``uni-data-select``组件并绑定好data

> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - 组件需要依赖 `sass` 插件 ，请自行手动安装
> - 本组件为数据驱动，目的是快速投入使用，只可通过 style 覆盖有限样式，不支持自定义更多样式
> - 如使用过程中有任何问题，或者您对uni-ui有一些好的建议，欢迎加入 uni-ui 交流群：871950839
> - 组件支持 nvue ，需要在 `manifest.json > app-plus` 节点下配置 `"nvueStyleCompiler" : "uni-app"` 
> - 如组件显示有问题 ，请升级 `HBuilderX` 为 `v3.1.0` 以上


### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另行文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

设置 `localdata` 属性后，组件会通过数据渲染出对应的内容


```html
<template>
	<view>
		<uni-data-select v-model="value" :localdata="range" @change="change"></uni-data-select>
	</view>
</template>

```

```javascript

export default {
	data() { 
		return {
			value: 0,
			range: [{"value": 0,"text": "篮球"},
					{"value": 1,"text": "足球"},
					{"value": 2,"text": "游泳"}]
		}
	},
	methods: {
		change(e){
			console.log('e:',e);
		}
	}
}
```

### 云端数据示例


```html
<template>
	<view>
		<!-- 云端数据 -->
		<uni-data-select collection="opendb-app-list" field="appid as value, name as text" label="应用选择" v-model="appid" :clear="false"  />
	</view>
</template>

```


## API

### DataSelect Props

| 属性名		| 类型			|可选值	| 默认值					| 说明															|
| :-:			| :-:			|:-:	|:-:						| :-:															|
|value/v-model	|String/Number	|-		|-							|默认值，multiple=true时为 Array类型，否则为 String或Number类型	|
|localdata		|Array			|-		|-							|本地渲染数据，													|
|clear			|Boolean		|-		|-							|是否可以清空已选项													|
|label			|String			|		|							|左侧标题														|
|placeholder	|String			|-		|请选择						|输入框的提示文字												|
|emptyText		|String			|-		|暂无数据					|没有数据时显示的文字 ，本地数据无效							|

#### DataCom Props

更多 DataCom 支持的属性参考[更多](https://uniapp.dcloud.net.cn/component/datacom.html#%E8%AF%AD%E6%B3%95%E6%89%8B%E5%86%8C)

#### Localdata Options

`localdata` 属性的格式为数组，数组内每项是对象，需要严格遵循如下格式

|属性名		| 说明				|
|:-:			| :-:				|
|text			|显示文本			|
|value		|选中后的值		|
|disable	|是否禁用			|


### DataSelect Events

| 事件名	| 事件说明								| 返回参数|
| :-:		| :-:									| :-:			|
| @change| 选中状态改变时触发事件	| -				|




## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/data-select/data-select](https://hellouniapp.dcloud.net.cn/pages/extUI/data-select/data-select)