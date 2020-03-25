### Popup 弹出层
*已经支持在nvue页面中使用*

弹出层组件，为了解决遮罩弹层的问题。组件名：``uni-popup``，代码块： uPopup。


### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniPopup from '@/components/uni-popup/uni-popup.vue'
export default {
    components: {uniPopup}
}
```

在 ``template`` 中使用组件

```html
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" type="bottom">底部弹出 Popup</uni-popup>
```

```javascript
export default {
   methods:{
      open(){
         this.$refs.popup.open()
      }
   }

}
```

### 属性说明

| 属性名	| 类型		| 默认值| 说明															|
| ---		| ---		| ---	| ---															|
| animation	| Boolean	|true	| 是否开启动画													|
| type		| String	|center	| 弹出方式，可选值：top（顶部），center（居中），bottom（底部）	|
| maskClick	| Boolean	|true	| 蒙版点击是否关闭弹窗											|


### 方法说明

通过 `ref` 获取组件调用方法

|方法称名	|说明		|
|---		|----		|
|open		|打开弹出层	|
|close		|关闭弹出层	|


### 事件说明

|事件称名	|说明				|返回值			|
|---		|----				|---			|
|change		|打开关闭弹窗触发	|e={show: false}|

**Tips**
- 在使用 `uni-popup` 时，尽量将组件置于其他元素后面，避免出现层级问题
- 在微信小程序开发者工具中，启用真机调试，popup 会延时出现，是因为 setTimeout 在真机调试中的延时问题导致的，预览和发布小程序不会出现此问题
### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/popup/popup](https://uniapp.dcloud.io/h5/pages/extUI/popup/popup)