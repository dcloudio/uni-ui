## Layout 布局

::: tip 组件名 uni-row、uni-col
代码块： `uRow`、`uCol`
:::

流式栅格系统，随着屏幕或视口分为 24 份，可以迅速简便地创建布局。

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

::: warning 注意事项

为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。

- 组件需要依赖 `sass` 插件 ，请自行手动安装
- 如使用过程中有任何问题，或者您对 uni-ui 有一些好的建议，欢迎加入 uni-ui 交流群：871950839
  :::

### 基本用法

###### 使用单一分栏创建基础的栅格布局

```html
<uni-row class="demo-uni-row">
	<uni-col>
		<view class="demo-uni-col dark_deep"></view>
	</uni-col>
</uni-row>

<uni-row class="demo-uni-row">
	<uni-col :span="12">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :span="12">
		<view class="demo-uni-col light"></view>
	</uni-col>
</uni-row>
```

### 分栏间隔

###### 分栏之间存在间隔

```html
<uni-row class="demo-uni-row" :gutter="10">
	<uni-col :span="16">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :span="8">
		<view class="demo-uni-col dark"></view>
	</uni-col>
</uni-row>
```

### 混合布局

###### 通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局

```html
<uni-row class="demo-uni-row" :gutter="10">
	<uni-col :span="8">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :span="8">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :span="4">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :span="4">
		<view class="demo-uni-col dark"></view>
	</uni-col>
</uni-row>
```

### 分栏偏移

###### 支持偏移指定的栏数

```html
<uni-row class="demo-uni-row" :gutter="10">
	<uni-col :span="8">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :span="8" :offset="6">
		<view class="demo-uni-col dark"></view>
	</uni-col>
</uni-row>

<uni-row class="demo-uni-row" :gutter="10">
	<uni-col :span="12" :pull="6">
		<view class="demo-uni-col dark"></view>
	</uni-col>
</uni-row>

<uni-row class="demo-uni-row" :gutter="10">
	<uni-col :span="12" :push="6">
		<view class="demo-uni-col dark"></view>
	</uni-col>
</uni-row>
```

### 响应式布局

###### 共五个响应尺寸：xs、sm、md、lg 和 xl

```html
<uni-row class="demo-uni-row" :gutter="10">
	<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
		<view class="demo-uni-col light"></view>
	</uni-col>
	<uni-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
		<view class="demo-uni-col light"></view>
	</uni-col>
</uni-row>
```

### 对齐方式

###### 通过 flex 布局来对分栏进行灵活的对齐

```html
<template
	v-for="flexItem in ['start','center','end','space-between','space-around']"
>
	<uni-row class="demo-uni-row" type="flex" :justify="flexItem" :key="flexItem">
		<template v-for="i in 3">
			<!-- #ifndef APP-NVUE -->
			<uni-col :span="6" :key="i">
				<view :class="['demo-uni-col',i%2 === 0 ? 'dark' : 'light']"></view>
			</uni-col>
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			<uni-col :style="{width: nvueWidth}">
				<view :class="['demo-uni-col',i%2 === 0 ? 'dark' : 'light']"></view>
			</uni-col>
			<!-- #endif -->
		</template>
	</uni-row>
</template>
```

###### 使用到的 CSS

```css
.demo-uni-row {
	margin-bottom: 10px;
	/* QQ、字节小程序文档写有 :host，但实测不生效 */
	/* 百度小程序没有 :host，需要设置block */
	/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
	display: block;
	/* #endif */
}

/* 支付宝小程序没有 demo-uni-row 层级 */
/* 微信小程序使用了虚拟化节点，没有 demo-uni-row 层级 */
/* #ifdef MP-ALIPAY || MP-WEIXIN */
/deep/ .uni-row {
	margin-bottom: 10px;
}
/* #endif */

.demo-uni-col {
	height: 36px;
	border-radius: 4px;
}

.dark_deep {
	background-color: #99a9bf;
}

.dark {
	background-color: #d3dce6;
}

.light {
	background-color: #e5e9f2;
}
```

### 平台差异说明

### `uni-row`

| 属性名  |  App(nvue)   | App(vue) | H5  |     微信小程序     | 支付宝小程序 | 百度小程序 | 字节跳动小程序 | QQ 小程序 |
| :-----: | :----------: | :------: | :-: | :----------------: | :----------: | :--------: | :------------: | :-------: |
|  type   | -(只有 flex) |    √     |  √  |         √          |      √       |     √      |       √        |     √     |
| gutter  |      -       |    √     |  √  |         √          |      √       |     √      |       √        |     √     |
| justify |      √       |    √     |  √  | √(基础库`2.11.2+`) |      √       |     -      |       -        |     -     |
|  align  |      √       |    √     |  √  | √(基础库`2.11.2+`) |      √       |     -      |       -        |     -     |

### `uni-col`

| 属性名 | App(nvue) | App(vue) | H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 字节跳动小程序 | QQ 小程序 |
| :----: | :-------: | :------: | :-: | :--------: | :----------: | :--------: | :------------: | :-------: |
|  span  |     -     |    √     |  √  |     √      |      √       |     √      |       √        |     √     |
| offset |     -     |    √     |  √  |     √      |      √       |     √      |       √        |     √     |
|  push  |     -     |    √     |  √  |     √      |      √       |     √      |       √        |     √     |
|  pull  |     -     |    √     |  √  |     √      |      √       |     √      |       √        |     √     |
|   xs   |     -     |    √     |  √  |     √      |      √       |     √      |       √        |     √     |
|   sm   |     -     |    √     |  √  |     √      |      √       |     √      |       √        |     √     |
|   md   |     -     |    √     |  √  |     √      |      √       |     √      |       √        |     √     |
|   lg   |     -     |    √     |  √  |     √      |      √       |     √      |       √        |     √     |
|   xl   |     -     |    √     |  √  |     √      |      √       |     √      |       √        |     √     |

## API

### Row Props

| 属性名  |  类型  |                   可选值                    | 默认值 | 必填 |                    说明                     |
| :-----: | :----: | :-----------------------------------------: | :----: | :--: | :-----------------------------------------: |
|  type   | String |                    flex                     |   -    |  否  | 布局模式，现代浏览器下有效，`nvue`只有 flex |
| gutter  | Number |                      -                      |   -    |  否  |                  栅格间隔                   |
| justify | String | start/end/center/space-around/space-between | start  |  否  |           flex 布局的水平排列方式           |
|  align  | String |              top/middle/bottom              |  top   |  否  |           flex 布局的垂直排列方式           |

### Col Props

| 属性名 |     类型      | 可选值 | 默认值 | 必填 |                                      说明                                       |
| :----: | :-----------: | :----: | :----: | :--: | :-----------------------------------------------------------------------------: |
|  span  |    Number     |   -    |   24   |  否  |                                 栅格占据的列数                                  |
| offset |    Number     |   -    |   -    |  否  |                                栅格左侧间隔格数                                 |
|  push  |    Number     |   -    |   -    |  否  |                                栅格向右偏移格数                                 |
|  pull  |    Number     |   -    |   -    |  否  |                                栅格向左偏移格数                                 |
|   xs   | Number/object |   -    |   -    |  否  | 屏幕宽度`<768px`时，要显示的栅格规则，如：`:xs="8"`或`:xs="{span: 8, pull: 4}"` |
|   sm   | Number/object |   -    |   -    |  否  |                      屏幕宽度`≥768px`时，要显示的栅格规则                       |
|   md   | Number/object |   -    |   -    |  否  |                      屏幕宽度`≥992px`时，要显示的栅格规则                       |
|   lg   | Number/object |   -    |   -    |  否  |                      屏幕宽度`≥1200px`时，要显示的栅格规则                      |
|   xl   | Number/object |   -    |   -    |  否  |                      屏幕宽度`≥1920px`时，要显示的栅格规则                      |
