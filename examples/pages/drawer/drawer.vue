<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="example">
			<view class="example-title">左侧滑出</view>
			<view>
				<button type="default" @click="show('left')">显示Drawer</button>
				<uni-drawer :visible="showLeft" mode="left" @close="closeDrawer('left')">
					<uni-list>
						<uni-list-item title="Item1"></uni-list-item>
						<uni-list-item title="Item2"></uni-list-item>
						<uni-list-item title="Item3" show-badge="true" badge-text="12"></uni-list-item>
					</uni-list>
					<view class="close">
						<button type="default" @click="hide">关闭Drawer</button>
					</view>
				</uni-drawer>
			</view>
			<view class="example-title">右侧滑出</view>
			<view>
				<button type="default" @click="show('right')">显示Drawer</button>
				<uni-drawer :visible="showRigth" mode="right" @close="closeDrawer('right')">
					<uni-list>
						<uni-list-item title="Item1"></uni-list-item>
						<uni-list-item title="Item2"></uni-list-item>
						<uni-list-item title="Item3" show-badge="true" badge-text="12"></uni-list-item>
					</uni-list>
					<view class="close">
						<button type="default" @click="hide">关闭Drawer</button>
					</view>
				</uni-drawer>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				showRigth: false,
				showLeft: false,
				title: 'Drawer'
			}
		},
		methods: {
			show(e) {
				if (e === 'left') {
					this.showLeft = true
				} else {
					this.showRigth = true
				}
			},
			hide() {
				this.showLeft = false
				this.showRigth = false
			},
			closeDrawer(e) {
				if (e === 'left') {
					this.showLeft = false
				} else {
					this.showRigth = false
				}
			}
		},
		onBackPress() {
			if (this.showRigth || this.showLeft) {
				this.hide()
				return true
			}
		}
	}
</script>

<style>
	.close {
		padding: 30upx;
	}
</style>
