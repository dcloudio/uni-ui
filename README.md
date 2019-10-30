`uni-ui` 是基于 `uni-app` 框架而开发的全平台通用组件库，帮助开发者快速开发 `uni-app` 应用。

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
|uniCountDown				|'@dcloudio/uni-ui/lib/uni-count-down/uni-count-down.vue'								| [倒计时](https://ext.dcloud.net.cn/plugin?id=25)			|
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
|uniPopUp						| '@dcloudio/uni-ui/lib/uni-pop-up/uni-pop-up.vue'											|[弹出层](https://ext.dcloud.net.cn/plugin?id=329)			|
|uniRate						|'@dcloudio/uni-ui/lib/uni-rate/uni-rate.vue'														|[评分](https://ext.dcloud.net.cn/plugin?id=33)					|
|uniSearchBar				| '@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.vue'							|[搜索栏](https://ext.dcloud.net.cn/plugin?id=866)			|
|uniSegmentedControl|'@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.vue'	|[分段器](https://ext.dcloud.net.cn/plugin?id=54)				|
|uniSteps						|'@dcloudio/uni-ui/lib/uni-steps/uni-steps.vue'													|[步骤条](https://ext.dcloud.net.cn/plugin?id=34)				|
|uniSwipeAction			| '@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.vue'					|[滑动操作](https://ext.dcloud.net.cn/plugin?id=181)		|
|uniSwiperDot				|'@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot.vue'								|[轮播图指示点](https://ext.dcloud.net.cn/plugin?id=284)|
|uniTag							| '@dcloudio/uni-ui/lib/uni-tag/uni-tag.vue'														|[标签](https://ext.dcloud.net.cn/plugin?id=35)					|



**Tips**
- uni-ui 目前支持编译到：H5、App、小程序
- 本页面介绍使用 npm 的安装使用方式，也可到插件市场下载相关组件直接使用，组件下载地址见上表，点击中文名称可跳转 
- uni-ui 不支持使用 Vue.use() 的方式安装
- uni-ui 依赖 scss，若是 HBuilderX 中创建的 uni-app 项目，需要在 HBuilderX 中安装 scss 插件；如果是使用 cli 创建的 uni-app 项目，需要安装 node-sass 和 sass-loader
- uni-ui 请从使用npm安装或者从插件市场下载，因为 hello uni-app 中使用的 uni-ui 样式有一些改动，不建议直接从 hello uni-app 中拷贝使用


### 贡献代码
在使用 `uni-ui` 中，如遇到无法解决的问题，请提 [Issues](https://github.com/dcloudio/uni-ui/issues) 给我们，假如您有更好的点子或更好的实现方式，也欢迎给我们提交 [PR](https://github.com/dcloudio/uni-ui/pulls)