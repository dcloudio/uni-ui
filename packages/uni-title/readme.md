
### Title 标题栏

标题栏，用于显示标题，组件名：``uni-title``，代码块： uTitle。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import uniTitle from "@/components/uni-title/uni-title.vue"
export default {
    components: {uniTitle}
}
```

在 ``template`` 中使用组件

```html
<uni-title title="只有主标题"></uni-title>
<uni-title title="竖线装饰" sub-title="副标题" type="line"></uni-title>
<uni-title title="圆形装饰" sub-title="副标题" type="circle"></uni-title>
```

**Title 属性说明：**

|属性名		|类型				|默认值	|说明																								|
|---			|----				|---		|---																								|
|type			|String			|无			|标题装饰类型 ，可选值：line（竖线）、circle（圆形）|
|title		|String			|无			|主标题																							|
|sub-title|String			|无			|副标题																							|


### 更新日志
**0.0.1**
- 初始项目