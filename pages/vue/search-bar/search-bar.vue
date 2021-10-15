<template>
	<view>
		<uni-card is-full>
			<text class="uni-h6">搜索栏组件，通常用于搜索商品、文章等</text>
		</uni-card>

		<uni-section title="基本用法" type="line" style="background-color: #f5f5f5;">
		</uni-section>
		<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input"
			@cancel="cancel" @clear="clear">
		</uni-search-bar>
		<view class="search-result">
			<text class="search-result-text">当前输入为：{{ searchValue }}</text>
		</view>
		<uni-section title="自定义样式" type="line" style="background-color: #f5f5f5;">
			<uni-search-bar placeholder="自定义背景色" bgColor="#EEEEEE" @confirm="search" />
		</uni-section>
		<uni-section title="自定义icon" type="line" style="background-color: #f5f5f5;">
			<uni-search-bar placeholder="自定义searchIcon" @confirm="search" @cancel="cancel" cancel-text="cancel">
				<uni-icons slot="searchIcon" color="#999999" size="18" type="home" />
			</uni-search-bar>
		</uni-section>
		<uni-section title="控制清除/取消按钮" type="line" style="background-color: #f5f5f5;">
			<uni-search-bar radius="5" placeholder="一直显示" clearButton="always" cancelButton="always" @confirm="search"
				@cancel="cancel" />
			<uni-search-bar class="uni-mt-10" radius="5" placeholder="自动显示隐藏" clearButton="auto" cancelButton="none" @confirm="search" />
			<uni-search-bar class="uni-mt-10" radius="100" placeholder="一直不显示" clearButton="none" cancelButton="none" @confirm="search" />
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchValue: '123123'
			}
		},
		methods: {
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			input(res) {
				console.log('----input:', res)
			},
			clear(res) {
				uni.showToast({
					title: 'clear事件，清除值为：' + res.value,
					icon: 'none'
				})
			},
			blur(res) {
				uni.showToast({
					title: 'blur事件，输入值为：' + res.value,
					icon: 'none'
				})
			},
			focus(e) {
				uni.showToast({
					title: 'focus事件，输出值为：' + e.value,
					icon: 'none'
				})
			},
			cancel(res) {
				uni.showToast({
					title: '点击取消，输入值为：' + res.value,
					icon: 'none'
				})
			}
		},
		onBackPress() {
			// #ifdef APP-PLUS
			plus.key.hideSoftKeybord();
			// #endif
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

	.search-result {
		margin-top: 10px;
		margin-bottom: 20px;
		text-align: center;
	}

	.search-result-text {
		text-align: center;
		font-size: 14px;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 0px;
	}
	
	.uni-mt-10 {
		margin-top: 10px;
	}
</style>
