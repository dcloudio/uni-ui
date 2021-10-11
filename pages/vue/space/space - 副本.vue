<template>
	<view>
		<uni-card :is-shadow="false" is-full >
			<view>使用间距辅助类对元素快速应用 <text class="uni-primary uni-px-3">margin</text> 或 <text class="uni-primary uni-px-3">padding</text> 样式， 范围是从 0 到 16。</view>
			<view class="uni-mt-5">规则为 <text class="uni-primary uni-pl-3">uni-${property}${direction}-${size}</text></view>
			<view class="uni-mt-5">各值的含义请参考文档</view>
		</uni-card>
		<uni-section title="外边距" type="line">
			<view class="margin ">
				<view class="margin-item uni-primary-bg">
					<text class="uni-white">通过下面的按钮控制外边距</text>
				</view>
			</view>
			<view class="actions">
				<view class="action-label">类型</view><uni-data-checkbox v-model="typeData" :localdata="marginData"></uni-data-checkbox>
			</view>
			<view class="actions">
				<view class="action-label">位置</view><uni-data-checkbox v-model="formData" :localdata="marginData"></uni-data-checkbox>
			</view>
			<view class="actions">
				<view class="action-label">大小</view><uni-data-checkbox v-model="formData" :localdata="marginData"></uni-data-checkbox>
			</view>
		</uni-section>
		<uni-section title="内边距" type="line">

		</uni-section>
	</view>
</template>
<script>
	export default {
			data(){
				return {
					formData:'a',
					marginData:[{
						value:'a',
						text:'a'
					}]
				}
			}
	}
</script>
<style>
	.margin {
		display: flex;
		height: 100px;
		margin: 10px;
		overflow: hidden;
		border-radius: 5px;
		border: 1px #eee solid;
		box-sizing: border-box;
	}
	.margin-item {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
	}
	.actions {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.action-label {
		width: 50px;
		margin-left: 10px;
	}
</style>
