## NumberBox 数字输入框
> **组件名：uni-number-box**

带加减按钮的数字输入框，常见于购物车商品数量选择。

### 基本用法

```html
<uni-number-box v-model="value" />
```

### 设置范围

```html
<uni-number-box v-model="value" :min="5" :max="20" />
```

### 设置步长

```html
<!-- 整数步长 -->
<uni-number-box v-model="value" :step="5" />

<!-- 小数步长 -->
<uni-number-box v-model="value" :step="0.1" />
```

### 禁用状态

```html
<uni-number-box :value="5" :disabled="true" />
```

### 自定义样式

通过 `btn-class`、`input-class`、`icon-class` 自定义组件样式：

```html
<uni-number-box v-model="value" btn-class="custom-btn" input-class="custom-input" icon-class="custom-icon" />
```

```css
.custom-btn {
  background-color: #007aff;
}
.custom-input {
  background-color: #e8f4ff;
  color: #007aff;
}
.custom-icon {
  background-color: #fff;
}
```

### Props

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | Number | 1 | 输入框当前值 |
| v-model | Number | 1 | 双向绑定值 |
| min | Number | 0 | 最小值 |
| max | Number | 100 | 最大值 |
| step | Number | 1 | 步长，支持小数 |
| disabled | Boolean | false | 是否禁用 |
| btn-class | String | - | 按钮自定义样式类 |
| input-class | String | - | 输入框自定义样式类 |
| icon-class | String | - | 图标自定义样式类 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 值改变时触发 | value: number |
| focus | 输入框聚焦时触发 | event: UniInputFocusEvent |
| blur | 输入框失焦时触发 | event: UniInputBlurEvent |
