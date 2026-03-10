# uni-collapse

折叠面板组件，包含：
- `uni-collapse`（父容器）
- `uni-collapse-item`（子面板）

## 基本用法

```html
<uni-collapse :accordion="true">
  <uni-collapse-item title="标题1" :open="true">
    <view><text>内容1</text></view>
  </uni-collapse-item>
  <uni-collapse-item title="标题2">
    <view><text>内容2</text></view>
  </uni-collapse-item>
</uni-collapse>
```

## Props

### uni-collapse

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| accordion | Boolean | true | 是否手风琴模式。为 `true` 时，同一时间仅允许一个面板展开。 |

### uni-collapse-item

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | String | `''` | 面板标题 |
| open | Boolean | false | 是否展开（支持外部监听后更新） |
| disabled | Boolean | false | 是否禁用点击展开/收起 |

## Events

### uni-collapse-item

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 面板展开状态变化时触发 | `open: boolean` |

## Expose

### uni-collapse-item

| 方法名 | 说明 |
| --- | --- |
| openCollapse(open: boolean) | 执行展开/收起（会遵循 `disabled` 和手风琴逻辑） |
| openOrClose(open: boolean) | 直接切换内容显示状态 |

## 示例页面

`/pages/collapse/collapse`
