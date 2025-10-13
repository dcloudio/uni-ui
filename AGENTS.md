# 项目背景
项目下有一个 /pages/rate/rate.uvue 页面，里面演示了rate组件的各种用法。

# 开发目标

rate组件是投票评分使用的组件。它使用字符实现，通过修改字体的样式，实现各种效果。

它分2个版本，一个版本是高性能版本，只有一层，不显示灰星，仅显示亮星，亮星不支持小数点，不能点击。适于长列表中显示。
另一个版本是普通版本，由背景灰星和前景亮星叠加而成，支持小程序点，支持点击。

本组件支持v-model绑定响应式数据。

rate组件有如下属性：
- value
	值域为大于等于0、小于等于5的数字
- full
	是否显示背景灰星
- readonly
	是否响应点击变化
- plain
	在设置plain属性时，会对未选中的星星呈现镂空效果
- star-class
	星星的样式
- star-style
	星星的样式
- star-active-class
	选中的星星的样式
- star-active-style
	选中的星星的样式

rate组件有onChange事件，事件回调中会给出点击触发的新评分值。

# 改造注意事项

使用uni-app x框架开发。

不引入任何三方依赖。

## 前端框架
uni-app x必须使用vue框架，在本项目中必须使用组合式API，不能使用选项式API。

## Script要求
uni-app x必须使用uts编程语言，这是一种类似TS的语言，但又有一些限制和区别，具体见下：
- 生成的脚本代码使用跨平台的UTS语言。
- UTS语言类似ts，但为了跨平台编译为kotlin、swift等强类型语言，进行了约束。
- UTS是强类型语言，类型要求严格，不能动态转换类型。 与kotlin等强类型语言一样。
- 不能使用类型隐式转换。 尤其是条件语句(if、while、do-while、三元运算符、for 循环的条件部分)必须使用布尔类型作为条件。 当判断变量a是否为空时，不能写成 `if (a)`，或`if (!a)` 要写成 `if (a!=null)`
- 可为null和不可为null的类型需要严格区分，使用 `|null` 或 `?` 来定义可为空。
- 可为null的数据类型在使用其属性或方法时，需要判断不为null，或者使用`?。`安全调用。 谨慎使用 `!。` 断言。
- any类型的变量在使用其属性或方法时，需要as为正确的相容类型。
- 不支持object类型，使用UTSJSONObject类型替代。
- 不支持undefined，变量使用前必须赋值。
- 对象类型定义使用type而不是interface。 interface是接口，不用于对象类型定义。
- 变量和常量定义使用let和const，不使用var。
- 不使用 JSX 表达式。
- 不使用 with 语句。
- 不使用ts的结构化类型系统。 使用名义类型系统，强调类型名称和继承关系以确保类型安全。
- 不使用 is 运算符。 使用 instanceof 和 as 进行类型保护。
- 不使用any。
- 尽量不使用 === 和!==，使用 == 和!= 替代。
- 不使用js的原型链特性。
- 更多参考: [uts与ts的差异](https://doc。dcloud。net。cn/uni-app-x/uts/uts_diff_ts。html)

## css注意事项
uni-app x使用的css是标准浏览器css的子集，区别见下：
### 布局规范
- 禁用浮动、网格等布局，仅使用flex布局或绝对定位
- flex布局默认方向为垂直(通过 flex-direction:column 实现)

### 选择器规则
- 仅支持基本的类选择器 (.class)，禁止使用其他选择器。
- 类名必须符合 [A-Za-z0-9_-]+ 规范，禁止使用特殊字符(例如 @class)

### 文字样式规则
- 文字内容需放置在组件 <text> 或 <button> 中。 文字类样式(color、font-size)只能设置在 <text> 或 <button> 组件上。 其他组件（如<view>）禁止设置文本相关样式。
- 文字样式不继承。
- 禁用继承相关关键字，例如 inherit 和 unset

### 层级控制
- z-index 仅对同级兄弟节点生效。 
- absolute 固定位与文档流分离，不支持分层覆盖。

### 不能使用的css模块
- 不能使用媒体查询

### 长度单位
- 仅支持px

### at-rules
- 仅支持`@font-face`、`@import`，不使用其他at-rules
- 如需使用`@media`、`@keyframes` 等不支持的at-rules的功能时，改为通过script实现相同逻辑

### css function
- 仅支持 url()、rgb()、rgba()、var()、env()

### 样式作用范围规则
- 不使用css scoped

## uni-app x项目的自动化测试
本项目使用uni-app的自动化测试框架，是基于jest的改造版本。
本项目下有一个自动化测试的示例：
这个js文件`/pages/badge/badge.test.js`，就是页面`pages/badge/badge.uvue`的自动化测试脚本。

需要为rate.uvue也生成一个`rate.test.js`，进行自动化测试。

