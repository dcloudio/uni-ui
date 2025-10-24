# pop-view 弹层
pop-view，即弹出视图容器。提供弹层能力，通过子组件展示弹层内容，通过mask-view的设置控制遮罩层。

# 组件设计思想
一个vue组件，
- 类headless设计，所有样式都可以被组件使用者自定义
- 通过part-class来自定义子组件样式
- 极高的性能

# 文件位置
组件演示页面源码位置在 /pages/pop-view/pop-view.uvue
示例页面要求包括组件的所有属性和事件的演示。

组件演示页面的自动化测试脚本源码位置在 /pages/pop-view/pop-view.test.js
测试角本要测试组件的所有属性和事件。

pop-view组件的源码位置在：/uni_modules/uni-pop-view/components/uni-pop-view/uni-pop-view.uvue

# 组件规范

pop-view内部有pop和mask2个view。
(其实不考虑menu模式或边框的话，一个view就搞定了，用padding来显示pop，背景色是mask颜色)
没有蒙层，即non-mask为true时，且没有api调用showArrow时，组件内部只有一个pop节点，组件样式都绑定在pop上。

uni-MessageBox可以再出一个组件，做对话框，内部集成pop-view组件。其实就是把showModal的代码开源封装一下，并且showModal自身也应该是这么实现

## pop-view组件支持的属性如下：
|属性名							|属性类型	|默认值	|描述																																																|
|:-:								|:-:			|:-:		|:-:																																																|
|pos								|`"center"|"left"	|"right"|"top"|"bottom"	|"custom"`	|"center"|弹出位置	|
|non-mask						|boolean	|false	|是否关闭蒙层。蒙层代表模态，无法透点，不会滚动穿透。蒙层有默认灰色，也可以配置透明。但透明也是模态	|
|mask-click-close		|boolean	|false	|点击或滑动蒙层是否关闭pop-view																																			|
|auto-hide-duration	|number		|3000		|默认pop不会自动关闭，但设置本属性的时间后会在指定时间后自动关闭。可用于顶部通知、自定义toast				|
|pop-class					|string		|				|通过class自定义pop的样式，直接作用于pop的class上																										|
|pop-style					|string		|				|通过style自定义pop的样式，直接作用于pop的style上																										|
|mask-class					|string		|				|通过class自定义蒙层的样式，直接作用于蒙层的class上																									|
|mask-style					|string		|				|通过style自定义蒙层的样式，直接作用于蒙层的style上																									|
|follow-id					|string		|				|要跟随的元素id																																											|
|follow-side				|`"up"|"down"|"left"|"right"`|down|出现在跟随的元素的那一边|
|follow-offset-y		|number		|0			|出现在跟随元素的位置后再偏移多少的y坐标值																													|
|follow-offset-x		|number		|0			|出现在跟随元素的位置后再偏移多少的x坐标值																													|
|non-follow-arrow		|boolean	|false	|是否关闭显示跟随箭头																																								|
|follow-arrow-class	|string		|				|通过class自定义跟随箭头的样式，直接作用于跟随箭头的class上																					|
|follow-arrow-style	|string		|				|通过style自定义跟随箭头的样式，直接作用于跟随箭头的style上																					|


如果不设蒙层，会有滚动穿透问题。如果要避免滚动穿透，需要配置蒙层，哪怕配置蒙层透明。
只有在顶部弹出悬浮通知栏时，才没有必要设蒙层，其他大多数场景都应该有蒙层。

### 滚动跟随
设置了滚动跟随，且弹层设置non-mask，那么滚动时弹层始终锚定目标元素一起滚。
在高版本浏览器(Chrome125+ 和 safari26+)使用新规范，CSS Anchor Positioning API，https://developer.mozilla.org/en-US/docs/Web/CSS/anchor。
该css里配置好后，浏览器的排版引擎会自动处理，保障滚动跟随。
> TOOD uni-app x的App平台也应该支持这个css。
在不支持CSS Anchor Positioning API的低版本浏览器和App平台，使用手动计算位置来实现跟随。
还需要处理wheel滚轮事件，否则会造成不touch蒙层，直接滚动页面时，Follow偏移。

实践中，推荐组件使用者的使用方式是：
设置follow的同时，弹出蒙层，哪怕蒙层透明。
当用户想要触摸弹层区、滚动背景容器时，或者滚动滚轮时，先被蒙层接收到事件，然后弹层和蒙层先消失，再继续滚动。
一般手机上的弹出菜单都是这样。避免了真正意义上的滚动跟随，因为在缺少CSS Anchor Positioning API的时候往往意味着低性能和抖动。

在支持CSS Anchor Positioning API的高版本浏览器上，尤其是PC大屏上，会有弹层不消失，滚轮让背景容器滚动的需求，此时配置不要蒙层也可以。

需要异常测试，Follow一个不存在的id，要在控制台报错，打console.error

## TODO
参考[Floating UI](https://github.com/floating-ui/)，比目前的uni-pop-view更好的地方，应该参考补充:
1. 支持点一下四周出一圈按钮的效果，比菜单酷。
2. 自动翻转：如果浮动元素在其首选位置被视口或滚动容器剪裁，Floating UI会尝试将其翻转到另一个更合适的侧面。如果翻转后仍然无法完全可见，它会沿着轴线微调位置，使其完全可见。

小程序未测试，尤其是滚动跟随。