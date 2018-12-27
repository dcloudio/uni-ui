### Icon 图标

用于展示 icon，组件名：``uni-icon``，代码块： uIcon。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import uniIcon from "@/components/uni-icon/index.vue"
export default {
    components: {uniIcon}
}
```

在 ``template`` 中使用组件

```html
<uni-icon type="contact" size="30"></uni-icon>
```

**Icon 属性说明：**

|属性名		|类型|默认值	|说明|
|---|----|---|---|
|type	|String	|-|图标图案，参考下表|
|color	|String	|-|图标颜色	|
|size	|Number	|24|图标大小|
|@click	|EventHandle|-|点击 Icon 触发事件|

**type 类型：**

![icon](https://img-cdn-qiniu.dcloud.net.cn/img/icon.png)