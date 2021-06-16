module.exports = {
	title: '',
	description: 'uni-ui 的描述',
	markdown: {
		// 显示行号
		lineNumbers: false,
		extractHeaders: ['h2', 'h3', 'h4']
	},
	themeConfig: {
		logo: {
			img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/738873d6-ac99-4811-aafc-ab1ebc97a419.png',
			link: 'https://uniapp.dcloud.io'
		},
		subLogo: {
			img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/055240f8-880f-4c1a-b909-c64cb4894fa0.png',
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
		algolia: {
			apiKey: '48a1bc6e7170949bb834becb9d8815e5',
			indexName: 'dcloud_uniui'
		},
		base:'/uni-ui/',
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
				title: '风格指南',
			},
			{
				title: '基础组件', // 必要的
				collapsable: false, // 可选的, 默认值是 true,
				children: [{
						path: '/components/badge.md',
						title: '数字角标',
						subTitle: 'Badge'
					},
					{
						path: '/components/fab.md',
						title: '悬浮按钮',
						subTitle: 'Fab'
					},
					{
						path: '/components/fav.md',
						title: '收藏按钮',
						subTitle: 'Fav'
					},
					{
						path: '/components/icons.md',
						title: '图标',
						subTitle: 'Icons'
					},
					{
						path: '/components/notice-bar.md',
						title: '通告栏',
						subTitle: 'Notice-bar'
					},
					{
						path: '/components/number-box.md',
						title: '数字输入框',
						subTitle: 'NumberBox'
					},
					{
						path: '/components/tag.md',
						title: '标签',
						subTitle: 'Tag'
					},
					{
						path: '/components/transition.md',
						title: '过度动画',
						subTitle: 'Transition'
					}
				]
			},
			{
				title: '布局组件',
				collapsable: false, // 可选的, 默认值是 true,
				children: [{
						path: '/components/card.md',
						title: '卡片',
						subTitle: 'Card'
					},
					{
						path: '/components/grid.md',
						title: '宫格',
						subTitle: 'Grid'
					},
					{
						path: '/components/list.md',
						title: '列表',
						subTitle: 'List'
					},
					{
						path: '/components/section.md',
						title: '标题栏',
						subTitle: 'Section'
					},
					{
						path: '/components/title.md',
						title: '章节标题',
						subTitle: 'Title'
					},
					{
						path: '/components/row.md',
						title: 'Layout 布局',
						subTitle: 'Layout'
					}
				]
			},
			{
				title: '表单组件',
				collapsable: false, // 可选的, 默认值是 true,
				children: [{
						path: '/components/forms.md',
						title: '表单',
						subTitle: 'Forms'
					},{
						path: '/components/easyinput.md',
						title: '输入框',
						subTitle: 'Easyinput'
					},{
						path: '/components/data-checkbox.md',
						title: '单选多选框',
						subTitle: 'DataCheckbox'
					},{
						path: '/components/data-picker.md',
						title: '数据驱动的picker',
						subTitle: 'DataPicker'
					},{
						path: '/components/file-picker.md',
						title: '文件选择上传',
						subTitle: 'FilePicker'
					}
				]
			},
			{
				title: '功能组件',
				collapsable: false, // 可选的, 默认值是 true,
				children: [{
						path: '/components/calendar.md',
						title: '日历',
						subTitle: 'Calendar'
					},
					{
						path: '/components/collapse.md',
						title: '折叠面板',
						subTitle: 'Collapse'
					},
					{
						path: '/components/combox.md',
						title: '组合框',
						subTitle: 'Combox'
					},
					{
						path: '/components/countdown.md',
						title: '倒计时',
						subTitle: 'Countdown'
					},
					{
						path: '/components/drawer.md',
						title: '抽屉',
						subTitle: 'Drawer'
					},{
						path: '/components/dateformat.md',
						title: '时间格式化',
						subTitle: 'Dateformat'
					},
					{
						path: '/components/indexed-list.md',
						title: '索引列表',
						subTitle: 'IndexedList'
					},
					{
						path: '/components/link.md',
						title: '链接',
						subTitle: 'Link'
					},
					{
						path: '/components/load-more.md',
						title: '加载更多',
						subTitle: 'LoadMore'
					},
					{
						path: '/components/pagination.md',
						title: '分页器',
						subTitle: 'Pagination'
					},
					{
						path: '/components/popup.md',
						title: '弹出层',
						subTitle: 'Popup'
					},
					{
						path: '/components/rate.md',
						title: '评分',
						subTitle: 'Rate'
					},
					{
						path: '/components/search-bar.md',
						title: '搜索栏',
						subTitle: 'SearchBar'
					},
					{
						path: '/components/segmented-control.md',
						title: '分段器',
						subTitle: 'SegmentedControl'
					},
					{
						path: '/components/steps.md',
						title: '步骤条',
						subTitle: 'Steps'
					},
					{
						path: '/components/swipe-action.md',
						title: '滑动操作',
						subTitle: 'SwipeAction'
					},
					{
						path: '/components/swiper-dot.md',
						title: '轮播图指示点',
						subTitle: 'SwiperDot'
					}
				]
			}
		]
	},
	plugins: [
		['vuepress-plugin-code-copy', true],
		require('./plugins/mdstyles')
	]
}
