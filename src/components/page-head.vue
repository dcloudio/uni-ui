<template>
	<view class="uni-page-head">
		<view class="uni-page-head-title">{{ title }}</view>
	</view>
</template>
<script>
	export default {
		name: 'PageHead',
		props: {
			title: {
				type: String,
				default: ''
			}
		}
	}
</script>
<style>
	.uni-page-head {
		padding: 35rpx;
		text-align: center;
		background: #f8f8f8;
	}

	.uni-page-head-title {
		display: inline-block;
		padding: 0 40rpx;
		font-size: 30rpx;
		height: 88rpx;
		line-height: 88rpx;
		color: #bebebe;
		box-sizing: border-box;
		border-bottom: 2rpx solid #d8d8d8;
	}
</style>
