<template>
	<view>
		<text class="example-info"> easyinput 组件是对原生input组件的增强 ，是专门为配合表单组件 uni-forms 而设计的，easyinput 内置了边框，图标等，同时包含 input 所有功能</text>
		<uni-section title="默认" type="line"></uni-section>
		<view class="example">
			<uni-easyinput v-model="value" focus placeholder="请输入内容" @input="input"></uni-easyinput>
		</view>

		<uni-section title="去除空格" type="line"></uni-section>
		<view class="example">
			<view>输入内容："{{ value }}"</view>
			<uni-easyinput trim="all" v-model="value" focus placeholder="请输入内容" @input="input"></uni-easyinput>
		</view>


		<uni-section title="自定义样式" type="line"></uni-section>
		<view class="example">
			<uni-easyinput v-model="value" :styles="styles" :placeholderStyle="placeholderStyle" focus placeholder="请输入内容"
			 @input="input"></uni-easyinput>
		</view>
		<uni-section title="左图标" type="line"></uni-section>
		<view class="example">
			<uni-easyinput prefixIcon="search" v-model="value" placeholder="请输入内容" @iconClick="iconClick"></uni-easyinput>
		</view>
		<uni-section title="右图标" type="line"></uni-section>
		<view class="example">
			<uni-easyinput suffixIcon="search" v-model="value" placeholder="请输入内容" @iconClick="iconClick"></uni-easyinput>
		</view>
		<uni-section title="禁用" type="line"></uni-section>
		<view class="example">
			<uni-easyinput disabled value="已禁用" placeholder="请输入内容"></uni-easyinput>
		</view>
		<uni-section title="密码框" type="line"></uni-section>
		<view class="example">
			<uni-easyinput type="password" v-model="password" placeholder="请输入密码"></uni-easyinput>
		</view>
		<uni-section title="多行文本" type="line"></uni-section>
		<view class="example">
			<uni-easyinput type="textarea" v-model="value" placeholder="请输入内容"></uni-easyinput>
		</view>

		<uni-section title="多行文本自动高度" type="line"></uni-section>
		<view class="example">
			<uni-easyinput type="textarea" autoHeight v-model="value" placeholder="请输入内容"></uni-easyinput>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				password: '',
				placeholderStyle: "color:#499721;font-size:16px",
				styles: {
					color: 'blue',
					borderColor: '#499721'
				}
			}

		},
		onLoad() {},
		onReady() {},
		methods: {
			input(e) {
				console.log('输入内容：', e);
			},
			iconClick(type) {
				uni.showToast({
					title: `点击了${type==='prefix'?'左侧':'右侧'}的图标`,
					icon: 'none'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

	.example {
		padding: 10px;
		background-color: #fff;
	}

	.text {
		font-size: 14px;
		color: #333;
		margin-bottom: 10px;
	}
</style>
