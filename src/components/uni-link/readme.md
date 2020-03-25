### Link 链接

uni-link是一个外部网页超链接组件，在小程序内复制url，在app内打开外部浏览器，在h5端打开新网页。组件名：``uni-link``，代码块： uLink。

### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniLink from "@/components/uni-link/uni-link.vue"
export default {
    components: {uniLink}
}
```

在 ``template`` 中使用组件

```html
<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/"></uni-link>
```

### 属性说明

|属性名			|类型	|默认值										|说明							|
|---			|----	|---										|---							|
|href			|String	|-											|链接地址						|
|text			|String	|-											|显示文字						|
|showUnderLine	|Boolean|true										|是否显示下划线					|
|copyTips		|String	|已自动复制网址，请在手机浏览器里粘贴该网址	|在小程序端复制链接时的提示语	|
|color			|String	|#999999									|链接文字颜色					|
|fontSize		|String	|14											|链接文字大小，单位px			|


### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/link/link](https://uniapp.dcloud.io/h5/pages/extUI/link/link)