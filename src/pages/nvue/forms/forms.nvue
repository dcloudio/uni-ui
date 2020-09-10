<template>
	<view>
		<uni-section title="基础用法" type="line"></uni-section>
		<uni-forms ref="form" :form-rules="rules" @submit="submit">
			<uni-field label-class="htclass" label="姓名" name="name" v-model="formData.name" placeholder="请输入姓名" errorMessage="姓名不能为空" />
			<uni-field type="number" label="年龄" name="age" v-model="formData.age" placeholder="请输入年龄" />
			<uni-field type="text" label="邮箱" name="email" v-model="formData.age" placeholder="请输入电子邮箱" />
			<uni-field type="number" label="体重" name="size" v-model="formData.size" placeholder="请输入年龄" />
			<button class="button" form-type="submit">Submit</button>
			<button form-type="reset">Reset</button>
			<button class="button" @click="submitForm('form')">手动提交</button>
			<button @click="validateField('form')">校验部分表单</button>
			<button @click="clearValidate('form')">移除部分表单校验结果</button>
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
					name: [
						// 对name字段进行必填验证
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
					email: [{
						type: 'email',
						message: '请输入正确的邮箱地址',
						trigger: 'change'
					}],
					age: [{
						required: true,
						message: '请填写年龄',
						// trigger: "blur"
					}, {
						type: 'number',
						message: '年龄必须是数字',
						// trigger: 'blur'
					}, {
						minimum: 18,
						maximum: 30,
						message: '年龄应该大于 {minimum} 岁，小于 {maximum} 岁',
						// trigger: 'blur'
					}],
					size: [{
						type: 'number',
						message: '年龄必须是数字',
						// trigger: 'blur'
					}, {
						minimum: 100,
						maximum: 200,
						message: '体重应该大于 {minimum} 斤，小于 {maximum} 斤',
						trigger: 'change'
					}]
				}
			}
		},
		methods: {
			submit(event) {
				console.log(event)
			},
			submitForm(form) {
				this.$refs[form].validate((valid, rules) => {
					console.log('--页面数据', valid, rules)
				})
			},
			validateField(form) {
				this.$refs[form].validateField('name')
			},
			clearValidate(form) {
				this.$refs[form].clearValidate(['name', 'age'])
			}
		}
	}
</script>

<style>
	.button {
		margin-top: 15px;
	}
</style>
