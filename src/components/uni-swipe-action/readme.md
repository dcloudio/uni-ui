### SwipeAction 滑动操作
*已经支持在nvue页面中使用*

通过滑动触发选项的容器，组件名：``uni-swipe-action``,代码块： uSwipeAction。

### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
export default {
    components: {
		uniSwipeAction,
		uniSwipeActionItem
	}
}
```

在 ``template`` 中的使用

```html
<!-- 基础用法 -->
<uni-swipe-action>
	<uni-swipe-action-item :options="options" @click="onClick" @change="change">
		<view class='cont'>SwipeAction 基础使用场景</view>
	</uni-swipe-action-item>
</uni-swipe-action>

<!-- 禁止滑动 -->
<uni-swipe-action>
	<uni-swipe-action-item :disabled="true" :options="options">
		<view class='cont'>SwipeAction 基础使用场景</view>
	</uni-swipe-action-item>
</uni-swipe-action>

<!-- 按组使用 -->
<uni-swipe-action>
    <uni-swipe-action-item :options="options1">
		<view class='cont'>item1</view>
    </uni-swipe-action-item>
    <uni-swipe-action-item :options="options2">
		<view class='cont'>item2</view>
    </uni-swipe-action-item>
    <uni-swipe-action-item :options="options3">
		<view class='cont'>item3</view>
    </uni-swipe-action-item>
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


### 属性说明

|属性名		|类型			|默认值	|是否必填	|说明										|
|:--		|:--			|:--	|:--		|:--										|
|show		|Boolean		|false	|否			|开启关闭组件，auto-close = false 时生效	|
|disabled	|Boolean		|false	|否			|是否禁止滑动								|
|autoClose	|Boolean		|true	|否			|其他组件开启的时候，当前组件是否自动关闭	|
|options	|Array\Object	|-		|是			|组件选项内容及样式							|

**options 参数说明**

|参数	|类型	|是否必填	|说明																													|
|:--	|:--	|:--		|:--																													|
|text	|String	|是			|按钮的文字																												|
|style	|Object	|否			|按钮样式{backgroundColor,color,fontSize}，backgroundColor默认为：#C7C6CD，color默认为：#FFFFFF，fontSize默认为：14px	|

### 事件说明

|事件称名	|说明					|返回参数													|
|:--		|:---				|:--													|
|@click		|点击选项按钮时触发事件	|e = {content,index} ，content（点击内容）、index（下标）	|
|@change	|组件打开或关闭时触发	|true：开启状态；false：关闭状态							|

**Tips**

- iOS 端由于存在bounce效果，滑动体验略差，建议禁止bounce效果，禁止方式如下：

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
- 如果有动态显示隐藏组件之类的操作，请使用 `v-if` 而不是 `v-show`，因为组件内需要获取节点信息，v-show 之后不能正确获取
- swiperaction的跟手联动是非常考验性能的。为了提高交互体验，本组件在app 端 vue 页面、h5、微信小程序使用了wxs 技术，nvue 页面使用 bindingx 技术，可以达到流畅的体验。在其他小程序平台由于底层不支持优化技术，只能使用使用普通 js ，此时性能一般。
- h5端运行报错的情况，已经在HBuilderX 2.4解决

### 插件预览地址 

[https://uniapp.dcloud.io/h5/pages/extUI/swipe-action/swipe-action](https://uniapp.dcloud.io/h5/pages/extUI/swipe-action/swipe-action)