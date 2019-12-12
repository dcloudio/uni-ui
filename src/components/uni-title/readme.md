### Title 章节标题

章节标题，通常用于记录页面标题，使用当前组件，uni-app 如果开启统计，将会自动统计页面标题，组件名：``uni-title``，代码块： uTitle。

### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniTitle from "@/components/uni-title/uni-title.vue"
export default {
    components: {uniTitle}
}
```

在 ``template`` 中使用组件

```html
<uni-title title="上报统计数据"></uni-title>
<uni-title type="h1" title="h1 一级标题 "></uni-title>
<uni-title type="h1" title="h1 一级标题" color="#027fff"></uni-title>
<uni-title type="h2" title="h2 居中" align="center"></uni-title>
```

### 属性说明

|属性名	|类型	|默认值	|说明																									|
|---	|----	|---	|---																									|
|type	|String	|-		|标题类型，可选值 h1、h2、h3、h4、h5 ，章节标题字体会比正常字长字体粗，不指定 type 值，默认为上报统计数据	|
|title	|String	|-		|章节标题内容																								|
|align	|String	|-		|对齐方式，可选值 left:左对齐；center:居中；right:右对齐；												|
|color	|String	|-		|字体颜色																								|
|stat	|Boolean|-		|是否开启统计功能呢，如不填写type值，默认为开启，填写 type 属性，默认为关闭														|


###  标题统计

- 如果不写 type 属性， 为上报标题。这是标题统计的默认用法，页面会优先上报组件传入的title值为统计上报数据 
- 页面统计上报只会上报一次，如多个组件开启，则只上报最后一个组件的内容，所以如非必要请不要多个组件同时开启统计，避免上报错误标题统计
- 为避免上报错误标题统计， uni.report() API 与章节标题组件请勿一起使用


Tips：

- 在使用 align 属性时，在非 nvue 页面下不生效，或者组件宽度不对，请在组件外层设置一个元素的 display为block 即可解决问题。
	
	**示例：**
	
	```html
	<template>
		<view class="box">
			<uni-title type="h1" title="h1 一级标题 "></uni-title>
		</view>
	</template>
	<style>
		.box {
			/* #ifndef APP-NVUE */
			display: block;
			/* #endif */
		}
	</style>
	```