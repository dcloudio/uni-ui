<template>
	<view class="content">
		<uni-card :is-shadow="false" is-full>
			uni-ui 规范颜色色板，通过内置样式快速指定元素前景和背景色。
		</uni-card>
		<uni-section title="主色" type="line">
			<view class="uni-ma-5">
				<view class="box uni-radius">
					<view class="item-box uni-primary-bg uni-white">primary</view>
					<view class="item-box">
						<view class="item uni-primary-disable-bg uni-white">disable</view>
						<view class="item uni-primary-light-bg uni-white">light</view>
					</view>
				</view>
			</view>
		</uni-section>
		<uni-section title="辅助色" sub-title="除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。" type="line">
			<view class="uni-ma-5">
				<view class="box uni-radius">
					<view class="item-box uni-success-bg uni-white">success</view>
					<view class="item-box">
						<view class="item uni-success-disable-bg uni-white">disable</view>
						<view class="item uni-success-light-bg uni-white">light</view>
					</view>
				</view>
				<view class="box  uni-mt-5 uni-radius">
					<view class="item-box uni-warning-bg uni-white">warning</view>
					<view class="item-box">
						<view class="item uni-warning-disable-bg uni-white">disable</view>
						<view class="item uni-warning-light-bg uni-white">light</view>
					</view>
				</view>
				<view class="box uni-mt-5 uni-radius">
					<view class="item-box uni-error-bg uni-white">error</view>
					<view class="item-box">
						<view class="item uni-error-disable-bg uni-white">disable</view>
						<view class="item uni-error-light-bg uni-white">light</view>
					</view>
				</view>
				<view class="box uni-mt-5 uni-radius">
					<view class="item-box uni-info-bg uni-white">info</view>
					<view class="item-box">
						<view class="item uni-info-disable-bg uni-white">disable</view>
						<view class="item uni-info-light-bg uni-white">light</view>
					</view>
				</view>
			</view>
		</uni-section>
		<uni-section title="中性色" sub-title="中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。" type="line">
			<view class="uni-ma-5 uni-radius">
				<view class="box uni-radius uni-main-color-bg uni-mt-5 uni-white">main-color</view>
				<view class="box uni-radius uni-base-color-bg uni-mt-5 uni-white">base-color</view>
				<view class="box uni-radius uni-secondary-color-bg uni-mt-5 uni-white">secondary-color</view>
				<view class="box uni-radius uni-extra-color-bg uni-mt-5 uni-white">extra-color</view>
				<view class="box uni-radius uni-border-1-bg uni-mt-5 uni-white">border-1</view>
				<view class="box uni-radius uni-border-2-bg uni-mt-5 uni-white">border-2</view>
				<view class="box uni-radius uni-border-3-bg uni-mt-5 uni-secondary-color">border-3</view>
				<view class="box uni-radius uni-border-4-bg uni-mt-5 uni-secondary-color">border-4</view>
			</view>
		</uni-section>
		<uni-section title="常规色" sub-title="中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。" type="line">
			<view class="uni-ma-5 uni-radius">
				<view class="box uni-radius uni-border uni-white-bg uni-secondary-color uni-mt-5">white</view>
				<view class="box uni-radius uni-border uni-black-bg uni-secondary-color uni-mt-5">black</view>
				<view class="box uni-radius uni-border uni-transparent-bg uni-secondary-color uni-mt-5">transparent</view>
				<view class="box uni-radius uni-border uni-bg-color-bg uni-secondary-color uni-mt-5">bg-color</view>
			</view>
		</uni-section>

		<uni-section title="阴影" type="line">
				<view class="uni-ma-5 uni-pa-5 uni-radius uni-shadow-sm uni-secondary-color uni-mt-2">shadow-sm</view>
				<view class="uni-ma-5 uni-pa-5 uni-radius uni-shadow-base uni-secondary-color uni-mt-2">shadow-base</view>
				<view class="uni-ma-5 uni-pa-5 uni-radius uni-shadow-lg uni-secondary-color uni-mt-2">shadow-lg</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		computed: {},
		onLoad() {},
		methods: {}
	}
</script>

<style lang="scss">
	@mixin flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.box {
		@include flex;
		flex-direction: column;
		min-height: 50px;
		font-size: 14px;
		overflow: hidden;
		.item-box {
			@include flex;
			width: 100%;
			height: 50px;
			overflow: hidden;
			.item {
				@include flex;
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
