<template>
	<view>
		<view class="example-info">评分组件多用于商品评价打分、服务态度评价、用户满意度等场景。</view>
		<view class="example-title">基本用法</view>
		<view class="example-body">
			<uni-rate :value="2" @change="onChange" />
		</view>
		<view class="example-title">设置尺寸大小</view>
		<view class="example-body">
			<uni-rate :size="18" :value="5" />
		</view>
		<view class="example-title">设置评分数</view>
		<view class="example-body">
			<uni-rate :max="10" :value="5" />
		</view>
		<view class="example-title">设置星星间隔</view>
		<view class="example-body">
			<uni-rate :value="4" :margin="5" />
		</view>
		<view class="example-title">设置颜色</view>
		<view class="example-body">
			<uni-rate :value="3" color="#bbb" active-color="red" />
		</view>
		<view class="example-title">不可点击状态</view>
		<view class="example-body">
			<uni-rate :disabled="true" :value="3.5" />
		</view>
		<view class="example-title">未选中的星星为镂空状态</view>
		<view class="example-body">
			<uni-rate :value="3" :is-fill="false" />
		</view>

	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	export default {
		components: {
			uniRate
		},
		data() {
			return {}
		},
		methods: {
			onChange(e) {
				console.log('rate发生改变:' + JSON.stringify(e))
			}
		}
	}
</script>

<style>

</style>
