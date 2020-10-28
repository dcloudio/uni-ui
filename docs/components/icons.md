### Icons 图标
*已经支持在nvue页面中使用*

用于展示 icons 图标，组件名：``uni-icons``，代码块： uIcons。

### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniIcons from '@/components/uni-icons/uni-icons.vue'
export default {
    components: {uniIcons}
}
```

在 ``template`` 中使用组件

```html
<uni-icons type="contact" size="30"></uni-icons>
```

### 属性说明

|属性名	|类型		|默认值	|说明				|
|---	|----		|---	|---				|
|size	|Number		|24		|图标大小			|
|type	|String		|-		|图标图案，参考示例	|
|color	|String		|-		|图标颜色			|


### 事件说明
|事件名	|说明			|返回值|
|---	|----			|---  |
|@click|点击 Icon 触发事件|-    |


### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/icon/icon](https://uniapp.dcloud.io/h5/pages/extUI/icon/icon)