<template>
	<view class="page">
		<text class="example-info">数字输入框组件多用于购物车加减商品等场景</text>
		<uni-section title="基本用法" type="line"></uni-section>
		<view class="example-body">
			<uni-number-box @change="changeValue" />
		</view>
		<uni-section :title="'使用v-model : '+ vModelValue" type="line"></uni-section>
		<view class="example-body">
			<uni-number-box v-model = "vModelValue" @blur="blur" @focus="focus" @change="changeValue" />
		</view>
		<uni-section title="设置最小值和最大值" type="line"></uni-section>
		<view class="example-body">
			<uni-number-box :min="2" :max="9" :value="5" />
		</view>
		<uni-section title="设置步长（步长0.1)" type="line"></uni-section>
		<view class="example-body">
			<uni-number-box :step="0.1" />
		</view>
		<uni-section title="禁用状态" type="line"></uni-section>
		<view class="example-body">
			<uni-number-box :disabled="true" />
		</view>
		<uni-section :title="'获取输入的值 : '+ numberValue" type="line"></uni-section>
		<view class="example-body">
			<uni-number-box :value="numberValue" @change="change" />
		</view>
	</view>
</template>
<script>
	export default {
		components: {},
		data() {
			return {
				numberValue: 0,
				vModelValue: 3
			}
		},
		methods: {
			change(value) {
				this.numberValue = value
			},
			changeValue(value) {
				console.log('返回数值：', value);
			},
			blur(e) {
				console.log('-------blur:', e);
			},
			focus(e) {
				console.log('-------focus:', e);
			}

		}
	}
</script>
<style lang="scss">
	@import '@/common/uni-nvue.scss';
</style>
