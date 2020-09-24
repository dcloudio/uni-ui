<template>
	<view>
		<text class="example-info"> uni-forms 组件一般由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。</text>
		<uni-section title="基础用法" type="line"></uni-section>
		<uni-forms ref="form" labelPosition="left" labelAlign="left" :form-rules="rules" @submit="submit" @reset="reset"
		 @validate="validate">
			<uni-group title="基本信息">
				<uni-field label="姓名" :input-border="true" name="name" v-model="formData.name" placeholder="请输入姓名" errorMessage="姓名不能为空" />
				<uni-field type="number" :input-border="true" required label="年龄" name="age" v-model="formData.age" placeholder="请输入年龄" />
			</uni-group>
			<uni-group title="详细信息">
				<uni-field type="text" :input-border="true" label="邮箱" name="email" v-model="formData.email" placeholder="请输入电子邮箱" />
				<uni-field type="textarea" :input-border="true" label="体重" name="size" v-model="formData.size" placeholder="请输入体重" />
			</uni-group>

			<!-- 直接使用组件自带submit、reset 方法，小程序不生效 -->
			<!-- <button class="button" form-type="submit">Submit</button>
			<button class="button" form-type="reset">Reset</button> -->

			<button class="button" @click="submitForm('form')">校验表单</button>
			<button class="button" @click="validateField('form')">校验部分表单</button>
			<button class="button" @click="clearValidate('form','name')">移除部分表单校验结果</button>
			<button class="button" @click="clearValidate('form')">移除全部表单校验结果</button>
			<button class="button" @click="resetFields('form')">手动重置表单</button>
		</uni-forms>
	</view>
</template>

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
					name: {
						rules: [{
							required: true,
							errorMessage: '请输入姓名',
							trigger: 'blur'
						}, {
							minLength: 3,
							maxLength: 5,
							errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
							trigger: 'submit'
						}]
					},
					email: {
						rules: [{
							format: 'email',
							errorMessage: '请输入正确的邮箱地址',
							trigger: 'blur'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '请填写年龄',
							trigger: "blur"
						}, {
							format: 'number',
							errorMessage: '年龄必须是数字',
							// trigger: 'blur'
						}, {
							minimum: 18,
							maximum: 30,
							errorMessage: '年龄应该大于 {minimum} 岁，小于 {maximum} 岁',
							trigger: 'change'
						}]
					},
					size: {
						rules: [{
							minimum: 100,
							maximum: 200,
							errorMessage: '体重应该大于 {minimum} 斤，小于 {maximum} 斤',
							// trigger: 'change'
						}]
					}
				}
			}
		},
		methods: {
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
			},

			/**
			 * 手动提交
			 * @param {Object} event
			 */
			reset(event) {
				console.log('表单重置：', event);
			},

			/**
			 * 手动提交
			 * @param {Object} form
			 */
			submitForm(form) {
				this.$refs[form].validate((valid, rules) => {
					if (valid) {
						console.log('校验通过')
					} else {
						console.error('校验失败', rules);
					}
				})
			},

			/**
			 * 部分表单校验
			 * @param {Object} form
			 */
			validateField(form) {
				this.$refs[form].validateField('name')
			},

			/**
			 * 清除表单校验
			 * @param {Object} form
			 * @param {Object} name
			 */
			clearValidate(form, name) {
				if (!name) name = []
				this.$refs[form].clearValidate(name)
			},

			/**
			 * 手动重置表单
			 * @param {Object} form
			 */
			resetFields(form) {
				this.$refs[form].resetFields()
			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';
	.button {
		margin: 10px 15px;
	}
</style>
