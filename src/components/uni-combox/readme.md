## Combox 组合框

**暂不支持nvue**

组合框组件，组件名：`uni-combox`，代码块： uCombox。


### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniCombox from "@/components/uni-combox/uni-combox"
export default {
    components: {uniCombox}
}
```

在 ``template`` 中使用组件
```html
<uni-combox label="所在城市" :candidates="candidates" placeholder="请选择所在城市" v-model="city"></uni-combox>
```

### 属性说明

|属性名		|类型			|默认值		|说明								|
|---		|----			|---		|---								|
|label		|String			|-			|标签文字							|
|value		|String			|-			|combox的值							|
|labelWidth	|String			|auto		|标签宽度，有单位字符串，如:'100px'	|
|placeholder|String			|-			|输入框占位符						|
|candidates	|Array<String>	|[]			|候选字段							|
|emptyTips	|String			|无匹配项	|无匹配项时的提示语					|

### 事件说明

|事件名	|类型		|默认值	|说明							|
|---	|----		|---	|---							|
|@input	|Function	|-		|combox输入事件，返回combox值	|


### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/combox/combox](https://uniapp.dcloud.io/h5/pages/extUI/combox/combox)
