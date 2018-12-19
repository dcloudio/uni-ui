<template>
	<view class="page">
		<page-head :title="title"></page-head>
		<view class="example">
            <view class="example-title">有底色</view>
			<view style="background:#FFF; padding:20upx;">
				<uni-badge text="1"></uni-badge>
				<uni-badge text="12" type="primary"></uni-badge>
				<uni-badge text="123" type="success"></uni-badge>
				<uni-badge text="3" type="warning"></uni-badge>
				<uni-badge text="45" type="danger"></uni-badge>
				<uni-badge text="456" type="royal"></uni-badge>
			</view>
            <view class="example-title">无底色</view>
			<view style="background:#FFF; padding:20upx;">
				<uni-badge text="1" :inverted="true"></uni-badge>
				<uni-badge text="12" type="primary" :inverted="true"></uni-badge>
				<uni-badge text="123" type="success" :inverted="true"></uni-badge>
				<uni-badge text="3" type="warning" :inverted="true"></uni-badge>
				<uni-badge text="45" type="danger" :inverted="true"></uni-badge>
				<uni-badge text="456" type="royal" :inverted="true"></uni-badge>
			</view>
            <view class="example-title">迷你</view>
            <view style="background:#FFF; padding:20upx;">
            	<uni-badge text="1" size="small"></uni-badge>
            	<uni-badge text="12" type="primary" size="small"></uni-badge>
            	<uni-badge text="123" type="success" size="small"></uni-badge>
            	<uni-badge text="3" type="warning" size="small"></uni-badge>
            	<uni-badge text="45" type="danger" size="small"></uni-badge>
            	<uni-badge text="456" type="royal" size="small"></uni-badge>
            </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "Badge"
			}
		}
	}
</script>

<style>
	.uni-badge{margin: 20upx;}
</style>