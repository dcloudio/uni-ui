<template>
	<view class="uni-rate" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
		<view class="uni-rate-icon" v-for="(star,index) in stars" :key="index" :style="{marginLeft:margin+'px'}" @click="onClick(index)">
			<uni-icon :size="size" :color="color" :type="isFill === false || isFill === 'false' ? 'star' : 'star-filled'"></uni-icon>
			<view class="uni-rate-icon-on" :style="{width:star.activeWitch}">
				<uni-icon :size="size" :color="activeColor" type="star-filled"></uni-icon>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '../uni-icon/uni-icon.vue'
	export default {
		name: "uni-rate",
		components: {
			uniIcon
		},
		props: {
			isFill: { //星星的类型，是否镂空
				type: [Boolean, String],
				default: true
			},
			color: { //星星的颜色
				type: String,
				default: '#ececec'
			},
			activeColor: { //星星选中状态颜色
				type: String,
				default: '#ffca3e'
			},
			size: { //星星的大小
				type: [Number, String],
				default: 24
			},
			value: { //当前评分
				type: [Number, String],
				default: 0
			},
			max: { //最大评分
				type: [Number, String],
				default: 5
			},
			margin: { //星星的间距
				type: [Number, String],
				default: 0
			},
			disabled: { //是否可点击
				type: [Boolean, String],
				default: false
			}
		},
		data() {
			return {
				maxSync: this.max,
				valueSync: this.value,
				isTouched: false,
			}
		},
		computed: {
			stars() {
				const max = Number(this.maxSync) ? Number(this.maxSync) : 5
				const value = Number(this.valueSync) ? Number(this.valueSync) : 0
				const starList = []
				const floorValue = Math.floor(value)
				const ceilValue = Math.ceil(value)
				for (let i = 0; i < max; i++) {
					if (floorValue > i) {
						starList.push({
							activeWitch: '100%'
						})
					} else if (ceilValue - 1 === i) {
						starList.push({
							activeWitch: (value - floorValue) * 100 + '%'
						})
					} else {
						starList.push({
							activeWitch: '0'
						})
					}
				}
				return starList
			}
		},
		methods: {
			onClick(index) {
				if (this.disabled === true || this.disabled === 'true') {
					return
				}
				this.valueSync = index + 1
				this.$emit('change', {
					value: this.valueSync
				})
			},
			touchstart(e) {
				if (this.disabled === true || this.disabled === 'true') {
					return
				}
				this.isTouched = true;
			},
			touchmove(e) {
				if (this.isTouched) {
					this.slideSelectStar(e);
				}
			},
			touchend(e) {
				this.isTouched = false;
				this.slideSelectStar(e);
			},
			slideSelectStar(e) {
				let clientX = 0;
				let touches = e.touches;
				if (touches && touches.length > 0) {
					clientX = touches[0].clientX;
					let index = parseInt(clientX / this.size);
					index = Math.max(index, 0);
					this.valueSync = index;
					this.$emit('change', {
						value: this.valueSync
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.uni-rate {
		line-height: 0;
		font-size: 0;
		display: flex;
		flex-direction: row;

		&-icon {
			position: relative;
			line-height: 0;
			font-size: 0;
			display: inline-block;

			&-on {
				line-height: 1;
				position: absolute;
				top: 0;
				left: 0;
				overflow: hidden;
			}
		}
	}
</style>
