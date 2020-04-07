<template>
	<view class="uni-fab-box">
		<view class="uni-padding-wrap">
			<view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="switchBtn(0)"><text
				 class="word-btn-white">切换菜单({{ directionStr }}显示)</text></view>
			<view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="switchBtn('left', 'bottom')"><text
				 class="word-btn-white">左下角显示</text></view>
			<view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="switchBtn('right', 'bottom')"><text
				 class="word-btn-white">右下角显示</text></view>
			<view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="switchBtn('left', 'top')"><text
				 class="word-btn-white">左上角显示</text></view>
			<view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="switchBtn('right', 'top')"><text
				 class="word-btn-white">右上角显示</text></view>
		</view>
		<uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical" :direction="direction"
		 @trigger="trigger" @fabClick="fabClick" />
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				title: 'uni-fab',
				directionStr: '垂直',
				horizontal: 'left',
				vertical: 'bottom',
				direction: 'horizontal',
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: '#007AFF'
				},
				content: [{
						iconPath: '/static/component.png',
						selectedIconPath: '/static/componentHL.png',
						text: '组件',
						active: false
					},
					{
						iconPath: '/static/api.png',
						selectedIconPath: '/static/apiHL.png',
						text: 'API',
						active: false
					},
					{
						iconPath: '/static/template.png',
						selectedIconPath: '/static/templateHL.png',
						text: '模版',
						active: false
					}
				]
			}
		},
		onBackPress() {
			if (this.$refs.fab.isShow) {
				this.$refs.fab.close()
				return true
			}
			return false
		},
		methods: {
			trigger(e) {
				console.log(e)
				this.content[e.index].active = !e.item.active
				uni.showModal({
					title: '提示',
					content: `您${this.content[e.index].active ? '选中了' : '取消了'}${e.item.text}`,
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定')
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})
			},
			fabClick() {
				uni.showToast({
					title: '点击了悬浮按钮',
					icon: 'none'
				})
			},
			switchBtn(hor, ver) {
				if (hor === 0) {
					this.direction = this.direction === 'horizontal' ? 'vertical' : 'horizontal'
					this.directionStr = this.direction === 'horizontal' ? '垂直' : '水平'
				} else {
					this.horizontal = hor
					this.vertical = ver
				}
				this.$forceUpdate()
			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';


	/* #ifndef APP-NVUE */
	page {
		height: 100vh;
	}

	/* #endif */

	.uni-fab-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.uni-padding-wrap {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.word-btn {
		width: 250px;
	}
</style>
