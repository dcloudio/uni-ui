

## DatetimePicker 时间选择器
> 代码块： `uDatetimePicker`


该组件的优势是，支持**时间戳**输入和输出（起始时间、终止时间也支持时间戳），可**同时选择**日期和时间。

若只是需要单独选择日期和时间，不需要时间戳输入和输出，可使用原生的 picker 组件。


___点击 picker 默认值规则：___

- 若设置初始值 value, 会显示在 picker 显示框中； 若无初始值 value，则初始值 value 为当前本地时间 Date.now()， 但不会显示在 picker 显示框中
	- 设置了起始时间 start、终止时间 end，并 start < value < end，初始值为 value， 否则初始值为 start
	- 只设置了起始时间 start，并 start < value，初始值为 value，否则初始值为 start
	- 只设置了终止时间 end，并 value < end，初始值为 value，否则初始值为 end
	- 无起始终止时间，则初始值为 value

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件

```html
<uni-datetime-picker></uni-datetime-picker>
<uni-datetime-picker v-model="vModelDatetime" start="2010-6-10 08:30:30" end="2021-6-10 08:30:30"></uni-datetime-picker>
<uni-datetime-picker :value="timestamp" return-type="timestamp" start="1276129830000" end="1623285030000" @change="timestampChange"></uni-datetime-picker>
<uni-datetime-picker type="date" :value="date" start="2020-6-15" end="2025-6-15" @change="dateChange"></uni-datetime-picker>
<uni-datetime-picker type="time" :value="time" start="06:30:30" end="12:30:30" @change="timeChange"></uni-datetime-picker>
```

## API

### DatetimePicker Props

|属性名			|类型						|默认值		|值域									|说明																											|
|:-:				|:-:						|:-:			|											|:-:																											|
|type				|String					|datetime	|datetime、date、time	|选择器类型																								|
|value			|String、Number	|-				|-										|输入框当前值																							|
|start			|String、Number	|-				|-										|最小值，可以使用日期的字符串（String）、时间戳（Number）	|
|end				|String、Number	|-				|-										|最大值，可以使用日期的字符串（String）、时间戳（Number）	|
|return-type|String					|timestamp|timestamp 、string		|返回值格式																								|
|border			|Boolean、String|true			|											|是否有边框																								|
|hide-second|Boolean、String|false		|											|是否隐藏秒																								|
|disabled		|Boolean、String|false		|											|是否不可选择																							|



注：如 type 为 time 类型，无对应的时间戳，则返回值格式 return-type 无论为何值，都会返回 string

### DatetimePicker Events

|事件名称	|说明																				|返回值	|
|:-:		|:-:																				|:-:		|
|change	|确定日期时间时触发的事件，参数为当前选择的 value	|-			|