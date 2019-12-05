### Badge 数字角标
*已经支持在nvue页面中使用*

数字角标一般和其它控件（列表、9宫格等）配合使用，用于进行数量提示，默认为实心灰色背景，组件名：``uni-badge``，代码块： uBadge。

### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniBadge from '@/components/uni-badge/uni-badge.vue'
export default {
    components: {uniBadge}
}
```

在 ``template`` 中使用组件

```html
<uni-badge text="1"></uni-badge>
<uni-badge text="2" type="purple" @click="bindClick"></uni-badge>
<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
```

### 属性说明

|属性名		|类型		|默认值	|说明																											|
|---		|----		|---	|---																											|
|text		|String		|-		|角标内容																										|
|type		|String		|default|颜色类型，可选值：default（灰色）、primary（蓝色）、success（绿色）、warning(黄色)、error(红色)|
|size		|String		|normal|Badge 大小，可取值：normal、small|
|inverted	|Boolean	|false	|是否无需背景颜色，为 true 时，背景颜色将变为文字的字体颜色														|

### 事件说明

|事件名	|事件说明			|返回参数	|
|---	|---				|---		|
|@click	|点击 Badge 触发事件| -			|


### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/badge/badge](https://uniapp.dcloud.io/h5/pages/extUI/badge/badge)
