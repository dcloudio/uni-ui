### Drawer 抽屉

抽屉侧滑菜单，组件名：``uni-drawer``，代码块： uDrawer。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import uniDrawer from "@/components/drawer/drawer.vue"
export default {
    components: {uniDrawer}
}
```

Drawer 在 ``template`` 中以 **插槽** 形式插入内容

```html
<uni-drawer :visible="true">
    <view style="padding:30upx;">
        <view class="uni-title">抽屉式导航</view>
    </view>
</uni-drawer>
```


实际效果参考：[https://github.com/dcloudio/uni-ui](https://github.com/dcloudio/uni-ui)

**属性说明：**

|属性名	|类型		|默认值	|说明															|
|---	|----		|---	|---															|
|visible|Boolean	|false	|Drawer的显示状态												|
|mask	|Boolean	|true	|是否显示遮罩													|
|mode	|String		|left	|Drawe滑出位置，可选值：left（从左侧滑出）， right（从右侧滑出	|

**事件说明：**

|事件名|说明		|
|close|组件关闭时触发事件|