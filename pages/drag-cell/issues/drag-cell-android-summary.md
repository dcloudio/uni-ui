# `uni-drag-cell` Android 适配踩坑总结

本文面向后续维护者，汇总这次 `uni-drag-cell` Android 适配过程中最关键的踩坑、判断过程和最终落地方案。

## 最终结果

- 当前示例页在 Web / Android 均已可用
- Android 已完成拖拽排序、删除条删除、九宫格图片、手柄模式等主要能力适配
- 剩余需要保留的是平台差异说明与引擎 bug 依据，而不是继续在组件里叠加临时补丁

---

## 坑 1：不要假设 Android 和 Web 使用同一坐标系

### 表现
- 长按后 item 飞走
- 手指在上面，item 跑到下面几十像素甚至更多
- 删除条高亮提前或延后

### 根因
Android 上不同测量 API 与触点坐标来源并不天然统一，尤其在删除条、固定定位、拖拽代理层混用时更明显。

### 结论
- 坐标统一必须放在组件层显式处理
- 删除命中必须做 Android / Web 分支，不要共用一套公式

---

## 坑 2：Android 上不要在同一触摸序列中把拖拽目标切成 `fixed`

### 表现
- 长按后 item 会放大
- 但后续完全拖不动
- 页面开始滚动，像是拖拽链路失效了

### 根因判断
这不是排序算法问题，而是 Android 触摸链路在“当前触摸目标树定位语义突变”为 `position: fixed` 时容易丢失 `touchmove`。

### 最终方案
- 原始 item 保持在原触摸树中
- Android 删除模式下额外渲染固定视觉代理层
- 原始激活项隐藏，视觉由代理承担，触摸仍由原节点接收

---

## 坑 3：Android 删除条命中不要依赖单一“手指坐标”

### 表现
- 矮标签场景：离删除条还有一段距离就高亮
- 高宫格场景：明明已经压到删除条上，还不高亮

### 根因
删除命中如果只看手指位置，会忽略被拖动内容本身的真实边界；而 Android 上内容边界又会受到测量 API、缩放、padding/inset 的影响。

### 最终方案
- 删除命中改为比较“拖动内容矩形”和“删除条矩形”
- Android 上优先走代理矩形命中
- 若 `activeContentInsetTop / Bottom` 失真，则退回代理外框命中

这也是最后一轮真正把 Android 删除功能稳定下来的关键修正。

---

## 坑 4：Android 宫格拖拽不能照搬 Web 的预览动画策略

### 表现
- 某个宫格不会及时让位
- 宫格 5 / 6 重叠
- 宫格被遮挡，但日志里的目标索引又是对的

### 根因判断
更像是 Android 对 `flex-wrap + 高频 transform + transition` 的渲染稳定性问题，不是碰撞检测本身错了。

### 最终方案
- Android 保留实时碰撞预览
- Android 关闭预览动画
- Web 继续保留动画

---

## 坑 5：代理层不是不能用，而是职责要拆开

### 错误思路
- 用一个独立的 fixed 代理层既负责显示，又负责承接后续拖动

### 问题
- Android 上更容易丢失触摸
- 层级关系更容易混乱

### 正确思路
- 原始节点负责触摸链路
- 代理层只负责视觉
- 删除命中用代理位置参与计算

---

## 当前建议的 Android 设计准则

1. 不要把 Web 的拖拽实现直接原样搬到 Android
2. 删除拖拽优先保触摸连续性，再追求视觉全屏拖动
3. 命中判断优先基于被拖动内容矩形，而不是手指坐标
4. 多节点高频动画要保守，必要时关动画保功能正确
5. 发现坐标异常时优先加日志核对，不要盲改公式

---

## 对应 issue 文档

- `pages/drag-cell/issues/drag-cell-platform-differences.md`
- `pages/drag-cell/issues/drag-cell-android-bug-01-grid-transform-overlap.md`
- `pages/drag-cell/issues/drag-cell-android-bug-02-drag-proxy-layering.md`
- `pages/drag-cell/issues/drag-cell-android-bug-03-delete-drag-fixed-loses-touchmove.md`
- `pages/drag-cell/issues/drag-cell-android-bug-03-delete-drag-fixed-repro-code.md`

建议后续给引擎团队提单时，优先附上 `bug-01`、`bug-03` 和本总结。
