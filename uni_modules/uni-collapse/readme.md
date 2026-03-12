# uni-collapse

折叠面板组件，包含：

- `uni-collapse`：父容器
- `uni-collapse-item`：子面板

一个折叠面板组件可以包含若干uni-collapse-item。每个uni-collapse-item包括顶部标题栏和通过slot传入的内容区。

## 基本用法

```html
<uni-collapse :accordion="true">
  <uni-collapse-item title="标题 1" :open="true">
    <view><text>内容 1</text></view>
  </uni-collapse-item>
  <uni-collapse-item title="标题 2">
    <view><text>内容 2</text></view>
  </uni-collapse-item>
</uni-collapse>
```

uni-collapse-item的标题栏的自定义：
- 标题栏支持title属性，可通过title-class自定义文字样式。
- 标题栏右边默认带有箭头，可通过arrow-class自定义箭头样式。该箭头为一个view包括2个直角边的边框，然后旋转而成。
- 如果完全不想要默认包含的title和arrow，也可以传入一个名为title的具名插槽来替换。

## 具名插槽标题

```html
<uni-collapse-item>
  <template #title="{ open, disabled }">
    <view class="custom-title">
      <view class="custom-title-icon"></view>
      <text class="custom-title-text">{{ open ? '已展开' : '未展开' }}</text>
    </view>
  </template>
  <view><text>自定义标题内容</text></view>
</uni-collapse-item>
```

## externalClass

```html
<uni-collapse-item
  title="自定义样式"
  title-class="my-title-class"
  arrow-class="my-arrow-class"
>
  <view><text>内容区域</text></view>
</uni-collapse-item>
```

## Props

### uni-collapse

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| accordion | Boolean | `true` | 是否为手风琴模式。为 `true` 时，同一时间仅允许一个面板展开 |

### uni-collapse-item

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | String | `''` | 默认标题文本。在未使用 `#title` 插槽时生效 |
| open | Boolean | `false` | 是否展开，支持外部监听后更新 |
| disabled | Boolean | `false` | 是否禁用点击展开/收起 |
| titleClass | string.ClassString | `''` | 对应 externalClass `title-class`，作用于默认标题 `text` |
| arrowClass | string.ClassString | `''` | 对应 externalClass `arrow-class`，作用于默认箭头 `view` |

## Slots

### uni-collapse-item

| 插槽名 | 说明 | 插槽参数 |
| --- | --- | --- |
| default | 面板内容 | - |
| title | 自定义标题区域 | `open: boolean`、`disabled: boolean` |

## Events

### uni-collapse-item

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 面板展开状态变化时触发 | `open: boolean` |

## Expose

### uni-collapse-item

| 方法名 | 说明 |
| --- | --- |
| openCollapse(open: boolean) | 执行展开/收起，会遵循 `disabled` 和手风琴逻辑 |
| openOrClose(open: boolean) | 直接切换内容显示状态 |

## 主题变量

组件支持通过 CSS 变量覆盖默认颜色：

- `--collapse-title-background`
- `--text-color`
- `--active-color`
- `--disabled-color`
- `--arrow-color`
- `--arrow-active-color`
- `--arrow-disabled-color`

## 示例页面

`/pages/collapse/collapse`
