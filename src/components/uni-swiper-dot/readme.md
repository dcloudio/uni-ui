### SwiperDod 轮播图指示点
*已经支持在nvue页面中使用*

自定义轮播图指示点，组件名：``uni-swiper-dot``，代码块： uSwiperDot。

### 使用方式

引用组件 

```javascript
import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
export default {
    components: {uniSwiperDot}
}
```

使用组件

```html
<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
	<swiper class="swiper-box" @change="change">
		<swiper-item v-for="(item ,index) in info" :key="index">
			<view class="swiper-item">
				{{item.content}}
			</view>
		</swiper-item>
	</swiper>
</uni-swiper-dot>
```

```javascript
export default {
	data() {
		return {
			info: [{
				content: '内容 A'
			}, {
				content: '内容 B'
			}, {
				content: '内容 C'
			}],
			current: 0,
			mode: 'round',
		}
	},
	methods: {
		change(e) {
			this.current = e.detail.current;
		}
	}
}
```

### 属性说明

|属性名		|类型	|默认值	|说明																			|
|---		|----	|---	|---																			|
|current	|Number	|0		|当前指示点索引，必须是通过 `swiper` 的 `change` 事件获取到的 `e.detail.current`|
|mode		|String	|default|指示点的类型，可选值：default 、round 、nav	 、 indexes 						|
|field		|String	|-		| mode 为 nav 时，显示的内容字段（mode = nav 时必填）							|
|info		|Array	|-		|轮播图的数据，通过数组长度决定指示点个数										|
|dotsStyles	|Object	|-		|指示点样式																	|

**dotsStyles 属性说明：**

|属性名					|类型	|默认值							|说明														|
|---					|----	|---							|---														|
|width					|Number	| 8								|指示点宽度 **在 mode = nav、mode = indexes 时不生效**		|
|bottom					|Number	| 10							|指示点距 `swiper` 底部的高度								|
|color					|Color	| '#fff'						|指示点前景色，**只在 mode = nav ，mode = indexes 时生效**	|
|backgroundColor		|Color	| 'rgba(0, 0, 0, .3)'			|未选择指示点背景色											|
|border					|Border	| '1px rgba(0, 0, 0, .3) solid'	|未选择指示点边框样式										|
|selectedBackgroundColor|Color	| '#333'						|已选择指示点背景色，**在 mode = nav 时不生效**				|
|selectedBorder			|Border	| '1px rgba(0, 0, 0, .9) solid'	|已选择指示点边框样式，**在 mode = nav 时不生效**			|

**Tips**

- 本组件依赖 `swiper` 组件,请与`swiper`组件配合使用
- `width` 与 `height` 如非必要，请勿设置过大，或者过小
- `swiper-item` 尽量控制在一定数量之内，否则指示点可能会超出屏幕
- 暂不支持垂直方向的指示点


### 插件预览地址 

[https://uniapp.dcloud.io/h5/pages/extUI/swiper-dot/swiper-dot](https://uniapp.dcloud.io/h5/pages/extUI/swiper-dot/swiper-dot)

