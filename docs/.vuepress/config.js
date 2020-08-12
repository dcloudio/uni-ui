module.exports = {
	title: 'uni-ui',
	description: 'uni-ui 的描述',
	markdown: {
		// 显示行号
		lineNumbers: true,
		extractHeaders: ['h2', 'h3', 'h4']
	},
	themeConfig: {
		logo: {
			img: '//img-cdn-qiniu.dcloud.net.cn/uniapp/doc/uniapp4@2x.png',
			link: 'https://uniapp.dcloud.io'
		},
		subLogo: {
			img: '//img-cdn-qiniu.dcloud.net.cn/uniapp/doc/logo2@2x.png',
			link: 'https://dcloud.io'
		},
		nav: [{
				text: 'uni-app官网',
				link: 'https://uniapp.dcloud.io/'
			},
			{
				text: '插件市场',
				link: 'https://ext.dcloud.net.cn/plugin?id=55'
			}

		],
		repo: 'dcloudio/uni-ui', // git 仓库
		repoLabel: '查看源码', // git 仓库显示文字
		docsDir: 'docs',
		docsBranch: 'master',
		editLinks: true,
		editLinkText: '在 GitHub 上编辑此页面！',
		smoothScroll: true, //开启滚动效果
		sidebarDepth: 0, //嵌套标题深度
		lastUpdated: '最后更新时间', // 最后更新时间
		sidebar: [
			'/',
			'/quickstart',
			'/changelog.md',
			'/questions.md',
			{
				path: 'https://cn.vuejs.org/v2/style-guide/',
				title: '风格指南'
			},
			{
				title: '基础组件', // 必要的
				collapsable: false, // 可选的, 默认值是 true,
				children: [{
						path: '/components/badge.md',
						title: '数字角标',
						subTitle: 'badge'
					},
					{
						path: '/components/fab.md',
						title: '悬浮按钮',
						subTitle: 'fab'
					},
					{
						path: '/components/fav.md',
						title: '收藏按钮',
						subTitle: 'fav'
					},
					{
						path: '/components/icons.md',
						title: '图标',
						subTitle: 'icons'
					},
					{
						path: '/components/notice-bar.md',
						title: '通告栏',
						subTitle: 'notice-bar'
					},
					{
						path: '/components/number-box.md',
						title: '数字输入框',
						subTitle: 'number-box'
					},
					{
						path: '/components/tag.md',
						title: '标签',
						subTitle: 'tag'
					},
					{
						path: '/components/transition.md',
						title: '过度动画',
						subTitle: 'transition'
					}
				]
			},
			{
				title: '布局组件',
				collapsable: false, // 可选的, 默认值是 true,
				children: [{
						path: '/components/card.md',
						title: '卡片',
						subTitle: 'card'
					},
					{
						path: '/components/grid.md',
						title: '宫格',
						subTitle: 'grid'
					},
					{
						path: '/components/list.md',
						title: '列表',
						subTitle: 'list'
					},
					{
						path: '/components/section.md',
						title: '标题栏',
						subTitle: 'section'
					},
					{
						path: '/components/title.md',
						title: '章节标题',
						subTitle: 'title'
					}
				]
			},
			{
				title: '功能组件',
				collapsable: false, // 可选的, 默认值是 true,
				children: [{
						path: '/components/calendar.md',
						title: '日历',
						subTitle: 'calendar'
					},
					{
						path: '/components/collapse.md',
						title: '折叠面板',
						subTitle: 'collapse'
					},
					{
						path: '/components/combox.md',
						title: '组合框',
						subTitle: 'combox'
					},
					{
						path: '/components/countdown.md',
						title: '倒计时',
						subTitle: 'countdown'
					},
					{
						path: '/components/drawer.md',
						title: '抽屉',
						subTitle: 'drawer'
					},
					{
						path: '/components/indexed-list.md',
						title: '索引列表',
						subTitle: 'indexed-list'
					},
					{
						path: '/components/link.md',
						title: '链接',
						subTitle: 'link'
					},
					{
						path: '/components/load-more.md',
						title: '加载更多',
						subTitle: 'load-more'
					},
					{
						path: '/components/pagination.md',
						title: '分页器',
						subTitle: 'pagination'
					},
					{
						path: '/components/popup.md',
						title: '弹出层',
						subTitle: 'popup'
					},
					{
						path: '/components/rate.md',
						title: '评分',
						subTitle: 'rate'
					},
					{
						path: '/components/search-bar.md',
						title: '搜索栏',
						subTitle: 'search-bar'
					},
					{
						path: '/components/segmented-control.md',
						title: '分段器',
						subTitle: 'segmented-control'
					},
					{
						path: '/components/steps.md',
						title: '步骤条',
						subTitle: 'steps'
					},
					{
						path: '/components/swipe-action.md',
						title: '滑动操作',
						subTitle: 'swipe-action'
					},
					{
						path: '/components/swiper-dot.md',
						title: '轮播图指示点',
						subTitle: 'swiper-dot'
					}
				]
			}
		]
	}
}
