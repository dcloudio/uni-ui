# uni-collapse-item Android 箭头点击后消失问题

## 结论

这是 Android 渲染层问题，不是 `uni-collapse-item` 的展开状态、事件流或内容布局逻辑错误。

更准确地说，问题不是单纯的“旋转箭头”会出错，而是 Android 对下面这种写法存在绘制异常：

- 空 `view`
- 通过 `border-right` + `border-bottom` 画箭头
- 运行时切换 `transform: rotate(...)`
- 同时切换 `border-right-color` / `border-bottom-color`
- 并让这些属性参与 `transition`

在这种情况下，Android 上箭头节点仍然存在，bounds 也正常，但边框会丢失绘制，视觉上表现为“箭头消失”。

## 涉及代码

- 组件文件：`uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.uvue`
- 示例页：`pages/collapse/collapse.uvue`

原始问题样式的关键点是：

```css
.down_arrow {
  border-right-color: var(--arrow-color, #999999);
  border-bottom-color: var(--arrow-color, #999999);
  transition-property: transform, border-right-color, border-bottom-color;
}

.down_arrow--active {
  transform: rotate(-135deg);
  border-right-color: var(--arrow-active-color, #999999);
  border-bottom-color: var(--arrow-active-color, #999999);
}
```

## 原始复现方式

1. 启动示例页 `/pages/collapse/collapse`
2. 进入“手风琴模式”
3. 初始状态下箭头正常显示
4. 点击“面板 B”展开
5. Android 上“面板 B”右侧箭头消失，同时“面板 A”收起后的箭头也可能一起消失
6. 未参与切换的箭头，例如禁用项，通常仍可见

## 原始问题证据

### 1. 状态流转正常

点击“面板 B”后的日志能看到：

```text
[collapse] 面板 B 展开
```

并且之前的调试日志已验证：

- `is_open` 正常切换
- 展开内容高度正常
- 节点没有被销毁

说明组件逻辑本身没有异常。

### 2. 节点仍在，只有绘制丢失

通过 `uiautomator dump` 对比点击前后层级：

- 点击前，“面板 B”箭头节点 bounds 为 `[961,733][995,767]`
- 点击后，“面板 B”箭头节点 bounds 为 `[961,546][995,580]`
- 点击后，“面板 A”箭头节点 bounds 为 `[961,412][995,446]`

说明箭头节点在 Android 原生视图树里一直存在，不是节点被删除，也不是尺寸变成 0，而是边框没有被正确绘制出来。

### 3. 截图对比

原始问题截图：

- `arrow-collapse_before.png`
- `arrow-collapse_after.png`
- `arrow-collapse_custom_after.png`

现象：

- 点击前箭头正常
- 点击后参与切换的箭头消失
- 未参与切换的箭头通常仍可见

## 对照实验

为了缩小原因范围，做了两个实验。

### 实验 1：仅保留旋转，不再切换边框颜色

把箭头样式改为：

- 仍然使用拆分的 `border-right-*` / `border-bottom-*`
- 仍然保留 `transform: rotate(...)`
- 仅把 `transition-property` 改成 `transform`
- 删除激活态里的 `border-right-color` / `border-bottom-color` 切换

实验结果：

- Android 初始截图：`arrow-collapse-android-fix-before.png`
- 点击“面板 B”后截图：`arrow-collapse-android-fix-after.png`

结果是：箭头不再消失。

这说明真正触发问题的高概率因素是：

- `border` 画箭头
- `transform` 旋转
- `border-color` 状态切换和过渡

这三者叠加后，Android 出现丢绘制。

### 实验 2：把边框写成 `border-right: 1px var(...) solid`

还做过一次更激进的实验，把拆分的边框属性改成简写形式，例如：

```css
border-right: 1px var(--arrow-color, #999999) solid;
border-bottom: 1px var(--arrow-color, #999999) solid;
```

实验结果：

- Android 初始状态下箭头就已经不显示

这说明在 uni-app x Android 渲染环境里，`border` 简写和 `var()` 的组合本身也不稳定，不适合作为这个组件的规避方案。

## 最终规避方案

当前组件已采用平台区隔方案：

- 非 Android 平台：保持原设计
  - 旋转箭头
  - 切换边框颜色
  - 颜色参与过渡
- Android 平台：条件编译降级
  - 只旋转箭头
  - 不切换激活态边框颜色
  - 不让边框颜色参与过渡
  - 继续使用拆分的 `border-*` 写法，不使用 `border` 简写 + `var()`

这样可以：

- 保持非 Android 的原视觉表现
- 避开 Android 的边框丢绘制问题

## 建议提交 issue 时的描述

在 uni-app x Android 渲染环境中，一个没有内容、仅依赖 `border-right` 和 `border-bottom` 绘制的 `view`，在运行时切换 `transform: rotate(...)` 并同时切换 `border-right-color` / `border-bottom-color`、且这些属性参与 `transition` 时，节点仍保留在视图树中，但边框会丢失绘制，导致箭头消失。

另外，`border-right: 1px var(...) solid` / `border-bottom: 1px var(...) solid` 这种“`border` 简写 + `var()`”写法，在 Android 上还可能导致初始状态下箭头直接不显示。

## 建议平台侧排查方向

- `border` 参与绘制的空节点在 `transform` 更新时的重绘逻辑
- `border-color` 与 `transform` 同时参与过渡时的渲染合成
- `border` 简写配合 `var()` 时的样式解析和首帧绘制

## 当前代码规范说明

Android 平台这里的规范方式是：

1. 用条件编译隔离平台差异
2. Android 上只保留旋转动画，不让边框颜色参与状态切换
3. 继续使用拆分的 `border-right-width/style/color`、`border-bottom-width/style/color`
4. 不使用 `border` 简写 + `var()` 作为箭头实现
