<template>
	<view>
		<text class="example-info"> field 组件是表单中的输入框组件</text>

		<uni-section title="带输入框" type="line"></uni-section>
		<view class="example-body">
			<uni-field :input-border="true" v-model="name" label="姓名" placeholder="请填写姓名" :error-message="errorMessage" />
			<uni-field :input-border="true" v-model="mobile" label="手机号" label-position="left" placeholder="请填写手机号"
			 :error-message="errorMessage" type="text" :clearable="true" />
		</view>
		<uni-section title="不带输入框" type="line"></uni-section>
		<view class="example-body">
			<uni-field v-model="name" label="姓名" placeholder="请填写姓名" :error-message="errorMessage" />
			<uni-field v-model="mobile" label="手机号" label-position="left" placeholder="请填写手机号" :error-message="errorMessage"
			 type="text" :clearable="true" />
		</view>
		<uni-section title="label 在上" type="line"></uni-section>
		<view class="example-body">
			<uni-field v-model="name" label="姓名" label-position="top" placeholder="请填写姓名" :error-message="errorMessage" />
			<uni-field label-position="top" v-model="mobile" label="手机号" placeholder="请填写手机号" :error-message="errorMessage" type="text"
			 :clearable="true" />
		</view>
		<uni-section title="label 在左" type="line"></uni-section>
		<view class="example-body">
			<uni-field v-model="name" label="姓名" placeholder="请填写姓名" :error-message="errorMessage" />
			<uni-field v-model="mobile" label="手机号" placeholder="请填写手机号" :error-message="errorMessage" type="text" :clearable="true" />
		</view>
		<uni-section title="带右侧按钮和 textarea" type="line"></uni-section>
		<view class="example-body">
			<uni-field v-model="weixin" label="微信" placeholder="请填写微信号" :error-message="errorMessage"></uni-field>
			<uni-field v-model="mobile" label="手机号" label-position="left" placeholder="请填写手机号" :error-message="errorMessage"
			 type="text" :clearable="true">
				<button v-if="true" type="primary" slot="right" size="mini">发送验证码</button>
			</uni-field>
			<uni-field v-model="message" type="textarea" label="家庭地址" placeholder="请填写详细住址" :error-message="errorMessage" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				mobile: '139 9999 9999',
				weixin: 'test123',
				message: '',
				errorMessage: ''
			}
		},

		methods: {
			changeError() {
				this.errorMessage = this.errorMessage ? '' : '请填写对应内容'
			}
		}

	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';
	.example-body {
		padding: 0;
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}
</style>
