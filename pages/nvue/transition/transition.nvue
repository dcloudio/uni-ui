<template>
	<view>
		<button type="primary" @click="run">执行动画</button>
		<uni-transition ref="ani" :styles="{ width: '100px', height: '100px', backgroundColor: 'red' }" :show="show" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: true
		}
	},
	onReady() {
		this.$refs.ani.init({
			duration: 1000,
			timingFunction: 'linear',
			transformOrigin: '50% 50%',
			delay: 500
		})
	},
	methods: {
		run() {
			this.$refs.ani.step({
			    scale: ['1.8','0.6'],
			})
			// 开始执行动画
			this.$refs.ani.run(() => {
				console.log('动画支持完毕')
			})
		}
	}
}
</script>
