<template>
	<view class="uni-card" @click="onClick">
		<view class="uni-card__header" v-if="title">
			<view class="uni-card__header-extra-img-view" v-if="thumbnail">
				<image class="uni-card__header-extra-img" :src="thumbnail"></image>
			</view>
			<view class="uni-card__header-title-text">{{title}}</view>
			<view class="uni-card__header-extra-text" v-if="extra">{{extra}}</view>
		</view>
		<view class="uni-card__content" :class="isFull === false || isFull === 'false' ? 'uni-card__content--pd' : ''">
			<slot />
		</view>
		<view class="uni-card__footer" v-if="note">{{note}}</view>
	</view>
</template>

<script>
	export default {
		name: "uni-card",
		props: {
			title: String, //标题
			extra: String, //扩展信息
			note: String, //Tips
			thumbnail: String, //缩略图
			isFull: { //内容区域是否通栏
				type: [Boolean, String],
				default: false
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	$border-color:#c8c7cc;
    $card-foot-color:#999999;
    $card-foot-size:24upx;
    $card-head-pd: 18upx 24upx;
    $card-head-text-size: 34upx;
    $card-extra-img-size:42upx;
    $card-extra-text-size:30upx;
    
    
	@mixin text-omit {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.uni-card {
		margin: 20upx;
		background: #fff;
		position: relative;
		display: flex;
		flex-direction: column;

		&:after {
			content: '';
			position: absolute;
			transform-origin: center;
			box-sizing: border-box;
			pointer-events: none;
			top: -50%;
			left: -50%;
			right: -50%;
			bottom: -50%;
			border: 1px solid $border-color;
			border-radius: 6px;
			transform: scale(.5);
		}

		&__footer,
		&__header {
			position: relative;
			display: flex;
			flex-direction: row;
			padding: $card-head-pd;
			align-items: center;
		}

		&__header {
			&:after {
				position: absolute;
				bottom: 0;
				right: 0;
				left: 0;
				height: 1px;
				content: '';
				-webkit-transform: scaleY(.5);
				transform: scaleY(.5);
				background-color: $border-color;
			}

			&-title {
				flex: 1;
				margin-right: 20upx;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;

				&-text {
					font-size: $card-head-text-size;
					flex: 1;
					@include text-omit;
				}
			}

			&-extra {
				&-img-view {
					display: flex;
				}

				&-img {
					height: $card-extra-img-size;
					width: $card-extra-img-size;
					margin-right: 20upx;
				}

				&-text {
					flex: 0 0 auto;
					width: 30%;
					margin-left: 20upx;
					font-size: $card-extra-text-size;
					text-align: right;
					@include text-omit;
				}
			}

		}

		&__content {
			&--pd {
				padding: 24upx;
			}
		}

		&__footer {
			justify-content: space-between;
			color: $card-foot-color;
			font-size: $card-foot-size;
			padding-top: 0;
		}
	}

</style>
