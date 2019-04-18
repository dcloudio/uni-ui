### NavBar 导航栏

导航栏组件，主要用于头部导航，组件名：``uni-nav-bar``，代码块： uNavBar。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
export default {
    components: {uniNavBar}
}
```

在 ``template`` 中使用组件

```html
<uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件"></uni-nav-bar>
```

**NavBar 属性说明：**

|属性名		|类型|默认值	|说明|
|---|----|---|---|
|title	|String	|-|标题文字|
|left-text	|String	|-|右侧按钮文本|
|right-text	|String	|-|右侧按钮文本|
|left-icon	|String	|-|左侧按钮图标（图标类型参考 [Icon 图标](http://ext.dcloud.net.cn/plugin?id=28) type 属性）|
|right-icon	|String	|-|右侧按钮图标（图标类型参考 [Icon 图标](http://ext.dcloud.net.cn/plugin?id=28) type 属性）|
|fixed	|Boolean	|false|是否固定顶部|
|status-bar	|Boolean|false（fixed为true时，status-bar默认值为true）|是否包含状态栏，|
|shadow	|Boolean|true|导航栏下是否有阴影|
|color	|String	|#000000|图标和文字颜色	|
|background-color|String|#FFFFFF|导航栏背景颜色	|
|@click-left|EventHandle|-|左侧按钮点击时触发	|
|@click-right|EventHandle|-|右侧按钮点击时触发	|

**NavBar 插槽**

开发者使用 NavBar 时，支持向 NavBar 里插入不同内容，以达到自定义的目的。


|子元素 slot 的值|说明|
|---|----|
|left	|向导航栏左侧插入|
|right	|向导航栏右侧插入|
|其他	|向导航栏中间插入|

```html
<uni-nav-bar>
    <view>标题栏</view>
    <view slot="left">left</view>
    <view  slot="right">right</view>
</uni-nav-bar>
```
