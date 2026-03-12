# 【uni-app x / HarmonyOS】`uni-collapse-item` 使用动态高度展开时默认内容不显示，`v-show` 可规避

hello uni-app x的折叠面板没有默认展开逻辑，加上默认展开后鸿蒙就看不到了。其他平台正常。
但去掉展开动画后，默认又可以展开了。

## 环境信息
- HBuilderX: 5.03.2026031009-alpha
- uni-app x 编译器: 5.03
- 平台: app-harmony
- 组件: `uni-collapse` / `uni-collapse-item`

## 问题现象
`uni-collapse-item` 设置 `:open="true"` 后：

- 标题激活态正常
- 右侧箭头会切换为展开方向
- 但内容区域不显示

也就是说，状态是“展开”的，但内容被隐藏了。

## 最小复现
```vue
<template>
  <uni-collapse :accordion="true">
    <uni-collapse-item title="标题 A" :open="true">
      <view>
        <text>默认应该展开显示</text>
      </view>
    </uni-collapse-item>
  </uni-collapse>
</template>
```

## 运行时现象
通过日志排查发现：

- `props.open = true`
- `is_open = true`
- `box_is_open = true`
- 内容节点实际高度正常，例如 `64`

但是外层内容包裹容器在 HarmonyOS 上高度仍然为 `0`，因此内容被裁掉，没有显示出来。

即：
- 内层内容存在
- 外层展开容器没有正确生效

## 初步判断
问题更像是 HarmonyOS 下，`uvue` 中通过动态 `height` 控制展开动画时，外层布局没有正确同步更新。

原组件方案大致为：
- 外层容器 `height: 0`
- 展开时动态设置 `height: xxxpx`
- 再配合内容区过渡

在 HarmonyOS 上，这个动态高度方案没有正确反映到最终布局。

## 规避方案
把内容显示逻辑改成：

```vue
<view v-show="is_open" class="uni-collapse-item__content">
  <view class="uni-collapse-item__content-box">
    <slot></slot>
  </view>
</view>
```

改完后，HarmonyOS 上显示恢复正常。

## 预期结果
设置 `:open="true"` 时，`uni-collapse-item` 应正常显示内容区域。

## 实际结果
HarmonyOS 上仅标题状态变化，内容区域不显示。

## 备注
目前从验证结果看：
- 不是 `open` 状态逻辑问题
- 不是 slot 内容未渲染
- 是动态高度展开方案在 HarmonyOS 上存在兼容问题
- `v-show` 可以稳定规避
