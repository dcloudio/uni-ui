<template>
	<view>
		<text class="example-info">倒计时组件主要用于促销商品剩余时间，发送短信验证等待时间等场景</text>
		<uni-section title="一般用法" type="line"></uni-section>
		<view class="example-body">
			<uni-countdown :day="1" :hour="1" :minute="12" :second="40" />
		</view>
		<uni-section title="自由控制开始/暂停" type="line"></uni-section>
		<view class="example-body">
			<uni-countdown :start="start" :day="1" :hour="1" :minute="12" :second="40" />
		</view>
		<uni-section title="不显示天数" type="line"></uni-section>
		<view class="example-body">
			<uni-countdown :show-day="false" :hour="12" :minute="12" :second="12" />
		</view>
		<uni-section title="文字分隔符" type="line"></uni-section>
		<view class="example-body">
			<uni-countdown :minute="30" :second="0" :show-colon="false" />
		</view>
		<uni-section title="修改颜色" type="line"></uni-section>
		<view class="example-body">
			<uni-countdown :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF" background-color="#007AFF" border-color="#007AFF" />
		</view>
		<uni-section title="倒计时回调事件" type="line"></uni-section>
		<view class="example-body">
			<uni-countdown :show-day="false" :second="10" @timeup="timeup" />
		</view>
		<uni-section title="动态赋值" type="line"></uni-section>
		<view class="example-body">
			<uni-countdown  :show-day="false" :hour="testHour" :minute="testMinute" :second="testSecond" />
		</view>
	</view>
</template>
<script>
	export default {
		components: {},
		data() {
			return {
				testHour: 0,
				testMinute: 0,
				testSecond: 0,
				start: false
			}
		},
		mounted() {
			setTimeout(() => {
				console.log(1111);
				this.testHour = 1
				this.testMinute = 1
				this.testSecond = 0
				this.start = true
			}, 3000)
			setTimeout(() => {
				this.start = false
			}, 10000)
		},
		methods: {
			timeup() {
				uni.showToast({
					title: '时间到'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

	.example-body {
		padding: 10px;
	}
</style>
