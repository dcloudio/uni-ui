
> `重要通知：组件升级更新 2.0.0 后，支持日期+时间范围选择，组件 ui 将使用日历选择日期，ui 变化较大，同时支持 PC 和 移动端。此版本不向后兼容，不再支持单独的时间选择（type=time）及相关的 hide-second 属性（时间选可使用内置组件 picker）。若仍需使用旧版本，可在插件市场下载*非uni_modules版本*，旧版本将不再维护`
## DatetimePicker 时间选择器
> **组件名：uni-datetime-picker**
> 代码块： `uDatetimePicker`


该组件的优势是，支持**时间戳**输入和输出（起始时间、终止时间也支持时间戳），可**同时选择**日期和时间。

若只是需要单独选择日期和时间，不需要时间戳输入和输出，可使用原生的 picker 组件。


___点击 picker 默认值规则：___

- 若设置初始值 value, 会显示在 picker 显示框中
- 若无初始值 value，则初始值 value 为当前本地时间 Date.now()， 但不会显示在 picker 显示框中


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
|type				|String					|datetime	|date/daterange/datetime/datetimerange
range|选择器类型																								|
|value			|String、Number	|-				|-										|输入框当前值																							|
|start			|String、Number	|-				|-										|最小值，可以使用日期的字符串（String）、时间戳（Number）	|
|end				|String、Number	|-				|-										|最大值，可以使用日期的字符串（String）、时间戳（Number）	|
|return-type|String					|timestamp|timestamp 、string		|返回值格式																								|
|border			|Boolean、String|true			|											|是否有边框																								|
|placeholder		|String			|-			|-																			|非范围选择时的占位内容			|
|start-placeholder	|String			|-			|-																			|范围选择时开始日期的占位内容	|
|end-placeholder	|String			|-			|-																			|范围选择时结束日期的占位内容	|
|disabled		|Boolean、String|false		|											|是否不可选择																							|




### DatetimePicker Events

|事件名称	|说明												|返回值	|
|:-:		|:-:												|:-:	|
|change		|确定日期时间时触发的事件，参数为当前选择的日期对象	|	单选返回日期字符串，如：'2010-02-3'；范围选返回日期字符串数组，如：['2020-10-1',  '2021-4-1']	|