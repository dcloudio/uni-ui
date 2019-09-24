### uni-ui 使用说明

自2019年9月11日起 `uni-ui` 项目重构为 `uni-app cli` 项目，项目示例可全平台编译查看效果。 [点击查看如何运行项目](https://uniapp.dcloud.io/quickstart?id=%e8%bf%90%e8%a1%8c%e5%b9%b6%e5%8f%91%e5%b8%83uni-app)

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

|组件名							|引用路径																																|说明																											|
|---								|---																																		|---																											|
|uniBadge						|'@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue'													|[数字角标](https://ext.dcloud.net.cn/plugin?id=21)				|
|uniCalendar				|'@dcloudio/uni-ui/lib/uni-calendar/uni-calendar.vue'										|[日历](https://ext.dcloud.net.cn/plugin?id=56)						|
|uniCard						|'@dcloudio/uni-ui/lib/uni-card/uni-card.vue'														|[卡片](https://ext.dcloud.net.cn/plugin?id=22)						|
|uniCollapse				|'@dcloudio/uni-ui/lib/uni-collapse/uni-collapse.vue'										|[折叠面板](http://ext.dcloud.net.cn/plugin?id=23)				|
|uniCollapseItem		|'@dcloudio/uni-ui/lib/uni-collapse-item/uni-collapse-item.vue'					|[折叠面板子组件](https://ext.dcloud.net.cn/plugin?id=23))|
|uniCountdown				|'@dcloudio/uni-ui/lib/uni-countdown/uni-countdown.vue'									|[倒计时](https://ext.dcloud.net.cn/plugin?id=25)					|
|uniDrawer					|'@dcloudio/uni-ui/lib/uni-drawer/uni-drawer.vue'												|[抽屉](https://ext.dcloud.net.cn/plugin?id=26)						|
|uniGrid						|'@dcloudio/uni-ui/lib/uni-grid/uni-grid.vue'														|[宫格](https://ext.dcloud.net.cn/plugin?id=27)						|
|uniIcons						|'@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'													|[图标](https://ext.dcloud.net.cn/plugin?id=28)						|
|uniList						|'@dcloudio/uni-ui/lib/uni-list/uni-list.vue'														|[列表](https://ext.dcloud.net.cn/plugin?id=24)						|
|uniListItem				|'@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.vue'									|[列表子组件](https://ext.dcloud.net.cn/plugin?id=24)			|
|uniLoadMore				|'@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.vue'									|[加载更多](https://ext.dcloud.net.cn/plugin?id=29)				|
|uniNoticeBar				|'@dcloudio/uni-ui/lib/uni-notice-bar/uni-notice-bar.vue'								|[通告栏](https://ext.dcloud.net.cn/plugin?id=30)					|
|uniNumberBox				|'@dcloudio/uni-ui/lib/uni-number-box/uni-number-box.vue'								|[数字输入框](https://ext.dcloud.net.cn/plugin?id=31)			|
|uniPagination			|'@dcloudio/uni-ui/lib/uni-pagination/uni-pagination.vue'								|[分页器](https://ext.dcloud.net.cn/plugin?id=32)					|
|uniPopup						|'@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue'													|[弹出层](https://ext.dcloud.net.cn/plugin?id=329)				|
|uniRate						|'@dcloudio/uni-ui/lib/uni-rate/uni-rate.vue'														|[评分](https://ext.dcloud.net.cn/plugin?id=33)						|
|uniSegmentedControl|'@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.vue'	|[分段器](https://ext.dcloud.net.cn/plugin?id=54)					|
|uniSteps						|'@dcloudio/uni-ui/lib/uni-steps/uni-steps.vue'													|[步骤条](https://ext.dcloud.net.cn/plugin?id=34)					|
|uniSwipeAction			|'@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.vue'						|[滑动操作](http://ext.dcloud.net.cn/plugin?id=181)				|
|uniSwipeDot				|'@dcloudio/uni-ui/lib/uni-swipe-dot/uni-swipe-dot.vue'									|[滑动操作](http://ext.dcloud.net.cn/plugin?id=284)				|
|uniTag							|'@dcloudio/uni-ui/lib/uni-tag/uni-tag.vue'															|[标签](https://ext.dcloud.net.cn/plugin?id=35)						|

#### 其他

- 本页面介绍使用 npm 的安装使用方式，也可下载相关组件直接使用，组件下载地址见上表
- uni-ui 不支持使用 Vue.use() 的方式安装
- uni-ui 依赖 scss，若是 HBuilderX 中创建的 uni-app 项目，需要在 HBuilderX 中安装 scss 插件；如果是使用 cli 创建的 uni-app 项目，需要安装 node-sass 和 sass-loader
- 如将 cli 项目拖入到 HBuilderX 中运行出现 node-sass 报错，只需将 src 目录拖入到 HBuilderX 中运行即可