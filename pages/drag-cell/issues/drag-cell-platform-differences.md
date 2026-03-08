# `uni-drag-cell` 平台差异与兼容结论

本文整理 `uni_modules/uni-drag-cell` 在 Web / Android 双端联调过程中已经确认的平台差异，重点记录：

- 哪些属于组件实现差异
- 哪些更像是 Android 引擎或渲染层问题
- 当前组件侧最终采用的稳定绕过方案

当前状态：**Web 与 Android 现阶段功能已对齐，示例页未再发现阻塞性问题**。但以下差异与坑点仍然建议保留，便于后续回归或向引擎团队反馈。

---

## 1. 事件与类型差异

### 现象
- Android 分支中，部分触摸事件参数更适合先按宽类型接收，再转成 `UniTouchEvent`
- Web 分支如果直接复用 Android 的宽类型写法，容易产生类型或编译告警

### 当前处理
- Android：事件参数按 Android 分支单独声明并转换
- Web：直接走 Web 分支类型声明

### 结论
这是编译器 / 平台事件封装差异，不是拖拽算法问题，组件需要通过条件编译拆分事件签名。

---

## 2. 坐标系来源不完全一致

### 现象
同一轮拖拽中，下列数据在 Android 上并不总是处于同一坐标系：

- `UniElement.getBoundingClientRect()`
- `uni.createSelectorQuery().boundingClientRect()`
- 触点 `clientX / clientY`
- 固定定位节点的视觉位置

如果直接混算，会出现：

- 长按后 item 飞走
- 拖动时 item 与手指错位
- 删除条提前或延后高亮

### 当前处理
- 记录触点起始坐标
- 记录激活项初始视口坐标
- 使用 `dragCoordOffsetX / dragCoordOffsetY` 对拖动坐标做补偿
- 删除条命中逻辑在 Android / Web 分开计算

### 结论
Web 更接近统一视口坐标；Android 需要显式做坐标对齐，尤其在 `fixed`、拖拽代理、删除条命中混用时。

---

## 3. Web 端需要额外处理 `windowTop`

### 现象
Web 上底部删除条虽然是 `position: fixed`，但如果直接拿测量值做碰撞判断，会出现约一个导航栏高度的提前触发。

典型表现：

- item 距离删除条还有几十像素时就高亮
- 松手会误删

### 当前处理
- Web 删除条命中时，额外扣除 `uni.getWindowInfo().windowTop`

### 结论
Web 的顶部导航栏偏移必须单独处理，这套修正不能直接照搬到 Android。

---

## 4. Android 上不宜在同一触摸序列中切到 `position: fixed`

### 现象
在开启删除功能的拖拽场景中，如果长按进入拖拽后，立即把当前触摸目标或其祖先节点切成 `position: fixed`，Android 上很容易出现：

- item 放大后不再跟手
- 后续 `touchmove` 丢失
- 页面滚动接管本次手势

### 当前结论
这是目前最明确的 Android 平台坑点之一：

- **同一触摸序列中，不要把当前触摸目标树改成 `fixed`**

### 当前稳定绕过
- 原始 item 保留在原触摸树中，继续接收 `touchmove`
- Android 删除模式下仅额外渲染一个“视觉代理层”负责全屏跟手显示
- 原始激活项只做隐藏，不承担视觉呈现

这也是当前组件最终采用的方案。

---

## 5. Android 的删除条命中不能直接复用 Web 逻辑

### 现象
Android 上，删除条与拖动 item 的命中一度出现两类问题：

- 还没到删除条就提前高亮
- 真正拖到底部时反而不高亮，松手也不删除

日志中确认过两种根因：

1. 删除条测量值与拖拽代理矩形不在同一坐标系
2. `activeContentInsetTop / activeContentInsetBottom` 在某些链路下会失真，导致 `contentBottom` 被算坏，甚至出现 `bottom < top`

### 当前处理
- Web：优先使用真实内容节点矩形，并处理 `windowTop`
- Android：删除命中走单独 fallback 公式
- 当 Android 的 `contentInset` 明显异常时，退回使用代理外框命中，避免错误 inset 把 `contentBottom` 算坏

### 结论
删除命中必须分平台计算，不能追求“一套公式全端通吃”。

---

## 6. Android 对 `flex-wrap + 高频 transform` 的稳定性弱于 Web

### 现象
3 列宫格在拖拽预览过程中，Web 基本能稳定表现“碰撞让位”；Android 在复杂路径下更容易出现：

- item 重叠
- item 被兄弟节点遮挡
- 逻辑顺序正确，但视觉顺序错误

### 当前判断
- 日志中的 `hoverIndex` 与预览顺序通常是对的
- 问题主要发生在 Android 的渲染 / 合成层，而不是排序算法本身

### 当前绕过
- Android 保留实时碰撞预览
- Android 关闭预览动画，避免高频 `transform + transition`

### 结论
如果后续继续扩展宫格拖拽效果，建议把“Android 是否启用预览动画”作为独立平台策略，而不是和 Web 共用。

---

## 7. 拖拽代理层的设计在 Android 需要更保守

### 现象
早期如果直接使用“独立拖拽代理层 + 原节点占位”方案，Android 更容易出现：

- 代理层被兄弟节点遮挡
- 代理层与删除条层级关系异常
- 命中区域与视觉位置不一致

### 当前结论
Android 不是完全不能用代理层，而是不能让代理层同时承担“接管触摸”和“视觉显示”两种职责。

### 当前稳定方案
- 原始节点负责继续接收触摸
- 视觉代理层只负责显示
- 删除命中基于代理矩形做平台分支计算

---

## 8. 字符串与编码链路差异

### 现象
联调期间曾出现：

- Web 控制台字符串乱码
- Markdown 文档或示例页中文内容被错误编码

### 当前处理
- 组件内置国际化文案保留统一编码策略
- 示例页恢复为正常中文直写，不做国际化
- issue 文档统一按 UTF-8 正常中文维护

### 结论
组件内置文案和示例页文案应分开管理，避免为了解决组件国际化而把示例页也复杂化。

---

## 当前组件侧最终策略

### Web
- 保留长按拖拽
- 保留实时碰撞预览动画
- 删除条命中时处理 `windowTop`

### Android
- 保留长按拖拽
- 删除场景不切换当前触摸目标树到 `fixed`
- 使用“原节点接触摸 + 固定视觉代理层”的删除拖拽方案
- 删除命中使用 Android 专用 fallback 公式
- 宫格预览关闭动画，仅保留实时碰撞

---

## 建议提交给 Android 引擎侧的重点问题

1. 同一触摸序列中，触摸目标树切到 `position: fixed` 后，`touchmove` 易丢失
2. `getBoundingClientRect()` 与 `selectorQuery().boundingClientRect()` 在复杂场景下坐标系差异较大
3. `flex-wrap` 子项在高频 `transform + transition` 下容易出现重叠 / 遮挡 / 错位

这些问题在组件侧都已做了绕过，但仍建议继续向平台侧反馈。
