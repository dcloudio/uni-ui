# Changelog

## [1.0.0] - 2025-10-27

### 新增
- ✨ 实现 page-container 组件，支持 Web 和 App 平台
- ✨ **Web 平台滚动穿透防护**：弹层打开时自动禁止页面滚动，关闭时恢复
- ✨ 支持四种弹出位置：top、bottom、right、center
- ✨ 支持自定义动画时长（duration 属性）
- ✨ 支持显示/隐藏蒙层（overlay 属性）
- ✨ 支持圆角显示（round 属性）
- ✨ 支持下滑关闭功能（close-on-slide-down 属性，仅 bottom 位置有效）
- ✨ 支持自定义层级（z-index 属性）
- ✨ 支持自定义蒙层样式（overlay-style 属性）
- ✨ 支持自定义容器样式（custom-style 属性）
- ✨ **实现返回操作拦截**（右滑手势、安卓物理返回键、navigateBack 接口）
- ✨ 支持完整的生命周期事件：beforeenter、enter、afterenter、beforeleave、leave、afterleave
- ✨ 支持 clickoverlay 事件

### 技术实现
- 组件内部包含全局实例管理逻辑（无需独立文件）
- 使用全局实例列表管理多个 page-container
- 支持自动注册和注销实例
- **组件内部直接监听页面 onBackPress 生命周期**（利用 uni-app x 组合式 API 特性）
- 实现 handleBackPress 函数处理返回操作

### 使用说明
- **无需手动配置**，组件会自动拦截页面返回操作
- 只需在页面中使用 page-container 组件即可
- 详细使用方法请参阅 readme.md
