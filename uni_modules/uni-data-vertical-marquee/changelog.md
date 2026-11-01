## 1.0.1 (2026-11-01)
- 新增 datacom 规范支持，可通过 localdata 绑定本地数组或 collection 绑定 uniCloud 云端数据
- 新增 text-class external class，支持自定义文字样式
- 新增 click 事件，回传点中的数据
- 优化 页面栈顶与可视区域检测，页面不显示或不在可视区时暂停定时器
- 优化 组件始终复用两个 text 渲染，数据只有一条时不滚动

## 1.0.2 (2026-11-02)
- 修复 H5 等运行时未提供 `uniCloud.useDatacom` / `uniCloud.datacomProps` 时无法加载 collection 云端数据的问题，改用 `uniCloud.databaseForJQL()` 兜底查询
- 修复 App（vapor）端点击 clear 后再次 loadData / refresh 无法显示数据的问题（App 运行时 `useDatacom().reset()` 会将 `page.current` 置 0，导致查询 skip 为负数）

