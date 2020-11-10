---
url : pages/vue/data-checkbox/data-checkbox
---

## DataCheckbox 数据驱动的单选复选框
> 组件名：``uni-data-checkbox``，代码块： uDataCheckbox。

通过数据驱动的单选框和复选框

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`componets`。

如需通过`npm`方式使用`uni-ui`组件，另行文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

## 基本用法

在 ``template`` 中使用组件

```html
<template>
	<view class="content">
		<uni-data-checkbox multiple min="1" max="2" v-model="value" mode="button" :range="range" @change="change"></uni-data-checkbox>
	</view>
</template>

<script>
	export default {
		data() { 
			return {
				value: [0],
				range: [{
						"value": 0,
						"text": "篮球"
					},
					{
						"value": 1,
						"text": "足球",
						"disable":true
					},
					{
						"value": 2,
						"text": "游泳"
					}
				]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```


## API

### DataCheckbox Props

| 属性名			| 类型							|可选值									| 默认值| 说明																													|
| :-:					| :-:								|:-:										|:-:		| :-:																														|
|value/v-model|Array/String/Number|-											|-			|默认值，multiple=true时为 Array类型，否则为 String或Number类型	|
|range				|Array							|-											|-			| 渲染数据，格式为：[{text:'',value:''}]												|
|mode					| String						|default/list/button/tag|default|显示模式																												|
|multiple			|Boolean						|-											|false	|是否多选																												|
|min					|String/Number			|-											|-			|最小选择个数 ，multiple为true时生效														|
|max					|String/Number			|-											|-			|最大选择个数 ，multiple为true时生效														|
|wrap					|Boolean						|-											|-			|是否换行显示																										|
|icon					|String							|left/right							|left		|list 列表模式下 icon 显示的位置																|


### DataCheckbox Events

| 事件名| 事件说明							| 返回参数|
| :-:		| :-:										| :-:			|
| @chage| 选中状态改变时触发事件| -				|


