### Drawer 抽屉
> *已经支持在nvue页面中使用*

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

|属性名			|类型	|默认值	|说明															|
|---			|----	|---	|---															|
|visible【废弃】|Boolean|false	|Drawer的显示状态，此属性已废弃，请使用方法打开关闭抽屉			|
|mask			|Boolean|true	|是否显示遮罩													|
|maskClick		|Boolean|true	|点击遮罩是否可以关闭抽屉										|
|mode			|String	|left	|Drawe滑出位置，可选值：left（从左侧滑出）， right（从右侧滑出）|
|width			|Number	|220	|Drawe 宽度，仅vue页面设置生效									|

### 方法说明

通过 `ref` 获取组件调用方法

|方法称名	|说明		|
|---		|----		|
|open		|打开抽屉	|
|close		|关闭抽屉	|



### 事件说明

|事件名	|说明				|返回值	|
|---	|----				|---	|
|@change|抽屉状态发生变化触发事件	|true：抽屉已经打开；false：抽屉已经关闭；	|

Tips 

- width 属性仅在 vue 页面生效，nvue 页面因性能问题，不支持动态设置宽度，如需修改，请下载组件修改源码

### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/drawer/drawer](https://uniapp.dcloud.io/h5/pages/extUI/drawer/drawer)