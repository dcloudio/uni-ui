<template>
	<view>
		<uni-section title="data-checkbox 组件" type="circle"></uni-section>
		<uni-data-checkbox v-model="value" :localdata="localdata" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: 1,
			localdata: [
				{
					text: '男',
					value: 0
				},
				{
					text: '女',
					value: 1
				}
			]
		};
	}
};
</script>

<style></style>
