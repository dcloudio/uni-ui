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
    $tag-size:28upx;
    $tag-small-size:20upx;
	$tag-small-pd:0px 16upx;
    $tag-default-color:#666666;
    $tag-default-bg:#F1F1F1;
    $primary:#007aff;
    $success:#4cd964;
    $warning:#f0ad4e;
    $danger:#dd524d;
    $royal:#8a6de9;
	@mixin tag-disabled {
		opacity: 0.5;
	}

	.uni-tag {
		box-sizing: border-box;
		padding: $tag-pd;
		height: 60upx;
		line-height: calc(60upx - 2px);
		font-size: $tag-size;
		display: inline-block;
		color: $tag-default-color;
		border-radius: 8upx;
		background-color: $tag-default-bg;
		border: 1px solid $tag-default-bg;
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
			font-size: $tag-small-size;
		}

		&--primary {
			color: #fff;
			background-color: $primary;
			border: 1px solid $primary;

			&.uni-tag--inverted {
				color: $primary;
				background-color: #FFFFFF;
				border: 1px solid $primary;
			}

		}

		&--success {
			color: #fff;
			background-color: $success;
			border: 1px solid $success;

			&.uni-tag--inverted {
				color: $success;
				background-color: #FFFFFF;
				border: 1px solid $success;
			}

		}
        
		&--warning {
			color: #fff;
			background-color: $warning;
			border: 1px solid $warning;

			&.uni-tag--inverted {
				color: $warning;
				background-color: #FFFFFF;
				border: 1px solid $warning;
			}

		}
        
		&--danger {
			color: #fff;
			background-color: $danger;
			border: 1px solid $danger;

			&.uni-tag--inverted {
				color: $danger;
				background-color: #FFFFFF;
				border: 1px solid $danger;
			}

		}
		&--royal {
			color: #fff;
			background-color: $royal;
			border: 1px solid $royal;

			&.uni-tag--inverted {
				color: $royal;
				background-color: #FFFFFF;
				border: 1px solid $royal;
			}

		}

		&--inverted {
			color: $tag-default-color;
			background-color: #FFFFFF;
			border: 1px solid $tag-default-bg;
		}
	}

</style>
