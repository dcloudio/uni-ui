### SwipeAction 滑动操作

通过滑动触发选项的容器，组件名：``uni-swipe-action``,代码块： uSwipeAction。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import {uniSwipeAction} from "@dcloudio/uni-ui"
export default {
    components: {uniSwipeAction}
}
```

**代码示例**

```html
<!-- 基础用法 -->
<uni-swipe-action :options="options" @click="onClick" @change="change">
    <view class='cont'>SwipeAction 基础使用场景</view>
</uni-swipe-action>
<!-- 禁止滑动 -->
<uni-swipe-action :disabled="true" :options="options">
    <view class='cont'>点击按钮自动关闭</view>
</uni-swipe-action>
```


```javascript
export default {
  data(){
    return {
      options:[
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
      ]
    }
  },
  methods:{
    onClick(e){
      console.log('当前点击的是第'+e.index+'个按钮，点击内容是'+e.content.text)
    },
    change(open){
      console.log('当前开启状态：'+ open)
    }
  }
}

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
|show|Boolean|false|否|开启关闭组件，auto-close = false 时生效|
|disabled|Boolean|false|否|是否禁止滑动|
|auto-close|Boolean|true|否|其他组件开启的时候，当前组件是否自动关闭|
|options|Array<Object>|-|是|组件选项内容及样式|

options 参数说明

|参数|类型|是否必填|说明|
|:--|:--|:--|:--|
|text|String|是|按钮的文字|
|style|Object|否|按钮样式{backgroundColor,color,fontSize}，backgroundColor默认为：#C7C6CD，color默认为：#FFFFFF，fontSize默认为：28rpx|

**SwipeAction 事件说明：**

|事件称名|说明|返回参数|
|:--|:---|:--|
|click|点击选项按钮时触发事件|e = {content,index} ，content（点击内容）、index（下标）|
|change|组件打开或关闭时触发|true：开启状态；false：关闭状态|

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


### 插件预览地址 
[https://uniapp.dcloud.io/h5/pages/extUI/swipe-action/swipe-action](https://uniapp.dcloud.io/h5/pages/extUI/swipe-action/swipe-action)