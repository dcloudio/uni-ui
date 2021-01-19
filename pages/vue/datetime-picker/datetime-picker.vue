<template>
	<view class="page">
		<text class="example-info">可以同时选择日期和时间的选择器</text>
		<uni-section :title="'基本用法：' + date" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker :value="date" @change="dateChange"></uni-datetime-picker>
		</view>
		<uni-section :title="'时间戳用法：' + timestamp" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker timestamp :value="timestamp" @change="timestampChange"></uni-datetime-picker>
		</view>
		<uni-section :title="'限制年份, 最早 2000 年:' + timeArea" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker :value="timeArea" minYear="2000"  @change="timeAreaChange"></uni-datetime-picker>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date: '2020-10-1 12:30:00',
				timestamp: 1610364547000,
				timeArea: '2000-10-1 12:30:01'
			}
		},
		methods: {
			dateChange(e) {
				this.date = e
			},
			timestampChange(e) {
				this.timestamp = e
			},
			timeAreaChange(e) {
				this.timeArea = e
			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

</style>
