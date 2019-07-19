### Card 卡片

卡片视图组件，组件名：``uni-card``，代码块： uCard。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import uniCard from "@/components/uni-card/uni-card"
export default {
    components: {uniCard}
}
```

**一般用法**

```html
<uni-card title="标题文字" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" extra="额外信息" note="Tips">
    内容主体，可自定义内容及样式
</uni-card>
```

**内容通栏**

```html
<uni-card is-full="true" title="DCloud" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" extra="2018.12.12" >
    <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" style="width: 100%;"></image>
</uni-card>
```

**图文卡片模式**

```html
<uni-card
	title="标题文字"
	mode="style"
	:is-shadow="true"
	thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"
	extra="Dcloud 2019-05-20 12:32:19"
	note="Tips"
>
		那是一个秋意盎然、金风送爽的日子，我和父母一起来到了位于上师大旁的康健园。一踏进公园，一股浓郁的桂香扑鼻而来，泌人心脾,让我心旷神怡，只见一朵朵开得正烈的金色桂花，迎风而立，仿佛在向我招手。我们追着这桂香，走进了清幽的公园。
</uni-card>
```

**标题卡片模式**

```html
<uni-card 
	title="Dcloud" 
	mode="title" 
	:is-shadow="true" 
	thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg" 
	extra="技术没有上限" 
	note="Tips"
>
	那是一个秋意盎然、金风送爽的日子,我和父母一起来到了位于上师大旁的康健园.一踏进公园,一股浓郁的桂香扑鼻而来,泌人心脾,让我心旷神怡,只见一朵朵开得正烈的金色桂花,迎风而立,仿佛在向我招手.我们追着这桂香,走进了清幽的公园.
</uni-card>
```

**自定义底部按钮**

```html
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

Tips
- 自定义底部按钮，必须指定 `<template v-slot:footer> </template>` 。此时 `note` 随意指定内容即可。

**属性说明：**

|属性名|类型|默认值	|说明|
|---|----|---|---|
|title|String|-|标题文字|
|extra|String|-|标题额外信息|
|note|String|-|底部信息|
|thumbnail|String|-|标题左侧缩略图|
|mode|String|basic|卡片模式 ，可选值， basic：基础卡片 ；style ：图文卡片 ； title ：标题卡片|
|is-full|Boolean|false|卡片内容是否通栏，为true时将去除padding值|
|is-shadow|Boolean|false|卡片内容是否开启阴影|
**事件说明：**

|事件称名|说明|返回参数|
|---|----|---|
|click|点击 Card 触发事件|-|

### 更新日志

**1.1.2**
- 修复 依赖组件找不到的问题

**1.1.1**
- 更新 readme

**1.1.0**
- 修复 v-for 循环，内容不显示的 bug。（需要 HBuilderX 开启自定义组件模式）
- 添加图文卡片模式
- 修复点击事件失效的 bug
- 优化代码示例显示效果
- 添加更多自定义模式

**1.0.0**
- 初始项目