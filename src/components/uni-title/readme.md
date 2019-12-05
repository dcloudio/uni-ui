### Title 标题栏

标题栏，通常用于记录页面标题，使用当前组件，uni-app 如果开启统计，将会自动统计页面标题，组件名：``uni-title``，代码块： uTitle。

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
<uni-title type="h1" title="h1 一级标题 "></uni-title>
<uni-title type="h1" title="h1 一级标题" color="#027fff"></uni-title>
<uni-title type="h2" title="h2 居中" align="center"></uni-title>
```

### 属性说明

|属性名	|类型	|默认值	|说明																|
|---	|----	|---	|---																|
|type	|String	|-		|标题类型，可选值 h1、h2、h3、h4、h5 ，标题栏字体会比正常字长字体粗	|
|title	|String	|-		|标题栏内容															|
|align	|String	|-		|对齐方式，可选值 left:左对齐；center:居中；right:右对齐；			|
|color	|String	|-		|字体颜色															|


###  标题统计

当前组件在 uni-app 开启统计的情况下，会自动统计组件传入title 为页面标题。


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