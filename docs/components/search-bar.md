### SearchBar 搜索栏
*已经支持在nvue页面中使用*

搜索栏组件，组件名：``uni-search-bar``，代码块： uSearchBar。

### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
export default {
    components: {uniSearchBar}
}
```

在 ``template`` 中使用组件

```html
<!-- 基本用法 -->
<uni-search-bar @confirm="search" @input="input" />

<!-- 自定义Placeholder -->
<uni-search-bar placeholder="自定placeholder" @confirm="search"/>

<!-- 设置圆角 -->
<uni-search-bar :radius="100" @confirm="search"/>
```

### 属性说明

|属性名			|类型	|默认值	|说明																					|
|---			|----	|---	|---																					|
|radius			|Number	|10		|搜索栏圆角，单位rpx																	|
|maxlength		|Number	|100	|输入最大长度																			|
|placeholder	|String	|搜索	|搜索栏Placeholder																		|
|clearButton	|String	|auto	|是否显示清除按钮，可选值`always`-一直显示、`auto`-输入框不为空时显示、`none`-一直不显示	|
|cancelButton	|String	|auto	|是否显示取消按钮，可选值`always`-一直显示、`auto`-输入框不为空时显示、`none`-一直不显示	|
|cancelText		|String	|取消	|取消按钮的文字																			|
|bgColor		|String	|#F8F8F8|输入框背景颜色																			|

### 事件说明

|事件称名	|说明																|返回参数			|
|---		|----																|---				|
|confirm	|uniSearchBar 的输入框 confirm 事件，返回参数为uniSearchBar的value	|e={value:Number}	|
|input		|uniSearchBar 的 value 改变时触发事件，返回参数为uniSearchBar的value|e={value:Number}	|
|cancel		|点击取消按钮时触发事件，返回参数为uniSearchBar的value				|e={value:Number}	|

### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/search-bar/search-bar](https://uniapp.dcloud.io/h5/pages/extUI/search-bar/search-bar)