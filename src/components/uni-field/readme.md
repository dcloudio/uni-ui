### Field 数字角标

字段组件一般和表单控件 uni-form 配合使用，也可以单独使用，用于实现输入与校验，包括 "text" 和 "textarea" 类型，组件名：``uni-field``，代码块： uField。

### 平台差异说明

暂不支持在nvue页面中使用

### 组件使用注意事项

为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些必要的错误使用。

- 组件需要依赖 `sass` 插件 ，请自行手动安装
- 组件校验需要依赖 `uni-form` 组件的rule，组件内的校验规则会覆盖`uni-form` 的校验规则
- 组件提供了右侧按钮的插槽，可传入 ``slot="right"``的标签或组件，例如发送验证码的按钮:``<button v-if="true" type="primary" slot="right" size="mini">发送验证码</button>``
- 在 `HBuilderX` 低版本中，可能会出现组件显示 `undefined` 的问题，请升级最新的 `HBuilderX` 或者 `cli`
- 如使用过程中有任何问题，或者您对uni-ui有一些好的建议，欢迎加入 uni-ui 交流群：871950839

### 使用方式

#### 方式1 (推荐)

`HBuilderX 2.5.5`起支持 `easycom` 组件模式。在使用 `uni-ui` 的时候，只要[`uni-ui` 组件](https://ext.dcloud.net.cn/plugin?id=55) 安装在项目的 `components` 目录下,并符合 `components/组件名称/组件名称.vue` 目录结构。就可以不用引用、注册，直接在页面中使用 `uni-ui` 组件

`easycom` 组件模式的好处在于不管 `components` 目录下安装了多少组件，`easycom` 打包后会自动剔除没有使用的组件，对组件库的使用尤为友好,组件库批量安装，随意使用，自动按需打包。 关于 `easycom` 更详细内容 [参考文档](https://uniapp.dcloud.io/collocation/pages?id=easycom)

#### 方式2（vue-cli）

**初始化项目**

如果是使用 `HBuiderX` 创建的项目，需先执行以下命令初始化：

```
npm init -y
```

**安装 uni-ui**

```
npm install @dcloudio/uni-ui -D
```

在 ``script`` 中引用组件

```javascript
import uniField from '@/components/uni-field/uni-field.vue'
export default {
    components: {uniField}
}
```

#### 方式3（vue-cli + easycom）

使用 `方式2` 安装好 `uni-ui` 之后，需要配置 `easycom` 规则，让 `npm` 安装的组件支持  `easycom`

打开项目根目录下的 `pages.json` 并添加 `easycom` 节点：

```javascript
// pages.json

{
	"easycom": {
		"autoscan": true,
		"custom": {
			// uni-ui 规则如下配置
			"^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
		}
	},
	
	// 其他内容
	pages:[
		// ...
	]
}

```

### 使用方式

在 ``template`` 中使用组件

```html
<uni-field
  v-model="name"
  label="姓名"
  placeholder="请填写姓名"
  :error-message="errorMessage"
/>
<uni-field
  v-model="mobile"
  label="手机号"
  label-position="left"
  placeholder="请填写手机号"
  :error-message="errorMessage"
  type="text"
  :clearable="true"
>
  <button v-if="true" type="primary" slot="right" size="mini">发送验证码</button>
</uni-field>
<uni-field
  v-model="weixin"
  label="微信号"
  label-position="left"
  placeholder="请填写微信号"
  :required="false"
  :focus="true"
  type="text"
  :clearable="true"
  :password="false"
  :disabled="false"
  confirmType="good"
  :error-message="errorMessage"
/>
```

### 属性说明

属性名|类型|默认值|说明
:-|:-|:-|:-
type|String|            输入框的类型（默认text）|
required|Boolean|        是否必填，左边您显示红色"*"号（默认false）|
left-icon|String|        label左边的图标，限uni-ui的图标名称|
icon-color|String|       左边通过icon配置的图标的颜色（默认#606266）|
right-icon|Boolean|       输入框右边的图标名称，限uni-ui的图标名称（默认false）|
label|String|             输入框左边的文字提示|
label-width|Number|        label的宽度，单位px（默认65）|
label-align|String|        label的文字对齐方式（默认left）|
label-positio|String|         label的文字的位置（默认left）|
clearable|Boolean|            是否显示右侧清空内容的图标控件(输入框有内容，且获得焦点时显示)，点击可清空输入框内容（默认true）|
placeholder|String|         输入框的提示文字|
placeholder-style|String|                placeholder的样式(内联样式，字符串)，如color: #ddd"|
password|Boolean|           是否密码输入方式(用点替换文字)，type为text时有效（默认alse）|
focus|Boolean|              是否自动获得焦点（默认false）|
disabled|Boolean|        是否不可输入（默认false）|
maxlength|Number|        最大输入长度，设置为 -1 的时候不限制最大长度（默认140）|
confirm-type|String|         设置键盘右下角按钮的文字，仅在type="text"时生效（默认one）|
error-message|String|        显示的错误提示内容，如果为空字符串或者false，则不显示错误息|
clear-size|Number|       清除图标的大小，单位px（默认15）|
trim|Boolean|               是否自动去除两端的空格|
name|String|        表单域的属性名，在使用校验规则时必填|
rules|Array|       单行表单验证规则，接受一个数组|
input-border|Boolean|         是否显示input输入框的边框（默认false）|
border-bottom|Boolean|       是否显示field的下边框（默认true）|
border-top|Boolean|        是否显示field的上边框（默认false）|
auto-height|Boolean|         是否自动增高输入区域，type为textarea时有效（默认true）|

### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/field/field](https://uniapp.dcloud.io/h5/pages/extUI/field/field)
