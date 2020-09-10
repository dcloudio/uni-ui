<template>
	<view class="uni-form-group" :style="{marginTop: `${marginTop}px` }">
		<view v-if="title" class="uni-form-group__content">
			<text class="uni-form-group__content-title">{{ title }}</text>
		</view>
		<slot />
	</view>
</template>

<script>

	/**
	 * uni-form-group 分组
	 * @description 表单字段分组
	 * @property {String} title 主标题
	 * @property {Number} margin 分组间隔
	 */

	export default {
		name: 'UniFormGroup',
		props: {
			title: {
				type: String,
				default: ''
			},
			marginTop: {
				type: [Number, String],
				default: 10
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
	.uni-form-group {
        background: #fff;
        margin-top: 10px;
    }

	.uni-form-group__content {
        padding: 10px 10px;
		background-color: $uni-bg-color-grey;
		font-weight: normal;
		color: $uni-text-color;
	}

	.uni-form-group__content-title {
		font-size: $uni-font-size-base;
		color: $uni-text-color;
	}

	.distraction {
		flex-direction: row;
		align-items: center;
	}
</style>
