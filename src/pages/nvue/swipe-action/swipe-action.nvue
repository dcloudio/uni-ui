<template>
	<view>
		<uni-section title="基本用法" type="line"></uni-section>
		<uni-swipe-action>
			<uni-swipe-action-item :options="options1" @click="bindClick">
				<text class="cont">SwipeAction 基础使用场景</text>
			</uni-swipe-action-item>
		</uni-swipe-action>
		<uni-section title="禁止滑动" type="line"></uni-section>
		<uni-swipe-action>
			<uni-swipe-action-item :disabled="true">
				<text class="cont">SwipeAction 禁止滑动展示</text>
			</uni-swipe-action-item>
		</uni-swipe-action>
		<uni-section title="使用变量控制开关" type="line"></uni-section>
		<view class="example-body">
			<view class="button" @click="setOpened"><text class="button-text">当前状态：{{ isOpened ? '开' : '关' }}</text></view>
		</view>
		<uni-swipe-action>
			<uni-swipe-action-item :options="options2" :show="isOpened" :auto-close="false" @change="change" @click="bindClick">
				<text class="cont">使用变量控制SwipeAction的开启状态</text>
			</uni-swipe-action-item>
		</uni-swipe-action>

		<uni-section title="swipe-action 列表" type="line"></uni-section>
		<uni-swipe-action>
			<uni-swipe-action-item v-for="(item,index) in swipeList" :options="item.options" :key="item.id"
			 @change="swipeChange" @click="swipeClick($event,index)">
				<text class="cont">{{item.content}}</text>
			</uni-swipe-action-item>
		</uni-swipe-action>
	</view>
</template>

<script>
	export default {
		components: {},
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
				swipeList: [{
					options: [{
						text: '添加',
						style: {
							backgroundColor: 'rgb(255,58,49)'
						}
					}],
					id: 0,
					content: 'item1'
				}, {
					id: 1,
					options: [{
						text: '置顶'
					}, {
						text: '删除',
						style: {
							backgroundColor: 'rgb(255,58,49)'
						}
					}],
					content: 'item2'
				}, {
					id: 2,
					options: [{
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
					}],
					content: 'item3'
				}]
				// options3: [{
				// 	text: '置顶'
				// }, {
				// 	text: '标记为已读',
				// 	style: {
				// 		backgroundColor: 'rgb(254,156,1)'
				// 	}
				// }, {
				// 	text: '删除',
				// 	style: {
				// 		backgroundColor: 'rgb(255,58,49)'
				// 	}
				// }]
			}
		},
		onReady() {
			this.$nextTick(() => {
				this.isOpened = true
			})
		},
		methods: {
			bindClick(e) {
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
				console.log('返回：', e);
			},
			swipeChange(e) {
				console.log('返回：', e);
			},
			swipeClick(e, index) {
				let {
					content
				} = e
				if (content.text === '删除') {
					uni.showModal({
						title: '提示',
						content: '是否删除',
						success: (res) => {
							if (res.confirm) {
								this.swipeList.splice(index, 1)
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				} else if (content.text === '添加') {
					if (this.swipeList.length < 10) {
						this.swipeList.push({
							id: new Date().getTime(),
							options: [{
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
							}],
							content: '新增'
						})
						uni.showToast({
							title: `添加了一条数据`,
							icon: 'none'
						})
					} else {
						uni.showToast({
							title: `最多添加十条数据`,
							icon: 'none'
						})
					}
				} else {
					uni.showToast({
						title: `点击了${e.content.text}按钮`,
						icon: 'none'
					})
				}

			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

	.cont {
		flex:1;
		height: 45px;
		line-height: 45px;
		padding: 0 15px;
		position: relative;
		background-color: #fff;
		font-size: 15px;
		border-bottom-color: #F5F5F5;
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		padding: 10px 0;
		background-color: #fff;
	}

	.button {
		border-color: #e5e5e5;
		border-style: solid;
		border-width: 1px;
		padding: 4px 8px;
		border-radius: 4px;
	}

	.button-text {
		font-size: 15px;
	}
</style>
