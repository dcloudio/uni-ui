### Icons 图标

用于展示 icons，组件名：``uni-icons``，代码块： uIcons。

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

**Icon 属性说明：**

|属性名		|类型|默认值	|说明|
|---|----|---|---|
|type	|String	|-|图标图案，参考示例|
|color	|String	|-|图标颜色	|
|size	|Number	|24|图标大小|
|@click	|EventHandle|-|点击 Icon 触发事件|


### 更新日志
**1.1.0**
- 新增 大批新图标
- 优化 老图标样式
- 修复 flex 布局下，高度出现问题
-
**1.0.0**
- 初始项目