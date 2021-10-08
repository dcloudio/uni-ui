<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。
		</uni-card>
		<uni-section title="基础卡片" type="line">
			<view class="uni-border uni-radius uni-ma-5 uni-pa-5 uni-main-color uni-body-2">
				这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
