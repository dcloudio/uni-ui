### SearchBar 搜索栏

评分组件，组件名：``uni-search-bar``，代码块： uSearchBar。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import {uniSearchBar} from "uni-ui"
export default {
    components: {uniSearchBar}
}
```

基本用法

```html
<uni-search-bar @confirm="search" @input="input" />
```

自定义Placeholder

```html
<uni-search-bar placeholder="自定placeholder" @confirm="search"/>
```

设置圆角

```html
<uni-search-bar :radius="100" @confirm="search"/>
```



**uniSearchBar 属性说明：**

|属性名			|类型		|默认值	|说明								|
|---				|----		|---		|---								|
|placeholder|String	|搜索		|搜索栏Placeholder	|
|radius			|Number	|10			|搜索栏圆角，单位rpx|

**uniSearchBar 事件说明：**

|事件称名	|说明																																|返回参数				|
|---			|----																																|---						|
|confirm	|uniSearchBar 的输入框 confirm 事件，返回参数为uniSearchBar的value	|{value:Number}	|
|input		|uniSearchBar 的 value 改变时触发事件，返回参数为uniSearchBar的value|{value:Number}	|