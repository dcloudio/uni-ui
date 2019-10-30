<template>
	<view :class="[
      'uni-tag--' + type,
      disabled === true || disabled === 'true' ? 'uni-tag--disabled' : '',
      inverted === true || inverted === 'true' ? type + '-uni-tag--inverted' : '',
      circle === true || circle === 'true' ? 'uni-tag--circle' : '',
      mark === true || mark === 'true' ? 'uni-tag--mark' : '',
      'uni-tag--' + size
    ]"
	 @click="onClick()" class="uni-tag" v-if="text">
		<text :class="[type === 'default' ? 'uni-tag--default':'uni-tag-text',inverted === true || inverted === 'true' ? 'uni-tag-text--'+type : '',size === 'small' ? 'uni-tag-text--small':'' ]">{{ text }}</text>
	</view>
</template>

<script>
	export default {
		name: "UniTag",
		props: {
			type: {
				// 标签类型default、primary、success、warning、error、royal
				type: String,
				default: "default"
			},
			size: {
				// 标签大小 normal, small
				type: String,
				default: "normal"
			},
			// 标签内容
			text: {
				type: String,
				default: ""
			},
			disabled: {
				// 是否为禁用状态
				type: [String, Boolean],
				defalut: false
			},
			inverted: {
				// 是否为空心
				type: [String, Boolean],
				defalut: false
			},
			circle: {
				// 是否为圆角样式
				type: [String, Boolean],
				defalut: false
			},
			mark: {
				// 是否为标记样式
				type: [String, Boolean],
				defalut: false
			}
		},
		methods: {
			onClick() {
				if (this.disabled === true || this.disabled === "true") {
					return;
				}
				this.$emit("click");
			}
		}
	};
</script>

<style lang="scss" scoped>
	$tag-pd: 0px 16px;
	$tag-small-pd: 0px 8px;

	.uni-tag {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		padding: $tag-pd;
		height: 30px;
		line-height: 30px;
		justify-content: center;
		color: $uni-text-color;
		border-radius: $uni-border-radius-base;
		background-color: $uni-bg-color-grey;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-bg-color-grey;
	}

	.uni-tag--circle {
		border-radius: 15px;
	}

	.uni-tag--mark {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-top-right-radius: 15px;
		border-bottom-right-radius: 15px;
	}

	.uni-tag--disabled {
		opacity: 0.5;
	}

	.uni-tag--small {
		height: 20px;
		padding: $tag-small-pd;
		line-height: 20px;
		font-size: $uni-font-size-sm;
	}

	.uni-tag--default {
		color: $uni-text-color;
		font-size: $uni-font-size-base;
	}

	.uni-tag-text--small {
		font-size: $uni-font-size-sm !important;
	}

	.uni-tag-text {
		color: $uni-text-color-inverse;
		font-size: $uni-font-size-base;
	}

	.uni-tag--default {
		color: $uni-text-color;
		font-size: $uni-font-size-base;
	}

	.uni-tag-text--primary {
		color: $uni-color-primary !important;
	}

	.uni-tag-text--success {
		color: $uni-color-success !important;
	}

	.uni-tag-text--warning {
		color: $uni-color-warning !important;
	}

	.uni-tag-text--error {
		color: $uni-color-error !important;
	}

	.uni-tag--primary {
		color: $uni-text-color-inverse;
		background-color: $uni-color-primary;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-color-primary;
	}

	.primary-uni-tag--inverted {
		color: $uni-color-primary;
		background-color: $uni-bg-color;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-color-primary;
	}

	.uni-tag--success {
		color: $uni-text-color-inverse;
		background-color: $uni-color-success;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-color-success;
	}

	.success-uni-tag--inverted {
		color: $uni-color-success;
		background-color: $uni-bg-color;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-color-success;
	}

	.uni-tag--warning {
		color: $uni-text-color-inverse;
		background-color: $uni-color-warning;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-color-warning;
	}

	.warning-uni-tag--inverted {
		color: $uni-color-warning;
		background-color: $uni-bg-color;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-color-warning;
	}

	.uni-tag--error {
		color: $uni-text-color-inverse;
		background-color: $uni-color-error;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-color-error;
	}

	.error-uni-tag--inverted {
		color: $uni-color-error;
		background-color: $uni-bg-color;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-color-error;
	}

	.uni-tag--inverted {
		color: $uni-text-color;
		background-color: $uni-bg-color;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-bg-color-grey;
	}
</style>
