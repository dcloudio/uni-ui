<template>
	<view class="fixforpc-window">
		<text class="example-info">通告栏组件多用于系统通知，广告通知等场景，可自定义图标，颜色，展现方式等。</text>
		<uni-section title="基本用法" type="line">
			<uni-notice-bar :single="true" text="[单行] uni-app 1.6发布，开发一次、7端覆盖！" />
		</uni-section>
		<uni-section title="加图标" type="line">
			<uni-notice-bar :show-icon="true" text="uni-app 1.6发布，开发一次、7端覆盖！" />
		</uni-section>
		<uni-section title="文字滚动" type="line">
			<uni-notice-bar :show-icon="true" :scrollable="true" :single="true" text="uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</uni-section>
		<uni-section title="查看更多" type="line">
			<uni-notice-bar :show-get-more="true" :show-icon="true" :single="true" more-text="查看更多" text="年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！"
			 @getmore="getMore" />
		</uni-section>
		<uni-section title="修改颜色" type="line">
			<uni-notice-bar :single="true" more-text="查看更多" color="red" background-color="#eee" text="uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</uni-section>
		<uni-section title="关闭按钮" type="line">
			<uni-notice-bar :show-close="true" :single="true" text="HBuilderX 1.0正式发布！uni-app实现里程碑突破！" />
		</uni-section>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {}
		},
		created() {},
		methods: {
			getMore() {
				uni.showToast({
					title: '点击查看更多',
					icon: 'none'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';
	.example-body {
		padding: 5rpx 0;
		padding-top: 20rpx;
		flex-direction: column;
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}

	.fixforpc-window {
		/* #ifndef APP-NVUE */
		position: absolute;
		left: 0;
		right:0;
		top: 0;
		bottom: 0;
		/* #endif */
	}
</style>
