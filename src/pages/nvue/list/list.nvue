<template>
	<view>
		<text class="example-info">列表组件可以在其中使用图标、略缩图或放置任何你想放的元素，使用场景如：导航菜单、列表、设置中心排版等</text>
		<uni-section title="基础用法" type="line"></uni-section>
		<uni-list>
			<uni-list-item :show-arrow="false" title="列表文字" />
			<uni-list-item :show-arrow="false" title="列表文字" note="列表描述信息" />
			<uni-list-item :disabled="true" :show-arrow="false" title="列表禁用状态" />
		</uni-list>
		<uni-section title="菜单列表" type="line"></uni-section>
		<uni-list>
			<uni-list-item title="列表右侧带箭头" rightText="右侧文字" />
			<uni-list-item title="右侧插槽" :showArrow="false">
				<template v-slot:right="">
					<image style="width: 40px;height: 40px;" src="/static/logo.png" mode="widthFix"></image>
				</template>
			</uni-list-item>
			<uni-list-item :show-badge="true" title="列表右侧带箭头 + 角标" badge-text="12" />
			<uni-list-item title="列表左侧带略缩图" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" />
			<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="列表左侧带扩展图标" />
			<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" :show-switch="true" title="列表右侧带 switch"
			 @switchChange="switchChange" />
			<uni-list-item :disabled="true" :show-extra-icon="true" :extra-icon="extraIcon2" :show-switch="true" :switch-checked="true"
			 title="禁用状态" @switchChange="switchChange" />
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
				}
			}
		},
		methods: {
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
</style>
