<template>
	<text v-if="text" :class="inverted ? 'uni-badge--' + type + ' uni-badge--' + size + ' uni-badge--' + type + '-inverted' : 'uni-badge--' + type + ' uni-badge--' + size"
	 class="uni-badge" :style="width" @click="onClick()">{{ text }}</text>
</template>

<script>
	export default {
		name: 'UniBadge',
		props: {
			type: {
				type: String,
				default: 'default'
			},
			inverted: {
				type: Boolean,
				default: false
			},
			text: {
				type: [String,Number],
				default: ''
			},
			size: {
				// small.normal
				type: String,
				default: 'normal'
			}
		},
		data() {
			return {
				width: `display: inline-block;width: ${String(this.text).length * 15 + 25}rpx`
			};
		},
		methods: {
			onClick() {
				this.$emit('click');
			}
		}
	};
</script>

<style lang="scss" scoped>
	$bage-size: 12px;
	$bage-small: scale(0.8);
	$bage-height: 40rpx;

	.uni-badge {
		/* #ifndef APP-PLUS */
		display: flex;
		/* #endif */
		flex-direction: row;
		height: $bage-height;
		line-height: $bage-height;
		color: $uni-text-color;
		border-radius: 100px;
		background-color: $uni-bg-color-hover;
		background-color: transparent;
		text-align: center;
		font-family: 'Helvetica Neue', Helvetica, sans-serif;
		font-size: $bage-size;
		padding: 0;
	}

	.uni-badge--inverted {
		padding: 0 5px 0 0;
		color: $uni-bg-color-hover;
	}

	.uni-badge--default {
		color: $uni-text-color;
		background-color: $uni-bg-color-hover;
	}

	.uni-badge--default-inverted {
		color: $uni-text-color-grey;
		background-color: transparent;
	}

	.uni-badge--primary {
		color: $uni-text-color-inverse;
		background-color: $uni-color-primary;
	}

	.uni-badge--primary-inverted {
		color: $uni-color-primary;
		background-color: transparent;
	}

	.uni-badge--success {
		color: $uni-text-color-inverse;
		background-color: $uni-color-success;
	}

	.uni-badge--success-inverted {
		color: $uni-color-success;
		background-color: transparent;
	}

	.uni-badge--warning {
		color: $uni-text-color-inverse;
		background-color: $uni-color-warning;
	}

	.uni-badge--warning-inverted {
		color: $uni-color-warning;
		background-color: transparent;
	}

	.uni-badge--error {
		color: $uni-text-color-inverse;
		background-color: $uni-color-error;
	}

	.uni-badge--error-inverted {
		color: $uni-color-error;
		background-color: transparent;
	}

	.uni-badge--small {
		transform: $bage-small;
		transform-origin: center center;
	}
</style>
