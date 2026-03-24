# uni-tab-bar 选项卡

`uni-tab-bar` 是一个基于 `uni-app x + Vue + UTS` 实现的底部选项卡组件，适合在单页面内切换多个内容区。

当前组件源码位于 `uni_modules/uni-tab-bar/components/uni-tab-bar/`，包含以下 4 个组件：

- `uni-tab-bar.uvue`：父容器，包含底部tab区和上方内容区。负责 activeIndex、内容区高度和切换事件
- `uni-tab-list.uvue`：底部 tab 容器，负责点击命中和底栏高度、安全区处理
- `uni-tab-list-item.uvue`：单个 tab 项，负责内容展示和 badge
- `uni-tab-content.uvue`：上方内容容器，负责懒渲染、定位和显示隐藏

## 示例页面

项目内目前有以下示例页面：

- `pages/tab-bar/tab-bar.uvue`：基础示例，包含“回到顶部”交互
- `pages/tab-bar/tab-bar-dark.uvue`：暗黑模式示例，保持与基础示例一致的交互逻辑
- `pages/tab-bar/tab-bar-custom.uvue`：自定义样式示例，演示更低 tab 高度、纯文字 tab、渐变底栏和动态导航栏配色


## 组件职责

### uni-tab-bar

负责：

- 接收并同步当前激活索引 `active-index`
- 统一获取窗口高度和底部安全区信息
- 计算 `tab-content` 的可用高度和底部截止位置
- 管理 `uni-tab-content` 的注册顺序
- 接收 `uni-tab-list` 的点击命中结果
- 对外触发 `change` 事件

### uni-tab-list

负责：

- 管理底栏自身高度与底部安全区
- 统一监听点击，不要求每个普通 item 单独注册点击
- 根据注册的 item 数量推导点击命中索引
- 将命中的索引通知给 `uni-tab-bar`

### uni-tab-list-item

负责：

- 展示 tab 的内容插槽
- 在挂载时向 `uni-tab-list` 注册自身顺序
- 提供 badge 文本和 badge 点能力

### uni-tab-content

负责：

- 自动注册内容顺序
- 封装绝对定位、宽度、高度与底部偏移
- 首次激活才创建内容
- 激活后切走仅隐藏，不销毁实例

## 当前实现说明

### 内容区显示策略

`uni-tab-content` 采用“首次激活才渲染”的策略：

1. 初始化时，只立即渲染当前激活的内容页
2. 其他内容页在首次切换到对应 tab 时再渲染
3. 已经渲染过的内容页切走后不会销毁，而是通过 `visibility` 隐藏

这样做的目的，是兼顾首屏性能和多 tab 状态保留。

### 底栏高度与安全区

组件内部使用 `windowInfo.safeAreaInsets.bottom` 处理底部安全区。

`uni-tab-list` 的实际高度由两部分组成：

- tab 主体高度
- 底部安全区高度

`uni-tab-content` 的底边截止位置也会同步包含安全区高度，避免内容被 tab-bar 遮挡。

### tab 高度配置

`uni-tab-bar` 当前支持 `tab-list-height` 属性，用来指定底栏主体高度，默认值为 `50`。

这个值会同时参与：

- `uni-tab-list` 的主高度计算
- `uni-tab-content` 的可视区高度计算
- `uni-tab-content` 的底部偏移计算

如果只是做颜色、边框、背景等样式调整，不需要修改这个值。
如果要做更低或更高的 tab-bar，例如 `pages/tab-bar/tab-bar-custom.uvue` 中的 `40px` 方案，就应该通过 `tab-list-height` 统一传入，而不是只改页面样式。

## 对外 API

### uni-tab-bar Props

#### active-index

- 类型：`number`
- 必填：是
- 说明：当前激活的 tab 索引，从 `0` 开始

#### tab-list-height

- 类型：`number`
- 必填：否
- 默认值：`50`
- 说明：底部 tab-list 的主体高度，不包含底部安全区

### uni-tab-bar Events

#### change

- 参数：`index: number`
- 说明：点击切换 tab 后触发，返回新的索引

### uni-tab-list-item Props

#### badge-text

- 类型：`string`
- 必填：否
- 说明：
  - `null` 或未传：不显示 badge
  - `''`：显示红点
  - 其他非 `'0'` 文本：显示 badge 文本

#### badge-class

- 类型：`string.ClassString`
- 必填：否
- 说明：自定义 badge class

#### badge-style

- 类型：`string`
- 必填：否
- 说明：自定义 badge 内联样式

## 使用方式

基础结构如下：

```vue
<template>
	<uni-tab-bar :active-index="activeIndex" @change="handleChange">
		<uni-tab-content>
			<view>
				<text>内容一</text>
			</view>
		</uni-tab-content>
		<uni-tab-content>
			<view>
				<text>内容二</text>
			</view>
		</uni-tab-content>

		<uni-tab-list>
			<uni-tab-list-item>
				<text>首页</text>
			</uni-tab-list-item>
			<uni-tab-list-item>
				<text>消息</text>
			</uni-tab-list-item>
		</uni-tab-list>
	</uni-tab-bar>
</template>
```

如果需要更低的 tab-bar，可以这样写：

```vue
<uni-tab-bar :active-index="activeIndex" :tab-list-height="40" @change="handleChange">
	...
</uni-tab-bar>
```

## 自定义样式建议

### 适合直接在页面写 class 的场景

- 调整 `uni-tab-list` 的背景色、边框色、渐变背景
- 调整 tab 文本颜色、激活态颜色
- 调整插槽里的图标和文字布局

例如：

- 在 `uni-tab-list` 上写 `class="dark-tab-list"`
- 在 `uni-tab-list-item` 插槽内自定义图标和文字结构

### 需要注意的点

- `uni-tab-list-item` 根节点默认是纵向 `flex-direction: column`
- 如果做纯文字 tab，可以在插槽内部额外包一层横向容器，而不是依赖组件根节点改方向
- 如果将 tab 高度改为 `40px` 这类非默认值，应该同步通过 `tab-list-height` 传入组件

## 当前限制

- 普通 tab 的点击命中按“等宽分布”计算，不支持每项不同宽度
- 为了提高性能，`uni-tab-list` 统一监听点击，普通项没有独立点击事件
