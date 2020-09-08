### Collapse 折叠面板
*已经支持在nvue页面中使用*

展示可以折叠 / 展开的内容区域，组件名：``uni-collapse``、``uni-collapse-item``，代码块： uCollapse。

### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
export default {
    components: {uniCollapse,uniCollapseItem}
}
```



```html
<!-- 一般用法 -->
<uni-collapse @change="change">
    <uni-collapse-item title="标题文字">
        <uni-list>
            <uni-list-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
            <uni-list-item title="标题文字" note="描述信息" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"></uni-list-item>
            <uni-list-item title="标题文字" note="描述信息" show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
        </uni-list>
    </uni-collapse-item>
    <uni-collapse-item title="默认开启" open="true">
        <view style="padding: 30rpx;"> 折叠内容主体，可自定义内容及样式 </view>
    </uni-collapse-item>
    <uni-collapse-item title="禁用状态" disabled="true">
        <view style="padding: 30rpx;"> 禁用状态 </view>
    </uni-collapse-item>
</uni-collapse>

<!-- 手风琴效果 -->
<uni-collapse accordion="true">
    <uni-collapse-item title="标题文字">
        <view style="padding: 30rpx;">
            手风琴效果
        </view>
    </uni-collapse-item>
    <uni-collapse-item title="标题文字">
        <view style="padding: 30rpx;">
            手风琴效果
        </view>
    </uni-collapse-item>
    <uni-collapse-item title="标题文字">
        <view style="padding: 30rpx;">
            手风琴效果
        </view>
    </uni-collapse-item>
</uni-collapse>

<!-- 带图标 -->
<uni-collapse>
    <uni-collapse-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png">
        <view style="padding: 30rpx;">
            折叠内容主体，可自定义内容及样式
        </view>
    </uni-collapse-item>
    <uni-collapse-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png">
        <view style="padding: 30rpx;">
            折叠内容主体，可自定义内容及样式
        </view>
    </uni-collapse-item>
</uni-collapse>
```

### 属性说明

|属性名		|类型	|默认值	|说明				|
|---		|----	|---	|---				|
|accordion	|Boolean|false	|是否开启手风琴效果	|


### 事件说明

|事件称名	|说明			|返回参数												|
|---		|----			|---													|
|@change	|切换面板时触发	|activeNames（Array）：展开状态的uniCollapseItem的name值|


### 方法说明

|方法名称	|说明														|
|---		|---														|
|resize		|通过 ref 使用，更新当前列表高度，只有 animation:true 下生效|


**Tips**

- resize 方法解决动态添加数据，带动画的折叠面板高度不更新的问题
- 需要在数据渲染完毕之后使用 `resize` 方法。推荐在 `this.nextTick()` 中使用

### uniCollapseItem 属性说明

|属性名		|类型	|默认值	|说明			|
|---		|----	|---	|---			|
|title		|String	|-		|标题文字		|
|thumb		|String	|-		|标题左侧缩略图	|
|disabled	|Boolean|false	|是否禁用		|
|open		|Boolean|false	|是否展开面板	|
|showAnimation	|Boolean	|false	|开启动画		|

**Tips**

- 本组件需要使用自定义组件模式，非自定义组件使用，会出现问题。

### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/collapse/collapse](https://uniapp.dcloud.io/h5/pages/extUI/collapse/collapse)