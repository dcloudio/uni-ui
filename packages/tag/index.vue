<template>
	<view class="uni-tag" v-if="text" :class="[disabled === true || disabled === 'true' ? 'uni-tag--disabled' : '',inverted === true || inverted === 'true' ? 'uni-tag--inverted' : '',circle === true || circle === 'true' ? 'uni-tag--circle' : '','uni-tag--'+size,'uni-tag--'+type]"
	 @click="onClick()">{{text}}</view>
</template>

<script>
	export default {
		name: 'uni-tag',
		props: {
			type: { //标签类型default、primary、success、warning、danger、royal
				type: String,
				default: 'default'
			},
			size: { //标签大小 normal, small
				type: String,
				default: 'normal'
			},
			text: String, //标签内容
			disabled: { //是否为禁用状态
				type: [String, Boolean],
				defalut: false
			},
			inverted: { //是否为空心
				type: [String, Boolean],
				defalut: false
			},
			circle: { //是否为圆角
				type: [String, Boolean],
				defalut: false
			}
		},
		methods: {
			onClick() {
				if (this.disabled === true || this.disabled === 'true') {
					return;
				}
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	$tag-pd:0px 32upx;
	$tag-small-pd:0px 16upx;

	@mixin tag-disabled {
		opacity: 0.5;
	}

	.uni-tag {
		box-sizing: border-box;
		padding: $tag-pd;
		height: 60upx;
		line-height: calc(60upx - 2px);
		font-size: $uni-font-size-base;
		display: inline-block;
		color: $uni-text-color-second;
		border-radius: 8upx;
		background-color: $uni-background-color-grey;
		border: 1px solid $uni-background-color-grey;

		&--circle {
			border-radius: 30upx;
		}

		&--disabled {
			@include tag-disabled;
		}

		&--small {
			height: 40upx;
			padding: $tag-small-pd;
			line-height: calc(40upx - 2px);
			font-size: $uni-font-size-xs;
		}

		&--primary {
			color: #fff;
			background-color: $uni-color-primary;
			border: 1px solid $uni-color-primary;

			&.uni-tag--inverted {
				color: $uni-color-primary;
				background-color: #FFFFFF;
				border: 1px solid $uni-color-primary;
			}

		}

		&--success {
			color: #fff;
			background-color: $uni-color-success;
			border: 1px solid $uni-color-success;

			&.uni-tag--inverted {
				color: $uni-color-success;
				background-color: #FFFFFF;
				border: 1px solid $uni-color-success;
			}

		}

		&--warning {
			color: #fff;
			background-color: $uni-color-warning;
			border: 1px solid $uni-color-warning;

			&.uni-tag--inverted {
				color: $uni-color-warning;
				background-color: #FFFFFF;
				border: 1px solid $uni-color-warning;
			}

		}

		&--danger {
			color: #fff;
			background-color: $uni-color-danger;
			border: 1px solid $uni-color-danger;

			&.uni-tag--inverted {
				color: $uni-color-danger;
				background-color: #FFFFFF;
				border: 1px solid $uni-color-danger;
			}

		}

		&--royal {
			color: #fff;
			background-color: $uni-color-royal;
			border: 1px solid $uni-color-royal;

			&.uni-tag--inverted {
				color: $uni-color-royal;
				background-color: #FFFFFF;
				border: 1px solid $uni-color-royal;
			}

		}

		&--inverted {
			color: $uni-text-color-second;
			background-color: #FFFFFF;
			border: 1px solid $uni-background-color-grey;
		}
	}
</style>
