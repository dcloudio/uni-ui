<template>
	<view class="page">
		<page-head :title="title"></page-head>
		<view class="example">
			<view class="example-title">默认样式</view>
            <uni-grid :data="data1" @click="onClick"></uni-grid>
			<view class="example-title">无外边框</view>
			<uni-grid :data="data3" show-out-border="false"></uni-grid>
			<view class="example-title">无所有框</view>
			<uni-grid :data="data3" show-border="false"></uni-grid>
			<view class="example-title">一行四个</view>
			<uni-grid :data="data2" show-out-border="false" column-num="4"></uni-grid>
			<view class="example-title">矩形案例</view>
			<uni-grid :data="data3" type="oblong"></uni-grid>
			<uni-grid type="rect"></uni-grid>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "Grid",
				data1: [{
						image: '../../static/shu.png',
						text: '圣诞树'
					},
					{
						image: '../../static/lindang.png',
						text: '铃铛'
					},
					{
						image: '../../static/laoren.png',
						text: '圣诞老人'
					},
					{
						image: '../../static/liwu.png',
						text: '礼物'
					},
					{
						image: '../../static/maozi.png',
						text: '帽子'
					},
					{
						image: '../../static/shoutao.png',
						text: '手套'
					},
					{
						image: '../../static/xueqiao.png',
						text: '雪橇'
					},
					{
						image: '../../static/xunlu.png',
						text: '迷路'
					},
					{
						image: '../../static/xuehua.png',
						text: '雪花'
					}
				],
				data2: [{
						image: '../../static/shu.png',
						text: '圣诞树'
					},
					{
						image: '../../static/lindang.png',
						text: '铃铛'
					},
					{
						image: '../../static/laoren.png',
						text: '圣诞老人'
					},
					{
						image: '../../static/liwu.png',
						text: '礼物'
					},
					{
						image: '../../static/maozi.png',
						text: '帽子'
					},
					{
						image: '../../static/shoutao.png',
						text: '手套'
					},
					{
						image: '../../static/xueqiao.png',
						text: '雪橇'
					},
					{
						image: '../../static/xunlu.png',
						text: '迷路'
					}
				],
				data3: [{
						image: '../../static/shu.png',
						text: '圣诞树'
					},
					{
						image: '../../static/lindang.png',
						text: '铃铛'
					},
					{
						image: '../../static/laoren.png',
						text: '圣诞老人'
					},
					{
						image: '../../static/liwu.png',
						text: '礼物'
					},
					{
						image: '../../static/maozi.png',
						text: '帽子'
					},
					{
						image: '../../static/shoutao.png',
						text: '手套'
					}
				]
			}
		},
		methods: {
			onClick(e) {
				console.log('点击grid:' + JSON.stringify(e));
			}
		}
	}
</script>
