<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">常用于展示鼠标 hover 时的提示信息，注意：无法覆盖原生组件</text>
		</uni-card>
		<uni-section title="基础用法" type="line" padding>
			<uni-tooltip text="提示文字" />
		</uni-section>
		<uni-section title="插槽用法" type="line" padding>
			<uni-tooltip text="提示文字">一段文字</uni-tooltip>
		</uni-section>
		<uni-section title="自定义弹层宽度" type="line" padding>
			<uni-tooltip text="提示文字" :width="300">一段文字</uni-tooltip>
		</uni-section>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {

			};
		},
	};
</script>

<style lang="scss">

</style>
