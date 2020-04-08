### Drawer 抽屉
*已经支持在nvue页面中使用*

抽屉侧滑菜单，组件名：``uni-drawer``，代码块： uDrawer。

### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
export default {
    components: {uniDrawer}
}
```

Drawer 在 ``template`` 中以 **插槽** 形式插入内容

```html
<uni-drawer :visible="true">
    <view style="padding:30rpx;">
        <view class="uni-title">抽屉式导航</view>
    </view>
</uni-drawer>
```

### 属性说明

|属性名	|类型	|默认值	|说明															|
|---	|----	|---	|---															|
|visible|Boolean|false	|Drawer的显示状态												|
|mask	|Boolean|true	|是否显示遮罩													|
|mode	|String	|left	|Drawe滑出位置，可选值：left（从左侧滑出）， right（从右侧滑出）|
|width	|Number	|220	|Drawe 宽度，仅vue页面设置生效									|

### 事件说明

|事件名	|说明				|返回值	|
|---	|----				|---	|
|@close	|组件关闭时触发事件	|-		|

Tips 

- width 属性仅在 vue 页面生效，nvue 页面因性能问题，不支持动态设置宽度，如需修改，请下载组件修改源码

### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/drawer/drawer](https://uniapp.dcloud.io/h5/pages/extUI/drawer/drawer)