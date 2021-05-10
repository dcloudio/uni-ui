<template>
	<view class="page">
		<text class="example-info">可以同时选择日期和时间的选择器</text>
		<uni-section :title="'日期用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="date" start="2021-3-20" end="2021-5-20" @change="change" />
		</view>
		<uni-section :title="'时间戳用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker returnType="timestamp" v-model="single" start="2021-3-20" end="2021-5-20" />
		</view>
		<uni-section :title="'日期时间用法：' + datetimesingle" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="datetime" v-model="datetimesingle" start="2021-3-20 12:00:00"
				end="2021-5-20 20:00:00" />
		</view>
		<uni-section :title="'v-model用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" />
		</view>
		<uni-section :title="'无边框用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" :border="false" />
		</view>
		<uni-section :title="'disabled用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" disabled />
		</view>
		<uni-section :title="'日期范围用法：' + '[' + range + ']'" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="range" type="daterange" start="2021-3-20" end="2021-5-20"
				rangeSeparator="至" />
		</view>
		<uni-section :title="'日期时间范围用法：' + '[' + datetimerange + ']' " type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="datetimerange" type="datetimerange"
				start="2021-3-20 12:00:00" end="2021-5-20 20:00:00" rangeSeparator="至" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				single: '2021-04-3',
				'datetimesingle': '',
				range: ['2021-03-8', '2021-4-20'],
				datetimerange: ['2021-03-20 20:10:10', '2021-05-10 10:10:10'],
			}
		},

		watch: {
			datetimesingle(newval) {
				console.log('单选:', this.datetimesingle);
			},
			range(newval) {
				console.log('范围选:', this.range);
			},
			datetimerange(newval) {
				console.log('范围选:', this.datetimerange);
			}
		},

		methods:{
			change(e) {
				this.single = e
				console.log('----change事件:', this.single = e);
			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';
</style>
