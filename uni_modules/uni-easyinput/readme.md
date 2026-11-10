# uni-easyinput 增强输入框

适用于 uni-app x 的增强输入框。在原生 `input` 和 `textarea` 基础上提供清空、密码显隐、前后图标、空白裁剪和左右插槽。

## 基本用法

```html
<uni-easyinput v-model="value" placeholder="请输入内容" />
```

## 输入类型

```html
<uni-easyinput v-model="password" type="password" placeholder="请输入密码" />
<uni-easyinput v-model="description" type="textarea" placeholder="请输入介绍" />
```

除 `password` 和 `textarea` 外，`type` 会透传给原生 `input`。

## 图标和插槽

```html
<uni-easyinput
	v-model="keyword"
	prefix-icon="search"
	suffix-icon="compose"
	@iconClick="onIconClick"
/>

<uni-easyinput v-model="website">
	<template #left>
		<text>https://</text>
	</template>
	<template #right>
		<text>.com</text>
	</template>
</uni-easyinput>
```

密码显隐图标可以和清空图标同时使用。设置 `suffix-icon` 后，自定义后置图标替代清空图标，但不替代密码显隐图标。

## 自定义样式

根节点样式直接通过组件的 `class` 或 `style` 设置；内部节点通过 external classes 设置：

```html
<uni-easyinput
	class="custom-easyinput"
	v-model="value"
	input-class="custom-input"
	placeholder-class="custom-placeholder"
	action-icon-class="custom-action-icon"
/>
```

```css
.custom-easyinput {
	border-radius: 0;
}

.custom-input {
	color: #0052cc;
	font-size: 16px;
}

.custom-placeholder {
	color: #8c939d;
}

.custom-action-icon {
	color: #0052cc;
}
```

VDOM 模式需要在 `manifest.json` 中启用样式隔离策略 2.0。定义在全局 `App.uvue` 中的 external class 覆盖组件默认样式时，部分属性可能需要使用 `!important`。

## Props

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | String / Number | - | 输入内容，支持 `v-model` |
| value | String / Number | - | 不使用 `v-model` 时传入的内容 |
| name | String | `''` | 原生表单控件名称 |
| type | String | `text` | 输入类型；额外支持 `password`、`textarea` |
| clearable | Boolean | `true` | 是否显示清空图标 |
| autoHeight | Boolean | `false` | textarea 是否自动增高 |
| placeholder | String | `''` | 占位文字 |
| focus | Boolean | `false` | 是否聚焦 |
| disabled | Boolean | `false` | 是否禁用 |
| maxlength | Number | `140` | 最大输入长度，`-1` 表示不限制 |
| confirmType | String | `done` | 键盘右下角按钮类型 |
| inputBorder | Boolean | `true` | 是否显示边框 |
| prefixIcon | String | `''` | 前置 uni-icons 图标名称 |
| suffixIcon | String | `''` | 后置 uni-icons 图标名称 |
| trim | Boolean / String | `false` | `both`、`left`、`right`、`start`、`end`、`all` 或 `none` |
| cursorSpacing | Number | `0` | 光标与键盘的距离 |
| passwordIcon | Boolean | `true` | 密码输入是否显示显隐图标 |
| adjustPosition | Boolean | `true` | 键盘弹起时是否自动上推页面 |
| errorMessage | String / Boolean | `false` | 是否显示错误状态，不渲染错误信息节点 |

## External Classes

| 属性名 | 说明 |
| --- | --- |
| input-class | input 和 textarea 样式 |
| placeholder-class | 占位文字样式 |
| prefix-icon-class | 前置图标样式 |
| suffix-icon-class | 后置图标样式 |
| action-icon-class | 清空和密码显隐图标样式 |

## Events

| 事件名 | 回调参数 | 说明 |
| --- | --- | --- |
| update:modelValue | `value: string` | 输入内容更新 |
| input | `value: string` | 输入时触发 |
| focus | 原生 focus 事件 | 聚焦时触发 |
| blur | 原生 blur 事件 | 失焦时触发 |
| confirm | `value: string` | 点击键盘完成按钮时触发 |
| change | `value: string` | 失焦或点击完成按钮时触发；同一次确认后失焦不会重复触发 |
| clear | - | 点击清空图标时触发 |
| eyes | `visible: boolean` | 切换密码显隐时触发 |
| iconClick | `prefix` / `suffix` | 点击前置或后置图标时触发 |
| keyboardheightchange | 原生键盘高度事件 | 键盘高度变化时触发 |

## Slots

| 名称 | 说明 |
| --- | --- |
| left | 输入区域左侧内容 |
| right | 输入区域右侧内容 |

## Expose

| 方法名 | 说明 |
| --- | --- |
| focus() | 使内部输入框聚焦 |
| blur() | 使内部输入框失焦 |
