---
url : pages/vue/calendar/calendar
---

## Calendar 日历
::: tip 组件名：uni-calendar
代码块： `uCalendar`
:::

日历组件

::: warning 注意事项
为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
- 本组件农历转换使用的js是 [@1900-2100区间内的公历、农历互转](https://github.com/jjonline/calendar.js)  
- 仅支持自定义组件模式
- `date`属性传入的应该是一个 String ，如： 2019-06-27 ，而不是 new Date()
- 通过 `insert` 属性来确定当前的事件是 @change 还是 @confirm 。理应合并为一个事件，但是为了区分模式，现使用两个事件，这里需要注意
- 弹窗模式下无法阻止后面的元素滚动，如有需要阻止，请在弹窗弹出后，手动设置滚动元素为不可滚动
:::

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件

```html
<view>
	<uni-calendar 
	:insert="true"
	:lunar="true" 
	:start-date="'2019-3-2'"
	:end-date="'2019-5-20'"
	@change="change"
	 />
</view>
```

### 通过方法打开日历

需要设置 `insert` 为 `false`

```html
<view>
	<uni-calendar 
	ref="calendar"
	:insert="false"
	@confirm="confirm"
	 />
	 <button @click="open">打开日历</button>
</view>
```

```javascript

export default {
	data() {
		return {};
	},
	methods: {
		open(){
			this.$refs.calendar.open();
		},
		confirm(e) {
			console.log(e);
		}
	}
};

```


## API

### Calendar Props

|  属性名	|    类型	| 默认值| 说明																													|
| ---		| ---		| ---	| ---																													|
| date		| String	|-		| 自定义当前时间，默认为今天																							|
| lunar		| Boolean	| false	| 显示农历																												|
| startDate	| String	|-		| 日期选择范围-开始日期																									|
| endDate	| String	|-		| 日期选择范围-结束日期																									|
| range		| Boolean	| false	| 范围选择																												|
| insert	| Boolean	| false	| 插入模式,可选值，ture：插入模式；false：弹窗模式；默认为插入模式														|
|clearDate	|Boolean	|true	|弹窗模式是否清空上次选择内容	|
| selected	| Array		|-		| 打点，期待格式[{date: '2019-06-27', info: '签到', data: { custom: '自定义信息', name: '自定义消息头',xxx:xxx... }}]	|
|showMonth	| Boolean	| true	| 是否显示月份为背景																									|

### Calendar Events

|  事件名		| 说明								|返回值|
| ---			| ---								|---|
| @change		|  日期改变，`insert :ture` 时生效	|见 `Events Return value`|
| @confirm		|  确认选择`insert :false` 时生效	|见 `Events Return value`|
| @monthSwitch	| 切换月份时触发					|见 `Events Return value`|
| @close		| 关闭日历弹窗触发					|见 `Events Return value`|

### Events Return value

```javascript

{
	// 范围选择
    "range": {	
		// 范围开始日期
        "before": "2019-06-25", 
		// 范围结束日期
        "after": "2019-06-27",  
		// 范围日期数组
        "data": [				
			"2019-06-25",
            "2019-06-26",
            "2019-06-27"
        ]
    },
	// 当前年
    "year": 2019,
	// 当前月
    "month": 6,
	// 当前日
    "date": 27,
	// 农历
    "lunar": {
		// 农历年
        "lYear": 2019,
		// 农历月
        "lMonth": 5,
		// 农历日
        "lDay": 25,
		// 生效
        "Animal": "猪",
		// 农历月
        "IMonthCn": "五月",
		// 农历日
        "IDayCn": "廿五",
		// 公历年
        "cYear": 2019,
		// 公历月
        "cMonth": 6,
		// 公历日
        "cDay": 27,
        "gzYear": "己亥",
        "gzMonth": "庚午",
        "gzDay": "乙未",
		// 是否今天
        "isToday": true,
        "isLeap": false,
		// 周
        "nWeek": 4,
        "ncWeek": "星期四",
		// 是否节气
        "isTerm": false,
		// 节气名
        "Term": null,
		// 星座
        "astro": "巨蟹座"
    },
	//打点信息
    "extraInfo": {
		// 打点日期
        "date": "2019-06-27",
		// 打点描述
        "info": "签到",
		// 额外信息
        "data": {
            "custom": "自定义信息",
            "name": "自定义消息头"
        }
    },
	// 当前完整日期
    "fulldate": "2019-6-27"
}

```

### Calendar Methods

| 方法名	|    说明	| 			参数						|
| ---		| ---		| ---									|
| open	| 弹出日历组件，`insert :false` 时生效|- 	|



