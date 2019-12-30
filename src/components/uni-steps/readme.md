### Steps 步骤条
*已经支持在nvue页面中使用*

评分组件，组件名：``uni-steps``，代码块： uSteps。

### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniSteps from '@/components/uni-steps/uni-steps.vue'
export default {
    components: {uniSteps}
}
```

在 ``template`` 中的使用

```html
<!-- 基本用法 -->
<uni-steps :options="[{title: '事件一'}, {title: '事件二'}, {title: '事件三'}, {title: '事件四'}]" :active="1"></uni-steps>

<!-- 纵向排列 -->
<uni-steps :options="[{title:'买家下单',desc:'2018-11-11'},{title:'卖家发货',desc:'2018-11-12'},{title:'买家签收',desc:'2018-11-13'},{title:'交易完成',desc:'2018-11-14'}]" direction="column" :active="2"></uni-steps>
```



### 属性说明

|属性名			|类型				|默认值	|说明																|
|---			|----				|---	|---																|
|active			|Number				|0		|当前步骤															|
|direction		|String				|row	|排列方向，可取值：row（横向）、column（纵向）						|
|active-color	|String				|#1aad19|选中状态的颜色														|
|options		|Array|		|数据源，格式为：[{title:'xxx',desc:'xxx'},{title:'xxx',desc:'xxx'}]|

### 插件预览地址 
[https://uniapp.dcloud.io/h5/pages/extUI/steps/steps](https://uniapp.dcloud.io/h5/pages/extUI/steps/steps)