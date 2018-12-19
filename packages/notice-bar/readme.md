### NoticeBar 通告栏

通告栏组件，组件名：``uni-notice-bar``，代码块： uNoticeBar。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import {uniNoticeBar} from "uni-ui"
export default {
    components: {uniNoticeBar}
}
```

基本用法

```html
<uni-notice-bar single="true" text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
<uni-notice-bar text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

文字滚动

```html
<uni-notice-bar scrollable="true" single="true" text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

显示图标

```html
<uni-notice-bar show-icon="true" text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

显示关闭按钮

```html
<uni-notice-bar show-close="true" show-icon="true" text="这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

查看更多

```html
 <uni-notice-bar @getmore="getMore" more-text="查看更多" single="true" text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```


**uniNoticeBar 属性说明：**

|属性名|类型|默认值	|说明|
|---|----|---|---|
|text|String|-|显示文字|
|more-text|String|-|“查看更多”的文本，如果设置文字，NoticeBar为单行|
|speed|Number|100|文字滚动的速度，默认100px/秒|
|background-color|String|#fffbe8|背景颜色|
|color|String|#de8c17|文字颜色|
|single|Boolean|false|是否单行|
|scrollable|Boolean|false|是否滚动，为true时，NoticeBar为单行|
|show-icon|Boolean|false|是否显示左侧喇叭图标|
|show-close|Boolean|false|是否显示左侧关闭按钮|

**uniNoticeBar 事件说明：**
|事件名称	|说明		|
|---|---|
|click	|点击 NoticeBar 触发事件	|
|close	|关闭 NoticeBar 触发事件	|
|getmore|点击”查看更多“时触发事件|

