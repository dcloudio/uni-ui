---
url : pages/vue/datetime-picker/datetime-picker
---

## DatetimePicker 数字输入框
::: tip 组件名：uni-datetime-picker
代码块： `uDatetimePicker`
:::

可以同时选择日期和时间选择器。

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=9999](https://ext.dcloud.net.cn/plugin?id=9999)

### 基本用法

在 ``template`` 中使用组件

```html
<uni-datetime-picker></uni-datetime-picker>
<uni-datetime-picker :minYear="2000" :maxYear="2030"></uni-datetime-picker>
<uni-datetime-picker timestamp v-model="formData.birth" @change="birthChange"></uni-datetime-picker>
```

## API

### DatetimePicker Props

|属性名		|类型		|默认值					|说明								|
|:-:			|:-:		|:-:						|:-:								|
|type			|String	|datetime-local	|选择器类型					|
|value		|Number	|								|输入框当前值				|
|minYear	|Number	|1900						|最小值							|
|maxYear	|Number	|2100						|最大值							|
|timestamp|Boolean|false					|是否使用时间戳格式	|

### DatetimePicker Events

|事件名称	|说明																				|返回值	|
|:-:		|:-:																				|:-:		|
|change	|确定日期时间时触发的事件，参数为当前选择的 value	|-			|