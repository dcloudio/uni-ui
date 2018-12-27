<template>
	<view v-if="show" class="uni-noticebar" :style="{backgroundColor:backgroundColor,color:color}" @click="onClick">
		<view v-if="showClose === 'true' || showClose === true" class="uni-noticebar__close" @click="close">
			<uni-icon type="closefill" size="12"></uni-icon>
		</view>
		<view class="uni-noticebar__content" :class="setContenClass">
			<view v-if="showIcon === 'true' || showIcon === true" class="uni-noticebar__content-icon" :style="{backgroundColor:backgroundColor,color:color}">
				<uni-icon type="sound" size="14" :color="color"></uni-icon>
			</view>
			<view class="uni-noticebar__content-text" :class="setTextClass">
				<view class="uni-noticebar__content-inner" :id="elId" :style="{animationDuration:dura + 's'}">{{text}}</view>
			</view>
			<view class="uni-noticebar__content-more" v-if="moreText" @click="clickMore">
				<view class="uni-noticebar__content-more-text">{{moreText}}</view>
				<uni-icon type="arrowright" size="14"></uni-icon>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '../uni-icon/uni-icon.vue'
	export default {
		name: "uni-notice-bar",
		components: {
			uniIcon
		},
		props: {
			text: String,
			moreText: String,
			backgroundColor: {
				type: String,
				default: '#fffbe8'
			},
			speed: { //默认1s滚动100px
				type: [String, Number],
				default: 100
			},
			color: {
				type: String,
				default: '#de8c17'
			},
			single: { //是否单行
				type: [String, Boolean],
				default: false
			},
			scrollable: { //是否滚动，添加后控制单行效果取消
				type: [String, Boolean],
				default: false
			},
			showIcon: { //是否显示左侧icon
				type: [String, Boolean],
				default: false
			},
			showClose: { //是否显示左侧关闭按钮
				type: [String, Boolean],
				default: false
			}
		},
		data() {
			const elId = `Uni_${Math.ceil(Math.random() * 10e5).toString(36)}`
			return {
				elId: elId,
				show: true,
				dura: 1
			}
		},
		computed: {
			setTextClass() {
				let classList = []
				if (this.scrollable === true || this.scrollable === 'true') {
					classList.push('uni-noticebar--scrollable')
				} else {
					if (this.single === 'true' || this.single === true || this.moreText) {
						classList.push('uni-noticebar--single')
					}
				}
				return classList
			},
			setContenClass() {
				let classList = []
				if (this.scrollable === true || this.scrollable === 'true' || this.single === 'true' || this.single === true ||
					this.moreText) {
					classList.push('uni-noticebar--flex')
				}
				return classList
			}
		},
		// #ifdef H5
		mounted() { //分平台吧，在h5的时候走mounted，app和小程序走onReady
			let view = uni.createSelectorQuery().select(`#${this.elId}`);
			view.fields({
				size: true
			}, data => {
				this.dura = data.width / this.speed
			}).exec();
		},
		// #endif
		// #ifndef H5
		onReady() {
			let view = uni.createSelectorQuery().select(`#${this.elId}`);
			view.fields({
				size: true
			}, data => {
				this.dura = data.width / this.speed
			}).exec();
		},
		// #endif
		methods: {
			close() {
				this.show = false
				this.$emit('close')
			},
			clickMore() {
				this.$emit('getmore')
			},
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	@mixin flex-row-center {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.uni-noticebar {
		padding: 12upx 24upx;
		font-size: $uni-font-size-sm;
		line-height: 1.5;
		margin-bottom: 20upx;
		@include flex-row-center;

		&__close {
			color: $uni-text-color-grey;
			margin-right: 24upx;
			@include flex-row-center;
		}

		&__content {
			overflow: hidden;

			&.uni-noticebar--flex {
				display: flex;
				flex-direction: row;
			}

			&-icon {
				display: inline-block;
				z-index: 1;
				padding-right: 12upx;
			}

			&-more {
				@include flex-row-center;
				word-break: keep-all;
				margin-left: 10upx;
				color: $uni-text-color-grey;

				&-text {
					font-size: $uni-font-size-sm;
				}
			}

			&-text {
				word-break: break-all;
				display: inline;

				&.uni-noticebar--single {
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}

				&.uni-noticebar--scrollable {
                    display: block;
                    overflow: hidden;
                    .uni-noticebar__content-inner{
                        padding-left: 100%;
                        white-space: nowrap;
                        display: inline-block;
                        animation: notice 1s linear infinite both;
                        transform: translateZ(0);
                    }
				}
			}

			&-inner {
				font-size: $uni-font-size-sm;
				display: inline;
			}
		}
	}

	@keyframes notice {
		100% {
			transform: translate3d(-100%, 0, 0);
		}
	}
</style>
