### Tag 标签
*已经支持在nvue页面中使用*

用于展示1个或多个文字标签，可点击切换选中、不选中的状态，组件名：``uni-tag``，代码块： uTag。

### 使用方式

引用组件 

```javascript
import uniTag from '@/components/uni-tag/uni-tag.vue'
export default {
    components: {uniTag}
}
```

使用组件

```html
<uni-tag text="标签"></uni-tag>
<uni-tag text="标签" type="error" :circle="true"></uni-tag>
<uni-tag text="标签" @click="bindClick"></uni-tag>
```

### 属性说明

|属性名		|类型	|默认值	|说明																											|
|---		|----	|---	|---																											|
|text		|String	|-		|标签内容																										|
|size		|String	|normal	|大小尺寸，可选值：normal、small																				|
|type		|String	|default|颜色类型，可选值：default（灰色）、primary（蓝色）、success（绿色）、warning(黄色)、error(红色)、royal(紫色)	|
|disabled	|Boolean|false	|是否为禁用状态																									|
|inverted	|Boolean|false	|是否无需背景颜色（空心标签）																					|
|circle		|Boolean|false	|是否为圆角																										|


### 事件说明

|事件称名	|说明				|返回值	|
|---		|----				|---	|
|@click		|点击 Tag 触发事件	|-		|

### 插件预览地址 

[https://uniapp.dcloud.io/h5/pages/extUI/tag/tag](https://uniapp.dcloud.io/h5/pages/extUI/tag/tag)
