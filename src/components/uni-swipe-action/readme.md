### SwipeAction 滑动操作

通过滑动触发选项的容器，组件名：``uni-swipe-action``,代码块： uSwipeAction。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import {uniSwipeAction} from "uni-ui"
export default {
    components: {uniSwipeAction}
}
```

一般用法

```html
<uni-swipe-action :options="[
    {
        text: '取消',
        style: {
            backgroundColor: '#007aff'
        }
    }, {
        text: '确认',
        style: {
            backgroundColor: '#dd524d'
        }
    }
]">
    <view class='cont'>SwipeAction 基础使用场景</view>
</uni-swipe-action>
```


禁止滑动

```html
<uni-swipe-action :disabled="true" :options="[
    {
        text: '取消',
        style: {
            backgroundColor: '#007aff'
        }
    }, {
        text: '确认',
        style: {
            backgroundColor: '#dd524d'
        }
    }
]">
    <view class='cont'>点击按钮自动关闭</view>
</uni-swipe-action>
```


传递点击事件

```html
<uni-swipe-action @click="bindClick" :options="[
    {
        text: '取消',
        style: {
            backgroundColor: '#007aff'
        }
    }, {
        text: '确认',
        style: {
            backgroundColor: '#dd524d'
        }
    }
]">
    <view class='cont'>点击选项时触发事件</view>
</uni-swipe-action>
```

与 List 组件使用

```html
<uni-list>
    <uni-swipe-action :options="options1">
        <uni-list-item title="item1" show-arrow="false"></uni-list-item>
    </uni-swipe-action>
    <uni-swipe-action :options="options2">
        <uni-list-item title="item2" show-arrow="false"></uni-list-item>
    </uni-swipe-action>
    <uni-swipe-action :options="options3">
        <uni-list-item title="item3" show-arrow="false"></uni-list-item>
    </uni-swipe-action>
</uni-list>
```

**SwipeAction 属性说明：**

|属性名|类型|默认值|是否必填	|说明|
|:--|:--|:--|:--|:--|
|is-opened|Boolean|false|否|是否为开启状态|
|is-drag|Boolean|false|否|是否为跟手滑动|
|disabled|Boolean|false|否|是否禁止滑动|
|auto-close|Boolean|true|否|在组件开启状态时点击组件，是否自动关闭|
|options|Array<Object>|-|是|组件选项内容及样式|

options 参数说明

|参数|类型|是否必填|说明|
|:--|:--|:--|:--|
|text|String|是|按钮的文字|
|style|Object|否|按钮样式{backgroundColor,color,fontSize}，backgroundColor默认为：#C7C6CD，color默认为：#FFFFFF，fontSize默认为：28upx|

**SwipeAction 事件说明：**

|事件称名|说明|返回参数|
|:--|:---|:--|
|click|点击选项按钮时触发事件|{text,style,index} ，text（按钮文字）、style（按钮的样式）、index（下标）|
|opened|完全打开时触发|-|
|closed|完全关闭时触发|-|

**注意：** iOS 端由于存在bounce效果，滑动体验略差，建议禁止bounce效果，禁止方式如下：

```javascript
{
	"path": "swipe-action/swipe-action",
	"style": {
		"navigationBarTitleText": "SwipeAction 滑动操作",
		"disableScroll":true,
		"app-plus":{
			"bounce":"none"
		}
	}
}
```