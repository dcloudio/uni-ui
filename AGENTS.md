# 需求

# 注意事项

- 使用uni-app x框架开发。
- 不引入任何三方依赖。
- 回答问题使用中文。
- 写完代码不要做语法校验，直接读控制台有没有报错就行了。

## 前端框架
uni-app x必须使用vue框架，在本项目中必须使用组合式API，不能使用选项式API。

## Script要求
uni-app x必须使用uts编程语言，这是一种类似TS的语言，但又有一些限制和区别，具体见下：
- 生成的脚本代码使用跨平台的UTS语言。
- UTS语言类似ts，但为了跨平台编译为kotlin、swift等强类型语言，进行了约束。
- UTS是强类型语言，类型要求严格，不能动态转换类型。 与kotlin等强类型语言一样。
- 不能使用类型隐式转换。 尤其是条件语句(if、while、do-while、三元运算符、for 循环的条件部分)必须使用布尔类型作为条件。 当判断变量a是否为空时，不能写成 `if (a)`，或`if (!a)` 要写成 `if (a!=null)`
- 所有变量、方法，都需要先定义后使用，严格注意顺序。
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
- 更多参考: [uts与ts的差异](C:/Users/wa/Documents/HBuilderProjects/unidocs-uni-app-x-zh/docs/uts/uts_diff_ts.md)

## css注意事项
uni-app x使用的css是标准浏览器css的子集，区别见下：
### 布局规范
- 禁用浮动、网格等布局，仅使用flex布局或绝对定位
- 注意uni-app x中flex-direction的默认值为 column

### 选择器规则
- 仅支持基本的类选择器 (.class)和分组选择器，禁止使用其他选择器。
- 类名必须符合 [A-Za-z0-9_-]+ 规范，禁止使用特殊字符(例如 @class)

### Class优先级
- 浏览器的Class的优先级和定义Class的代码位置有关。而App与此无关，App的class优先级是后设覆盖前设。需要以App的优先级方式写代码，并且调整Class的定义顺序来保障浏览器中也符合相同规则。

### 文字样式规则
- 文字内容需放置在组件 <text> 或 <button> 中。 文字类样式(color、font-size)只能设置在 <text> 或 <button> 组件上。 其他组件（如<view>）禁止设置文本相关样式。
- 文字样式不继承。
- 禁用继承相关关键字，例如 inherit 和 unset

### 性能
- 没有动态属性和动态样式的静态组件性能最高，这种写法在App平台会编译为c代码，不经过js或arkts层。
- 静态的内联style，比静态的class性能更高。后者需要在运行时计算样式优先级。所以对于不复用的class，要在style属性中内联。
- 组件样式自定义，用class，子组件样式自定义用external-Class，除非为了向下兼容，否则默认不要通过组件属性来定义样式。

### 层级控制
- z-index 仅对同级兄弟节点生效。
- absolute 固定位与文档流分离，不支持分层覆盖。

### 与web的默认值差异
uni-app x重置了一批css属性默认值，包括在uni-app x编译到web时也重置了。

- box-sizing 默认值是 border-box
- overflow 默认值是 hidden

### 不能使用的css模块
- 不能使用媒体查询

### 长度单位
- 优先使用支持px，次之是rpx，最后是百分比。不使用其他单位。

### at-rules
- 仅支持`@font-face`、`@import`，不使用其他at-rules
- 如需使用`@media`、`@keyframes` 等不支持的at-rules的功能时，改为通过script实现相同逻辑

### css function
- 仅支持 url()、rgb()、rgba()、var()、env()

### 样式作用范围规则
- 不使用css scoped

## vue注意事项
uvue组件的 onMounted 可以获取 UniElement，但不能立即获取元素的宽高等排版信息，此时获取排版信息需要 uni.createSelectorQuery 异步获取。

# 获取日志
可以通过如下cli命令获取HBuilderX的控制台日志，包括编译错误和运行时log：
* app-Android平台：`C:\hbuilderx\hx_dev\cli.exe logcat app-android --project uni-ui-x`
* web平台：`C:\hbuilderx\hx_dev\cli.exe logcat web --browser Chrome --project uni-ui-x`

## uni-app x项目的自动化测试
本项目使用uni-app的自动化测试框架，是基于jest的改造版本。
