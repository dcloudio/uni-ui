<template>
	<view>
		<text class="example-info">列表组件可以在其中使用图标、略缩图或放置任何你想放的元素，使用场景如：导航菜单、列表、设置中心排版等</text>
		<uni-section title="基础用法" type="line"></uni-section>
		<uni-list>
			<uni-list-item title="列表文字" />
			<uni-list-item title="列表文字" note="列表描述信息" />
			<uni-list-item :disabled="true" title="列表禁用状态" />
		</uni-list>
		<uni-section title="点击反馈" type="line"></uni-section>
		<uni-list>
			<uni-list-item title="弹窗提示" clickable @click="onClick($event,0)" />
			<uni-list-item title="switchTab 到首页" link="switchTab" :to="`/pages/${platform}/index/index`" @click="onClick($event,1)" />
		</uni-list>
		<uni-section title="菜单列表" type="line"></uni-section>
		<uni-list>
			<uni-list-item title="列表右侧带箭头" link rightText="右侧文字" />
			<uni-list-item :show-badge="true" title="列表右侧带箭头 + 角标" link badge-text="12" />
		</uni-list>
		<uni-list>
			<uni-list-item title="列表左侧带略缩图" note="列表描述信息" link thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
			 thumb-size="lg" rightText="右侧文字" />
			<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="列表左侧带扩展图标" />
			<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon3" :show-switch="true" title="列表右侧带 switch"
			 @switchChange="switchChange" />
			<uni-list-item :disabled="true" :show-extra-icon="true" :extra-icon="extraIcon2" :show-switch="true" :switch-checked="true"
			 title="禁用状态" @switchChange="switchChange" />
		</uni-list>
		<uni-section title="不显示分割线" type="line"></uni-section>
		<uni-list :border="false">
			<uni-list-item title="列表文字" />
			<uni-list-item title="列表文字" note="列表描述信息" />
			<uni-list-item :disabled="true" title="列表禁用状态" />
		</uni-list>
		<uni-section title="自定义插槽" type="line"></uni-section>
		<uni-list>
			<uni-list-item>
				<view class="slot-box">
					<image class="slot-image" src="/static/logo.png" mode="widthFix"></image>
					<text class="slot-text">自定义左侧插槽</text>
				</view>
			</uni-list-item>
			<uni-list-item title="自定义右侧插槽">
				<template slot="right">
					<image class="slot-image" src="/static/logo.png" mode="widthFix"></image>
				</template>
			</uni-list-item>
		</uni-list>
		<uni-section title="列表扩展" type="line"></uni-section>
		<uni-list>
			<!-- <uni-list-item title="广告组件" link :to="`/pages/${platform}/list/ad`" @click="onClick($event,1)" /> -->
			<uni-list-item title="聊天列表" link :to="`/pages/${platform}/list/chat`" @click="onClick($event,1)" />
		</uni-list>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				extraIcon1: {
					color: '#007aff',
					size: '22',
					type: 'gear-filled'
				},
				extraIcon2: {
					color: '#4cd964',
					size: '22',
					type: 'image'
				},
				extraIcon3: {
					color: '#999',
					size: '22',
					type: 'mail-open'
				},
				// #ifdef APP-NVUE
				platform:'nvue',
				// #endif
				// #ifndef APP-NVUE
				platform:'vue'
				// #endif
			}
		},
		methods: {
			onClick(event, type) {
				if (type === 0) {
					uni.showToast({
						title: '点击反馈'
					})
				} else {
					console.log(event.data);
				}
			},
			switchChange(e) {
				uni.showToast({
					title: 'change:' + e.value,
					icon: 'none'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

	.slot-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
	}

	.slot-image {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		width: 30px;
		height: 30px;
	}

	.slot-text {
		font-size: 14px;
		margin-left: 10px;
		color: #4cd964;
	}
</style>
