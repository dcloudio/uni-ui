<template>
	<view>
		<view class="index-box">
			<!-- #ifdef APP-NVUE -->
			<text class="index-text">当前页面为 nvue 页面引用 uni-ui 组件示例</text>
			<!-- #endif -->
			<!-- #ifndef APP-NVUE -->
			<text class="index-text">当前页面为 vue 页面引用 uni-ui 组件示例</text>
			<!-- #endif -->
		</view>

		<uni-section title="布局组件" type="line"></uni-section>
		<uni-list>
			<uni-list-item v-for="(layout, index) in layouts" :key="index" :title="layout.name" @click="goDetailPage(layout)" />
		</uni-list>
		<uni-section title="基础组件" type="line"></uni-section>
		<uni-list>
			<uni-list-item v-for="(view, index) in views" :key="index" :title="view.name" @click="goDetailPage(view)" />
		</uni-list>
		<uni-section title="功能组件" type="line"></uni-section>
		<uni-list>
			<uni-list-item v-for="(func, index) in functionals" :key="index" :title="func.name" @click="goDetailPage(func)" />
		</uni-list>
		<uni-section title="导航" type="line"></uni-section>
		<uni-list>
			<uni-list-item v-for="(navi, index) in navigations" :key="index" :title="navi.name" @click="goDetailPage(navi)" />
		</uni-list>
	</view>
</template>
<script>
	export default {
		components: {},
		data() {
			return {
				layouts: [{
						name: 'Card 卡片',
						url: 'card'
					},
					{
						name: 'Grid 宫格',
						url: 'grid'
					},
					{
						name: 'List 列表',
						url: 'list'
					},
					{
						name: 'Title 章节标题',
						url: 'title'
					},
					{
						name: 'Section 标题栏',
						url: 'section'
					}
				],
				views: [{
						name: 'Badge 数字角标',
						url: 'badge'
					},
					{
						name: 'Fab 悬浮按钮',
						url: 'fab'
					},
					{
						name: 'Fav 收藏按钮',
						url: 'fav'
					},
					{
						name: 'Icons 图标',
						url: 'icons'
					},
					{
						name: 'NoticeBar 通告栏',
						url: 'notice-bar'
					},
					{
						name: 'NumberBox 数字输入框',
						url: 'number-box'
					},
					{
						name: 'Tag 标签',
						url: 'tag'
					}, {
						name: 'Transition 过渡动画',
						url: 'transition'
					}
				],
				functionals: [{
						name: 'Calendar 日历',
						url: 'calendar'
					},
					{
						name: 'Collapse 折叠面板',
						url: 'collapse'
					},
					{
						name: 'Combox 组合输入框',
						url: 'combox'
					},
					{
						name: 'Drawer 抽屉',
						url: 'drawer'
					},
					{
						name: 'Pagination 分页器',
						url: 'pagination'
					},
					{
						name: 'SwiperDot 轮播图指示点',
						url: 'swiper-dot'
					},
					{
						name: 'Steps 步骤条',
						url: 'steps'
					},
					{
						name: 'SegmentedControl 分段器',
						url: 'segmented-control'
					},
					{
						name: 'Countdown 倒计时',
						url: 'countdown'
					},
					{
						name: 'Rate 评分',
						url: 'rate'
					},
					{
						name: 'Popup 弹出层',
						url: 'popup'
					},
					{
						name: 'IndexedList 索引列表',
						url: 'indexed-list'
					},
					{
						name: 'Link 超链接',
						url: 'link'
					},
					{
						name: 'LoadMore 加载更多',
						url: 'load-more'
					},
					{
						name: 'SwipeAction 滑动操作',
						url: 'swipe-action'
					},
					{
						name: 'SearchBar 搜索栏',
						url: 'search-bar'
					}
				],
				navigations: [{
						name: 'NavBar 导航栏',
						url: 'nav-bar'
					},
					{
						name: 'GoodsNav 商品导航',
						url: 'goods-nav'
					}
				]
			}
		},
		methods: {
			goDetailPage(e) {
				let path = e.url
				// #ifdef APP-NVUE
				uni.navigateTo({
					url: `/pages/nvue/${path}/${path}`
				})
				// #endif
				// #ifndef APP-NVUE
				uni.navigateTo({
					url: `/pages/vue/${path}/${path}`
				})
				// #endif
			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

	.index-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		height: 50px;
		padding: 0 15px;
	}

	.index-text {
		font-size: 14px;
		color: #666;
	}
</style>
