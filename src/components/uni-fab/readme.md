### Fab 悬浮按钮

点击可展开一个图形按钮菜单，组件名：``uni-fab``，代码块： uFab。

### 使用方法

在 ``script`` 中引用组件

```javascript
import uniFab from '@/components/uni-fab/uni-fab.vue';
export default {
	components: {
		uniFab
	}
}
```

在 `template` 中使用组件

```html
<template>
	<view>
		<uni-fab
			:pattern="pattern"
			:content="content"
			:horizontal="horizontal"
			:vertical="vertical"
			:direction="direction"
			@trigger="trigger"
		></uni-fab>
	</view>
</template>
```

### 属性说明

|  属性名	|    类型	| 默认值		| 说明															|
| ---		| ---		| ---			| ---															|
| pattern	| Object	| -				| 可选样式配置项												|
| horizontal| String	| 'left'		| 水平对齐方式。`left`:左对齐，`right`：右对齐					|
| vertical	| String	| 'bottom'		| 垂直对齐方式。`bottom`:下对齐，`top`：上对齐					|
| direction	| String	| 'horizontal'	| 展开菜单显示方式。`horizontal`:水平显示，`vertical`：垂直显示	|
| popMenu	| Boolean	| true			| 是否使用弹出菜单											|
| content	| Array		| -				| 展开菜单内容配置项											|



**pattern配置项：**

|  参数				|    类型	| 默认值	| 说明				|
| ---				|  ---		| ---		| ---				|
| color				| String	| #3c3e49	| 文字默认颜色		|
| selectedColor		| String	| #007AFF	| 文字选中时的颜色	|
| backgroundColor	| String	| #ffffff	| 背景色			|
| buttonColor		| String	| #3c3e49	| 按钮背景色		|

**content配置项：**

|  参数				|    类型	| 说明			|
| ---				|  ---				| ---		| ---			|
| iconPath			| String	| 图片路径		|
| selectedIconPath	| String	| 选中后图片路径|
| text				| String	| 文字			|
| active			| Boolean	| 是否选中当前	|

### 事件说明

|  参数		|    类型	| 说明							|
| ---		|  ---		| ---							|
| @trigger	| Function	| 展开菜单点击事件，返回点击信息|
| @fabClick	| Function	| 悬浮按钮点击事件				|

### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/fab/fab](https://uniapp.dcloud.io/h5/pages/extUI/fab/fab)

**Tips**

- 不建议动态修改属性，可能会有影响。
- 展开菜单暂不支持字体图标，使用图片路径时建议使用绝对路径，相对路径可能会有问题。
- 选中状态要通过自己控制，如果不希望有选中状态，不处理 `active` 即可。 
- 展开菜单建议最多显示四个，如果过多对于小屏手机可能会超出屏幕。