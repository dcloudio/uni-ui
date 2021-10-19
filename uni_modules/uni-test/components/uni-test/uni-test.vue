<template>
	<view>
		测试插件
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			let fonts = []
			let obj = {}
			fonts.forEach(v=>{
				obj[v.name] = '\\u'+v.unicode
			})
		}
	}
</script>

<style>

</style>
