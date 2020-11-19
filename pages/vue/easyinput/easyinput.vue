<template>
	<view>
		<text class="example-info"> easyinput 组件是对原生input组件的增强 ，是专门为配合表单组件 uni-forms 而设计的，easyinput 内置了边框，图标等，同时包含 input 所有功能</text>
		<uni-section title="默认" type="line"></uni-section>
		<view class="example">
			<uni-easyinput v-model="value" focus placeholder="请输入内容"></uni-easyinput>
		</view>
		<uni-section title="左图标" type="line"></uni-section>
		<view class="example">
			<uni-easyinput prefixIcon="search" v-model="value" placeholder="请输入内容"></uni-easyinput>
		</view>
		<uni-section title="右图标" type="line"></uni-section>
		<view class="example">
			<uni-easyinput suffixIcon="search"  v-model="value" placeholder="请输入内容"></uni-easyinput>
		</view>
		<uni-section title="禁用" type="line"></uni-section>
		<view class="example">
			<uni-easyinput disabled  v-model="value" placeholder="请输入内容"></uni-easyinput>
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
				value:'',
				password:''
			}

		},
		onLoad() {},
		onReady() {},
		methods: {}
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
