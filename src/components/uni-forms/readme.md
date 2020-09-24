发现错误？想参与编辑？[在 GitHub 上编辑此页面！](https://github.com/dcloudio/uni-ui/blob/master/src/components/uni-forms/readme.md)
## Forms 表单
> 组件名：``uni-forms``，代码块： `uForms`。

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据


### 平台差异说明

如无特殊说明，则全平台支持

### 组件使用注意事项

为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些必要的错误使用。

- 组件需要依赖 `sass` 插件 ，请自行手动安装
- 目前可联动组件只有 `uni-filed`

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
import {uniForms,uniField,uniGroup} from '@dcloudio/uni-ui'
export default {
    components: {uniForms,uniField,uniGroup}
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

```html
<uni-forms ref="form" @submit="submit" @reset="reset">
	<uni-field  label="姓名" name="name" v-model="formData.name" placeholder="请输入姓名" errorMessage="姓名不能为空" />
	<uni-group title="基本信息">
		<uni-field type="number" required label="年龄" name="age" v-model="formData.age" placeholder="请输入年龄" />
	</uni-group>
	<uni-group title="详细信息">
		<uni-field type="text" label="邮箱" name="email" v-model="formData.email" placeholder="请输入电子邮箱" />
		<uni-field type="number" label="体重" name="size" v-model="formData.size" placeholder="请输入年龄" />
	</uni-group>

	<button form-type="submit">Submit</button>
	<button form-type="reset">Reset</button>
</uni-forms>
<script>
	export default {
		data() {
			return {
				formData: {
					name: '',
					age: '',
					email: '',
					size: ''
				}
			}
		},
		methods: {
			// 提交表单
			submit(event) {
				console.log('提交表单：',event)
			},
			// 重置表单
			reset(event) {
				console.log('表单重置：', event);
			}

		}
	}
</script>
			 
```



### uni-forms 属性说明
列表组件的父组件，所有列表组件都需要放到 uni-forms 中，才能正常显示

**uniForms 属性说明：**

属性名			| 类型			|默认值	 | 可选值						| 说明
---				| ----			|---	| ---							| ---	
formRules		| Object		| -		| -								| 表单校验规则	
trigger			| String		| blur	| blur/change/submit   			| 校验触发器方式
labelPosition	| String		| left 	| top/left						| label 位置
labelWidth		| String/Number	| 75	| -								| label 宽度，单位 px	
labelAlign		| String		| left	| left/center/right				| label 居中方式
errorMessageType|String			|bottom	| none/top /bottom/toast/alert	| 错误提示类型

### 表单校验
在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误， `uni-Forms` 组件提供了表单验证的功能。

只需要通过 form-rules 属性传入约定的验证规则，并将 uni-filed 的 name 属性设置为需校验的字段名即可。

#### 如何使用 

1. `uni-forms` 需要通过 `form-rules` 属性传入约定的验证规则校验规则下文会详细描述
2. `uni-field` 需要设置 `name` 属性为当前字段名，字段为 `String` 类型而非变量
3. `uni-forms` 具备原生 `form` 的 `submit` 事件，点击表单中 `formType` 为 `submit` 的 `<button>` 组件时，将会将表单中的 `value` 值进行提交,并通过 `uni-forms` 的 `@submit` 事件返回对应的校验信息以及提交值
4. `@reset` 事件触发方式与`@submit` 事件同理，不同的是，`@reset` 事件会重置表单所有的值，并清除校验信息


```html

<uni-forms :form-rules="rules" @submit="submit" @reset="reset">
	<uni-field label="姓名" name="name"  v-model="formData.name"  placeholder="请输入姓名" 	/>
	<uni-field label="邮箱" name="email" v-model="formData.email" placeholder="请输入电子邮箱" />
	<button form-type="submit">Submit</button>
	<button form-type="reset">Reset</button>
</uni-forms>
<script>
	export default {
		data() {
			return {
				formData: {
					name: '',
					age: '',
					email: '',
					size: ''
				},
				rules: {
					// 对name字段进行必填验证
					name: [
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
					],
					// 对email字段进行必填验证
					email: [{
						type: 'email',
						message: '请输入正确的邮箱地址',
						trigger: 'change'
					}]
				}
			}
		},
		methods: {
			// 提交表单
			submit(event) {
				console.log('提交表单：',event)
			},
			// 重置表单
			reset(event) {
				console.log('表单重置：', event);
			}

		}
	}
</script>
			 
```

#### 校验规则
校验规则中，每个字段可以同时对应多个规则，每个字段的验证规则为一个数组，数组的每个元素对象为其中一条规则

```json
rules: {
	name: [
		// 对name字段进行必填验证
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

```

#### 校验规则属性
每一个验证规则中，可以配置多个属性，下面是一些常见规则属性

属性名				|类型		|	说明																									
---					|----		|	---	
required			|Boolean	|	是否必填
format				|String		| 	内置校验规则，如这些规则无法满足需求，可以使用正则匹配或者自定义规则
pattern				|String		| 	
maximum				|Number		|	校验最大值(大于)
exclusiveMaximum	|Boolean	|	是否排除 maximum
minimum				|Number		|	校验最小值(小于)
exclusiveMinimum	|Boolean	|	是否排除 minimum
minLength			|Number		|	校验最小长度
maxLength			|Number		|	校验最大长度
message				|String	 	|	校验失败提示信息语，可添加属性占位符，见下文

**format属性值说明**





**message属性占位符**



### 插件预览地址

[]()
