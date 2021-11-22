<template>
	<view class="left-window-style">
		<indexPage />
	</view>
</template>
<script>
	import indexPage from '@/pages/index/index'
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
											url: 'pages/vue/color/color'
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
		background-color: #fff;
		border-right: 1px solid #f5f5f5;
		box-shadow: rgb(0 0 0 / 8%) 0px 0px 3px 1px;
	}
</style>
