### Calendar 日历

日历组件，组件名：``uni-calendar``，代码块： uCalendar。  

### 调用方式


```html
<view>
	<uni-calendar 
	:insert="true"
	:lunar="true" 
	:disable-before="true" 
	:start-date="'2019-3-2'"
	:end-date="'2019-5-20'"
	@change="change"
	 />
</view>
```

```javascript

import {uniCalendar} from "@/components/uni-calendar/uni-calendar"
export default {
	components: {
		uniCalendar
	},
	data() {
		return {};
	},
	methods: {
		change(e) {
			console.log(e);
		}
	}
};

```

### 属性说明

|  属性名		|    类型	| 默认值| 说明																													|
| ---			| ---		| ---	| ---																													|
| date			| String	|		| 自定义当前时间，默认为今天																							|
| lunar			| Boolean	| false	| 显示农历																												|
| disableBefore	| Boolean	| false	| 禁用今天之前的日期																									|
| startDate		| String	|		| 日期选择范围-开始日期																									|
| endDate		| String	|		| 日期选择范围-结束日期																									|
| range			| Boolean	| false	| 范围选择																												|
| insert		| Boolean	| false	| 插入模式,可选值，ture：弹窗模式；false：插入模式	；默认为插入模式																	|
| selected		| Array		|		| 打点，期待格式[{date: '2019-06-27', info: '签到', data: { custom: '自定义信息', name: '自定义消息头',xxx:xxx... }}]	|

### 事件说明

|  事件名	|    类型	| 说明								|
| ---		| ---		| ---								|
| @change	| function	|  日期改变，`insert :ture` 时生效	    |
| @confirm	| function	|  确认选择	`insert :false` 时生效	|

### 方法说明
在 `calendar` 组件上定义 `ref` 属性，通过 `ref` 属性使用方法。

|  属性名	|    类型	| 说明									|
| ---		| ---		| ---									|
| open		| function	| 弹出日历组件，`insert :false` 时生效，通过 `ref` 触发	|

**代码示例**
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

import {uniCalendar} from "@/components/uni-calendar/uni-calendar"
export default {
	components: {
		uniCalendar
	},
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


### 事件返回属性说明

```javascript

{
	// 范围选择
    "range": {	
		// 范围开始日期
        "begin": "2019-06-25", 
		// 范围结束日期
        "end": "2019-06-27",  
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
    "clockinfo": {
		// 是否打点
        "have": true,
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


本组件农历转换使用的js是 [@1900-2100区间内的公历、农历互转](https://github.com/jjonline/calendar.js)  

Tips:
- 仅支持自定义组件模式
- date 传入的应该是一个 String ，如： 2019-06-27 ，而不是 new Date()
- insert 属性，确定当前的事件是 @change 还是 @confirm 。理应合并为一个事件，但是为了区分模式，现使用两个事件，这里需要注意

### 更新日志
#### v1.3.0
- 新增 弹出显示模式
- 新增 标点功能，并携带额外信息
- 新增 多选模式
- 新增 其他日期与今天高亮区分显示
- 修复 不显示最后一行的 bug 
- 修复 初始化组件日期显示不对的 bug
- 优化 性能问题，删除日历滑动
- 优化 代码整体优化，解决在低版本设备上卡顿的问题

#### v1.2.0
- 新增 水平垂直滑动选择月份
- 新增 当天日期高亮显示
- 修复 选中当前日期，返回两遍信息的问题
- 修复 二月份切换月份直接跳到三月份的bug

#### v1.1.1
- 修复 小程序不显示农历的问题
- 修复 小程序不能设置开始日期和结束日期的问题

#### v1.1.0
- 新增 是否开启农历选项
- 新增 是否禁止今天之前的日期
- 新增 开始日期
- 新增 结束日期

#### v1.0.0
- 新增 基础日历
- 新增 基础打点功能
