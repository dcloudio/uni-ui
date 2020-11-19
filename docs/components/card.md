---
url : pages/vue/card/card 
---

## Card 卡片

卡片视图组件，组件名：``uni-card``，代码块： uCard。

::: warning 注意事项
为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些必要的错误使用。
- 因为平台兼容问题 ， 目前 APP-NVUE 安卓平台下不支持阴影
:::

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`componets`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

## 基本用法

在 ``template`` 中使用组件

```html
<!-- 一般用法 -->
<uni-card title="标题文字" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" extra="额外信息" note="Tips">
    内容主体，可自定义内容及样式
</uni-card>

<!-- 内容通栏 -->
<uni-card is-full="true" title="DCloud" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" extra="2018.12.12" >
    <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" style="width: 100%;"></image>
</uni-card>

<!-- 图文卡片模式 -->
<uni-card
	title="标题文字"
	mode="style"
	:is-shadow="true"
	thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"
	extra="Dcloud 2019-05-20 12:32:19"
	note="Tips"
>
		uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可编译到iOS、Android、H5、以及各种小程序等多个平台。即使不跨端，uni-app同时也是更好的小程序开发框架。
</uni-card>

<!-- 标题卡片模式 -->
<uni-card 
	title="Dcloud" 
	mode="title" 
	:is-shadow="true" 
	thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg" 
	extra="技术没有上限" 
	note="Tips"
>
	uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可编译到iOS、Android、H5、以及各种小程序等多个平台。即使不跨端，uni-app同时也是更好的小程序开发框架。
</uni-card>

<!-- 自定义底部按钮 -->
<uni-card title="Dcloud" note="true">
	默认内容
	<template v-slot:footer>
		<view class="footer-box">
			<view>喜欢</view>
			<view>评论</view>
			<view>分享</view>
		</view>
	</template>
</uni-card>
```

## API

### Card Props

|属性名			|类型		|默认值	|说明																			|
|:-:				|:-:		|:-:		|:-:																			|
|title			|String	|-			|标题文字																			|
|extra			|String	|-			|标题额外信息																		|
|note				|String	|-			|底部信息																			|
|thumbnail	|String	|-			|标题左侧缩略图,支持网络图片，本地图片，本图片需要传入一个绝对路径，如：`/static/xxx.png`	|
|mode				|String	|basic	|卡片模式 ，可选值， basic：基础卡片 ；style ：图文卡片 ； title ：标题卡片				|
|isFull			|Boolean|false	|卡片内容是否通栏，为true时将去除padding值											|
|isShadow		|Boolean|false	|卡片内容是否开启阴影																|


### Card Events

|事件称名	|事件说明						|返回参数	|
|:-:		|:-:							|:-:		|
|@click	|点击 Card 触发事件	|-			|


### Card Slots

|插槽称名	|说明				|
|:-:		|:-:				|
|footer	|卡片底部插槽 |