<template>
	<view>
		<text class="example-info">列表组件可以在其中使用图标、略缩图或放置任何你想放的元素，使用场景如：导航菜单、列表、设置中心排版等</text>
		<uni-section title="基础用法" type="line"></uni-section>
		<uni-list>
			<uni-list-item title="列表文字" rightText="右侧文字" />
			<uni-list-item title="列表文字" note="列表描述信息" rightText="右侧文字" />
		</uni-list>
		<uni-section title="禁用列表" type="line"></uni-section>
		<uni-list><uni-list-item :disabled="true" title="列表禁用状态" rightText="右侧文字" /></uni-list>
		<uni-section title="展示箭头" type="line"></uni-section>
		<uni-list>
			<uni-list-item showArrow title="列表文字" />
			<uni-list-item showArrow title="列表文字" rightText="右侧文字" />
		</uni-list>
		<uni-section title="点击反馈" type="line"></uni-section> 
		<uni-list>
			<uni-list-item title="弹窗提示" clickable @click="onClick" />
			<uni-list-item title="页面跳转" link :to="`./chat`" />
		</uni-list>
		<uni-section title="不显示分割线" type="line"></uni-section>
		<uni-list :border="false">
			<uni-list-item title="列表文字" />
			<uni-list-item title="列表文字" note="列表描述信息" rightText="右侧文字" />
		</uni-list>

		<uni-section title="文字溢出隐藏" type="line"></uni-section>
		<uni-list>
			<uni-list-item
				:ellipsis="1"
				title="列表 title 超长文字显示一行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字"
				showArrow
				rightText="右侧文字"
			/>
			<uni-list-item
				:ellipsis="2"
				title="列表 title 超长文字显示二行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字"
				showArrow
				rightText="右侧文字"
			/>
			<uni-list-item title="列表 title 全部显示,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字" showArrow rightText="右侧文字" />
		</uni-list>

		<uni-section title="显示图标或图片" type="line"></uni-section>
		<uni-list>
			<uni-list-item title="列表左侧带略缩图" note="列表描述信息" showArrow thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" thumb-size="sm" rightText="小图" />

			<uni-list-item title="列表左侧带略缩图" note="列表描述信息" showArrow thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" thumb-size="base" rightText="默认" />
			<uni-list-item title="列表左侧带略缩图" note="列表描述信息" showArrow thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" thumb-size="lg" rightText="大图" />
			<uni-list-item :show-extra-icon="true" showArrow :extra-icon="extraIcon" title="列表左侧带扩展图标" />
		</uni-list>
		<uni-section title="右侧显示 switch/badge" type="line"></uni-section>
		<uni-list>
			<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon" :show-badge="true" badge-text="99" showArrow title="禁用状态" @switchChange="switchChange" />
			<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon" :show-switch="true" title="列表右侧带 switch" @switchChange="switchChange" />
			<uni-list-item
				:disabled="true"
				:show-extra-icon="true"
				:extra-icon="extraIcon"
				:show-switch="true"
				:switch-checked="true"
				title="禁用状态"
				@switchChange="switchChange"
			/>
		</uni-list>
		<uni-section title="使用插槽" type="line"></uni-section>
		<uni-list>
			<uni-list-item>
				<view class="slot-box">
					<text class="slot-text">默认插槽</text>
					<uni-badge text="2" type="primary" />
				</view>
			</uni-list-item>
			<uni-list-item title="自定义右侧插槽" note="列表描述信息" link>
				<template slot="right">
					<image class="slot-image" src="/static/logo.png" mode="widthFix"></image>
				</template>
			</uni-list-item>
			<uni-list-item>
				<view slot="left" class="slot-box"><image class="slot-image" src="/static/logo.png" mode="widthFix"></image></view>
				<text class="slot-text">自定义左侧插槽</text>
				<template slot="right">
					<image class="slot-image" src="/static/logo.png" mode="widthFix"></image>
				</template>
			</uni-list-item>
		</uni-list>

		<!-- <uni-section title="基础用法" type="line"></uni-section>
		<uni-list>
			<uni-list-item title="列表文字" />
			<uni-list-item title="列表文字" note="列表描述信息" />
			<uni-list-item :disabled="true" title="列表禁用状态" />
		</uni-list>
		<uni-section title="点击反馈" type="line"></uni-section>
		<uni-list>
			<uni-list-item title="弹窗提示" clickable @click="onClick($event,0)" />
			<uni-list-item title="页面跳转" link :to="`./chat`" @click="onClick($event,1)" />
		</uni-list>
		<uni-section title="菜单列表" type="line"></uni-section>
		<uni-list>
			<uni-list-item title="列表右侧带箭头" link rightText="右侧文字" />
			<uni-list-item :ellipsis="1"  title="列表 title 超长文字会溢出隐藏,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字" link rightText="右侧文字" />
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
				<view slot="left" class="slot-box">
					<image class="slot-image" src="/static/logo.png" mode="widthFix"></image>
				</view>
				<text class="slot-text">自定义左侧插槽</text>
				<template slot="right">
					<image class="slot-image" src="/static/logo.png" mode="widthFix"></image>
				</template>
			</uni-list-item>
			<uni-list-item title="自定义右侧插槽" link>
				<template slot="right">
					<image class="slot-image" src="/static/logo.png" mode="widthFix"></image>
				</template>
			</uni-list-item>
		</uni-list>
		<uni-section title="列表扩展" type="line"></uni-section>
		<uni-list>
			<uni-list-item title="聊天列表" link :to="`./chat`" @click="onClick($event,1)" />
		</uni-list> -->
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			extraIcon: {
				color: '#4cd964',
				size: '22',
				type: 'gear-filled'
			}
		};
	},
	methods: {
		onClick() {
			uni.showToast({
				title: '点击反馈'
			});
		},
		switchChange(e) {
			uni.showToast({
				title: 'change:' + e.value,
				icon: 'none'
			});
		}
	}
};
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
	margin-right: 10px;
	width: 30px;
	height: 30px;
}

.slot-text {
	font-size: 14px;
	color: #4cd964;
	margin-right: 10px;
}
</style>
