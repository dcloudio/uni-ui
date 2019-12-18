### Section 标题栏

标题栏，用于显示标题，组件名：``uni-section``，代码块： uSection。

### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniSection from "@/components/uni-section/uni-section.vue"
export default {
    components: {uniSection}
}
```

在 ``template`` 中使用组件

```html
<uni-section title="只有主标题"></uni-section>
<uni-section title="竖线装饰" sub-title="副标题" type="line"></uni-section>
<uni-section title="圆形装饰" sub-title="副标题" type="circle"></uni-section>
```

### 属性说明

|属性名		|类型	|默认值	|说明												|
|---		|----	|---	|---												|
|type		|String	|-		|标题装饰类型 ，可选值：line（竖线）、circle（圆形）|
|title		|String	|-		|主标题												|
|sub-title	|String	|-		|副标题												|
