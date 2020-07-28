<template>
	<!-- 支付宝小程序使用 movable-area -->
	<!-- #ifdef MP-ALIPAY -->
	<view class="uni-swipe">
		<view
		    class="uni-swipe-box movable-view--hock"
		    @touchstart="touchstart"
		    @touchend="touchend"
		>
			<!-- TODO 初次加载的时候，会闪烁，解决闪烁问题 -->
			<view
			    v-if="opacity === 0"
			    class="movable-view-box"
			>
				<slot></slot>
			</view>
			<movable-area
			    v-show="opacity === 1"
			    class="movable-area"
			    :style="{opacity:swipeShow}"
			>
				<movable-view
				    class="movable-view"
				    :out-of-bounds="true"
				    :animation="true"
				    :x="x"
				    :class="[transition?'transition':'']"
				    :style="{width:viewWidth+'px'}"
				    direction="horizontal"
				    @change="onChange"
				>
					<view class="movable-view-button movable-view--hock">
						<slot name="left">
							<view
							    v-for="(item,index) in leftOptions"
							    :data-button="btn"
							    :key="index"
							    :style="{
							  backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',
							  fontSize: item.style && item.style.fontSize ? item.style.fontSize : '16px'
							}"
							    class="uni-swipe_button button-hock"
							    @touchstart="appTouchStart"
							    @touchend="appTouchEnd($event,index,item,'left')"
							><text
								    class="uni-swipe_button-text"
								    :style="{color: item.style && item.style.color ? item.style.color : '#FFFFFF',}"
								>{{ item.text }}</text></view>
						</slot>
					</view>
					<view
					    class="movable-view-box"
					    :style="{width:width+'px'}"
					>
						<slot></slot>
					</view>
					<view class="movable-view-button movable-view--hock">
						<slot name="right">
							<view
							    v-for="(item,index) in rightOptions"
							    :data-button="btn"
							    :key="index"
							    :style="{
							  backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',
							  fontSize: item.style && item.style.fontSize ? item.style.fontSize : '16px'
							}"
							    class="uni-swipe_button button-hock"
							    @touchstart="appTouchStart"
							    @touchend="appTouchEnd($event,index,item,'right')"
							><text
								    class="uni-swipe_button-text"
								    :style="{color: item.style && item.style.color ? item.style.color : '#FFFFFF',}"
								>{{ item.text }}</text></view>
						</slot>
					</view>
				</movable-view>
			</movable-area>
		</view>
	</view>
	<!-- #endif -->
</template>
<script>

	import mpalipay from './mpalipay'

	export default {
		// #ifdef APP-VUE|| MP-WEIXIN||H5
		mixins: [mpwxs],
		// #endif

		// #ifdef APP-NVUE
		mixins: [bindingx],
		// #endif

		// #ifndef APP-PLUS|| MP-WEIXIN || MP-ALIPAY ||  H5
		mixins: [mixins],
		// #endif

		// #ifdef MP-ALIPAY
		mixins: [mpalipay],
		// #endif

		props: {
			/**
			 * 按钮内容
			 */
			options: {
				type: Array,
				default () {
					return []
				}
			},
			/**
			 * 禁用
			 */
			disabled: {
				type: Boolean,
				default: false
			},
			/**
			 * 变量控制开关
			 */
			show: {
				type: Boolean,
				default: false
			},
			/**
			 * 是否自动关闭
			 */
			autoClose: {
				type: Boolean,
				default: true
			}
		},
		inject: ['swipeaction']


	}
</script>
<style lang="scss" scoped>
	.uni-swipe {
		overflow: hidden;
	}

	.uni-swipe-box {
		position: relative;
		width: 100%;
	}

	.uni-swipe_content {
		flex: 1;
		position: relative;
	}

	.uni-swipe_move-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		position: relative;
		flex-direction: row;
	}

	.uni-swipe_box {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: row;
		width: 100%;
		flex-shrink: 0;
		/* #endif */
		/* #ifdef APP-NVUE */
		flex: 1;
		/* #endif */
		font-size: 14px;
		background-color: #fff;
	}

	.uni-swipe_button-group {
		/* #ifndef APP-VUE|| MP-WEIXIN||H5 */
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 0;
		/* #endif */
		/* #ifndef APP-NVUE */
		display: flex;
		flex-shrink: 0;
		/* #endif */
		flex-direction: row;
	}

	.uni-swipe_button {
		/* #ifdef APP-NVUE */
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		/* #endif */
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 0 20px;
	}

	.uni-swipe_button-text {
		/* #ifndef APP-NVUE */
		flex-shrink: 0;
		/* #endif */
		font-size: 14px;
	}

	.ani {
		transition-property: transform;
		transition-duration: 0.3s;
		transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	/* #ifdef MP-ALIPAY */
	.movable-area {
		width: 300px;
		height: 100%;
		height: 45px;
	}

	.movable-view {
		position: relative;
		width: 160%;
		height: 45px;
		z-index: 2;
	}
	.transition {
		transition: all 0.3s;
	}

	.movable-view-box {
		width: 100%;
		height: 100%;
		background-color: #fff;
	}
	/* #endif */
</style>
