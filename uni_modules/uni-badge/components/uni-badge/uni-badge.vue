<template>
	<text v-if="text" :class="inverted ? 'uni-badge--' + type + ' uni-badge--' + size + ' uni-badge--' + type + '-inverted' : 'uni-badge--' + type + ' uni-badge--' + size"
	 :style="badgeStyle" class="uni-badge" @click="onClick()">{{ text }}</text>
</template>

<script>
	/**
	 * Badge 数字角标
	 * @description 数字角标一般和其它控件（列表、9宫格等）配合使用，用于进行数量提示，默认为实心灰色背景
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=21
	 * @property {String} text 角标内容
	 * @property {String} type = [default|primary|success|warning|error] 颜色类型
	 * 	@value default 灰色
	 * 	@value primary 蓝色
	 * 	@value success 绿色
	 * 	@value warning 黄色
	 * 	@value error 红色
	 * @property {String} size = [normal|small] Badge 大小
	 * 	@value normal 一般尺寸
	 * 	@value small 小尺寸
	 * @property {String} inverted = [true|false] 是否无需背景颜色
	 * @event {Function} click 点击 Badge 触发事件
	 * @example <uni-badge text="1"></uni-badge>
	 */
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
				type: [String, Number],
				default: ''
			},
			size: {
				type: String,
				default: 'normal'
			},
			customStyle: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				badgeStyle: ''
			};
		},
		watch: {
			text() {
				this.setStyle()
			}
		},
		mounted() {
			this.setStyle()
		},
		methods: {
			setStyle() {
				this.badgeStyle = `width: ${String(this.text).length * 8 + 12}px;` + this.customStyle
			},
			onClick() {
				this.$emit('click');
			}
		}
	};
</script>

<style lang="scss" scoped>
	$bage-size: 12px;
	$bage-small: scale(0.8);
	$bage-height: 20px;

	.uni-badge {
		/* #ifndef APP-NVUE */
		display: flex;
		overflow: hidden;
		box-sizing: border-box;
		/* #endif */
		justify-content: center;
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
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
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
