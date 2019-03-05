<template>
	<view>
		<view class="example-title">基础用法</view>
		<uni-collapse @change="change">
			<uni-collapse-item title="标题文字">
				<uni-list>
					<uni-list-item title="标题文字" thumb="http://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
					<uni-list-item title="标题文字" note="描述信息" thumb="http://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"></uni-list-item>
					<uni-list-item title="标题文字" note="描述信息" show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
				</uni-list>
			</uni-collapse-item>
			<uni-collapse-item title="默认开启" open="true">
				<view style="padding: 30upx;"> 折叠内容主体，可自定义内容及样式 </view>
			</uni-collapse-item>
			<uni-collapse-item title="禁用状态" disabled="true">
				<view style="padding: 30upx;"> 禁用状态 </view>
			</uni-collapse-item>
		</uni-collapse>
		<view class="example-title">手风琴效果</view>
		<uni-collapse accordion="true">
			<uni-collapse-item title="标题文字">
				<view style="padding: 30upx;">
					手风琴效果
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="标题文字">
				<view style="padding: 30upx;">
					手风琴效果
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="标题文字">
				<view style="padding: 30upx;">
					手风琴效果
				</view>
			</uni-collapse-item>
		</uni-collapse>
		<view class="example-title">动画效果</view>
		<uni-collapse>
			<uni-collapse-item title="容器进行动画" animation="outer">
				<view style="padding: 30upx;">
					折叠内容主体，可自定义内容及样式
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="内容进行动画" animation="inner">
				<view style="padding: 30upx;">
					折叠内容主体，可自定义内容及样式
				</view>
			</uni-collapse-item>
		</uni-collapse>
		<view class="example-title">配置图标</view>
		<uni-collapse>
			<uni-collapse-item title="标题文字" thumb="http://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png">
				<view style="padding: 30upx;">
					折叠内容主体，可自定义内容及样式
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="标题文字" thumb="http://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png">
				<view style="padding: 30upx;">
					折叠内容主体，可自定义内容及样式
				</view>
			</uni-collapse-item>
		</uni-collapse>
		<view style="height: 60upx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ["asdasd", "asdsadasd"]
			}
		},
		methods: {
			change(e) {
				console.log(e)
			}
		}
	}
</script>

<style>
</style>
