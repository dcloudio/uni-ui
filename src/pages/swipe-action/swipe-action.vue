<template>
	<view>
		<uni-section title="基本用法" type="line"></uni-section>
		<uni-swipe-action :options="options2" @click="bindClick">
			<text class="cont">SwipeAction 基础使用场景</text>
		</uni-swipe-action>
		<uni-section title="禁止滑动" type="line"></uni-section>
		<uni-swipe-action :disabled="true">
			<text class="cont">SwipeAction 禁止滑动展示</text>
		</uni-swipe-action>
		<uni-section title="使用变量控制开关" type="line"></uni-section>
		<view class="example-body">
			<view class="button" @click="setOpened"><text class="button-text">当前状态：{{ isOpened ? '开' : '关' }}</text></view>
		</view>
		<uni-swipe-action :options="options2" :show="isOpened" :auto-close="false" @change="change">
			<text class="cont">使用变量控制SwipeAction的开启状态</text>
		</uni-swipe-action>
		<uni-section title="与 List 组件一起使用" type="line"></uni-section>
		<uni-list>
			<uni-swipe-action :options="options1">
				<uni-list-item :show-arrow="false" title="item1" />
			</uni-swipe-action>
			<uni-swipe-action :options="options2">
				<uni-list-item :show-arrow="false" title="item2" />
			</uni-swipe-action>
			<uni-swipe-action :options="options3">
				<uni-list-item :show-arrow="false" title="item3" />
			</uni-swipe-action>
		</uni-list>
	</view>
</template>

<script>
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components: {
			uniSection,
			uniSwipeAction,
			uniList,
			uniListItem
		},
		data() {
			return {
				isOpened: false,
				options1: [{
					text: '取消置顶'
				}],
				options2: [{
					text: '取消',
					style: {
						backgroundColor: '#007aff'
					}
				}, {
					text: '确认',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
				options3: [{
					text: '置顶'
				}, {
					text: '标记为已读',
					style: {
						backgroundColor: 'rgb(254,156,1)'
					}
				}, {
					text: '删除',
					style: {
						backgroundColor: 'rgb(255,58,49)'
					}
				}]
			}
		},
		onReady() {
			this.$nextTick(() => {
				this.isOpened = true
			})
		},
		methods: {
			bindClick(e) {
				console.log(e)
				uni.showToast({
					title: `点击了${e.content.text}按钮`,
					icon: 'none'
				})
			},
			setOpened() {
				this.isOpened = !this.isOpened
			},
			change(e) {
				this.isOpened = e
			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

	.cont {
		height: 90rpx;
		line-height: 90rpx;
		padding: 0 30rpx;
		position: relative;
		background-color: #fff;
		font-size: 30rpx;
	}

	.example-body {
		/* #ifndef APP-NUVE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		padding: 20rpx 0;
	}

	.button {
		border-color: #E7E7E7;
		border-style: solid;
		border-width: 1px;
		padding: 8rpx 16rpx;
		border-radius: 8rpx;
	}

	.button-text {
		font-size: 30rpx;
	}
</style>
