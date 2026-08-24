uni-combox 组合框组件。

默认为单选模式，类似 select 组件，只能选择不能输入。通过具名插槽 `input` 传入 input 组件后，切换为可输入、可选择的组合模式。

### 基本用法

```html
<uni-combox :options="options" placeholder="请选择" v-model="value" />
```

### 组合模式

```html
<uni-combox :options="options" v-model="city">
  <template #input="{ value, input }">
    <input
      :value="value"
      placeholder="选择或输入城市"
      @input="input"
    />
  </template>
</uni-combox>
```

输入时会打开候选浮层，并按 startsWith 规则过滤候选项。点击右侧箭头打开时展示完整候选列表，并高亮当前输入匹配项。

### 浮层

候选浮层通过 `teleport` 渲染到页面层，不受组件自身尺寸裁剪。下方空间不足且上方空间更充足时，会自动向上展开。默认最大高度为 200px。

候选浮层内部使用 `scroll-view`。

### External Classes

| 类名 | 说明 |
| --- | --- |
| arrow-class | 右侧箭头样式 |
| options-view-class | 候选浮层外层样式 |
| option-text-class | 候选项文字样式 |
| option-text-highlight-class | 候选项高亮样式 |
| result-text-class | 单选模式结果文字样式 |

### Props

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| options | Array\<String\> | [] | 候选字符串数组 |
| modelValue | String | '' | 当前值，支持 v-model |
| placeholder | String | '' | 占位文字 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 值更新时触发 | value: string |
| selectchange | 从候选项选中时触发 | value: string |

### Expose

| 方法名 | 说明 |
| --- | --- |
| setInputValue(value: string) | 设置当前值并打开过滤候选 |
| openOptions() | 打开候选浮层 |
| closeOptions() | 关闭候选浮层 |
