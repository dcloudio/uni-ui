<template>
	<view>
		<text class="example-info"> uni-forms 组件一般由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。</text>
		<uni-section title="基础用法" type="line"></uni-section>
		<!-- :rules="rules" -->
		<uni-forms ref="form" validate-trigger="submit" @submit="submit" err-show-type="toast" @validate="validate">
			<uni-group title="基本信息" >
				<uni-forms-item required name="name" label="用户名">
					<input type="text" class="uni-input-border" placeholder="请输入用户名" @input="binddata('name',$event.detail.value)">
				</uni-forms-item>
				<uni-forms-item required name="age" label="年龄">
					<input type="text" class="uni-input-border" placeholder="请输入年龄" @input="binddata('age',$event.detail.value)">
				</uni-forms-item>
				<uni-forms-item required name="email" label="邮箱">
					<input type="text" class="uni-input-border" placeholder="请输入邮箱" @blur="binddata('email',$event.detail.value)">
				</uni-forms-item>
				<uni-forms-item label="详细信息">
					<switch @change="change" />
				</uni-forms-item>
			</uni-group>
			<template v-if="show">
				<uni-group title="详细信息"  >
					<uni-forms-item required name="sex" label="性别">
						<radio-group @change="binddata('sex',$event.detail.value)">
							<label class="label-box">
								<radio class="transform-scale" value="0" /><text>男</text>
							</label>
							<label class="label-box">
								<radio class="transform-scale" value="1" /><text>女</text>
							</label>
						</radio-group>
					</uni-forms-item>
					<uni-forms-item required name="hobby" label="兴趣爱好">
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
					<uni-forms-item name="remarks" label="备注">
						<textarea type="text" :maxlength="50" class="uni-textarea-border" placeholder="请输入备注" @input="binddata('remarks',$event.detail.value)"></textarea>
					</uni-forms-item>
				</uni-group>

			</template>

			<!-- 直接使用组件自带submit、reset 方法，小程序不生效 -->
			<!-- <button class="button" form-type="submit">Submit</button>
				<button class="button" form-type="reset">Reset</button> -->
			<view class="example">
				<button class="button" @click="submitForm('form')">校验表单</button>
				<button class="button" @click="validateField('form')">只校验用户名和邮箱项</button>
				<button class="button" @click="clearValidate('form','name')">移除用户名的校验结果</button>
				<button class="button" @click="clearValidate('form')">移除全部表单校验结果</button>
			</view>
		</uni-forms>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {},
				show: false,
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '请输入用户名',
						}, {
							minLength: 3,
							maxLength: 5,
							errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '请填写年龄',
						}, {
							format: 'number',
							errorMessage: '年龄必须是数字',
						}, {
							minimum: 18,
							maximum: 30,
							errorMessage: '年龄应该大于 {minimum} 岁，小于 {maximum} 岁',
						}]
					},
					email: {
						rules: [{
							format: 'email',
							errorMessage: '请输入正确的邮箱地址',
							trigger: 'blur'
						}]
					},
					sex: {
						rules: [{
							required: true,
							errorMessage: '请选择性别',
							trigger: "blur"
						}]
					},
					hobby: {
						rules: [{
							required: true,
							errorMessage: '请选择兴趣',
							trigger: "blur"
						}, {
							validateFunction: function(rule, value, data, callback) {
								console.log(data);
								if (value.length < 2) {
									callback(new Error('请至少勾选两个兴趣爱好'))
								}
								return true
							}
						}]
					}
				}
			}
		},
		onReady() {
			this.$refs.form.setRules(this.rules)
		},
		methods: {
			change(event) {
				this.show = event.detail.value
			},
			/**
			 * 触发校验
			 * @param {Object} event
			 */
			validate(event) {
				console.log('触发校验：', event);
			},

			/**
			 * 表单提交
			 * @param {Object} event
			 */
			submit(event) {
				console.log(event)
				const {
					errors,
					value
				} = event.detail
				if (errors) {
					console.error('验证失败', errors);
					return
				}
				uni.showToast({
					title: '验证成功'
				})
			},

			/**
			 * 手动提交
			 * @param {Object} form
			 */
			submitForm(form) {
				this.$refs[form].submit()
			},

			/**
			 * 部分表单校验
			 * @param {Object} form
			 */
			validateField(form) {
				this.$refs[form].validateField(['name', 'email'], (errors) => {
					console.log(errors);
					if(errors){
						uni.showToast({
							title: '验证成功'
						})
					}
				})
			},

			/**
			 * 清除表单校验
			 * @param {Object} form
			 * @param {Object} name
			 */
			clearValidate(form, name) {
				if (!name) name = []
				this.$refs[form].clearValidate(name)
			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

	.example {
		padding: 0 10px 10px;
	}

	.uni-input-border,
	.uni-textarea-border {
		width: 100%;
		font-size: 14px;
		color: #666;
		border: 1px #e5e5e5 solid;
		border-radius: 5px;
		box-sizing: border-box;
	}

	.uni-input-border {
		padding: 0 10px;
		height: 35px;
	}

	.uni-textarea-border {
		padding: 10px;
		height: 80px;
	}

	.label-box {
		margin-right: 10px;
	}

	.transform-scale {
		transform: scale(0.7);
	}

	.button {
		margin: 10px auto;
	}
</style>
