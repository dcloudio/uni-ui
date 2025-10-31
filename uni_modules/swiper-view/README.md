# 项目背景
swiper-view，即滑块视图容器，提供子组件滑动轮播显示的能力。

现需要使用uts语言，在uni-app x项目中开发一个swiper-view组件，以及该组件配套的演示页面，以及对演示页面的自动化测试脚本。

# 组件设计思想
一个vue组件，
- 使用headless设计，所有样式都可以被组件使用者自定义
- 通过part-class来自定义子组件样式
- 极高的性能
- 可支持插件，对于不常用且代码体积较大或代码执行性能会拖累常用功能的部分，剥离到插件中
- 保证核心库的高性能、轻量

swiper-list场景，对代码性能要求较高，且不需要circular、autoplay、autoheight、3D卡片。此时应尽可能精简。
但微信小程序的swiper内置了太多功能，要拉齐的话会影响性能。尤其是circular和3D卡片。
参考[Embla Carousel](https://www.embla-carousel.com/get-started/vue/)，核心代码只有几k。其他功能都是插件。不过他的核心库也似乎内置了circular和3D卡片。

# 文件位置
组件演示页面源码位置在 /pages/swiper-view/swiper-view.uvue
示例页面要求包括组件的所有属性和事件的演示。

组件演示页面的自动化测试脚本源码位置在 /pages/swiper-view/swiper-view.test.js
测试角本要测试组件的所有属性和事件。

swiper-view组件的源码位置在：/uni_modules/swiper-view/components/swiper-view/swiper-view.uvue

swiper-view组件支持2个子组件：swiper-slider和swiper-indicator。

swiper-slider组件的源码位置在：/uni_modules/swiper-view/components/swiper-view/swiper-slider.uvue

swiper-indicator组件的源码位置在：/uni_modules/swiper-view/components/swiper-view/swiper-indicator.uvue

目前为了避免和内置组件冲突，组件名称没有叫swiper和swiper-item，后续内置到框架时再替换。

# 组件规范

swiper-view组件支持2个子组件：swiper-slider和swiper-indicator。

每个swiper-slider就是一个滑动视图，swiper-slider也是一个容器组件，相当于view。

swiper-indicator是指示器子组件，用于指示当前处于哪个swiper-slider，以及一共有多少个swiper-slider。

swiper-indicator组件默认自带一个圆点指示器。可通过其属性item-class、item-style、item-active-class、item-active-style，来修改默认指示器的样式。同时，swiper-indicator组件支持slot来更换为自定义的指示器。

以下没有列出的是不要了吗？
indicator-dots 	        boolean	                    false	                  是否显示面板指示点
indicator-color	        string(string.ColorString)	"rgba(0, 0, 0, .3)"	 指示点颜色
indicator-active-color	string(string.ColorString)	"#000000"	           当前选中的指示点颜色
disable-touch	          boolean	                    false	                  是否禁止用户 touch 操作
easing-function	        string	                    default                 指定 swiper 切换缓动动画类型，有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic
current-item-id	        string	                    -                     	当前所在滑块的 item-id ，不能与 current 被同时指定

rebound 要改成 disable-bounce 吗？

swiper-view组件支持的属性如下：
|属性名						|属性类型																				|默认值	|描述																																											|
|:-:							|:-:																						|:-:		|:-:																																											|
|vertical					|boolean																				|false	|滑动方向是否为纵向																																				|
|current					|number																					|0			|当前所在滑块的 index																																			|
|circular					|boolean																				|false	|是否采用衔接滑动																																					|
|autoplay					|boolean																				|false	|是否自动切换																																							|
|interval					|number																					|3000		|自动切换时间间隔																																					|
|duration					|number																					|500		|滑动动画时长（Android平台仅autoplay模式下生效）																					|
|disable-bounce		|boolean																				|false	|控制是否回弹效果																																					|
|previous-margin	|string																					|-			|前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值																		|
|next-margin			|string																					|-			|后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值																		|
|@change					|(event: UniSwiperChangeEvent) => void					|-			|current 改变时会触发 change 事件，event.detail = {current: current, source: source}			|
|@transition			|(event: UniSwiperTransitionEvent) => void			|-			|swiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy}			|
|@animationfinish	|(event: UniSwiperAnimationFinishEvent) => void	|-			|动画结束时会触发 animationfinish 事件，event.detail = {current: current, source: source}	|

swiper-indicator组件支持的属性如下：
|属性名						|属性类型	|默认值	|描述																														|
|:-:							|:-:			|:-:		|:-:																														|
|item-class				|string		|				|通过class自定义默认指示器的样式，直接作用于默认指示器的class上	|
|item-style				|string		|				|通过style自定义默认指示器的样式，直接作用于默认指示器的style上	|
|item-active-class|string		|				|通过class自定义默认指示器的样式，直接作用于默认指示器中高亮元素的class上	|
|item-active-style|string		|				|通过style自定义默认指示器的样式，直接作用于默认指示器中高亮元素的style上	|
如果父级传入了slot，

关于swiper拉动到边缘继续拉，逻辑是这样：
if 设置circular后
	disable-bounce属性无效。优先执行首尾衔接逻辑
else circular不为ture时，即没有首尾衔接，此时
	if disable-bounce不为true时，即不禁用bounce，拉到首尾边缘继续拉，要显示回弹效果
	else disable-bounce为true时，即禁用bounce，拉到首尾边缘继续拉，不再有回弹效果。要把事件向上冒泡，让父容器可以吃到事件，比如父容器可以同向滚动，那么拉到swiper首尾边缘继续拉，父容器就会续接滚动

当组件使用者设置了circular，为了正确、顺滑的显示首尾衔接效果，需要对vue数据在组件内部进行加工，实现数据复用。具体分如下情况：
1. 组件外部传入了2个swiper-slider，A和B。此时前后Margin（previous-margin和next-margin）无效，即前后Margin要求swiper-slider数量大于等于3。
	1.1 当A显示时，实际内部数据为B、A、B。即在开头复制了一份数据B。
	1.2 当B显示时，实际内部数据为A、B、A。即在末尾复制了一份数据A。
2. 组件外部传入3个或更多swiper-slider数据时，例如传入的是A、B、C时，
	2.1 显示到末尾C时，把A移动到C后面，移动过程无动画，指示器不变。数据变成B、C、A。
	2.2 显示到开头A时，检查A前面有没有C，如果没有，就把数据变成 C、A、B
	2.3 显示到中间的B时，数据是正常的A、B、C
因为circular引发的数据变化，是内部的，组件使用者无感，界面上也没有额外的动画。
因circular新增的逻辑，不能影响未设置circular时的代码逻辑。减少对未设置circular时的组件性能影响。
