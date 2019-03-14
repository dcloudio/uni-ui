<template>
	<view class="segmented-control" :class="styleType" :style="styleType === 'text' ? {border: 'none'} : {borderColor: activeColor}">
		<view v-for="(item, index) in values" class="segmented-control-item" :class="[styleType, {'active': index === currentIndex}]"
		 :key="index" @click="_onClick(index)" :style="styleType === 'text' ? {
				color: index === currentIndex ? activeColor : '#000'
			 } : {
				color: index === currentIndex ? '#fff' : activeColor,
				backgroundColor: index === currentIndex ? activeColor : 'inherit'
			 }">
			{{item}}
		</view>
	</view>
</template>

<script>
	export default {
		name: 'uni-segmented-control',
		props: {
			current: {
				type: Number,
				default: 0
			},
			values: {
				type: Array,
				default () {
					return [];
				}
			},
			activeColor: {
				type: String,
				default: '#007aff'
			},
			styleType: {
				type: String,
				default: 'button'
			}
		},
		data() {
			return {
				currentIndex: this.current
			}
		},
		watch: {
			current(val) {
				if (val !== this.currentIndex) {
					this.currentIndex = val;
				}
			}
		},
		methods: {
			_onClick(index) {
				if (this.currentIndex !== index) {
					this.currentIndex = index;
					this.$emit('clickItem', index);
				}
			}
		}
	}
</script>

<style>
	.segmented-control {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 75%;
		font-size: 28upx;
		border-radius: 10upx;
		box-sizing: border-box;
		margin: 0 auto;
		overflow: hidden;
	}

	.segmented-control.button {
		border: 2upx solid;
	}

	.segmented-control.text {
		border: 0;
		border-radius: 0;
	}

	.segmented-control-item {
		flex: 1;
		text-align: center;
		line-height: 60upx;
		box-sizing: border-box;
	}

	.segmented-control-item.button {
		border-left: 1px solid;
	}

	.segmented-control-item.button.active {
		color: #fff;
	}

	.segmented-control-item.text {
		border-left: 0;
		color: #000;
	}

	.segmented-control-item.text.active {
		border-bottom-style: solid;
	}

	.segmented-control-item:first-child {
		border-left-width: 0;
	}
</style>
