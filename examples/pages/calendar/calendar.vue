<template>
	<view class="page">
		<page-head :title="title"></page-head>
		<view class="example">
            <view class="example-title">基本用法</view>
			<uni-calendar></uni-calendar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "Calendar"
			}
		}
	}
</script>

<style>

</style>