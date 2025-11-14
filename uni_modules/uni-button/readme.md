# 按钮 button
按钮组件

# 文件路径
项目下有一个 /pages/button/button.uvue 页面，里面演示了button组件的各种用法。

# 设计

button组件是按钮组件。

它分2个版本，一个版本是高性能版本，只有一层text，里面通过slot放置文字。
另一个版本是普通版本，根容器是view，里面放置loading组件、text组件。
这2个版本通过属性loading来切换。

|属性						|类型		|默认值		|必填	|值域													|说明							|
|:-:						|:-:		|:-:			|:-:	|:-:													|:-:																													|
|plain					|boolean|false		|否		|															|按钮是否镂空，背景色透明，边框默认为1px											|
|disabled				|boolean|false		|否		|															|是否禁用																											|
|loading				|boolean|false		|否		|															|文字前是否显示 loading 组件																	|
|loading-style	|string	|					|否		|															|loading 组件的style样式																			|
|size						|string	|"default"|否		|`"default"|"mini"`						|按钮的大小																										|
|type						|string	|"default"|否		|`"default"|"primary"|"warn"`	|按钮的样式类型。default为白色，primary为蓝色，warn为红色			|
|hover-class		|string.ClassString||否	|															|指定按下去的样式类。当 hover-class="none" 时，没有点击态效果	|
|form-type			|string	|					|否		|`"submit"|"reset"`						|用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件	|
|open-type			|string	|					|否		|															|开放能力，根据不同open-type实现不同的效果，暂不实现					|

# 边框和背景色策略
- 当属性plain为false时，border-width默认为0.5px，border-color为默认为灰色，background-color为属性type的值所约定的颜色。
- 当属性plain为true时，border-width默认为1px，border-color为属性type的值所约定的颜色，background-color为透明。

# disabled需求描述
设置disabled为true时，按钮不响应事件，按钮整体蒙灰。

# loading属性需求
loading组件为uni-app x内置组件，直接使用即可。

# 样式优先级
用户自定义的style和class，样式优先级高于通过属性设置的plain、size、type等属性。