### Icon 图标

用于展示 icon，组件名：``uni-icons``，代码块： uIcons。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import uniIcons from "@/components/uni-icons/index.vue"
export default {
    components: {uniIcons}
}
```

在 ``template`` 中使用组件

```html
<uni-icons type="contact" size="30"></uni-icons>
```

**Icons 属性说明：**

|属性名		|类型|默认值	|说明|
|---|----|---|---|
|type	|String	|-|图标图案，参考示例|
|color	|String	|-|图标颜色	|
|size	|Number	|24|图标大小（单位px）|


**Icons 事件说明：**
|事件名	|说明								|
|click	|点击 Icon 触发事件	|


### 更新日志
**1.0.0**
- 优化 图标样式