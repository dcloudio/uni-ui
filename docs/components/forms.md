---
url : pages/vue/forms/forms
---

## Forms 表单

::: tip 组件名：uni-forms
代码块： `uForms`、`uni-forms-item`

关联组件：`uni-forms-item`、`uni-easyinput`、`uni-data-checkbox`、`uni-group`。
:::

uni-app的内置组件已经有了 `<form>`组件，用于提交表单内容。

然而几乎每个表单都需要做表单验证，为了方便做表单验证，减少重复开发，`uni ui` 又基于 `<form>`组件封装了 `<uni-forms>`组件，内置了表单验证功能。

`<uni-forms>` 提供了 `rules`属性来描述校验规则、`<uni-forms-item>`子组件来包裹具体的表单项，以及给原生或三方组件提供了 `binddata()` 来设置表单值。

每个要校验的表单项，不管input还是checkbox，都必须放在`<uni-forms-item>`组件中，且一个`<uni-forms-item>`组件只能放置一个表单项。

`<uni-forms-item>`组件内部预留了显示error message的区域，默认是在表单项的底部。

另外，`<uni-forms>`组件下面的各个表单项，可以通过`<uni-group>`包裹为不同的分组。同一`<uni-group>`下的不同表单项目将聚拢在一起，同其他group保持垂直间距。`<uni-group>`仅影响视觉效果。

::: warning 注意事项

为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。

- 组件需要依赖 `sass` 插件 ，请自行手动安装
- `focus` 属性在开发者工具从不生效，需要真机测试
- `resetFields` 方法不会重置原生组件和三方组件的值
- 如果配置 `validateTrigger` 属性为 `bind` 且表单域组件使用 `input` 事件触发会耗损部分性能，请谨慎使用
- 如使用过程中有任何问题，或者您对uni-ui有一些好的建议，欢迎加入 uni-ui 交流群：871950839
:::


### 平台差异说明

暂不支持在nvue页面中使用

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法 

`uni-forms` 组件通常用来做表单校验和提交。每一个 `uni-forms-item` 是它的一个表单域组件，用来承载表单具体内容，`uni-forms-item` 中可以嵌套 `uni-easyinput`、`uni-data-checkbox` 和 uni-app内置的表单组件 ，不过 uni-app 的内置表单组件需要通过 `binddata` 或者 `uni-forms` 提供的 `setValue` 方法，将内容与 `uni-forms` 关联，才可完成表单的校验与提交（详见后文`表单校验` 部分）

- 如需 `submit` 事件返回表单值，必须要指定 `name` 属性

```html
<template>
	<view class="">
		<uni-forms :value="formData" ref="form">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item required name="hobby" label="兴趣爱好">
				<uni-data-checkbox multiple v-model="formData.hobby" :localdata="hobby"/>
			</uni-forms-item>
			<uni-forms-item label="年龄" name="age">
				<input type="text" v-model="formData.age" placeholder="请输入年龄" @input="binddata('age',$event.detail.value)" />
			</uni-forms-item>
			<button @click="submitForm">Submit</button>
		</uni-forms>
	</view>
</template>
			 
```

```javascript
export default {
	data() {
		return {
			formData:{
				name:'',
				age:''
			},
			hobby: [{
				text: '足球',
				value: 0
			}, {
				text: '篮球',
				value: 1
			}, {
				text: '游泳',
				value: 2
			}]
		}
	},
	methods: {
		submitForm(form) {
			// 手动提交表单
			this.$refs.form.submit().then((res)=>{
				console.log('表单返回得值：', res)
			})
		}
	}
}

```


## 表单校验

表单校验还可以直接通过 `uniCloud web 控制台` 快速根据 `schema` 自动生成表单维护界面，比如新建页面和编辑页面，自动处理校验规则，更多参考[DB Schema](https://uniapp.dcloud.io/uniCloud/schema)

### 如何使用 

1. `uni-forms` 需要通过 `rules` 属性传入约定的校验规则(下文会详细描述)
2. `uni-forms` 需要绑定value属性，值为表单的key\value 组成的对象
3. `uni-forms-item` 需要设置 `name` 属性为当前字段名，字段为 `String` 类型而非变量
4. 如果使用`uni-easyinput` 和 `uni-data-checkbox` 等关联组件，只需绑定 v-model，无需其他操作
5. 如果使用原生 input、checkbox 或三方组件等，只需要给组件绑定 `binddata` 方法即可触发表单校验，无需绑定事件到 `methods` 中
6. `binddata('name',$event.detail.value,'form')"` 方法接受三个值，
	- 第一个参数传入当前表单组件所在的 name，同当前父组件 `uni-forms-item` 绑定属性 `name` 的值
	- 第二个参数传入需要校验的值，内置组件可以通过 `$event.detail.value` 获取到组件的返回值，自定义组件传入需要校验的值即可
	- 第三个参数传入 `uni-forms` 组件绑定属性 `ref` 的值，通常在多表单的时候需要传入，用来区分表单，如页面中仅有一个 `uni-forms` 可忽略
7. 如果内置 `binddata` 方法无法满足需求，在当前页面的 `methods` 中复写此方法即可，复写此方法需要调用 `uni-forms` 的 `setValue` 来触发表单校验
8. 通过 `button` 按钮调用 `uni-forms` 的 `submit` 事件来校验并提交整个表单

```html
<template>
	<view>
		<uni-forms ref="form" :value="formData" :rules="rules">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="邮箱" name="email" placeholder="请输入年龄">
				<input class="input" v-model="formData.email" type="text" placeholder="请输入用户名" @input="binddata('email',$event.detail.value)" />
			</uni-forms-item>
			<button @click="submit">Submit</button>
		</uni-forms>
	</view>
</template>
			 
```

```javascript
export default {
	data() {
		return {
			formData: {
				name: 'LiMing',
				email: 'dcloud@email.com'
			},
			rules: {
				// 对name字段进行必填验证
				name: {
					rules: [{
							required: true,
							errorMessage: '请输入姓名',
						},
						{
							minLength: 3,
							maxLength: 5,
							errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
						}
					]
				},
				// 对email字段进行必填验证
				email: {
					rules: [{
						format: 'email',
						errorMessage: '请输入正确的邮箱地址',
					}]
				}
			}
		}
	},
	methods: {
		/**
		 * 复写 binddata 方法，如果只是为了校验，无复杂自定义操作，可忽略此方法
		 * @param {String} name 字段名称
		 * @param {String} value 表单域的值
		 */
		// binddata(name,value){
		// 通过 input 事件设置表单指定 name 的值
		//   this.$refs.form.setValue(name, value)
		// },
		// 触发提交表单
		submit() {
			this.$refs.form.submit().then(res=>{
				console.log('表单数据信息：', res);
			}).catch(err =>{
				console.log('表单错误信息：', err);
			})
		}
	}
}
```




### 校验规则

校验规则接受一个 `Object` 类型的值，通过传入不同的规则来表示每个表单域的值该如何校验

对象的 `key` 表示当前表单域的字段名，`value` 为具体的校验规则

以下为 `value` 所包含的内容：

|属性名					| 类型	| 说明																												|
|:-:						| :-:		| :-:																													|
|rules					| Array	| 校验规则，见下方 `rules 属性说明`														|
|validateTrigger| String| 表单校验时机，监听 `binddata()` 时生效	|
|label					| String| 当前表单域的字段中文名，多用于 `errorMessage` 的显示，可不填|


```javascript
rules: {
	// 对name字段进行必填验证
	name: {
		// name 字段的校验规则
		rules:[
			// 校验 name 不能为空
			{
				required: true,
				message: '请填写姓名',
			},
			// 对name字段进行长度验证
			{
				minLength: 3,
				maxLength: 5,
				message: '{label}长度在 {minLength} 到 {maxLength} 个字符',
			}
		],
		label:'姓名'
	}
}

```


### rules 属性说明
每一个验证规则中，可以配置多个属性，下面是一些常见规则属性。实际上这里的规范，与uniCloud的[DB Schema](https://uniapp.dcloud.io/uniCloud/schema?id=validator)规范相同。

|属性名						| 类型		| 默认值|可选值							| 说明	|
|:-:							| :-:			| :-:		|:-:								| :-:	|
|required					| Boolean	| -			|										| 是否必填，配置此参数不会显示输入框左边的必填星号，如需要，请配置`uni-forms-item`组件的的required为true|
|range						| Array		| -			| -									| 数组至少要有一个元素，且数组内的每一个元素都是唯一的。	|
|format						| String	| -			| -									| 内置校验规则，如这些规则无法满足需求，可以使用正则匹配或者自定义规则	|
|pattern					| RegExp	| -			| -									| 正则表达式，如验证邮箱：/^\S+?@\S+?\.\S+?$/ （注意不带引号）,或使用 "^\\S+?@\\S+?\\.\\S+?$"（注意带引号需要使用 `\` 转义）		|
|maximum					| Number	| -			| -									| 校验最大值(大于)|
|minimum					| Number	| -			| -									| 校验最小值(小于)		|
|maxLength				| Number	| -			| -									| 校验数据最大长度		|
|errorMessage			| String	| -			| -									| 校验失败提示信息语，可添加属性占位符，当前表格内属性都可用作占位符	|
|trigger					| String	| blur	| blur/change/submit| 校验触发时机	|
|validateFunction	| Function| -			| -									| 自定义校验规则		|


**format属性值说明**

|属性名		| 说明	  |
|:-:			| :-:		|
|string	| 必须是 string 类型，默认类型|
|number	| 必须是 number 类型|
|boolean	| 必须是 boolean 类型|
|array		| 必须是 array 类型|
|object	| 必须是 object 类型|
|url			| 必须是 url 类型|
|email		| 必须是 email 类型|


### validateFunction 自定义校验规则使用说明
`uni-forms` 的 `rules` 基础规则有时候不能满足项目的所有使用场景，这时候可以使用 `validateFunction` 来自定义校验规则

`validateFunction` 方法返回四个参数 `validateFunction:function(rule,value,data,callback){}` ，当然返回参数名开发者可以自定义：
 - rule :  当前校验字段在 rules 中所对应的校验规则
 - value : 当前校验字段的值
 - data	:  所有校验字段的字段和值的对象
 - callback : 校验完成时的回调，一般无需执行callback，返回true(校验通过)或者false(校验失败)即可 ，如果需要显示不同的 `errMessage`，如果校验不通过需要执行 callback('提示错误信息')，如果校验通过，执行callback()即可


需要注意的是，如果需要使用 `validateFunction` 自定义校验规则,则不能采用 `uni-forms` 的 `rules` 属性来配置校验规则，这时候需要通过`ref`，在`onReady`生命周期调用组件的`setRules`方法绑定验证规则

无法通过props传递变量，是因为微信小程序会过滤掉对象中的方法，导致自定义验证规则无效。



```html
<template>
	<view>
		<uni-forms ref="form">
			<uni-forms-item name="hobby" label="兴趣爱好">
				<checkbox-group @change="binddata('hobby',$event.detail.value)">
					<label class="label-box">
						<checkbox class="transform-scale" value="0" /><text>足球</text>
					</label>
					<label class="label-box">
						<checkbox class="transform-scale" value="1" /><text>篮球</text>
					</label>
					<label class="label-box">
						<checkbox class="transform-scale" value="1" /><text>游泳</text>
					</label>
				</checkbox-group>
			</uni-forms-item>
			<button class="button" @click="submit">校验表单</button>
		</uni-forms>
	</view>
</template>

```

```javascript
export default {
	data() {
		return {
			rules: {
				hobby: {
					rules: [{
						required: true,
						errorMessage: '请选择兴趣',
					},{
						validateFunction:function(rule,value,data,callback){
							if (value.length < 2) {
								callback('请至少勾选两个兴趣爱好')
							}
							return true
						}
					}]
				}
			}
		}
	},
	onReady() {
		// 需要在onReady中设置规则
		this.$refs.form.setRules(this.rules)
	},
	methods: {
		submit(form) {
			this.$refs.form.submit().then(res=>{
				console.log('表单数据信息：', res);
			}).catch(err =>{
				console.log('表单错误信息：', err);
			})
		}
	}
}

```


### validateFunction 异步校验

上面的自定义校验方式为同步校验 ，如果需要异步校验，`validateFunction` 需要返回一个 `Promise` ，校验不通过 执行 `reject(new Error('错误信息'))` 返回对应的错误信息，如果校验通过则直接执行 `resolve()` 即可，在异步校验方法中，不需要使用 `callback` 

```html
<template>
	<view>
		<uni-forms :value="formData" ref="form">
			<uni-forms-item name="age" label="年龄">
				<uni-easyinput v-model="formData.age" type="text" placeholder="请输入年龄" />
			</uni-forms-item>
			<button class="button" @click="submit">校验表单</button>
		</uni-forms>
	</view>
</template>

```

```javascript
export default {
	data() {
		return {
			rules: {
				age: {
					rules: [{
						required: true,
						errorMessage: '请输入年龄',
					},{
						validateFunction: (rule, value, data, callback) => {
							// 异步需要返回 Promise 对象
							return new Promise((resolve, reject) => {
								setTimeout(() => {
									if (value > 10 ) {
										// 通过返回 resolve
										resolve()
									} else {
										// 不通过返回 reject(new Error('错误信息'))
										reject(new Error('年龄必须大于十岁'))
									}
								}, 2000)
							})
						}
					}]
				}
			}
		}
	},
	onReady() {
		// 需要在onReady中设置规则
		this.$refs.form.setRules(this.rules)
	},
	methods: {
		/**
		 * 表单提交
		 * @param {Object} event
		 */
		submit() {
			uni.showLoading()
			this.$refs.form.submit().then(res => {
				uni.hideLoading()
				console.log('表单数据信息：', res);
			}).catch(err => {
				uni.hideLoading()
				console.log('表单错误信息：', err);
			})
		}
	}
}

```


## API

### Forms Props

| 属性名						| 类型				|默认值	 		| 可选值							| 说明|
| :-:							| :-:				|:-:				| :-:								| :-:		|
| v-model/value		| Object		| -					| -									| 表单数据|
| rules						| Object		| -					| -									| 表单校验规则	|
| validateTrigger	| String		| submit		| bind/submit				| 表单校验时机，监听 `binddata()` 时生效|
| labelPosition		| String		| left 			| top/left					| label 位置
| labelWidth			| String/Number	| 75		| -											| label 宽度，单位 px	|
| labelAlign			| String		| left			| left/center/right			| label 居中方式|
| errShowType			| String		| undertext	| undertext/toast/modal	| 表单错误信息提示方式|
| border					| Boolean		|false			|-											|是否显示分格线|

### Forms Events

事件称名			|说明										
:-:					|:-:												
validate		| 任意表单项被校验后触发，返回表单校验信息		

### Forms Methods

| 方法称名				| 说明		|						
| :-:						| :-:		|						
| submit 				| 对整个表单进行校验的方法，会返回一个 promise	|
| setValue			| 设置表单某一项 name 的对应值，通常在 uni-forms-item 和自定表单组件中使用|
| validateField	| 部分表单进行校验		|
| clearValidate	| 移除表单的校验结果	|
| resetFields   | 重置表单|


```javascript
/**
 * 模板 <uni-forms ref="form"></uni-forms>
 */

// 对整个表单进行校验，返回一个 Promise
this.$refs.form.submit().then((res)=>{
	// 成功返回，res 为表单数据
	// 其他逻辑处理 
	// ...
}).catch((err)=>{
	// 表单校验验失败，err 为具体错误信息
	// 其他逻辑处理
	// ...
})

// 设置表单某项对应得值来触发表单校验
// 接受两个参数，第一个参数为表单域的 name ，第二个参数为表单域的值
this.$refs.form.setValue('name','内容')

// 部分表单进行校验，接受一个参数，类型为 String 或 Array ，只校验传入 name 表单域的值
this.$refs.form.validateField(['name', 'email']).then((res)=>{
	// 成功返回，res 为对应表单数据
	// 其他逻辑处理 
	// ...
}).catch((err)=>{
	// 表单校验验失败，err 为具体错误信息
	// 其他逻辑处理
	// ...
})

// 移除表单校验，接受一个参数，类型为 String 或 Array ，只移除传入 name 表单域的值，如果不传入参数，则移除所有
this.$refs.form.clearValidate(['name', 'email'])

```


### FormsItem Props

| 属性名						|类型	|默认值	 		|可选值	|说明|
| :-:							|:-:		|:-:			|:-:		|:-:	|
| name						|String	| -				|-					| 表单域的属性名，在使用校验规则时必填|
| required				|Boolean| false		|					| 左边显示红色"*"号，样式显示不会对校验规则产生效果|
| validateTrigger	|String | submit	| bind/submit		| 表单校验时机，监听 `binddata()` 时生效|
| leftIcon				|String | -				|- 					| label左边的图标，限uni-ui的图标名称|
| iconColor				|String | #606266	|- 					| 左边通过icon配置的图标的颜色|
| label						|String	| -			|-					| 输入框左边的文字提示|
| labelWidth			|Number	| 65		|-					| label的宽度，单位px|
| labelAlign			|String	| left		|left/center/right	| label的文字对齐方式|
| labelposition		|String	| left		|top/left			| label的文字的位置|
| errorMessage		|String	| -			|-					| 显示的错误提示内容，如果为空字符串或者false，则不显示错误信息|
