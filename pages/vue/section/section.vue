<template>
	<view class="uni-wrap">
		<scroll-view class="scroll" scroll-y>
			<view class="example-info">
				<text class="example-info-text"> uni-section 组件主要用于文章、列表详情等标题展示 </text>
			</view>
			<uni-section class="mb-10" title="基础用法" sub-title="副标题"></uni-section>
			<uni-section class="mb-10" title="竖线装饰" sub-title="副标题" type="line"></uni-section>
			<uni-section class="mb-10" title="装饰器插槽" sub-title="副标题">
        <template v-slot:decoration>
          <view class="decoration"></view>
        </template>
      </uni-section>
			<uni-section class="mb-10" title="默认插槽" sub-title="副标题" padding="0 0 5px 10px">默认插槽内容</uni-section>
			<uni-section class="mb-10" title="主标题">
				<template v-slot:right>
					right 插槽
				</template>
			</uni-section>
      <uni-section class="mb-10" title="主标题">
				默认插槽内容 padding=false
			</uni-section>
      <uni-section class="mb-10" title="主标题" padding>
				默认插槽内容 padding=true
			</uni-section>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onReady() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">

	.uni-wrap {
		flex-direction: column;
		/* #ifdef H5 */
		height: calc(100vh - 44px);
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		flex: 1;
	}

	.scroll {
		flex-direction: column;
		flex: 1;
	}

	.mb-10 {
		margin-bottom: 10px;
	}

  .decoration{
    width: 0;
    height: 0;
    margin: -4px 4px 0 -3px;
    border-top: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 8px solid $uni-primary;
    border-left: 5px solid transparent;
  }
</style>
