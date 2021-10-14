<template>
	<!-- #ifndef APP-NVUE -->
	<view class="uni-list">
		<view v-if="border" class="uni-list--border-top"></view>
		<slot />
		<view v-if="border" class="uni-list--border-bottom"></view>
	</view>
	<!-- #endif -->
	<!-- #ifdef APP-NVUE -->
	<view :class="{ 'uni-list--border': border }">
		<list class="uni-list"  :enableBackToTop="enableBackToTop"
			loadmoreoffset="15">
			<slot />
		</list>
	</view>
	<!-- #endif -->
</template>

<script>
	/**
	 * List 列表
	 * @description 列表组件
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=24
	 * @property {String} 	border = [true|false] 		标题
	 */
	export default {
		name: 'uniList',
		'mp-weixin': {
			options: {
				multipleSlots: false
			}
		},
		props: {
			enableBackToTop: {
				type: [Boolean, String],
				default: false
			},
			scrollY: {
				type: [Boolean, String],
				default: false
			},
			border: {
				type: Boolean,
				default: true
			},
			borderFull: {
				type: Boolean,
				default: false
			}
		},
		// provide() {
		// 	return {
		// 		list: this
		// 	};
		// },
		created() {
			this.firstChildAppend = false;
		},
		methods: {
			loadMore(e) {
				this.$emit('scrolltolower');
			}
		}
	};
</script>
<style lang="scss" scoped>
	$uni-border-color: #E4E7ED !default;
	.uni-list {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		position: relative;
		flex-direction: column;
		background-color: #fff;
	}

	/* #ifdef APP-NVUE */
	.uni-list--border {
		position: relative;
		/* #ifdef APP-NVUE */
		border-top-color: #eee;
		border-top-style: solid;
		border-top-width: 0.5px;
		border-bottom-color: #eee;
		border-bottom-style: solid;
		border-bottom-width: 0.5px;
		/* #endif */
		z-index: -1;
	}
	/* #endif */

	/* #ifndef APP-NVUE */

	.uni-list--border-top {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		height: 1px;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		background-color: #eee;
		z-index: 1;
	}

	.uni-list--border-bottom {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		height: 1px;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		background-color: #eee;
	}

	/* #endif */
</style>
