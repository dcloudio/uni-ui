# movable-view 移动容器组件

移动容器组件，可以拖动、缩放组件。

本uni_modules插件包括2个组件，movable-view 和 movable-area。

- movable-view组件：可移动的视图容器，在页面中可以拖拽滑动。movable-view必须在 movable-area 组件中，并且必须是直接子节点，否则不能移动。
- movable-area组件：movable-view组件的可移动区域。

## 平台支持

2个组件仅支持 Web 和 App 平台（uni-app x），不支持微信小程序（微信小程序有内置的 movable-view 组件）。

## 功能特性

- 拖动
- 缩放

为保证性能，使用css的transform、translate等方式。避免移动坐标导致的排版。

## 文件位置

- 组件演示页面源码：`/pages/movable-view/movable-view.uvue`
- movable-view组件源码：`/uni_modules/movable-view/components/movable-view/movable-view.uvue`
- movable-area组件源码：`/uni_modules/movable-view/components/movable-view/movable-area.uvue`
- 自动化测试脚本：`/pages/movable-view/movable-view.test.js`

# 组件规范
## movable-area组件

### movable-area组件的属性列表

|属性				|类型		|默认值	|必填	|说明																																										|
|:-:				|:-:		|:-:		|:-:	|:-:																																										|
|scale-area	|Boolean|false	|否		|当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area	|

### movable-area组件的注意事项
1. movable-area 必须设置width和height属性，不设置默认为10px**
2. 当movable-view小于movable-area时，movable-view的移动范围是在movable-area内；
3. 当movable-view大于movable-area时，movable-view的移动范围必须包含movable-area（x轴方向和y轴方向分开考虑）

## movable-view组件规范

### movable-view组件的属性列表

|属性					|类型					|默认值	|必填	|说明																																																									|最低版本	|
|:-:					|:-:					|:-:		|:-:	|:-:																																																									|:-:			|
|direction		|string				|none		|否		|movable-view的移动方向，属性值有all、vertical、horizontal、none																											|1.2.0		|
|inertia			|boolean			|false	|否		|movable-view是否带有惯性																																															|1.2.0		|
|out-of-bounds|boolean			|false	|否		|超过可移动区域后，movable-view是否还可以移动																																					|1.2.0		|
|x						|number				|				|否		|定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画；单位支持px（默认）、小程序支持rpx；	|1.2.0		|
|y						|number				|				|否		|定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画；单位支持px（默认）、小程序支持rpx；	|1.2.0		|
|damping			|number				|20			|否		|阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快																										|1.2.0		|
|friction			|number				|2			|否		|摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值										|1.2.0		|
|disabled			|boolean			|false	|否		|是否禁用																																																							|1.9.90		|
|scale				|boolean			|false	|否		|是否支持双指缩放，默认缩放手势生效区域是在movable-view内																															|1.9.90		|
|scale-min		|number				|0.1		|否		|定义缩放倍数最小值																																																		|1.9.90		|
|scale-max		|number				|10			|否		|定义缩放倍数最大值																																																		|1.9.90		|
|scale-value	|number				|1			|否		|定义缩放倍数，取值范围为 0.1 - 10																																										|1.9.90		|
|animation		|boolean			|true		|否		|是否使用动画。已废弃，不符合布尔属性规范。推荐使用non-animation属性																																																		|2.1.0		|
|non-animation|boolean			|false	|否		|是否使用动画																																																					|2.1.0		|
|@change			|eventhandle	|				|否		|拖动过程中触发的事件，event.detail = {x, y, source}																																	|1.9.90		|
|@scale				|eventhandle	|				|否		|缩放过程中触发的事件，event.detail = {x, y, scale}，x和y字段在2.1.0之后支持																					|1.9.90		|
|@htouchmove	|eventhandle	|				|否		|初次手指触摸后移动为横向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch																|1.9.90		|
|@vtouchmove	|eventhandle	|				|否		|初次手指触摸后移动为纵向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch																|1.9.90		|

@change 事件返回event.detail = {x, y, source}，其中 source 表示产生移动的原因，其值域说明如下：
|值									|说明									|
|:-:								|:-:									|
|touch							|拖动									|
|touch-out-of-bounds|超出移动范围					|
|out-of-bounds			|超出移动范围后的回弹	|
|friction						|惯性									|

### movable-view组件的注意事项
1. movable-view 必须设置width和height属性，不设置默认为10px
2. movable-view 默认为绝对定位，top和left属性为0px