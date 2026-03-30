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

## 左右滑
Android常见，微信
避免和页面内的内容冲突

