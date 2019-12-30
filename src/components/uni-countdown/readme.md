### CountDown 倒计时
*已经支持在nvue页面中使用*

倒计时组件，组件名：``uni-countdown``，代码块： uCountDown。

### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniCountdown from "@/components/uni-countdown/uni-countdown.vue"
export default {
    components: {uniCountdown}
}
```

在 ``template`` 中使用组件

```html
<!-- 一般用法 -->
<uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>

<!-- 不显示天数 -->
<uni-countdown :show-day="false" :hour="12" :minute="12" :second="12"></uni-countdown>

<!-- 修改颜色 -->
<uni-countdown color="#FFFFFF" background-color="#00B26A" border-color="#00B26A" :day="1" :hour="2" :minute="30" :second="0"></uni-countdown>
```

### 属性说明

|属性名				|类型	|默认值	|说明				|
|---				|----	|---	|---				|
|backgroundColor	|String	|#FFFFFF|背景色				|
|color				|String	|#000000|文字颜色			|
|splitorColor		|String	|#000000|分割符号颜色			|
|day				|Number	|0		|天数				|
|hour				|Number	|0		|小时				|
|minute				|Number	|0		|分钟				|
|second				|Number	|0		|秒					|
|showDay			|Boolean|true	|是否显示天数		|
|showColon			|Boolean|true	|是否以冒号为分隔符	|

### 事件说明

|事件称名	|说明					|返回参数	|
|---		|----					|---		|
|@timeup		|倒计时时间到触发事件	|-			|

### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/count-down/count-down](https://uniapp.dcloud.io/h5/pages/extUI/count-down/count-down)