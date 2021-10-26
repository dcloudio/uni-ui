<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">使用 '.uni-btn' 样式，可对内置button组件设置样式</text>
		</uni-card>
		<uni-section title="按钮形状" sub-title="添加类名 .uni-btn-radius 可以使用圆角按钮" type="line">
			<view class="uni-ma-5">
				<button class="uni-btn" size="mini">默认按钮</button>
				<button class="uni-btn " size="mini">圆角</button>
			</view>
		</uni-section>
		<uni-section title="普通按钮" sub-title="指定不同的 type 属性 ,展示不同类型按钮" type="line">
			<view class="uni-ma-5">
				<button class="uni-btn" type="primary" size="mini">primary</button>
				<button class="uni-btn" type="success" size="mini">success</button>
				<button class="uni-btn" type="warning" size="mini">warning</button>
				<button class="uni-btn" type="error" size="mini">error</button>
				<button class="uni-btn" type="info" size="mini">info</button>
			</view>
		</uni-section>
		<uni-section title="朴素按钮" sub-title="添加类名 .uni-btn-plain 使用朴素按钮" type="line">
			<view class="uni-ma-5">
				<button class="uni-btn uni-btn-plain" type="primary" size="mini">primary</button>
				<button class="uni-btn uni-btn-plain" type="success" size="mini">success</button>
				<button class="uni-btn uni-btn-plain" type="warning" size="mini">warning</button>
				<button class="uni-btn uni-btn-plain" type="error" size="mini">error</button>
				<button class="uni-btn uni-btn-plain" type="info" size="mini">info</button>
			</view>
		</uni-section>
		<uni-section title="大小" sub-title="添加类名 .uni-btn-small .uni-btn-mini 展示按钮的不同大小" type="line">
			<view class="uni-ma-5">
				<button class="uni-btn" type="primary" size="mini">default</button>
				<button class="uni-btn uni-btn-small" type="primary" size="mini">samll</button>
				<button class="uni-btn uni-btn-mini" type="primary" size="mini">mini</button>
			</view>
		</uni-section>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		onLoad() {},
		methods: {}
	}
</script>
<style lang="scss">

</style>
