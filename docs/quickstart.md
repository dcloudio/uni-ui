# 快速开始

## 方式一 (推荐)

`HBuilderX 2.5.5`起支持 `easycom` 组件模式。在使用 `uni-ui` 的时候，只要[`uni-ui` 组件](https://ext.dcloud.net.cn/plugin?id=55) 安装在项目的 `components` 目录下,并符合 `components/组件名称/组件名称.vue` 目录结构。就可以不用引用、注册，直接在页面中使用 `uni-ui`

**目录示例：**
```json {1,2,3,4,5,6}
┌─components              组件目录
│  ├─uni-list             list 列表目录
│  │  └─uni-list.vue      list 组件文件
│  ├─uni-badge         	  badge 角标目录
│  │  └─uni-badge.vue     badge 组件文件
│  └─ //....              更多组件文件
├─pages                   业务页面文件存放的目录
│  ├─index
│  │  └─index.vue         index示例页面
├─main.js                 Vue初始化入口文件
├─App.vue                 应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json           配置应用名称、appid、logo、版本等打包信息，详见
└─pages.json              配置页

```

::: tip
`easycom` 组件模式的好处在于不管 `components` 目录下安装了多少组件，`easycom` 打包后会自动剔除没有使用的组件，对组件库的使用尤为友好,组件库批量安装，随意使用，自动按需打包。 关于 `easycom` 更详细内容 [参考文档](https://uniapp.dcloud.io/collocation/pages?id=easycom)

:::


### 方式二（CLI）

**初始化项目**

在 HBuilderX 中新建 uni-app 项目，进入项目目录，执行：

```
npm init -y 
```

**安装 uni-ui**

```
npm install @dcloudio/uni-ui -g
```

**安装成功后目录示例：**
```json {1,8}
┌─node_modules            组件依赖
├─pages                   业务页面文件存放的目录
│  ├─index
│  │  └─index.vue         index示例页面
├─main.js                 Vue初始化入口文件
├─App.vue                 应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json           配置应用名称、appid、logo、版本等打包信息，详见
├─package.json            npm 配置文件
└─pages.json              配置页

```


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
::: danger 注意
- `CLI` 引用方式， `H5` 端不支持在 `main.js` 中全局注册组件，如有需求请使用方式一 （[easyCom](https://uniapp.dcloud.io/collocation/pages?id=easycom)） 的方式引用组件
:::

### uni-ui 已支持的组件列表

#### uni-ui 已支持的组件列表 
组件名								|	组件说明
---									|	---
uniBadge						|	[数字角标](https://ext.dcloud.net.cn/plugin?id=21)
uniCalendar					|	[日历](https://ext.dcloud.net.cn/plugin?id=56)
uniCard							|	[卡片](https://ext.dcloud.net.cn/plugin?id=22)
uniCollapse					|	[折叠面板](https://ext.dcloud.net.cn/plugin?id=23)
uniCombox						|	[组合框](https://ext.dcloud.net.cn/plugin?id=1261)
uniCountdown				|	[倒计时](https://ext.dcloud.net.cn/plugin?id=25)
uniDrawer						|	[抽屉](https://ext.dcloud.net.cn/plugin?id=26)
uniFab							|	[悬浮按钮](https://ext.dcloud.net.cn/plugin?id=144)
uniFav							|	[收藏按钮](https://ext.dcloud.net.cn/plugin?id=864)
uniGoodsNav					|	[商品导航](https://ext.dcloud.net.cn/plugin?id=865)
uniGrid							|	[宫格](https://ext.dcloud.net.cn/plugin?id=27)
uniIcons						|	[图标](https://ext.dcloud.net.cn/plugin?id=28)
uniIndexedList			|	[索引列表](https://ext.dcloud.net.cn/plugin?id=375)
uniLink							|	[超链接](https://ext.dcloud.net.cn/plugin?id=1182)
uniList							|	[列表](https://ext.dcloud.net.cn/plugin?id=24)
uniLoadMore					|	[加载更多](https://ext.dcloud.net.cn/plugin?id=29)
uniNavBar						|	[自定义导航栏](https://ext.dcloud.net.cn/plugin?id=52)
uniNoticeBar				|	[通告栏](https://ext.dcloud.net.cn/plugin?id=30)
uniNumberBox				|	[数字输入框](https://ext.dcloud.net.cn/plugin?id=31)
uniPagination				|	[分页器](https://ext.dcloud.net.cn/plugin?id=32)
uniPopUp						|	[弹出层](https://ext.dcloud.net.cn/plugin?id=329)
uniRate							|	[评分](https://ext.dcloud.net.cn/plugin?id=33)
uniSearchBar				|	[搜索栏](https://ext.dcloud.net.cn/plugin?id=866)
uniSegmentedControl	|	[分段器](https://ext.dcloud.net.cn/plugin?id=54)
uniSteps						|	[步骤条](https://ext.dcloud.net.cn/plugin?id=34)
uniSwipeAction			|	[滑动操作](https://ext.dcloud.net.cn/plugin?id=181)
uniSwiperDot				|	[轮播图指示点](https://ext.dcloud.net.cn/plugin?id=284)
uniTag							|	[标签](https://ext.dcloud.net.cn/plugin?id=35)
uniTitle						|	[章节标题](https://ext.dcloud.net.cn/plugin?id=1066)
uniTransition				|	[过渡动画](https://ext.dcloud.net.cn/plugin?id=985)


### 其他

- uni-ui 是全端兼容的基于flex布局的、无dom的ui库
- uni-ui 是uni-app内置组件的扩展。注意与web开发不同，uni-ui不包括基础组件，它是基础组件的补充。web开发中有的开发者习惯用一个ui库完成所有开发，但在uni-app体系中，推荐开发者首先使用性能更高的基础组件，然后按需引入必要的扩展组件。


::: danger 注意
- `uni-ui` 不支持使用 `Vue.use()` 的方式安装
- `uni-ui` 依赖 `scss`，若是 `HBuilderX` 中创建的 `uni-app` 项目，需要在 `HBuilderX` 中安装 `scss` 插件；如果是使用 `cli` 创建的 `uni-app` 项目，需要在项目下`npm`安装 `node-sass` 和 `sass-loader`
:::


### 贡献代码
在使用 `uni-ui` 中，如遇到无法解决的问题，请提 [Issues](https://github.com/dcloudio/uni-ui/issues) 给我们，假如您有更好的点子或更好的实现方式，也欢迎给我们提交 [PR](https://github.com/dcloudio/uni-ui/pulls)