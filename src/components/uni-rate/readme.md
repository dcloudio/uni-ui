### Rate 评分

评分组件，组件名：``uni-rate``，代码块： uRate。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import {uniRate} from "uni-ui"
export default {
    components: {uniRate}
}
```

基本用法

```html
<uni-rate value="2"></uni-rate>
```

自定义星星大小

```html
<uni-rate size="18" value="5"></uni-rate>
```

设置评分数

```html
<uni-rate max="10" value="5"></uni-rate>
```

不可点击状态

```html
<uni-rate disabled="true" value="3.5"></uni-rate>
```




**uniRate 属性说明：**

|属性名|类型|默认值	|说明|
|---|----|---|---|
|value|Number|0|当前评分|
|max|Number|5|最大的评分|
|size|Number|24|星星的大小|
|margin|Number|0|星星的间距|
|color|String|#ececec|星星的颜色|
|active-color|String|#ffca3e|选中状态的星星的颜色|
|is-fill|Boolean|true|星星的类型，是否为实心类型|
|disabled|Boolean|false|是否为不可点击状态|

**uniRate 事件说明：**

|事件称名|说明|返回参数|
|---|----|---|
|change|uniRate 的 value 改变时触发事件，返回参数为uniRate的value|{value:Number}|