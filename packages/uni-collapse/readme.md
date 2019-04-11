### Collapse 折叠面板

展示可以折叠 / 展开的内容区域，组件名：``uni-collapse``、``uni-collapse-item``，代码块： uCollapse。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import {uniCollapse,uniCollapseItem} from "uni-ui"
export default {
    components: {uniCollapse,uniCollapseItem}
}
```

一般用法

```html
<uni-collapse @change="change">
    <uni-collapse-item title="标题文字">
        <uni-list>
            <uni-list-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
            <uni-list-item title="标题文字" note="描述信息" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"></uni-list-item>
            <uni-list-item title="标题文字" note="描述信息" show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
        </uni-list>
    </uni-collapse-item>
    <uni-collapse-item title="默认开启" open="true">
        <view style="padding: 30upx;"> 折叠内容主体，可自定义内容及样式 </view>
    </uni-collapse-item>
    <uni-collapse-item title="禁用状态" disabled="true">
        <view style="padding: 30upx;"> 禁用状态 </view>
    </uni-collapse-item>
</uni-collapse>
```

手风琴效果

```html
<uni-collapse accordion="true">
    <uni-collapse-item title="标题文字">
        <view style="padding: 30upx;">
            手风琴效果
        </view>
    </uni-collapse-item>
    <uni-collapse-item title="标题文字">
        <view style="padding: 30upx;">
            手风琴效果
        </view>
    </uni-collapse-item>
    <uni-collapse-item title="标题文字">
        <view style="padding: 30upx;">
            手风琴效果
        </view>
    </uni-collapse-item>
</uni-collapse>
```


带图标

```html
<uni-collapse>
    <uni-collapse-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png">
        <view style="padding: 30upx;">
            折叠内容主体，可自定义内容及样式
        </view>
    </uni-collapse-item>
    <uni-collapse-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png">
        <view style="padding: 30upx;">
            折叠内容主体，可自定义内容及样式
        </view>
    </uni-collapse-item>
</uni-collapse>
```

**uniCollapse 属性说明：**

|属性名|类型|默认值	|说明|
|---|----|---|---|
|accordion|Boolean|false|是否开启手风琴效果|


**uniCollapse 事件说明：**

|事件称名|说明|返回参数|
|---|----|---|
|change|切换面板时触发|activeNames（Array）：展开状态的uniCollapseItem的name值|


**uniCollapseItem 属性说明：**

|属性名|类型|默认值|说明|
|---|----|---|---|
|title|String||标题文字|
|name|String & Number|Index|唯一标识符，默认为索引值|
|thumb|String||标题左侧缩略图|
|disabled|Boolean|false|是否禁用|
|open|Boolean|false|是否展开面板|
|animation|String|false|动画类型：outer（内容进行动画）/outer（容器进行动画）|

Tips
- 组件实际运行效果参考：[https://github.com/dcloudio/uni-ui](https://github.com/dcloudio/uni-ui)
- npm 使用方式参考：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)
- 如果需要在组件上使用 `v-for` 循环，需要使用 `hbuilderX.alpha 1.8.5+` 版本