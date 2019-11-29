
当前 `uni-ui` 版本可以在 `nvue` 页面中使用，因为 `nvue` 的特性，故 `uni-ui` 大部分组件样式有较大改动，您如果觉得最新的 `nvue` 版本有兼容问题，可以使用 [vue](https://github.com/dcloudio/uni-ui/tree/last-vue)  版本

### uni ui产品特点

1. 高性能

目前为止，在小程序和混合app领域，暂时还没有比uni ui更高性能的框架。
- 自动差量更新数据

虽然uni-app支持小程序自定义组件，所有小程序的ui库都可以用。但小程序自定义组件的ui库都需要使用setData手动更新数据，在大数据量时、或高频更新数据时，很容易产生性能问题。

而uni ui属于vue组件，uni-app引擎底层自动diff更新数据。当然其实插件市场里众多vue组件都具备这个特点。
- 优化逻辑层和视图层通讯折损

非H5，不管是小程序还是App，不管是app的webview渲染还是原生渲染，全都是逻辑层和视图层分离的。这里就有一个逻辑层和视图层通讯的折损问题。
比如在视图层拖动一个可跟手的组件，由于通讯的损耗，用js监听很难做到实时跟手。

这时就需要使用css动画以及平台底层提供的wxs、bindingx等技术。不过这些技术都比较复杂，所以uni ui里做了封装，在需要跟手式操作的ui组件，比如swiperaction列表项左滑菜单，就在底层使用了这些技术，实现了高性能的交互体验
- 背景停止

很多ui组件是会一直动的，比如轮播图、跑马灯。即便这个窗体被新窗体挡住，它在背景层仍然在消耗着硬件资源。在Android的webview版本为chrome66以上，背景操作ui会引发很严重的性能问题，造成前台界面明显卡顿。

而uni ui的组件，会自动判断自己的显示状态，在组件不再可见时，不会再消耗硬件资源。

2. 全端

uni ui的组件都是多端自适应的，底层会抹平很多小程序平台的差异或bug。

比如导航栏navbar组件，会自动处理不同端的状态栏。
比如swiperaction组件，在app和微信小程序上会使用交互体验更好的wxs技术，但在不支持wxs的其他小程序端会使用js模拟类似效果。

uni ui还支持nvue原生渲染，[详见](https://github.com/dcloudio/uni-ui/tree/nvue-uni-ui)

未来uni ui还会支持pc等大屏设备。

3. 与uni统计自动集成实现免打点

uni统计是优秀的多端统计平台，见[tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)。

除了一张报表看全端，它的另一个重要特点是免打点。
比如使用uni ui的navbar标题栏、收藏、购物车等组件，均可实现自动打点，统计页面标题等各种行为数据。
当然你也可以关闭uni统计，这不是强制的。

4. 主题扩展

uni ui支持[uni.scss](https://uniapp.dcloud.io/collocation/uni-scss)，可以方便的切换App的风格。

ui是一种需求非常发散的产品，DCloud官方也无意用uni ui压制第三方ui插件的空间，但官方有义务在性能和多端方面提供一个开源的标杆给大家。

我们欢迎更多优秀的ui组件出现，也欢迎更多人贡献uni ui的主题风格，满足更多用户的需求。

### uni-ui 使用说明

#### 初始化项目

在 HBuilderX 中新建 uni-app 项目，进入项目目录，执行：

```
npm init -y
```

#### 安装 uni-ui

```
npm install @dcloudio/uni-ui
```

#### 使用 uni-ui

在 ``script`` 中引用组件：

```javascript
import {uniBadge} from '@dcloudio/uni-ui'
//import uniBadge from '@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue' //也可使用此方式引入组件
export default {
    components: {uniBadge}
}
```

在 ``template`` 中使用组件：

```html
<uni-badge text="1"></uni-badge>
<uni-badge text="2" type="success" @click="bindClick"></uni-badge>
<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
```


#### uni-ui 已支持的组件列表

|组件名							|引用路径																																|说明																										|
|---								|---																																		|---																										|
|uniBadge						|'@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue'													|[数字角标](https://ext.dcloud.net.cn/plugin?id=21)			|
|uniCalendar				| '@dcloudio/uni-ui/lib/uni-calendar/uni-calendar.vue'									|[日历](https://ext.dcloud.net.cn/plugin?id=56)					|
|uniCard						|'@dcloudio/uni-ui/lib/uni-card/uni-card.vue'														|[卡片](https://ext.dcloud.net.cn/plugin?id=22)					|
|uniCollapse				| '@dcloudio/uni-ui/lib/uni-collapse/uni-collapse.vue'									|[折叠面板](https://ext.dcloud.net.cn/plugin?id=23)			|
|uniCountdown				|'@dcloudio/uni-ui/lib/uni-countdown/uni-countdown.vue'								| [倒计时](https://ext.dcloud.net.cn/plugin?id=25)			|
|uniDrawer					|'@dcloudio/uni-ui/lib/uni-drawer/uni-drawer.vue'												|[抽屉](https://ext.dcloud.net.cn/plugin?id=26)					|
|uniFab							|'@dcloudio/uni-ui/lib/uni-fab/uni-fab.vue'															|[悬浮按钮](https://ext.dcloud.net.cn/plugin?id=144)		|
|uniFav							| '@dcloudio/uni-ui/lib/uni-fav/uni-fav.vue'														|[收藏按钮](https://ext.dcloud.net.cn/plugin?id=864)		|
|uniGoodsNav				| '@dcloudio/uni-ui/lib/uni-goods-nav/uni-goods-nav.vue'								|[商品导航](https://ext.dcloud.net.cn/plugin?id=865)		|
|uniGrid						| '@dcloudio/uni-ui/lib/uni-grid/uni-grid.vue'													|[宫格](https://ext.dcloud.net.cn/plugin?id=27)					|
|uniIcons						|'@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'													|[图标](https://ext.dcloud.net.cn/plugin?id=28)					|
|uniIndexedList			|'@dcloudio/uni-ui/lib/uni-indexed-list/uni-indexed-list.vue'						| [索引列表](https://ext.dcloud.net.cn/plugin?id=375)		|
|uniList						| '@dcloudio/uni-ui/lib/uni-list/uni-list.vue'													|[列表](https://ext.dcloud.net.cn/plugin?id=24)					|
|uniLoadMore				| '@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.vue'								|[加载更多](https://ext.dcloud.net.cn/plugin?id=29)			|
|uniNavBar					|'@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.vue'											|[自定义导航栏](https://ext.dcloud.net.cn/plugin?id=52)	|
|uniNoticeBar				|'@dcloudio/uni-ui/lib/uni-notice-bar/uni-notice-bar.vue'								|[通告栏](https://ext.dcloud.net.cn/plugin?id=30)				|
|uniNumberBox				|'@dcloudio/uni-ui/lib/uni-number-box/uni-number-box.vue'								|[数字输入框](https://ext.dcloud.net.cn/plugin?id=31)		|
|uniPagination			|'@dcloudio/uni-ui/lib/uni-pagination/uni-pagination.vue'								|[分页器](https://ext.dcloud.net.cn/plugin?id=32)				|
|uniPopup						| '@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue'											|[弹出层](https://ext.dcloud.net.cn/plugin?id=329)			|
|uniRate						|'@dcloudio/uni-ui/lib/uni-rate/uni-rate.vue'														|[评分](https://ext.dcloud.net.cn/plugin?id=33)					|
|uniSearchBar				| '@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.vue'							|[搜索栏](https://ext.dcloud.net.cn/plugin?id=866)			|
|uniSegmentedControl|'@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.vue'	|[分段器](https://ext.dcloud.net.cn/plugin?id=54)				|
|uniSteps						|'@dcloudio/uni-ui/lib/uni-steps/uni-steps.vue'													|[步骤条](https://ext.dcloud.net.cn/plugin?id=34)				|
|uniSwipeAction			| '@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.vue'					|[滑动操作](https://ext.dcloud.net.cn/plugin?id=181)		|
|uniSwiperDot				|'@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot.vue'								|[轮播图指示点](https://ext.dcloud.net.cn/plugin?id=284)|
|uniTag							| '@dcloudio/uni-ui/lib/uni-tag/uni-tag.vue'														|[标签](https://ext.dcloud.net.cn/plugin?id=35)					|


#### 其他

- uni-ui 是全端兼容的基于flex布局的、无dom的ui库
- uni-ui 是uni-app内置组件的扩展。注意与web开发不同，uni-ui不包括基础组件，它是基础组件的补充。web开发中有的开发者习惯用一个ui库完成所有开发，但在uni-app体系中，推荐开发者首先使用性能更高的基础组件，然后按需引入必要的扩展组件。
- 本页面介绍使用 npm 的安装使用方式，也可单独下载相关组件直接使用，组件下载地址见上表
- uni-ui 不支持使用 Vue.use() 的方式安装
- uni-ui 依赖 scss，若是 HBuilderX 中创建的 uni-app 项目，需要在 HBuilderX 中安装 scss 插件；如果是使用 cli 创建的 uni-app 项目，需要在项目下npm安装 node-sass 和 sass-loader
- 如果在涉及slot的组件中使用v-for等语法，需要使用自定义组件编译模式，[详见](https://ask.dcloud.net.cn/article/35843)


### 贡献代码
在使用 `uni-ui` 中，如遇到无法解决的问题，请提 [Issues](https://github.com/dcloudio/uni-ui/issues) 给我们，假如您有更好的点子或更好的实现方式，也欢迎给我们提交 [PR](https://github.com/dcloudio/uni-ui/pulls)