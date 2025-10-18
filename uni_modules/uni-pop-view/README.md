# pop-view 弹层
pop-view，即弹出视图容器。提供弹层能力，通过子组件展示弹层内容，通过mask-view的设置控制遮罩层。

# 组件设计思想
一个vue组件，
- 类headless设计，所有样式都可以被组件使用者自定义
- 通过part-class来自定义子组件样式
- 极高的性能

参考[headlessui](https://headlessui.com/v1/vue/popover)

# 文件位置
组件演示页面源码位置在 /pages/pop-view/pop-view.uvue
示例页面要求包括组件的所有属性和事件的演示。

组件演示页面的自动化测试脚本源码位置在 /pages/pop-view/pop-view.test.js
测试角本要测试组件的所有属性和事件。

pop-view组件的源码位置在：/uni_modules/uni-pop-view/components/uni-pop-view/uni-pop-view.uvue

# 组件规范

pop-view内部有pop和mask2个view。
(其实不考虑menu模式或边框的话，一个view就搞定了，用padding来显示pop，背景色是mask颜色)
没有蒙层，即show-mask为false时，且没有api调用showArrow时，组件内部只有一个pop节点，组件样式都绑定在pop上。

uni-MessageBox可以再出一个组件，做对话框，内部集成pop-view组件。其实就是把showModal的代码开源封装一下，并且showModal自身也应该是这么实现


## pop-view组件支持的属性如下：
|属性名							|属性类型	|默认值	|描述																																						|
|:-:								|:-:			|:-:		|:-:																																						|
|pos								|`"center"|"left"	|"right"|"top"|"bottom"	|"custom"`	|"center"|弹出位置	|
|show-mask					|boolean	|false	|是否显示蒙层。蒙层代表模态，无法透点。蒙层有默认灰色，也可以配置透明。但透明也是模态	|
|mask-click-close		|boolean	|false	|点击蒙层是否关闭pop-view																													|
|auto-hide-duration	|number		|3000		|默认pop不会自动关闭，但设置本属性的时间后会在指定时间后自动关闭。可用于顶部通知				|
|pop-class					|string		|				|通过class自定义pop的样式，直接作用于pop的class上												|
|pop-style					|string		|				|通过style自定义pop的样式，直接作用于pop的style上												|
|mask-class					|string		|				|通过class自定义蒙层的样式，直接作用于蒙层的class上							|
|mask-style					|string		|				|通过style自定义蒙层的样式，直接作用于蒙层的style上							|
|menu-arrow-class		|string		|				|通过class自定义菜单箭头的样式，直接作用于菜单箭头的class上							|
|menu-arrow-style		|string		|				|通过style自定义菜单箭头的样式，直接作用于菜单箭头的style上							|

## pop-view组件的API
.followElement(ELement,side="up|down|left|right",offset-x,offset-y,showArrow)
通过本方法，设置要把弹出pop绑定在哪个目标元素上，出现在目标元素的那一侧，偏移x、y坐标，是否显示箭头指向目标元素。
