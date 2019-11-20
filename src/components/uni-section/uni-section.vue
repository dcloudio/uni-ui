<template>
	<view class="uni-section">
		<view v-if="type" class="uni-section__head">
			<view :class="type" class="uni-section__head-tag" />
		</view>
		<view class="uni-section__content">
			<text :class="{'distraction':!subTitle}" class="uni-section__content-title">{{ title }}</text>
			<text v-if="subTitle" class="uni-section__content-sub">{{ subTitle }}</text>
		</view>
		<slot />
	</view>
</template>

<script>
	export default {
		name: 'UniTitle',
		props: {
			type: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			},
			subTitle: {
				type: String,
				default: ''
			}
		},
		data() {
			return {}
		},
		watch: {
			title(newVal) {
				if (uni.report && newVal !== '') {
					uni.report('title', newVal)
				}
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>
<style lang="scss" scoped>
	.uni-section {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		margin-top: 10px;
		flex-direction: row;
		align-items: center;
		padding: 0 10px;
		height: 50px;
		background-color: $uni-bg-color-grey;
		/* #ifdef APP-NVUE */
		border-bottom-color: $uni-border-color;
		border-bottom-style: solid;
		border-bottom-width: 0.5px;
		/* #endif */
		font-weight: normal;
	}
	/* #ifndef APP-NVUE */
	.uni-section:after {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: $uni-border-color;
	}		
	/* #endif */

	.uni-section__head {
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-right: 10px;
	}

	.line {
		height: 15px;
		background-color: $uni-text-color-disable;
		border-radius: 5px;
		width: 3px;
	}

	.circle {
		width: 8px;
		height: 8px;
		border-top-right-radius: 50px;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
		border-bottom-right-radius: 50px;
		background-color: $uni-text-color-disable;
	}

	.uni-section__content {
		flex: 1;
		color: $uni-text-color;
	}

	.uni-section__content-title {
		font-size: $uni-font-size-base;
		color: $uni-text-color;
	}

	.distraction {
		flex-direction: row;
		align-items: center;
	}

	.uni-section__content-sub {
		font-size: $uni-font-size-sm;
		color: $uni-text-color-grey;
	}
</style>
