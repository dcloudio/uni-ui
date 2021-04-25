<template>
	<view class="page">
		<text class="example-info">可以同时选择日期和时间的选择器</text>
		<uni-section :title="'日期用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-date-picker v-model="single" />
		</view>
		<uni-section :title="'日期时间用法：' + datetimesingle" type="line"></uni-section>
		<view class="example-body">
			<uni-date-picker type="datetime" v-model="datetimesingle" />
		</view>
		<uni-section :title="'v-model用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-date-picker v-model="single" />
		</view>
		<uni-section :title="'无边框用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-date-picker v-model="single" :border="false" />
		</view>
		<uni-section :title="'disabled用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-date-picker v-model="single" :disabled="false" />
		</view>
		<uni-section :title="'范围选用法：' + range" type="line"></uni-section>
		<view class="example-body">
			<uni-date-picker v-model="range" type="daterange" rangeSeparator="至" />
		</view>
	</view>
</template>

<script>
	export  default {
		data() {
			return {
				single: '2010-02-3',
				'datetimesingle': '2010-03-1 00:00:00',
				range: ['2020-10-8',  '2021-4-20']
			}
		},

		watch: {
			single(newval) {
				console.log('单选:', this.single);
			},
			range(newval) {
				console.log('范围选:', this.range);
			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';
</style>
