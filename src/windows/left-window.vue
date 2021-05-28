<template>
	<view class="left-window-style">
		<indexPage />
	</view>
</template>
<script>
	import indexPage from '@/pages/vue/index/index.vue'
	export default {
		components: { indexPage },
		props: {
			matchLeftWindow: {
				type: Boolean
			}
		},
		watch: {
			$route: {
							immediate: true,
							handler(newRoute) {
								if (this.matchLeftWindow) {
									if (newRoute.path === '/') {
										uni.redirectTo({
											url: 'pages/vue/card/card'
										})
									}
									if (!newRoute.matched.length) {
										uni.redirectTo({
											url: 'pages/error/404'
										})
									}
								}
							}
						}
		}
	}
</script>
<style>
	.left-window-style {
		min-height: calc(100vh - var(--top-window-height));
		overflow-y: hidden;
		background-color: #f8f8f8;
		padding: 0 15px;
	}
</style>
