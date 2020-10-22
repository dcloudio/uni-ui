<template>
	<view class="uni-forms-item" :class="{'uni-forms-item-custom':custom}" :style="[fieldStyle]">
		<template v-if="!custom">
			<view class="uni-forms-item-inner" :class="[ 'uni-label-postion-' + labelPos]">
				<view :class="errorTop ? 'uni-error-in-label' : ''">
					<view class="uni-forms-item-label" :class="[required ? 'uni-required' : '']" :style="{
			            justifyContent: justifyContent,
			            width: labelWid +'px',
			            marginBottom: labelMarginBottom,
			        }">
						<view class="uni-icon-wrap" v-if="leftIcon">
							<uni-icons size="16" :type="leftIcon" :color="iconColor" />
						</view>
						<slot name="leftIcon"></slot>
						<text class="uni-label-text" :class="[leftIcon ? 'uni-label-left-gap' : '']">{{ label }}</text>
					</view>
					<view v-if="errorTop && showMessage" class="uni-error-message" :style="{paddingLeft: '4px'}">{{ showMsg === 'undertext' ? msg:'' }}</view>
				</view>
				<view class="fild-body">
					<slot></slot>
				</view>
			</view>
			<view v-if="errorBottom && showMessage" class="uni-error-message" :style="{
				paddingLeft: Number(labelWid) + 4 + 'px'
			}">{{ showMsg === 'undertext' ? msg:'' }}</view>
		</template>
		<template v-else>
			<slot></slot>
		</template>
	</view>
</template>

<script>
	/**
	 * Field 输入框
	 * @description 此组件可以实现表单的输入与校验，包括 "text" 和 "textarea" 类型。
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=21001
	 * @property {Boolean} 	required 			是否必填，左边显示红色"*"号（默认false）
	 * @property {String} validateTrigger = [bind|submit]	校验触发器方式 默认 submit 可选
	 * 	@value bind 	发生变化时触发
	 * 	@value submit 	提交时触发
	 * @property {String } 	leftIcon 			label左边的图标，限uni-ui的图标名称
	 * @property {String } 	iconColor 			左边通过icon配置的图标的颜色（默认#606266）
	 * @property {String } 	label 				输入框左边的文字提示
	 * @property {Number } 	labelWidth 			label的宽度，单位px（默认65）
	 * @property {String } 	labelAlign = [left|center|right] label的文字对齐方式（默认left）
	 * 	@value left		label 左侧显示
	 * 	@value center	label 居中
	 * 	@value right	label 右侧对齐
	 * @property {String } 	labelPosition = [top|left] label的文字的位置（默认left）
	 * 	@value top	顶部显示 label
	 * 	@value left	左侧显示 label
	 * @property {String } 	errorMessage 		显示的错误提示内容，如果为空字符串或者false，则不显示错误信息
	 * @property {String } 	name 				表单域的属性名，在使用校验规则时必填
	 */
	export default {
		name: "uniFormsItem",
		props: {
			// 自定义内容
			custom: {
				type: Boolean,
				default: false
			},
			// 是否显示报错信息
			showMessage: {
				type: Boolean,
				default: true
			},
			name: String,
			required: Boolean,
			validateTrigger: {
				type: String,
				default: ''
			},
			leftIcon: String,
			iconColor: {
				type: String,
				default: '#606266'
			},
			label: String,
			// 左边标题的宽度单位px
			labelWidth: {
				type: [Number, String],
				default: ''
			},
			// 对齐方式，left|center|right
			labelAlign: {
				type: String,
				default: ''
			},
			// lable的位置，可选为 left-左边，top-上边
			labelPosition: {
				type: String,
				default: ''
			},
			errorMessage: {
				type: [String, Boolean],
				default: ''
			}
		},
		data() {
			return {
				errorTop: false,
				errorBottom: false,
				labelMarginBottom: '',
				errorWidth: '',
				errMsg: '',
				val: '',
				labelPos: '',
				labelWid: '',
				labelAli: '',
				showMsg: 'undertext'
			};
		},
		computed: {
			msg() {
				return this.errorMessage || this.errMsg;
			},
			fieldStyle() {
				let style = {}
				if (this.labelPos == 'top') {
					style.padding = '10px 14px'
					this.labelMarginBottom = '6px'
				}
				if (this.labelPos == 'left' && this.msg !== false && this.msg != '') {
					style.paddingBottom = '0px'
					this.errorBottom = true
					this.errorTop = false
				} else if (this.labelPos == 'top' && this.msg !== false && this.msg != '') {
					this.errorBottom = false
					this.errorTop = true
				} else {
					// style.paddingBottom = ''
					this.errorTop = false
					this.errorBottom = false
				}
				return style
			},

			// uni不支持在computed中写style.justifyContent = 'center'的形式，故用此方法
			justifyContent() {
				if (this.labelAli == 'left') return 'flex-start';
				if (this.labelAli == 'center') return 'center';
				if (this.labelAli == 'right') return 'flex-end';
			}

		},
		watch: {
			validateTrigger(trigger) {
				this.formTrigger = trigger
			}
		},
		created() {
			this.form = this.getForm()
			this.formRules = []
			this.formTrigger = this.validateTrigger
			if (this.form) {
				this.form.childrens.push(this)
			}
			this.init()
		},
		destroyed() {
			if (this.name) {
				delete this.form.formData[this.name]
			}
			if (this.form) {
				this.form.childrens.forEach((item, index) => {
					if (item === this) {
						this.form.childrens.splice(index, 1)
					}
				})
			}
		},
		methods: {
			init() {
				if (this.form) {
					this.labelPos = this.labelPosition ? this.labelPosition : this.form.labelPosition
					this.labelWid = this.labelWidth ? this.labelWidth : this.form.labelWidth
					this.labelAli = this.labelAlign ? this.labelAlign : this.form.labelAlign
					this.showMsg = this.form.errShowType
					if (this.form.formRules) {
						this.formRules = this.form.formRules[this.name] || {}
					}
					this.validator = this.form.validator
					if (this.name) {
						this.form.formData[this.name] = ''
					}
				} else {
					this.labelPos = this.labelPosition || 'left'
					this.labelWid = this.labelWidth || 65
					this.labelAli = this.labelAlign || 'left'
				}
			},
			/**
			 * 获取父元素实例
			 */
			getForm() {
				let parent = this.$parent;
				let parentName = parent.$options.name;
				while (parentName !== 'uniForms') {
					parent = parent.$parent;
					if (!parent) return false
					parentName = parent.$options.name;
				}
				return parent;
			},
			/**
			 * 移除该表单项的校验结果
			 */
			clearValidate() {
				this.errMsg = ''
			},
			/**
			 * 父组件处理函数
			 * @param {Object} callback
			 */
			// parentVal(callback) {
			// 	typeof(callback) === 'function' && callback({
			// 		[this.name]: this.form.formData[this.name]
			// 	}, this.name)
			// },

			/**
			 * 校验规则
			 * @param {Object} value
			 */
			triggerCheck(value, callback) {
				let promise;
				// if no callback, return promise
				if (callback && typeof callback !== 'function' && Promise) {
					promise = new Promise((resolve, reject) => {
						callback = function(valid) {
							!valid ? resolve(valid) : reject(valid)
						};
					});
				}

				if (!this.validator) {
					typeof callback === 'function' && callback(null);
					if (promise) return promise
				}

				const rules = this.formRules.rules || []
				const rule = rules.find(item => item.format && item.format === 'number')
				// 输入值为 number
				if (rule) {
					value = value === '' ? value : Number(value)
				}
				this.form.formData[this.name] = value
				this.errMsg = ''
				let result = this.validator && this.validator.validateUpdate({
					[this.name]: value
				})
				let isTrigger = this.isTrigger(this.formRules.validateTrigger, this.validateTrigger, this.form.validateTrigger)
				if (!isTrigger) {
					result = null
				}
				if (isTrigger && result&& result.errorMessage) {
					if (this.form.errShowType === 'toast') {
						uni.showToast({
							title: result.errorMessage || '校验错误',
							icon: 'none'
						})
					}
					if (this.form.errShowType === 'modal') {
						uni.showModal({
							title: '提示',
							content: result.errorMessage || '校验错误'
						})
					}
				}

				this.errMsg = !result ? '' : result.errorMessage
				this.form.validateCheck(result ? result : null)
				typeof callback === 'function' && callback(result ? result : null);
				if (promise) return promise

			},
			/**
			 * 触发时机
			 * @param {Object} event
			 */
			isTrigger(rule, itemRlue, parentRule) {
				let rl = true;
				//  bind  submit
				if (rule === 'submit' || !rule) {
					if (rule === undefined) {
						if (itemRlue !== 'bind') {
							if (!itemRlue) {
								return parentRule === 'bind' ? true : false
							}
							return false
						}
						return true
					}
					return false
				}

				return true;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.uni-forms-item {
		position: relative;
		// padding: 10px 14px;
		text-align: left;
		color: #333;
		font-size: 14px;
		margin-bottom: 22px;
	}

	.uni-forms-item-inner {
		display: flex;
		align-items: center;
	}

	.uni-textarea-inner {
		align-items: flex-start;
	}

	.uni-textarea-class {
		min-height: 48px;
		width: auto;
		font-size: 14px;
	}

	.fild-body {
		width: 100%;
		display: flex;
		flex: 1;
		align-items: center;
	}

	.uni-arror-right {
		margin-left: 4px;
	}

	.uni-label-text {
		display: inline-block;
	}

	.uni-label-left-gap {
		margin-left: 3px;
	}

	.uni-label-postion-top {
		flex-direction: column;
		align-items: flex-start;
		flex: 1;
	}

	.uni-forms-item-label {
		width: 65px;
		flex: 1 1 65px;
		text-align: left;
		position: relative;
		display: flex;
		align-items: center;
	}

	.uni-required::before {
		content: '*';
		position: absolute;
		left: -8px;
		font-size: 14px;
		color: $uni-color-error;
		height: 9px;
		line-height: 1;
	}

	.uni-forms-item__input-wrap {
		position: relative;
		overflow: hidden;
		font-size: 14px;
		height: 24px;
		flex: 1;
		width: auto;
	}

	.uni-clear-icon {
		display: flex;
		align-items: center;
	}

	.uni-error-message {
		position: absolute;
		bottom: -17px;
		left: 0;
		line-height: 12px;
		// padding-top: 2px;
		// padding-bottom: 2px;
		color: $uni-color-error;
		font-size: 12px;
		text-align: left;
	}

	.uni-input-error-border {
		border-color: $uni-color-error;
	}

	.placeholder-style {
		color: rgb(150, 151, 153);
	}

	.uni-input-class {
		font-size: 14px;
	}

	.uni-button-wrap {
		margin-left: 4px;
	}

	/* start--Retina 屏幕下的 1px 边框--start */
	.uni-border,
	.uni-border-bottom,
	.uni-border-left,
	.uni-border-right,
	.uni-border-top,
	.uni-border-top-bottom {
		position: relative
	}

	.uni-border-bottom:after,
	.uni-border-left:after,
	.uni-border-right:after,
	.uni-border-top-bottom:after,
	.uni-border-top:after,
	.uni-border:after {
		/* #ifndef APP-NVUE */
		content: ' ';
		/* #endif */
		position: absolute;
		left: 0;
		top: 0;
		pointer-events: none;
		box-sizing: border-box;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		// 多加0.1%，能解决有时候边框缺失的问题
		width: 199.8%;
		height: 199.7%;
		transform: scale(0.5, 0.5);
		border: 0 solid $uni-border-color;
		z-index: 2;
	}

	.uni-input-border {
		min-height: 34px;
		padding-left: 4px;
		border: 1px solid $uni-border-color;
		border-radius: 6px;
		box-sizing: border-box;
	}

	.uni-border-top:after {
		border-top-width: 1px
	}

	.uni-border-left:after {
		border-left-width: 1px
	}

	.uni-border-right:after {
		border-right-width: 1px
	}

	.uni-border-bottom:after {
		border-bottom-width: 1px
	}

	.uni-border-top-bottom:after {
		border-width: 1px 0
	}

	.uni-border:after {
		border-width: 1px
	}

	/* end--Retina 屏幕下的 1px 边框--end */

	.uni-icon-wrap {
		padding-left: 3px;
		padding-right: 3px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.uni-button-wrap {
		display: flex;
		align-items: right;
		justify-content: center;
	}

	.uni-clear-icon {
		display: flex;
		align-items: center;
		margin-left: 4px;
	}

	.uni-flex {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
	}

	.uni-flex-1 {
		flex: 1;
	}

	.uni-error-in-label {
		display: flex;
		flex-direction: row;
	}

	.uni-forms-item-custom {
		padding: 0;
		border: none;
	}
</style>
