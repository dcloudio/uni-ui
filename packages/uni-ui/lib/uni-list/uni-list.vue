<template>
	<!-- #ifndef APP-NVUE -->
	<view class="uni-list" :class="{'uni-list--border':border}">
		<slot />
	</view>
	<!-- #endif -->
	<!-- #ifdef APP-NVUE -->
	<list class="uni-list" :class="{'uni-list--border':border}" :enableBackToTop="enableBackToTop" loadmoreoffset="15">
		<slot />
	</list>
	<!-- #endif -->
</template>

<script>
	/**
	 * List 列表
	 * @description 列表组件
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=24
	 */
	export default {
		name: 'UniList',
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
			border:{
				type: Boolean,
				default: true
			}
		},
		provide() {
			return {
				list: this
			}
		},
		created() {
			this.firstChildAppend = false
		},
		methods: {
			loadMore(e) {
				this.$emit("scrolltolower");
			}
		}
	}
</script>
<style lang="scss" scoped>
	.uni-list {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		background-color: $uni-bg-color;
		position: relative;
		flex-direction: column;
		// border-bottom-color: $uni-border-color;
		// border-bottom-style: solid;
		// border-bottom-width: 1px;
	}

	.uni-list--border {
		position: relative;
		/* #ifdef APP-PLUS */
		border-top-color: $uni-border-color;
		border-top-style: solid;
		border-top-width: 0.5px;
		/* #endif */
	}
	/* #ifndef APP-NVUE */

	.uni-list--border:after {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: $uni-border-color;
	}

	/* #endif */
</style>
