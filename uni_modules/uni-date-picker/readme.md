# DatePicker 时间选择器
> **组件名：uni-date-picker**
> 代码块： `uDatePicker`

该组件的优势是，支持**范围选择**，**同时支持** PC 和移动端使用**日历**选择日期和日期范围。

若只是需要单独选择日期和时间，不需要日期范围选择，不需要使用日历选择日期，可使用原生的 picker 组件。


### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

## 基本用法

在 ``template`` 中使用组件

```html
<template>
	<view style="padding: 20px; width: 350px; margin: 0 auto;">
		<view style="margin: 30px 0;">单选</view>
		<uni-date-picker v-model="single" />
		<view style="margin: 30px 0;">单选 无边框</view>
		<uni-date-picker v-model="single" :border="false" />
		<view style="margin: 30px 0;">范围选</view>
		<uni-date-picker v-model="range" type="daterange" rangeSeparator="至" />
		<view style="margin: 30px 0;">范围选 disabled</view>
		<uni-date-picker v-model="range" type="daterange" rangeSeparator="至" :disabled="true" />
	</view>
</template>

<script>
	export  default {
		data() {
			return {
				single: '2010-02-3',
				range: ['2020-10-1',  '2021-4-12']
			}
		},
		
		watch: {
			single(newval) {
				console.log('单选:', this.single);
			},
			range(newval) {
				console.log('范围选:', this.range);
			}
		}
	}
</script>
```

## API

### DatePicker Props

|属性名				|类型			|默认值		|值域																		|说明							|
|:-:				|:-:			|:-:		|																			|:-:							|
|type				|String			|date	|date/daterange	|选择器类型						|
|value/v-model		|String、Array	|-			|-																			|绑定值							|
|placeholder		|String			|-			|-																			|单选择时的占位内容			|
|start-placeholder	|String			|-			|-																			|范围选择时开始日期的占位内容	|
|end-placeholder	|String			|-			|-																			|范围选择时结束日期的占位内容	|
|range-separator	|String			|-			|-																			|选择范围时的分隔符	|
|border				|Boolean|true		|																			|是否有边框						|
|disabled			|Boolean|false		|																			|是否禁用					|


### DatePicker Events

|事件名称	|说明												|返回值	|
|:-:		|:-:												|:-:	|
|change		|确定日期时间时触发的事件	|	单选返回日期字符串，如：'2010-02-3'；多选返回日期字符串数组，如：['2020-10-1',  '2021-4-1']	|