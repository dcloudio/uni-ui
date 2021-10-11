<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<view>使用间距辅助类对元素快速应用 <text class="uni-primary uni-px-3">margin</text> 或 <text class="uni-primary uni-px-3">padding</text> 样式， 范围是从 0 到 16。</view>
			<view class="uni-mt-5">规则为 <text class="uni-primary uni-pl-3">uni-${property}${direction}-${size}</text></view>
			<view class="uni-mt-5">各值的含义请参考文档</view>
		</uni-card>
		<uni-section title="效果展示" type="line">
			<view class="margin">
				<view class="margin-item uni-border-4-bg" :class="[paddingClass,marginClass]">
					<view class="box uni-primary-bg">
						<text class="uni-white">通过下面的选项控制边距</text>
					</view>
				</view>
			</view>
			<view class="actions uni-mt-10">
				<view class="action-label">外边距</view>
				<uni-data-checkbox  v-model="formData.margin" multiple :localdata="directionData" @change="change($event,1)"></uni-data-checkbox>
			</view>
			<view class="actions uni-mt-3 uni-mb-10">
				<view class="action-label">外边距大小</view>
				<uni-data-checkbox v-model="formData.marginSize" :localdata="sizeData" @change="change($event,1)"></uni-data-checkbox>
			</view>
			<view class="actions">
				<view class="action-label">内边距</view>
				<uni-data-checkbox v-model="formData.padding" multiple :localdata="directionData" @change="change($event,2)"></uni-data-checkbox>
			</view>
			<view class="actions uni-mt-3 uni-mb-10">
				<view class="action-label">内边距大小</view>
				<uni-data-checkbox v-model="formData.paddingSize" :localdata="sizeData" @change="change($event,3)"></uni-data-checkbox>
			</view>
		</uni-section>
	</view>
</template>
<script>
	export default {
			data(){
				return {
					paddingClass:'',
					marginClass:'',
					formData:{
						margin:[],
						marginSize:'0',
						padding:[],
						paddingSize:'0',
					},
					directionData:[{
						value:'t',
						text:'上'
					},{
						value:'r',
						text:'右'
					},{
						value:'b',
						text:'下'
					},{
						value:'l',
						text:'左'
					}],
					sizeData:[{
							value:'0',
							text:'0'
						},{
						value:'2',
						text:'4px'
					},{
						value:'5',
						text:'10px'
					},{
						value:'10',
						text:'20px'
					}]
				}
			},
			onLoad() {},
			methods:{
				change(e,type){
					let {margin,marginSize,padding,paddingSize} = this.formData
					this.marginClass = ''
					this.paddingClass = ''
					margin.forEach(v=>{
						this.marginClass += `uni-m${v}-${marginSize} `
					})
					padding.forEach(v=>{
						this.marginClass += `uni-p${v}-${paddingSize} `
					})
				}
			}
	}
</script>
<style>
	.margin {
		display: flex;
		height: 200px;
		margin: 10px;
		overflow: hidden;
		border-radius: 5px;
		border: 1px #eee solid;
		box-sizing: border-box;
	}
	.margin-item {
		display: flex;
		flex: 1;
	}
	.box {
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
		flex-shrink: 0;
		margin-left: 10px;
		margin-right: 10px;
	}
</style>
