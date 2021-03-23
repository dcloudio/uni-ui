
### uni-ui产品特点

1. 高性能

目前为止，在小程序和混合app领域，暂时还没有比 `uni-ui` 更高性能的框架。
- 自动差量更新数据

虽然uni-app支持小程序自定义组件，所有小程序的ui库都可以用。但小程序自定义组件的ui库都需要使用setData手动更新数据，在大数据量时、或高频更新数据时，很容易产生性能问题。

而 `uni-ui` 属于vue组件，uni-app引擎底层自动diff更新数据。当然其实插件市场里众多vue组件都具备这个特点。
- 优化逻辑层和视图层通讯折损

非H5，不管是小程序还是App，不管是app的webview渲染还是原生渲染，全都是逻辑层和视图层分离的。这里就有一个逻辑层和视图层通讯的折损问题。
比如在视图层拖动一个可跟手的组件，由于通讯的损耗，用js监听很难做到实时跟手。

这时就需要使用css动画以及平台底层提供的wxs、bindingx等技术。不过这些技术都比较复杂，所以 `uni-ui` 里做了封装，在需要跟手式操作的ui组件，比如swiperaction列表项左滑菜单，就在底层使用了这些技术，实现了高性能的交互体验
- 背景停止

很多ui组件是会一直动的，比如轮播图、跑马灯。即便这个窗体被新窗体挡住，它在背景层仍然在消耗着硬件资源。在Android的webview版本为chrome66以上，背景操作ui会引发很严重的性能问题，造成前台界面明显卡顿。

而 `uni-ui` 的组件，会自动判断自己的显示状态，在组件不再可见时，不会再消耗硬件资源。

2. 全端

 `uni-ui` 的组件都是多端自适应的，底层会抹平很多小程序平台的差异或bug。

比如导航栏navbar组件，会自动处理不同端的状态栏。
比如swiperaction组件，在app和微信小程序上会使用交互体验更好的wxs技术，但在不支持wxs的其他小程序端会使用js模拟类似效果。

未来 `uni-ui` 还会支持pc等大屏设备。

3. 与uni统计自动集成实现免打点

uni统计是优秀的多端统计平台，见[tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)。

除了一张报表看全端，它的另一个重要特点是免打点。
比如使用 `uni-ui` 的navbar标题栏、收藏、购物车等组件，均可实现自动打点，统计页面标题等各种行为数据。
当然你也可以关闭uni统计，这不是强制的。

4. 主题扩展

 `uni-ui` 支持[uni.scss](https://uniapp.dcloud.io/collocation/uni-scss)，可以方便的切换App的风格。

ui是一种需求非常发散的产品，DCloud官方也无意用 `uni-ui` 压制第三方ui插件的空间，但官方有义务在性能和多端方面提供一个开源的标杆给大家。

我们欢迎更多优秀的ui组件出现，也欢迎更多人贡献 `uni-ui` 的主题风格，满足更多用户的需求。

### uni-ui 使用说明

#### 方式1 (推荐)

`HBuilderX 2.5.5`起支持 `easycom` 组件模式。在使用 `uni-ui` 的时候，只要[`uni-ui` 组件](https://ext.dcloud.net.cn/plugin?id=55) 安装在项目的 `components` 目录下,并符合 `components/组件名称/组件名称.vue` 目录结构。就可以不用引用、注册，直接在页面中使用 `uni-ui` 组件

`easycom` 组件模式的好处在于不管 `components` 目录下安装了多少组件，`easycom` 打包后会自动剔除没有使用的组件，对组件库的使用尤为友好,组件库批量安装，随意使用，自动按需打包。 关于 `easycom` 更详细内容 [参考文档](https://uniapp.dcloud.io/collocation/pages?id=easycom)


#### 方式2（vue-cli + easycom）

**初始化项目**

如果是使用 `HBuiderX` 创建的项目，需先执行以下命令初始化：

```
npm init -y
```

**安装 uni-ui**

```
npm i @dcloudio/uni-ui --save

npm i sass -D

npm i sass-loader -D
```

**easycom**

> 如按需引用，相互引用的组件需要手动添加依赖，所以，建议统一使用 easycom

安装好 `uni-ui` 之后，需要配置 `easycom` 规则，让 `npm` 安装的组件支持  `easycom`

打开项目根目录下的 `pages.json` 并添加 `easycom` 节点：

```javascript
// pages.json

{
	"easycom": {
		"autoscan": true,
		"custom": {
			// uni-ui 规则如下配置
			"^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
		}
	},
	
	// 其他内容
	pages:[
		// ...
	]
}

```

#### uni-ui 已支持的组件列表 
组件名|组件说明
---|---
uniBadge|[数字角标](https://ext.dcloud.net.cn/plugin?id=21)
uniCalendar|[日历](https://ext.dcloud.net.cn/plugin?id=56)
uniCard|[卡片](https://ext.dcloud.net.cn/plugin?id=22)
uniCollapse|[折叠面板](https://ext.dcloud.net.cn/plugin?id=23)
uniCombox|[组合框](https://ext.dcloud.net.cn/plugin?id=1261)
uniCountdown|[倒计时](https://ext.dcloud.net.cn/plugin?id=25)
uniDataCheckbox|[数据选择器](https://ext.dcloud.net.cn/plugin?id=3456)
uniDateformat|[日期格式化](https://ext.dcloud.net.cn/plugin?id=3279)
uniDatetimePicker|[日期格式化](https://ext.dcloud.net.cn/plugin?id=9999)
uniDrawer|[抽屉](https://ext.dcloud.net.cn/plugin?id=26)
uniEasyinput|[增强输入框](https://ext.dcloud.net.cn/plugin?id=3455)
uniFab|[悬浮按钮](https://ext.dcloud.net.cn/plugin?id=144)
uniFav|[收藏按钮](https://ext.dcloud.net.cn/plugin?id=864)
uniField|[输入框](https://ext.dcloud.net.cn/plugin?id=21001)
uniForms|[表单](https://ext.dcloud.net.cn/plugin?id=2773)
uniGoodsNav|[商品导航](https://ext.dcloud.net.cn/plugin?id=865)
uniGrid|[宫格](https://ext.dcloud.net.cn/plugin?id=27)
uniGroup|[分组](https://ext.dcloud.net.cn/plugin?id=21002)
uniIcons|[图标](https://ext.dcloud.net.cn/plugin?id=28)
uniIndexedList|[索引列表](https://ext.dcloud.net.cn/plugin?id=375)
uniLink|[超链接](https://ext.dcloud.net.cn/plugin?id=1182)
uniList|[列表](https://ext.dcloud.net.cn/plugin?id=24)
uniLoadMore|[加载更多](https://ext.dcloud.net.cn/plugin?id=29)
uniNavBar|[自定义导航栏](https://ext.dcloud.net.cn/plugin?id=52)
uniNoticeBar|[通告栏](https://ext.dcloud.net.cn/plugin?id=30)
uniNumberBox|[数字输入框](https://ext.dcloud.net.cn/plugin?id=31)
uniPagination|[分页器](https://ext.dcloud.net.cn/plugin?id=32)
uniPopUp|[弹出层](https://ext.dcloud.net.cn/plugin?id=329)
uniRate|[评分](https://ext.dcloud.net.cn/plugin?id=33)
uniSearchBar|[搜索栏](https://ext.dcloud.net.cn/plugin?id=866)
uniSegmentedControl|[分段器](https://ext.dcloud.net.cn/plugin?id=54)
uniSteps|[步骤条](https://ext.dcloud.net.cn/plugin?id=34)
uniSwipeAction|[滑动操作](https://ext.dcloud.net.cn/plugin?id=181)
uniSwiperDot|[轮播图指示点](https://ext.dcloud.net.cn/plugin?id=284)
uniTable|[表格](https://ext.dcloud.net.cn/plugin?id=3270)
uniTag|[标签](https://ext.dcloud.net.cn/plugin?id=35)
uniTitle|[章节标题](https://ext.dcloud.net.cn/plugin?id=1066)
uniTransition|[过渡动画](https://ext.dcloud.net.cn/plugin?id=985)

#### 其他

- uni-ui 是全端兼容的基于flex布局的、无dom的ui库
- uni-ui 是uni-app内置组件的扩展。注意与web开发不同，uni-ui不包括基础组件，它是基础组件的补充。web开发中有的开发者习惯用一个ui库完成所有开发，但在uni-app体系中，推荐开发者首先使用性能更高的基础组件，然后按需引入必要的扩展组件。
- uni-ui 不支持使用 Vue.use() 的方式安装
- uni-ui 依赖 scss，若是 HBuilderX 中创建的 uni-app 项目，需要在 HBuilderX 中安装 scss 插件；如果是使用 cli 创建的 uni-app 项目，需要在项目下npm安装 node-sass 和 sass-loader
- `CLI` 引用方式 `H5` 端不支持在 `main.js` 中全局注册组件，如有需求请使用 [easyCom](https://uniapp.dcloud.io/collocation/pages?id=easycom) 的方式引用组件

### 贡献代码
在使用 `uni-ui` 中，如遇到无法解决的问题，请提 [Issues](https://github.com/dcloudio/uni-ui/issues) 给我们，假如您有更好的点子或更好的实现方式，也欢迎给我们提交 [PR](https://github.com/dcloudio/uni-ui/pulls)
