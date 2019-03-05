### 日历选择组件

本组件农历转换使用的js是 [@1900-2100区间内的公历、农历互转](https://github.com/jjonline/calendar.js)

### 调用方式
```javascript

<template>
	<view>
		<calendar 
		:lunar="true" 
		:disable-before="true" 
		:start-date="'2019-3-2'"
		:end-date="'2019-5-20'"
		@change="change"
		@to-click="toClick"
		 />

	</view>
</template>

<script>
import calendar from '@/components/mehaotian-calendar/mehaotian-calendar.vue';
export default {
	components: {
		calendar
	},
	data() {
		return {};
	},
	methods: {
		change(e) {
			console.log(e);
		},
		toClick(e) {
			console.log(e);
		}
	}
};
</script>


```


### 属性说明


|  属性名		|    类型	| 默认值	| 说明																			|
| ---			| ---		| ---		| ---																		|
| date		    | String    | Date		| new Date()| 自定义当前时间											        |
| lunar			| Boolean	| false		| 显示阴历																	|
| disableBefore	| Boolean	| false		| 禁用今天之前的日期															|
| startDate		| String	|			| 日期选择范围-开始日期															|
| endDate		| String	|			| 日期选择范围-结束日期															|
| slide			| String	|horizontal	| 滑动方向 可选值: none - 禁止滑动, horizontal - 水平滚动,  vertical - 垂直滚动   |
| fixedHeihgt	| Boolean	|true		| 固定高度（开启之后，切换月份高度保持一致）										|

### 事件说明



|  事件名		|    类型	| 说明		    |
| ---			| ---		| ---			|
| to-click		| function 	|  日历选择事件	|
| change		| function 	|  日历切换事件	|


Tips:
- 不支持快速滑动，快速滑动只会滑动近一个月
- to-click 事件和 change 事件，返回的数据都是一样的，所以两个事件只会一个生效。不同的地方在于，to-click 只有点击生效，而 change 是只要日期有变化就生效，这个变化不一定是点击。


