

## Collapse 折叠面板
> 代码块： `uCollapse`
> 关联组件：`uni-collapse-item`、`uni-icons`。


展示可以折叠 / 展开的内容区域。

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中引用组件 

```html
<!-- 一般用法 -->
<uni-collapse @change="change">
    <uni-collapse-item title="标题文字">
        <uni-list>
            <uni-list-item title="标题文字" thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"></uni-list-item>
            <uni-list-item title="标题文字" note="描述信息" thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"></uni-list-item>
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
    <uni-collapse-item title="标题文字" thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
        <view style="padding: 30rpx;">
            折叠内容主体，可自定义内容及样式
        </view>
    </uni-collapse-item>
    <uni-collapse-item title="标题文字" thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
        <view style="padding: 30rpx;">
            折叠内容主体，可自定义内容及样式
        </view>
    </uni-collapse-item>
</uni-collapse>
```

## API

### Collapse Props

|属性名		|类型	|默认值	|说明				|
|:-:		|:-:	|:-:	|:-:				|
|accordion	|Boolean|false	|是否开启手风琴效果	|


### Collapse Event

|事件称名	|说明			|返回值												|
|:-:		|:-:			:-:													|
|@change	|切换面板时触发	|activeNames（Array）：展开状态的uniCollapseItem的name值|


### Collapse Methods

|方法名称	|说明														|
|:-:		|:-:														|
|resize	|更新当前列表高度，只有 `animation:true` 下生效|


> - resize 方法解决动态添加数据，带动画的折叠面板高度不更新的问题
> - 需要在数据渲染完毕之后使用 `resize` 方法。推荐在 `this.nextTick()` 中使用


### CollapseItem Props

|属性名		|类型	|默认值	|说明			|
|:-:		|:-:	|:-:	|:-:			|
|title		|String	|-		|标题文字		|
|thumb		|String	|-		|标题左侧缩略图	|
|disabled	|Boolean|false	|是否禁用		|
|open		|Boolean|false	|是否展开面板	|
|showAnimation	|Boolean	|false	|开启动画		|