### NoticeBar 通告栏
*已经支持在nvue页面中使用*

通告栏组件，组件名：``uni-notice-bar``，代码块： uNoticeBar。

### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
export default {
    components: {uniNoticeBar}
}
```

在 ``template`` 中使用组件

```html
<!-- 基本用法 -->
<uni-notice-bar single="true" text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
<uni-notice-bar text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>

<!-- 文字滚动 -->
<uni-notice-bar scrollable="true" single="true" text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>

<!-- 显示图标 -->
<uni-notice-bar showIcon="true" text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>

<!-- 显示关闭按钮 -->
<uni-notice-bar showClose="true" showIcon="true" text="这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>

<!-- 查看更多 -->
 <uni-notice-bar @getmore="getMore" :showGetMore="true" moreText="查看更多" single="true" text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

**注意**

如果需要异步获取内容后展示需要使用`v-if`进行控制，`<uni-notice-bar v-if="text" :text="text"></uni-notice-bar>`

### 属性说明

|属性名				|类型	|默认值	|说明												|
|---				|----	|---	|---												|
|speed				|Number	|100	|文字滚动的速度，默认100px/秒						|
|text				|String	|-		|显示文字											|
|background-color	|String	|#fffbe8|背景颜色											|
|color				|String	|#de8c17|文字颜色											|
|moreColor			|String	|#999999|查看更多文字的颜色									|
|moreText			|String	|-		|设置“查看更多”的文本								|
|single				|Boolean|false	|是否单行											|
|scrollable			|Boolean|false	|是否滚动，为true时，NoticeBar为单行				|
|showIcon			|Boolean|false	|是否显示左侧喇叭图标								|
|showClose			|Boolean|false	|是否显示左侧关闭按钮								|
|showGetMore		|Boolean|false	|是否显示右侧查看更多图标，为true时，NoticeBar为单行|

### 事件说明

|事件名称	|说明						|返回值	|
|---		|---						|---	|
|@click		|点击 NoticeBar 触发事件	|-		|
|@close		|关闭 NoticeBar 触发事件	|-		|
|@getmore	|点击”查看更多“时触发事件	|-		|

### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/notice-bar/notice-bar](https://uniapp.dcloud.io/h5/pages/extUI/notice-bar/notice-bar)