<template>
	<view class="page">
		<text class="example-info">数字角标通用来标记重点信息使用，如接受到新消息、有未读消息等</text>
		<uni-section title="有底色" type="line"></uni-section>
		<view class="example-body">
			<uni-badge class="uni-badge-left-margin" text="1" />
			<uni-badge class="uni-badge-left-margin" text="2" type="primary" />
			<uni-badge class="uni-badge-left-margin" text="34" type="success" />
			<uni-badge class="uni-badge-left-margin" text="45" type="warning" />
			<uni-badge class="uni-badge-left-margin" text="123" type="error" />
		</view>
		<uni-section title="无底色" type="line"></uni-section>
		<view class="example-body">
			<uni-badge class="uni-badge-left-margin" :inverted="true" text="1" />
			<uni-badge class="uni-badge-left-margin" :inverted="true" text="2" type="primary" />
			<uni-badge class="uni-badge-left-margin" :inverted="true" text="34" type="success" />
			<uni-badge class="uni-badge-left-margin" :inverted="true" text="45" type="warning" />
			<uni-badge class="uni-badge-left-margin" :inverted="true" text="123" type="error" />
		</view>
		<uni-section title="迷你" type="line"></uni-section>
		<view class="example-body">
			<uni-badge class="uni-badge-left-margin" text="1" size="small" />
			<uni-badge class="uni-badge-left-margin" text="2" type="primary" size="small" />
			<uni-badge class="uni-badge-left-margin" text="34" type="success" size="small" />
			<uni-badge class="uni-badge-left-margin" text="45" type="warning" size="small" />
			<uni-badge class="uni-badge-left-margin" text="123" type="error" size="small" />
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {};
		}
	};
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

	/* #ifdef MP-ALIPAY */
	.uni-badge {
		margin-left: 20rpx;
	}

	/* #endif */
	.example-body {
		flex-direction: row;
		justify-content: flex-start;
	}

	.uni-badge-left-margin {
		margin-left: 20rpx;
	}
</style>
