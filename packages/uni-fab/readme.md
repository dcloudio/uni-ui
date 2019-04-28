### Fab 悬浮按钮

点击可展开一个图形按钮菜单，组件名：``uni-fab``，代码块： uFab。

**使用方法：**

在 `template` 中使用

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


**使用方式：**

```javascript

import uniFab from '@/components/uni-fab.vue';
export default {
	data() {
		return {
			horizontal: 'left',
			vertical: 'bottom',
			direction: 'horizontal',
			pattern: {
				color: '#7A7E83',
				backgroundColor: '#fff',
				selectedColor: '#007AFF',
				buttonColor:"#007AFF"
			},
			content: [
				{
					iconPath: '/static/component.png',
					selectedIconPath: '/static/componentHL.png',
					text: '组件',
					active: false
				},
				{
					iconPath: '/static/api.png',
					selectedIconPath: '/static/apiHL.png',
					text: 'API',
					active: false
				},
				{
					iconPath: '/static/template.png',
					selectedIconPath: '/static/templateHL.png',
					text: '模版',
					active: false
				}
			]
		};
	},
	methods: {
		trigger(e) {
			console.log(e);
			this.content[e.index].active = !e.item.active;
			uni.showModal({
				title: '提示',
				content: `您${this.content[e.index].active?'选中了':'取消了'}${e.item.text}`,
				success: function(res) {
					if (res.confirm) {
						console.log('用户点击确定');
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		}
	},
	components: {
		uniFab
	}
};

```

**属性说明：**

|  属性名	|    类型	| 默认值		| 说明															|
| ---		| ---		| ---			| ---															|
| pattern	| object	|				| 可选样式配置项												|
| horizontal| string	| 'left'		| 水平对齐方式。`left`:左对齐，`right`：右对齐					|
| vertical	| string	| 'bottom'		| 水平对齐方式。`bottom`:下对齐，`top`：上对齐					|
| direction	| string	| 'horizontal'	| 展开菜单显示方式。`horizontal`:水平显示，`vertical`：垂直显示	|
| content	| array		|				| 展开菜单内容配置项											|



**pattern配置项：**

|  参数				|    类型	| 默认值	| 说明				|
| ---				|  ---		| ---		| ---				|
| color				| string	| #3c3e49	| 文字默认颜色		|
| selectedColor		| string	| #007AFF	| 文字选中时的颜色	|
| backgroundColor	| string	| #ffffff	| 背景色			|
| buttonColor		| string	| #3c3e49	| 按钮背景色		|

**content配置项：**

|  参数				|    类型	| 说明			|
| ---				|  ---				| ---		| ---			|
| iconPath			| string	| 图片路径		|
| selectedIconPath	| string	| 选中后图片路径|
| text				| string	| 文字			|
| active			| boolean	| 是否选中当前	|

**事件说明：**

|  参数		|    类型	| 说明					   |
| ---	    |  ---		| ---		               | 
| trigger	| function	| 展开菜单点击事件，返回点击信息|



Tips:

- 不建议动态修改属性，可能会有影响。
- 展开菜单暂不支持字体图标，使用图片路径时建议使用绝对路径，相对路径可能会有问题。
- 选中状态要通过自己控制，如果不希望有选中状态，不处理 `active` 即可。 
- 展开菜单建议最多显示四个，如果过多对于小屏手机可能会超出屏幕。