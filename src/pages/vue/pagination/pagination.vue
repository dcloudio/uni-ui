<template>
	<view>
		<uni-section title="默认样式" type="line"></uni-section>
		<view class="example-body">
			<uni-pagination :total="50" title="标题文字" />
		</view>
		<uni-section title="修改按钮文字" type="line"></uni-section>
		<view class="example-body">
			<uni-pagination :total="50" title="标题文字" prev-text="前一页" next-text="后一页" />
		</view>
		<uni-section title="图标样式" type="line"></uni-section>
		<view class="example-body">
			<uni-pagination :show-icon="true" :total="50" title="标题文字" />
		</view>
		<uni-section title="修改数据长度" type="line"></uni-section>
		<view class="example-body">
			<uni-pagination :current="current" :total="total" title="标题文字" :show-icon="true" @change="change" />
		</view>
		<view class="btn-view">
			<view>
				<text class="example-info">当前页：{{ current }}，数据总量：{{ total }}条，每页数据：{{ pageSize }}</text>
			</view>
			<view class="button word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="add"><text
				 class="word-btn-white">增加10条数据</text></view>
			<button class="button" type="default" @click="reset">重置数据</button>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				current: 1,
				total: 0,
				pageSize: 10
			}
		},
		methods: {
			add() {
				this.total += 10
			},
			reset() {
				this.total = 0
				this.current = 1
			},
			change(e) {
				console.log(e)
				this.current = e.current
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/common/uni-nvue.scss';

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}

	.btn-view {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		padding: 15px;
		text-align: center;
		background-color: #fff;
		justify-content: center;
		align-items: center;
	}

	.button {
		margin-bottom: 20px;
		width: 350px;
	}
</style>
