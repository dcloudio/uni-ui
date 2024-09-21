<template>
	<view class="home-container">
		<view class="home-header">
			<image class="home-header__bg" src="../../static/image/uniui-header-bg.png" mode="widthFix"></image>
			<image class="home-header__logo" src="../../static/image/uniui-logo.png" mode="aspectFit"></image>
			<view class="home-header__content">
				<view class="home-header__content-title">全端兼容 高性能</view>
				<view><text class="home-header__content-subtitle">uni-ui 是 DCloud 官方面向uni-app开发者提供的一套 ui 解决方案</text>
				</view>
			</view>
		</view>

		<view class="home-content">
			<uni-card is-shadow padding="0">
				<uni-section title="辅助样式" sub-title="引入 uni-sass 后通过辅助样式提升快捷布局能力" color="#007aff" type="line"
					style="margin-top: 0;"></uni-section>
				<uni-list>
					<uni-list-item show-arrow :thumb="'/static/icons/'+layout.url+'.png'"
						v-for="(layout, index) in styles" :key="index" :title="layout.name" link
						:to='`/pages/${platform}/${layout.url}/${layout.url}`' />
				</uni-list>
				<uni-section title="基础组件" sub-title="封装常用功能的组件" color="#007aff" type="line"></uni-section>
				<uni-list>
					<uni-list-item show-arrow :thumb="'/static/icons/'+view.url+'.png'" v-for="(view, index) in views"
						:key="index" :title="view.name" link :to='`/pages/${platform}/${view.url}/${view.url}`' />
				</uni-list>
				<uni-section title="布局组件" sub-title="使复杂的布局变得简单" color="#007aff" type="line" style="margin-top: 0;">
				</uni-section>
				<uni-list>
					<uni-list-item show-arrow :thumb="'/static/icons/'+layout.url+'.png'"
						v-for="(layout, index) in layouts" :key="index" :title="layout.name" link
						:to='`/pages/${platform}/${layout.url}/${layout.url}`' />
				</uni-list>

				<uni-section title="表单组件" color="#007aff" type="line"></uni-section>
				<uni-list>
					<uni-list-item show-arrow :thumb="'/static/icons/'+view.url+'.png'" v-for="(view, index) in forms"
						:key="index" :title="view.name" link :to='`/pages/${platform}/${view.url}/${view.url}`' />
				</uni-list>
				<uni-section title="DataCom组件" color="#007aff" type="line"></uni-section>
				<uni-list>
					<uni-list-item show-arrow :thumb="'/static/icons/'+view.url+'.png'" v-for="(view, index) in dataComs"
						:key="index" :title="view.name" link :to='`/pages/${platform}/${view.url}/${view.url}`' />
				</uni-list>
				<uni-section title="功能组件" color="#007aff" type="line"></uni-section>
				<uni-list>
					<uni-list-item show-arrow :thumb="'/static/icons/'+func.url+'.png'"
						v-for="(func, index) in functionals" :key="index" :title="func.name" link
						:to='`/pages/${platform}/${func.url}/${func.url}`' />
				</uni-list>
				<uni-section title="导航" color="#007aff" type="line"></uni-section>
				<uni-list>
					<uni-list-item show-arrow :thumb="'/static/icons/'+navi.url+'.png'"
						v-for="(navi, index) in navigations" :key="index" :title="navi.name" link
						:to='`/pages/${platform}/${navi.url}/${navi.url}`' />
				</uni-list>
			</uni-card>
		</view>


	</view>
</template>
<script>
	export default {
		components: {},
		data() {
			return {
				styles: [{
					name: '字体',
					url: 'font'
				}, {
					name: '颜色',
					url: 'color'
				}, {
					name: '间距',
					url: 'space'
				}, {
					name: '圆角',
					url: 'radius'
				}, {
					name: 'Button 按钮',
					url: 'button'
				}],
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
						name: 'table 表格',
						url: 'table'
					},
					{
						name: 'Title 章节标题',
						url: 'title'
					},
					{
						name: 'Layout 布局',
						url: 'row'
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
						name: 'Tag 标签',
						url: 'tag'
					}, {
						name: 'Transition 过渡动画',
						url: 'transition'
					}
				],
				forms: [{
						name: 'Easyinput 增强输入框',
						url: 'easyinput'
					}, {
						name: 'Form 表单',
						url: 'forms'
					}, {
						name: 'Group 分组',
						url: 'group'
					}, {
						name: 'FilePicker 文件选择上传',
						url: 'file-picker'
					}, {
						name: 'NumberBox 数字输入框',
						url: 'number-box'
					}
				],
				dataComs: [{
						name: 'DataCheckbox 单选复选框',
						url: 'data-checkbox'
					},
					{
						name: 'DataSelect 下拉框选择器',
						url: 'data-select'
					},
					// #ifndef MP-KUAISHOU
					{
						name: 'DataPicker 级联选择',
						url: 'data-picker'
					},
					// #endif
					// #ifndef APP-NVUE || MP-KUAISHOU || MP-LARK || MP-BAIDU
					{
						name: 'DatetimePicker 日期时间选择',
						url: 'datetime-picker'
					}
					// #endif
				],
				functionals: [
					{
						name: 'Calendar 日历',
						url: 'calendar'
					},
					{
						name: 'Collapse 折叠面板',
						url: 'collapse'
					},
					// #ifndef APP-NVUE
					{
						name: 'Combox 组合输入框',
						url: 'combox'
					},
					// #endif
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
					// #ifndef APP-NVUE || MP-KUAISHOU || MP-LARK
					{
						name: 'SwipeAction 滑动操作',
						url: 'swipe-action'
					},
					// #endif
					{
						name: 'SearchBar 搜索栏',
						url: 'search-bar'
					},
					{
						name: 'Dateformat 日期格式化',
						url: 'dateformat'
					},
					{
						name: 'Tooltip 文字提示',
						url: 'tooltip'
					}
				],
				navigations: [{
						name: 'Breadcrumb 面包屑',
						url: 'breadcrumb'
					}, {
						name: 'NavBar 导航栏',
						url: 'nav-bar'
					},
					{
						name: 'GoodsNav 商品导航',
						url: 'goods-nav'
					}
				],
				platform: 'vue'
			}
		},
		methods: {}
	}
</script>

<style lang="scss">
	.home-container {
		position: relative;
		background-color: #fff;
		overflow: hidden;
	}

	.home-header {
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		/* #ifndef APP-NVUE */
		box-sizing: border-box;

		/* #endif */
		&__bg {
			display: flex;
			margin-top: 20px;
			/* #ifdef APP-NVUE */
			flex: 1;
			/* #endif */
			/* #ifndef APP-NVUE */
			width: 100%;
			/* #endif */
		}

		&__logo {
			position: absolute;
			top: 22px;
			left: 20px;
			width: 70px;
			height: 20px;
			z-index: 1;
		}

		&__content {
			position: absolute;
			top: 58px;
			left: 48px;
			width: 200px;
			z-index: 1;

			&-title {
				font-size: 16px;
				font-weight: 600;
				color: #1F1F1F;
			}

			&-subtitle {
				margin-top: 8px;
				font-size: 12px;
				font-weight: 400;
				color: #666;
			}
		}
	}

	.home-content {
		margin-top: 170px;
		overflow: hidden;
	}
</style>
