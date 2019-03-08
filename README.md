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

|组件名			|引用路径														|说明			|
|---|---|---|
|uniBadge		|'@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue'					|[数字角标](https://ext.dcloud.net.cn/plugin?id=21)|
|uniCard		|'@dcloudio/uni-ui/lib/uni-card/uni-card.vue'					|[卡片](https://ext.dcloud.net.cn/plugin?id=22)			|
|uniCollapse	|'@dcloudio/uni-ui/lib/uni-collapse/uni-collapse.vue'			|[折叠面板](http://ext.dcloud.net.cn/plugin?id=23)		|
|uniCollapseItem|'@dcloudio/uni-ui/lib/uni-collapse-item/uni-collapse-item.vue'	|[折叠面板子组件](https://www.npmjs.com/package/@dcloudio/(https://ext.dcloud.net.cn/plugin?id=23))	|
|uniCountdown	|'@dcloudio/uni-ui/lib/uni-countdown/uni-countdown.vue'			|[倒计时](https://ext.dcloud.net.cn/plugin?id=25)			|
|uniDrawer		|'@dcloudio/uni-ui/lib/uni-drawer/uni-drawer.vue'				|[抽屉](https://ext.dcloud.net.cn/plugin?id=26)			|
|uniGrid		|'@dcloudio/uni-ui/lib/uni-grid/uni-grid.vue'					|[宫格](https://ext.dcloud.net.cn/plugin?id=27)			|
|uniIcon		|'@dcloudio/uni-ui/lib/uni-icon/uni-icon.vue'					|[图标](https://ext.dcloud.net.cn/plugin?id=28)			|
|uniList		|'@dcloudio/uni-ui/lib/uni-list/uni-list.vue'					|[列表](https://ext.dcloud.net.cn/plugin?id=24)			|
|uniListItem	|'@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.vue'			|[列表子组件](https://ext.dcloud.net.cn/plugin?id=24)		|
|uniLoadMore	|'@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.vue'			|[加载更多](https://ext.dcloud.net.cn/plugin?id=29)		|
|uniNoticeBar	|'@dcloudio/uni-ui/lib/uni-notice-bar/uni-notice-bar.vue'		|[通告栏](https://ext.dcloud.net.cn/plugin?id=30)			|
|uniNumberBox	|'@dcloudio/uni-ui/lib/uni-number-box/uni-number-box.vue'		|[数字输入框](https://ext.dcloud.net.cn/plugin?id=31)		|
|uniPagination	|'@dcloudio/uni-ui/lib/uni-pagination/uni-pagination.vue'		|[分页器](https://ext.dcloud.net.cn/plugin?id=32)			|
|uniRate		|'@dcloudio/uni-ui/lib/uni-rate/uni-rate.vue'					|[评分](https://ext.dcloud.net.cn/plugin?id=33)			|
|uniSteps		|'@dcloudio/uni-ui/lib/uni-steps/uni-steps.vue'					|[步骤条](https://ext.dcloud.net.cn/plugin?id=34)			|
|uniSwipeAction	|'@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.vue'	|[滑动操作](http://ext.dcloud.net.cn/plugin?id=181)			|
|uniTag			|'@dcloudio/uni-ui/lib/uni-tag/uni-tag.vue'						|[标签](https://ext.dcloud.net.cn/plugin?id=35)			|

#### 其他

- uni-ui 目前支持编译到：H5、App、小程序
- 本页面介绍使用 npm 的安装使用方式，也可下载相关组件直接使用，组件下载地址见上表
- uni-ui 不支持使用 Vue.use() 的方式安装
- uni-ui 依赖 scss，若是 HBuilderX 中创建的 uni-app 项目，需要在 HBuilderX 中安装 scss 插件；如果是使用 cli 创建的 uni-app 项目，需要安装 node-sass 和 sass-loader
