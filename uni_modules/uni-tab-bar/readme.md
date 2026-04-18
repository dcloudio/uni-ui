# uni-tab 组件说明

`uni_modules/uni-tab-bar` 包括一组 tab 相关组件：

- `uni-tab`：最外层容器，负责激活索引、内容区高度和切换事件
- `uni-tab-bar`：底部 tab 容器，负责底栏布局、安全区和中间按钮占位
- `uni-tab-item`：普通 tab 项，负责插槽展示和 badge
- `uni-tab-midbutton`：中间悬浮按钮占位容器
- `uni-tab-content`：上方内容区域容器，负责内容注册、懒渲染和显示切换

## 示例页面

| 页面 | 说明 |
| --- | --- |
| `tab-bar/tab-bar.uvue` | 基础示例，包含首页二次点击回到顶部 |
| `tab-bar/tab-bar-dark.uvue` | 深色风格示例 |
| `tab-bar/tab-bar-custom.uvue` | 自定义底栏高度、渐变背景和纯文字 tab |
| `tab-bar/tab-bar-midbutton.uvue` | 中间按钮凸起示例 |
| `tab-bar/tab-bar-midbutton-notch.uvue` | 中间镂空下凹按钮示例 |

## 基础用法

```vue
<template>
	<uni-tab style="flex: 1" :active-index="activeIndex" @change="handleChange">
		<uni-tab-content>
			<scroll-view style="flex: 1">
				<view>
					<text>内容一</text>
				</view>
			</scroll-view>
		</uni-tab-content>
		<uni-tab-content>
			<view>
				<text>内容二</text>
			</view>
		</uni-tab-content>

		<uni-tab-bar>
			<uni-tab-item>
				<text>首页</text>
			</uni-tab-item>
			<uni-tab-item badge-text="8">
				<text>消息</text>
			</uni-tab-item>
		</uni-tab-bar>
	</uni-tab>
</template>
```

如果需要自定义底栏主体高度，请在 `uni-tab` 上使用 `tab-bar-height` 属性。使用该属性可以更快的计算布局，而不必在页面onReady后通过getBoundRect来计算布局：

```vue
<uni-tab style="flex: 1" :active-index="activeIndex" :tab-bar-height="40" @change="handleChange">
	...
</uni-tab>
```

## 组件 API

### uni-tab

#### 属性

| 属性名 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| `active-index` | `number` | - | 是 | 当前激活的 tab 索引，从 `0` 开始 |
| `tab-bar-height` | `number` | `50` | 否 | 底部 `uni-tab-bar` 的主体高度，不包含安全区 |
| `tab-content-height-full` | `boolean` | `false` | 否 | 是否让 `uni-tab-content` 通到 `uni-tab-bar` 下方；适合 `tab-bar-midbutton-notch` 这类需要让下凹透明边缘透出底部内容的场景 |

#### 事件

| 事件名 | 返回参数 | 说明 |
| --- | --- | --- |
| `change` | `index: number` | 点击普通 tab 项切换后触发，返回新的激活索引 |

### uni-tab-bar

无专用属性和API，可直接通过 `class` / `style` 自定义底栏外观。

### uni-tab-item

#### 属性

| 属性名 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| `badge-text` | `string` | - | 否 | badge 内容；未传或 `null` 不显示，传空字符串 `''` 显示红点，传非空且不为 `'0'` 的字符串显示数字或文本 |
| `badge-class` | `string.ClassString` | `''` | 否 | 自定义 badge 的 class |

### uni-tab-midbutton

#### 属性

| 属性名 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| `width` | `number` | `90` | 否 | 中间按钮占位宽度，单位为 `px` |
| `height` | `number` | `90` | 否 | 中间按钮占位高度，单位为 `px`，必须大于 `0` |

### uni-tab-content

无专用属性和API，可直接通过 `class` / `style` 自定义外观。

多个选项卡内容揉在一个uni-tab中比较乱，一般推荐uni-tab-content下放一个子组件，子组件作为独立uvue文件。

各个uni-tab-content的子组件，在显示和隐藏的没有生命周期。
如需监听显示/隐藏需要通过provide/inject方式从外层传入响应式变量activeIndex，然后在子组件中watch这个activeIndex。

## 使用注意事项

1. `uni-tab` 所在的页面不应该滚动，应该在pages.json中配置页面style为`disableScroll:true`。
2. 屏幕变化适配，Android需HBuilderX 5.09+支持。之前版本组件里无法监听页面的onResize。
3. `uni-tab-content` 与 `uni-tab-item` 的数量必须一致，顺序也必须一一对应，否则切换后的内容会错位。
4. `uni-tab` 默认占满页面的宽度和高度，即 `style="flex: 1"`
5. 自定义底栏高度时，不要只改样式高度，要同步通过 `tab-bar-height` 传入 `uni-tab`，这样内容区底部留白和安全区计算才会一起更新。
6. 如果底栏存在镂空、下凹或透明边缘，需要让底部内容透出来，请在 `uni-tab` 上开启 `tab-content-height-full`，此时内容区会延伸到 `uni-tab-bar` 下方。
7. `uni-tab-content` 采用“首次激活再渲染”的策略；第一次切入前不会创建实例，切走后只隐藏不销毁，适合保留 tab 内部状态。
8. `uni-tab-item` 只负责普通 tab 项注册与展示，不提供单独点击事件；请统一监听 `uni-tab` 的 `change`。
9. 使用 `uni-tab-midbutton` 时，中间按钮左右两侧的普通 `uni-tab-item` 数量需要相等，也就是普通项总数必须为偶数，才能保持居中均分布局。
10. `uni-tab-midbutton` 只负责预留中间按钮位置，不参与激活索引计算；中间按钮点击行为需要在插槽内部自行处理。
11. `badge-text` 传空字符串时显示红点，传 `'0'` 时不显示；如果需要自定义 badge 外观，请使用 `badge-class` 覆盖样式。
12. `uni-tab-bar`、`uni-tab-item`、`uni-tab-content` 的根节点都支持直接挂 `class` / `style`，推荐把视觉差异放在页面侧处理，不要改组件内部逻辑。
