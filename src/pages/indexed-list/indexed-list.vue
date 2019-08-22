<template>
	<uni-indexed-list :options="list" :show-select="false" @click="bindClick" />
</template>

<script>
	import uniIndexedList from '@/components/uni-indexed-list/uni-indexed-list.vue'
	import airport from '@/common/airport.js'
	export default {
		components: {
			uniIndexedList
		},
		data() {
			return {
				list: airport.list
			}
		},
		methods: {
			bindClick(e) {
				console.log('点击item，返回数据' + JSON.stringify(e))
			}
		}
	}
</script>

<style></style>
