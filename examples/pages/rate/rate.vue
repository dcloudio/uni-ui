<template>
	<view class="page">
		<page-head :title="title"></page-head>
		<view class="example">
			<view class="example-title">基本用法</view>
            <uni-rate value="2" @change="onChange"></uni-rate>
			<view class="example-title">设置尺寸大小</view>
			<uni-rate size="18" value="5"></uni-rate>
			<view class="example-title">设置评分数</view>
			<uni-rate max="10" value="5"></uni-rate>
			<view class="example-title">设置星星间隔</view>
			<uni-rate value="4" margin="5"></uni-rate>
			<view class="example-title">设置颜色</view>
			<uni-rate value="3" color="#bbb" active-color="red"></uni-rate>
            <view class="example-title">不可点击状态</view>
			<uni-rate disabled="true" value="3.5"></uni-rate>
            <view class="example-title">未选中的星星为镂空状态</view>
            <uni-rate value="3" isFill="false"></uni-rate>
		</view>
	</view>
</template>

<script>
    var ss = "123456"
	export default {
		data() {
			return {
				title: "Rate"
			}
		},
		methods: {
			onChange(e) {
				console.log('rate发生改变:' + JSON.stringify(e));
			}
		}
	}
</script>
