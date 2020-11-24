### Field 输入框

输入框组件一般和表单控件 uni-form 配合使用，也可以单独使用，用于实现输入与校验，包括 "text" 和 "textarea" 类型，组件名：``uni-field``，代码块： uField。

### 平台差异说明

暂不支持在nvue页面中使用

### 组件使用注意事项

为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。

- 组件需要依赖 `sass` 插件 ，请自行手动安装
- 组件校验需要依赖 `uni-forms` 组件的`forms-rule`属性,`uni-field` 组件暂时不支持单独校验内容
- 组件提供了右侧按钮的插槽，可传入 ``slot="right"``的标签或组件，例如发送验证码的按钮:``<button v-if="true" type="primary" slot="right" size="mini">发送验证码</button>``
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

### 基本用法

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

### uni-field 属性说明

**uni-field 属性说明**

属性名				|类型	|默认值		|说明
:-:					|:-:	|:-:			|:-:
type				|String	| text		| 输入框的类型
required			|Boolean| false		| 是否必填，左边您显示红色"*"号
left-icon			|String	| -			| label左边的图标，限uni-ui的图标名称
icon-color			|String	| #606266	| 左边通过icon配置的图标的颜色
right-icon			|Boolean| false		| 输入框右边的图标名称，限uni-ui的图标名称
label				|String	| -			| 输入框左边的文字提示
label-width			|Number	| 65		| label的宽度，单位px
label-align			|String	| left		| label的文字对齐方式
label-position		|String	| left		| label的文字的位置
clearable			|Boolean| true		| 是否显示右侧清空内容的图标控件(输入框有内容，且获得焦点时显示)，点击可清空输入框内容
placeholder			|String	| -			| 输入框的提示文字
placeholder-style	|String	| -			| placeholder的样式(内联样式，字符串)，如color: #ddd"
password			|Boolean| false		| 是否密码输入方式(用点替换文字)，type为text时有效
focus				|Boolean| false		| 是否自动获得焦点
disabled			|Boolean| false		| 是否不可输入
maxlength			|Number	| 140		| 最大输入长度，设置为 -1 的时候不限制最大长度
confirm-type		|String	| done		| 设置键盘右下角按钮的文字，仅在type="text"时生效
clear-size			|Number	| 15		| 清除图标的大小，单位px
trim				|Boolean| true		| 是否自动去除两端的空格
name				|String	| -			| 表单域的属性名，在使用校验规则时必填
input-border		|Boolean| false		| 是否显示input输入框的边框
border-bottom		|Boolean| true		| 是否显示field的下边框
border-top			|Boolean| false		| 是否显示field的上边框
auto-height			|Boolean| true		| 是否自动增高输入区域，type为textarea时有效

**uni-field 事件说明**

事件称名			|说明											| 返回参数			
:-:				|:-:											| :-:		
input			| 输入框内容发生变化时触发							| value 输入的值
focus			| 输入框获得焦点时触发								| event 获取焦点的事件对象
blur			| 输入框失去焦点时触发								| event 失去焦点的事件对象
confirm			| 点击完成按钮时触发								| value 输入的值
right-icon-click| 通过right-icon生成的图标被点击时触发				| -
click			| 输入框被点击或者通过right-icon生成的图标被点击时触发	| -

**插槽**

名称	 		|	说明					
:-:			|	:-:						
leftIcon	|	左侧插槽
right		|	右侧插槽



