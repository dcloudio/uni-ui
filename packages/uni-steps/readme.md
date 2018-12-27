### Steps 步骤条

评分组件，组件名：``uni-steps``，代码块： uSteps。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import {uniSteps} from "uni-ui"
export default {
    components: {uniSteps}
}
```

基本用法

```html
<uni-steps :data="[{title: '事件一'}, {title: '事件二'}, {title: '事件三'}, {title: '事件四'}]" :active="1"></uni-steps>
```

纵向排列

```html
<uni-steps :data="[{title:'买家下单',desc:'2018-11-11'},{title:'卖家发货',desc:'2018-11-12'},{title:'买家签收',desc:'2018-11-13'},{title:'交易完成',desc:'2018-11-14'}]" direction="column" :active="2"></uni-steps>
```



**uniSteps 属性说明：**

|属性名|类型|默认值	|说明|
|---|----|---|---|
|data|Array&lt;Object&gt;||数据源，格式为：[{title:'xxx',desc:'xxx'},{title:'xxx',desc:'xxx'}]|
|active|Number|0|当前步骤|
|direction|String|row|排列方向，可取值：row（横向）、column（纵向）|
|active-color|String|#1aad19|选中状态的颜色|