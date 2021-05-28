<template>
	<view class="example-fav">
		<uni-section title="基本用法" type="line"></uni-section>
		<view class="example-body example-body-first">
			<uni-fav :checked="checkList[0]" class="favBtn" @click="favClick(0)" />
			<uni-fav :checked="checkList[1]" :star="false" class="favBtn" @click="favClick(1)" />
			<uni-fav :checked="checkList[2]" class="favBtn" :circle="true" bg-color="#dd524d" bg-color-checked="#007aff"
			 fg-color="#ffffff" fg-color-checked="#ffffff" @click="favClick(2)" />
			<uni-fav :checked="checkList[3]" class="favBtn" bg-color="#f8f8f8" bg-color-checked="#eeeeee" fg-color="#333333"
			 fg-color-checked="#333333" @click="favClick(3)" />
		</view>
		<uni-section title="自定义文字" type="line"></uni-section>
		<view class="example-body">
			<uni-fav :checked="checkList[4]" :content-text="contentText" class="favBtn" @click="favClick(4)" />
		</view>
		<uni-section title="在自定义导航栏使用" type="line"></uni-section>
		<view class="example-body example-body-fullWidth">
			<uni-nav-bar style="width: 100%;" :fixed="false" left-icon="arrowleft" title="标题" color="#333333" background-color="#FFFFFF">
				<block slot="right">
					<uni-fav :checked="checkList[5]" class="favBtn-nav" :circle="true" @click="favClick(5)" />
				</block>
			</uni-nav-bar>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				checkList: [false, false, false, false, false, false],
				contentText: {
					contentDefault: '追番',
					contentFav: '已追番'
				}
			}
		},
		methods: {
			favClick(index) {
				this.checkList[index] = !this.checkList[index]
				this.$forceUpdate()
			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

	/* #ifdef MP-ALIPAY */
	.uni-fav {
		margin-left: 20rpx;
	}

	/* #endif */


	.favBtn {
		margin: 0 20rpx 20rpx 0;
	}


	.example-body-fullWidth {
		padding: 32rpx 0;
	}

	.example-body-first {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: flex-start;
	}

	.favBtn-nav {
		// left:-50rpx;
	}
</style>
