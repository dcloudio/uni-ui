# tab-bar 选项卡

自定义组件组件，主要用于底部选项卡。

# 项目背景
开发一个tab-bar组件，放在 /uni_modules/uni-tab-bar/components/uni-tab-bar/ 目录下。

在页面 /pages/tab-bar/tab-bar.uvue 里面演示了tab-bar组件的各种用法。

tab-bar组件是选项卡组件。包括子组件：
* tab-list：包裹选项卡item的容器。位置在 /uni_modules/uni-tab-bar/components/uni-tab-bar/tab-list.uvue
	+ tab-list-item ：具体的选项卡item，比如 首页、我的。位置在 /uni_modules/uni-tab-bar/components/uni-tab-bar/tab-list-item.uvue
* tab-content：选项卡对应要展示的内容页。存在多个互相覆盖的tab-content，但同一时间只显示激活的那一个。其他tab-content均隐藏。。位置在 /uni_modules/uni-tab-bar/components/uni-tab-bar/tab-content.uvue

tab-bar组件有如下属性：
- active-index
	值域为大于等于0的整数

tab-bar组件有change事件，事件回调中会给出新选中的索引值。

tab-list-item组件下放子组件 badge-view。badge-view组件位置在 /uni_modules/uni-badge-view/components/uni-badge-view/uni-badge-view.uvue

tab-content组件默认只显示一个。
初始化tab-bar时，只加载第一个激活的tab-content，其他先不加载。等用户操作激活其他tab-content时，再加载。已经加载的tab-content，不再处于激活状态时，使用visible隐藏

# 当前实现调整方向

## 本轮优化目标

当前轮次只解决以下3个问题，不新增额外配置项：

1. tab 内容区的 absolute / visibility / height 逻辑封装到组件内部，使用者不再手写
2. tab-list 的高度、安全区、顶部补偿样式封装到组件内部，使用者不再手写
3. 屏幕高度获取、点击切换、内容懒初始化逻辑适当回收到组件内部

## 保持不变的实现原则

为保证渲染性能，本轮调整保持以下原则不变：

1. 不新增额外组件层级
2. 不依赖页面 onReady 后重新测量布局
3. tab-content 继续采用“首次激活才创建、激活后切走仅隐藏不销毁”的策略
4. tab-list 继续采用统一点击处理，不在每个普通 tab-list-item 上单独监听点击
5. 内容区高度继续使用 uni.getWindowInfo() 同步计算，不引入异步布局查询

## 组件职责划分

### uni-tab-bar

负责：
- 管理当前 activeIndex
- 同步获取 windowInfo
- 计算 tabContentHeight
- 管理 tab-content 注册和激活状态
- 接收 tab-list 的点击命中结果
- 对外触发 change 事件

### tab-content

负责：
- 自动注册内容索引
- 内部封装 absolute 定位、100%宽度、内容区高度
- 内部处理首次激活才渲染
- 激活后切走仅通过 visibility 隐藏，不销毁实例

### tab-list

负责：
- 内部封装底部栏高度和安全区样式
- 统一监听点击
- 根据注册的 item 信息计算点击命中区间
- 将普通 tab 的点击命中结果通知 uni-tab-bar
- 未来将 mid-button 的点击命中结果转发给对应 tab-list-item

### tab-list 高度常量

当前组件内部使用 `TAB_LIST_BASE_HEIGHT = 50` 作为底部栏主高度常量，并基于它计算：

- `tab-list` 的主内容高度（不含底部安全区）
- `tab-content` 的可视区高度
- `tab-content` 到底部栏上边缘的截止位置

当前不再对有底部安全区的设备额外添加顶部补偿。底部安全区直接并入 `tab-list` 的总高度，同时同步参与 `tab-content` 的底边截止位置计算。

这个常量不是随意的视觉数字，而是当前示例和组件默认布局的基准值。只有在以下场景才应调整：

1. `tab-list-item` 的图标、文字、内边距整体变大或变小，导致底栏主高度不再是 50px
2. `tab-list` 的默认视觉规范发生变化，例如需要更高的点击区域或更大的竖向留白
3. 组件内部改动了底栏布局结构，导致 `tab-content` 的截止高度需要同步变化

如果只调整 badge 位置、颜色、边框、安全区处理，不应修改这个常量。

### tab-list-item

负责：
- 展示 tab 内容
- 注册自身顺序信息
- 保留现有 badge 能力

## mid-button 规划

### API 形式

tab-list-item 不使用 type 字段区分中间按钮，改为使用布尔属性：

- `:mid-button="true"`

### 交互规则

1. mid-button 点击后，不触发 tab-bar 的 change
2. mid-button 点击后，只触发该 tab-list-item 上由使用者注册的 `@click`
3. mid-button 不参与 activeIndex 切换
4. 普通 tab-list-item 继续参与 tab 切换
5. 一个 tab-list 中最多只允许存在一个 mid-button

### 点击处理策略

为了兼顾性能和未来扩展，mid-button 仍然不采用“每个 item 单独原生点击监听”的方案，而是：

1. tab-list 统一监听点击
2. tab-list-item 在挂载时向 tab-list 注册自身信息
3. tab-list 根据注册结果预计算每个 item 的点击命中区间
4. 如果命中普通 tab，则通知 uni-tab-bar 触发 change
5. 如果命中 mid-button，则调用该 item 注册的内部回调，由 tab-list-item 自己 emit click

### 宽度策略

当前 tab-list 默认按全宽底部 dock 设计。

未来支持 mid-button 时：
- 普通 tab-list-item 均分剩余宽度
- mid-button 宽度允许自定义
- 为避免运行时异步测量带来的性能开销，mid-button 的自定义宽度不应仅依赖 CSS 实际测量，建议后续通过显式数值配置参与命中区间计算

### 命中计算原则

1. 无 mid-button 时：按 item 数量等宽切分命中区间
2. 有 mid-button 时：先扣除 mid-button 宽度，其他普通 item 均分剩余宽度
3. 点击命中计算在 tab-list 内部完成，不依赖页面 onReady，不依赖异步布局测量

## 悬浮 tab-bar 规划

未来如需支持“非全宽、悬浮在底部上方”的 tab-bar，不建议在现有 tab-list 上增加模式属性切换。

建议做法：
- 保持 uni-tab-bar 不变
- 保持 tab-list 继续服务当前全宽底部 dock 场景
- 新增 tab-floating-list 作为新的底栏容器组件
- tab-list-item 继续复用

原因：
1. 悬浮场景与当前 tab-list 的布局假设不同
2. 命中计算基准不同
3. 样式结构差异较大
4. 拆成独立容器组件更利于保持当前主路径性能和代码稳定性
