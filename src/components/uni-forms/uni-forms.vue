<template>
	<view class="uni-form">
		<form @submit="submitForm" @reset="resetForm">
			<slot></slot>
		</form>
	</view>
</template>

<script>
	import Validator from './schema-validator.js'
	export default {
		name: 'uniForms',
		props: {
			// 表单校验规则
			formRules: {
				type: Object,
				default () {
					return {}
				}
			},
			// label 位置，可选值 top/left
			labelPosition: {
				type: String,
				default: 'left'
			},
			// label 宽度，单位 px
			labelWidth: {
				type: [String, Number],
				default: 120
			},
			// label 居中方式，可选值 left/center/right
			labelAlign: {
				type: String,
				default: 'left'
			},
			// 是否显示必须字段旁边的星号
			hideRequiredAsterisk: {
				type: Boolean,
				default: false
			},
			// 错误提示类型 可选值 none/ top / bottom /toast / alert
			errorMessageType: {
				type: String,
				default: 'bottom'
			}
		},
		provide() {
			return {
				form: this
			}
		},
		data() {
			return {
				rules: {}
			};
		},
		watch: {
			formRules(newVal) {
				this.init(newVal)
			}
		},
		created() {
			this.childrens = []
			this.init(this.formRules)
		},
		methods: {
			init(formRules) {
				if (Object.keys(formRules).length > 0) {
					this.validator = new Validator(formRules)
				}
			},
			// 表单提交
			submitForm(event) {
				const {
					value
				} = event.detail

				console.log(event)

				let example = null
				// 未开启校验规则
				if (!this.validator) {
					this.$emit('submit', {
						value
					})
					return
				}
				for (let i in value) {
					example = this.childrens.find(child => child.name === i)
					// 校验 number 的类型
					if (example.type === 'number') {
						value[i] = value[i] === '' ? value[i] : Number(value[i])
					}
				}
				const result = this.validator.validateAll(value)
				result.forEach(item => {
					example = this.childrens.find(child => child.name === item.key)
					example.errorMessage = item.message
				})

				this.$emit('submit', {
					value,
					validate: result
				})
			},
			// 表单重置
			resetForm(event) {
				this.childrens.forEach(item => {
					item.errorMessage = ''
					item.val = ''
				})
				this.$emit('reset', event)
			},

			/**
			 * 触发表单校验，通过 @validate 获取
			 * @param {Object} validate
			 */
			validateCheck(validate) {
				this.$emit('validate', validate)
			},

			/**
			 * 校验所有或者部分表单
			 */
			validateAll(invalidFields) {
				if (!this.validator) return
				this.resetForm()
				const result = this.validator.validateAll(invalidFields)
				let example = null
				result.forEach(item => {
					example = this.childrens.find(child => child.name === item.key)
					example.errorMessage = item.message
				})

				typeof callback === 'function' && callback(!result, invalidFields)

				this.$emit('submit', {
					value: invalidFields,
					validate: result
				})
			},

			/**
			 * 校验表单
			 * 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise	Function(callback: Function(boolean, object))
			 */
			validate(callback) {
				let invalidFields = {}
				this.childrens.forEach(item => {
					item.parentVal((val) => {
						invalidFields = Object.assign({}, invalidFields, val)
					})
				})
				this.validateAll(invalidFields)
			},

			/**
			 * 部分表单校验
			 * @param {Object} props
			 * @param {Object} cb
			 */
			validateField(props) {
				props = [].concat(props);
				let invalidFields = {}
				this.childrens.forEach(item => {
					item.parentVal((val, name) => {
						if (props.indexOf(name) !== -1) {
							invalidFields = Object.assign({}, invalidFields, val)
						}
					})
				})
				this.validateAll(invalidFields)
			},

			/**
			 * 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
			 */
			resetFields() {
				this.resetForm()
			},

			/**
			 * 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
			 */
			clearValidate(props) {
				props = [].concat(props);
				this.childrens.forEach(item => {
					if (props.length === 0) {
						item.errorMessage = ''
					} else {
						if (props.indexOf(item.name) !== -1) {
							item.errorMessage = ''
						}
					}

				})
			}

		}
	}
</script>

<style lang="scss">
	.uni-form {
		// border: 1px red solid;
		background-color: #FFFCF7;
	}
</style>
