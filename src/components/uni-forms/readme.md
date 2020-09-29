发现错误？想参与编辑？[在 GitHub 上编辑此页面！](https://github.com/dcloudio/uni-ui/blob/master/src/components/uni-forms/readme.md)
## Forms 表单
> 组件名：``uni-forms``，代码块： `uForms`。

由输入框、单选框、多选框等控件组成，用以收集、校验、提交数据

### 平台差异说明

暂不支持在nvue页面中使用

### 组件使用注意事项

为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些必要的错误使用。

- 组件需要依赖 `sass` 插件 ，请自行手动安装
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


在 ``script`` 中引用组件：

```javascript
import {uniForms,uniFormsItem,uniField,uniGroup} from '@dcloudio/uni-ui'
export default {
    components: {uniForms,uniFormsItem,uniField,uniGroup}
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

`uni-forms` 组件通常用来做表单校验和提交。每一个 `uni-forms-item` 是它的一个表单域组件，用来承载表单具体内容，`uni-forms-item` 中可以嵌套原生 `input`、`radio`、`checkbox`、`textarea`、`switch` 等原生表单组件，通过 `uni-forms` 提供的 `setValue` 方法，将内容与 `uni-forms` 关联，轻松完成表单的校验与提交（详见后文`表单校验` 部分）

- 当`uni-forms-item`内包含 `input`、`textarea`时，其内容与 `uni-field`组件高度相似，可以考虑使用 `uni-field` 代码，减少代码书写，并内置了相关方法，不需要再次调用 `setValue`

```html
<template>
	<uni-forms ref="form" @submit="submitForm">
		<uni-field required label="姓名" name="name" v-model="formData.name" placeholder="请输入姓名" errorMessage="姓名不能为空" />
		<uni-forms-item  label="年龄" name="age"  placeholder="请输入年龄">
			<input class="input" type="text" placeholder="请输入用户名" @input="input('age', $event.detail.value)" />
		<uni-forms-item>
		<button @click="submit">Submit</button>
		<button @click="reset">Reset</button>
	</uni-forms>
</template>
<script>
	export default {
		data() {
			return {}
		},
		methods: {
			input(){
				// 通过 input 事件设置表单指定 name 的值
				this.$refs.form.setValue(name, value)
			},
			// 提交表单
			submitForm(e){
				/**
				 * validate 校验信息
				 * value 表单数据
				 */
				const {validate , value } = e
				console.log('表单数据：', value);
			},
			submit(form) {
				// 手动提交表单
				this.$refs[form].submit()
			},
			// 重置表单
			reset(event) {
				this.$refs.form.resetFields()
				console.log('表单重置：', event);
			}

		}
	}
</script>
			 
```




## 表单校验

在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误， `uni-Forms` 组件提供了表单验证的功能。

只需要通过 form-rules 属性传入约定的验证规则，并将 `uni-filed`、`uni-forms-item` 的 `name` 属性设置为需校验的字段名即可。

### 如何使用 

1. `uni-forms` 需要通过 `form-rules` 属性传入约定的验证规则校验规则下文会详细描述
2. `uni-field`、`uni-forms-item` 需要设置 `name` 属性为当前字段名，字段为 `String` 类型而非变量
3. 通过 `button` 按钮调用 `uni-forms` 的 `submit` 事件来校验并提交整个表单


```html
<template>
	<uni-forms :form-rules="rules" @submit="submitForm" @reset="reset">
		<uni-field label="姓名" name="name" placeholder="请输入姓名" 	/>
		<uni-field label="邮箱" name="email" placeholder="请输入电子邮箱" />
		<button @click="submit">Submit</button>
		<button @click="reset">Reset</button>
	</uni-forms>
</template>
<script>
	export default {
		data() {
			return {
				rules: {
					// 对name字段进行必填验证
					name: {
						rules:[
							{
								required: true,
								message: '请输入姓名',
								trigger: 'blur'
							},
							{
								minLength: 3,
								maxLength: 5,
								message: '姓名长度在 {minLength} 到 {maxLength} 个字符',
								trigger: 'change'
							}
						]
					},
					// 对email字段进行必填验证
					email:{
						rules: [{
							type: 'email',
							message: '请输入正确的邮箱地址',
							trigger: 'change'
						}]
					}
				}
			}
		},
		methods: {
			// 提交表单
			submitForm(e){
				/**
				 * validate 校验信息
				 * value 表单数据
				 */
				const {validate , value } = e
				console.log('表单是否校验通过：', value);
				console.log('表单数据信息：', value);
			},
			// 触发提交表单
			submit() {
				this.$refs.form.submit()
			}
		}
	}
</script>
			 
```




### 校验规则
校验规则中，每个字段可以同时对应多个规则，每个字段的验证规则为一个数组，数组的每个元素对象为其中一条规则

```json
rules: {
	// 对name字段进行必填验证
	name: {
		// name 字段的校验规则
		rules:[
			// 校验 name 不能为空
			{
				required: true,
				message: '请填写姓名',
				trigger: 'blur'
			},
			// 对name字段进行长度验证
			{
				minLength: 3,
				maxLength: 5,
				message: '姓名长度在 {minLength} 到 {maxLength} 个字符',
				trigger: 'change'
			}
		]
	}
}

```

### 校验规则属性
每一个验证规则中，可以配置多个属性，下面是一些常见规则属性

属性名				| 类型			| 默认值	|可选值					| 说明			
---					| ----			|---	|---					| ---	
required			| Boolean		| -		|						|是否必填，配置此参数不会显示输入框左边的必填星号，如需要，请配置`uni-forms-item`、`uni-field`组件的的required为true
range				| Array			| -		| -						|数组至少要有一个元素，且数组内的每一个元素都是唯一的。
format				| String		| - 	| -						|内置校验规则，如这些规则无法满足需求，可以使用正则匹配或者自定义规则
pattern				| String		| - 	| -						|正则表达式，如验证邮箱："/^\S+?@\S+?\.\S+?$/"
maximum				| Number		| -		| -						|校验最大值(大于)
minimum				| Number		| -		| -						|校验最小值(小于)
minLength			| Number		| -		| -						|校验数据最小长度
maxLength			| Number		| -		| -					 	|校验数据最大长度
errorMessage		| String	 	| -		| -					 	|校验失败提示信息语，可添加属性占位符，当前表格内属性都可用作占位符
trigger				| String	 	| blur 	| blur/change/submit 	|校验触发时机


**format属性值说明**

属性名	| 说明	
---		| ---	
string	| 必须是 string 类型，默认类型
number	| 必须是 number 类型
boolean	| 必须是 boolean 类型
array	| 必须是 array 类型
object	| 必须是 object 类型
url		| 必须是 url 类型
email	| 必须是 email 类型

### trigger 属性说明

不管是在规则里还是`uni-forms`、`uni-forms-item`里，都有 `trigger` 属性， `trigger` 属性规定了校验规则的时机 ，它决定了在什么时刻要显示错误信息。

同一个时刻，只会有一个 `trigger` 发生作用，它的作用权重为 

`规则 > uni-forms-item/uni-field > uni-forms `

- 如果规则里配置 `trigger` ，则优先使用规则里的 `trigger` 属性来触发校验规则
- 如果规则里没有配置 `trigger` ，则优先使用 `uni-forms-item/uni-field` 的 `trigger` 属性来触发校验规则
- 如果 `uni-forms-item/uni-field` 组件里没有配置 `trigger` ，则优先使用 `uni-forms` 的 `trigger` 属性来触发校验规则
- 以此类推，如果都没有使用 `trigger` 属性，则会使用 `uni-forms` 的 `trigger` 属性默认值来触发校验规则
- 需要注意的是： 如果手动调用了 `uni-forms` 的 `setValue` 方法，则所有 `trigger` 属性会失效，方法每调用一次，则会触发一次校验 


## API

### Forms Props

属性名				| 类型			|默认值	 | 可选值						| 说明
---					| ----			|---	| ---							| ---	
formRules			| Object		| -		| -								| 表单校验规则，数据格式见**表单校验说明**	
trigger				| String		| blur	| blur/change/submit   			| 校验触发器方式
labelPosition		| String		| left 	| top/left						| label 位置
labelWidth			| String/Number	| 75	| -								| label 宽度，单位 px	
labelAlign			| String		| left	| left/center/right				| label 居中方式
errorMessageType	|String			|bottom	| none/top /bottom/toast/alert	| 错误提示类型

### Forms Events

事件称名			|说明									| 返回参数			
---				|---									| ---				
submit			| 表单提交，返回表单校验是否通过以及表单数据	| Function(callback: Function(object={validate,value}))
validate		| 任意表单项被校验后触发，返回表单校验信息		| Function(callback: Function(array=[{key:value}]))

### Forms Methods

方法称名			| 说明								| 返回参数			
---				| ---								| ---
submit 			| 提交表单，触发 Forms 的 submit 事件	| -
setValue		| 设置表单某一项 name 的对应值，通常在 uni-forms-item 和自定表单组件中使用｜Function(porps: (name,value))
validate 		| 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：第一个参数为表单校验是否通过，第二参数如果通过则返回表单数据，不通过则返回错误信息。若不传入回调函数，则会返回一个 promise	| Function(callback: Function(boolean, object))
validateField	| 部分表单进行校验		| Function(props: array | string, callback: Function(errorMessage: string))
resetFields		| 对整个表单进行重置	| -
clearValidate	| 移除表单的校验结果	| Function(props: array | string)

**Tips**

- forms-item 需要调用 setValue 来触发校验，此时所有 tirgger 属性将失效
- forms-item type 只有 number 一个值 ，只有需要校验的内容为number 时才生效
- 自定义 message 的时候，通过方法的回调返回，custom 同理
- forms 的 submit 方法可以是 callback 如果没有callback 可以使用promise ，callback 返回两个参数，第一个参数表示是否校验成功，第二个根据第一个参数发生变化 ，如果为true 则返回提交信息，如果为false 返回校验错误信息
- 如果 forms item 规则里需要传入 number 类型的化 ，需要在调用 setValue 之前手动格式化，否则返回值始终为 string 类型
- 如果调用 setValue 方法，会马上触发校验，此时tirrger 属性将失效