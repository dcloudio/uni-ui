<template>
	<view>
		<page-head :title="title"></page-head>
		<view>
			<view class="example-title">基本用法</view>
			<uni-load-more :status="status"></uni-load-more>
		</view>
		<view>
			<view class="example-title">修改默认颜色及文字</view>
			<uni-load-more color="#007aff" :status="status" :contentText="contentText"></uni-load-more>
		</view>
		<radio-group @change="onChange">
			<label>
				<radio value="more" checked="true" />加载前
			</label>
			<label>
				<radio value="loading" />加载中
			</label>
			<label>
				<radio value="noMore" />没有更多了
			</label>
		</radio-group>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'LoadMore',
				status: 'more',
				contentText: {
					contentdown: "查看更多",
					contentrefresh: "加载中",
					contentnomore: "没有更多"
				}
			}
		},
		methods: {
			onChange(e) {
				this.status = e.detail.value
			}
		}
	}
</script>

<style>
	radio-group {
		margin-top: 30upx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
</style>
