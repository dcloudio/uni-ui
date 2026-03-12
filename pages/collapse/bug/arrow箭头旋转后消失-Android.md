# uni-collapse-item Android 展开后箭头消失问题

## 结论

这是 Android 渲染层问题，不是 `uni-collapse-item` 的展开状态、布局计算或内容高度逻辑错误。

真正原因是：箭头节点本身一直存在，尺寸和位置也都正常，但它是一个“空 `view` + `border-right`/`border-bottom` + `transform: rotate(...)`”画出来的箭头。在 Android 上，这种节点在交互后切换 `transform` / 边框颜色并参与过渡时，会出现边框不再被绘制的情况，所以视觉上像“箭头消失了”。

## 涉及代码

- 箭头节点定义：[uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.uvue](/C:/Users/wa/Documents/HBuilderProjects/uni-ui-x/uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.uvue#L10)
- 展开收起状态切换：[uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.uvue](/C:/Users/wa/Documents/HBuilderProjects/uni-ui-x/uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.uvue#L140)
- 箭头样式定义：[uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.uvue](/C:/Users/wa/Documents/HBuilderProjects/uni-ui-x/uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.uvue#L287)

关键样式：

```css
.down_arrow {
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
  border-right-width: 1px;
  border-bottom-width: 1px;
  transition-property: transform, border-right-color, border-bottom-color;
  transition-duration: 150ms;
}

.down_arrow--active {
  transform: rotate(-135deg);
}
```

## 复现方式

1. 启动示例页 `/pages/collapse/collapse`。
2. 进入“手风琴模式”区域。
3. 初始状态下箭头正常显示。
4. 点击“面板 B”展开。
5. Android 上可见“面板 B”的右侧箭头消失，同时原本“面板 A”的箭头也可能一起消失。
6. 同页未参与状态切换的箭头，例如“禁用项”，仍然正常显示。

## 实测证据

### 1. 组件状态和高度计算正常

Android `adb logcat` 中，点击“面板 B”后有以下日志：

```text
[uni-collapse-item] applyOpenState start, elId=uni_collapse_item_g0hl, open=true
[uni-collapse-item] set content height, elId=uni_collapse_item_g0hl, height=64
[uni-collapse-item] set box_is_open true, elId=uni_collapse_item_g0hl, content_height=64
[uni-collapse-item] final layout tag=after-open-timer, elId=uni_collapse_item_g0hl, is_open=true, box_is_open=true, content_height=64
```

这说明：

- 点击事件正常触发。
- `is_open` 状态正常切换。
- 展开内容高度测量正常。
- 展开后的最终布局状态正常。

也就是说，组件逻辑没有出错。

### 2. 箭头节点没有丢，只是没画出来

通过 `uiautomator dump` 对比点击前后页面层级：

- 点击前，“面板 B”箭头节点 bounds 为 `[961,733][995,767]`
- 点击后，“面板 B”箭头节点 bounds 为 `[961,546][995,580]`
- 点击后，“面板 A”箭头节点 bounds 为 `[961,412][995,446]`

说明箭头节点在 Android 原生视图树里一直存在，而且宽高位置都正常，不是节点被删掉，也不是宽高变成了 0。

### 3. 截图对比能直接看到“节点在，但箭头没画出来”

- 点击前截图：`collapse_before.png`
- 点击“面板 B”后截图：`collapse_after.png`
- 点击“自定义箭头样式”后截图：`collapse_custom_after.png`

截图表现：

- 点击前，箭头正常显示。
- 点击后，参与状态切换的箭头消失。
- 未参与切换的禁用箭头仍然可见。

这和“Android 对动态 `transform` 的 border 箭头重绘异常”一致。

## 为什么可以判定为 Android bug

满足下面三个条件：

1. 组件状态日志完整且正确，说明业务逻辑没问题。
2. Android 原生层级里箭头节点还在，bounds 正常，说明不是节点被移除或布局塌陷。
3. 最终只有视觉绘制丢失，且只发生在 Android，其他平台正常。

因此问题不在 `uni-collapse-item` 的展开逻辑，而在 Android 对“边框画箭头 + transform 旋转 + 状态切换/过渡”的绘制实现。

## 建议提交给 Android / 渲染层的描述

在 uni-app x Android 渲染环境中，一个没有内容、仅依赖 `border-right` 和 `border-bottom` 绘制的 `view`，在运行时切换 `transform: rotate(...)` 并伴随边框颜色/过渡更新后，节点仍在视图树中，但边框不再被绘制，导致箭头消失。

## 临时规避方向

如果需要先绕过问题，可以考虑：

- 不用 border 画箭头，改成图片或字体图标。
- 避免在空 `view` 的 border 箭头上做旋转动画。
- 改成两个普通 `view` 组合画箭头，而不是依赖 border + rotate。
