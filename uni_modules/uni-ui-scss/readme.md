## 全局样式

提供全局样式，在 App.vue 的 <styles>中引入 ，可提供常见样式

### 边框半径
使用边框半径辅助样式对元素快速应用`border-radius`样式

规则为 `uni-radius-${direction}-${size}`

如果需要四边，则不需要指定 `direction`

**direction** 的如下


边框半径可以通过使用 `t, r, b, l` 内置类在每条边上配置，例：`uni-radius-t` 、`uni-radius-b-lg`

- t 左上+右上
- r 右上+右下
- b 左下+右下
- l 右上+左下

边框半径可以通过使用 `tl, tr, br, bl` 内置类在每个角上配置，例：`uni-radius-tl` 、`uni-radius-br-lg`

- tl 	左上
- tr	右上
- bl	左下
- br	右下

**size** 的值如下

基于 `$border-radius-root` 变量的四舍五入尺寸，该变量的默认值为0.25rpx。

- null 		使用默认值大小(可忽略)
- 0				清理所有圆角
- sm			默认值 / 2
- lg			默认值 * 2
- xl			默认值 * 6
- pill		9999px
- circle	50% (nvue 下不生效)

在 uni.scss 中修改默认值
```css 
$uni-radius-root:20rpx;
$uni-radius: (
	0: 0,
	'sm': $uni-radius-root / 2,
	null: $uni-radius-root,
	'lg': $uni-radius-root * 2,
	'xl': $uni-radius-root * 6,
	'pill': 9999px,
	'circle': 50%
);
```

### 间距

使用间距辅助类对元素快速应用 `margin` 或 `padding` 样式， 范围是从 0 到 16.
 
规则为 `uni-${property}${direction}-${size}` 

**property** 应用间距类型:

- m - 应用 margin
- p - 应用 padding

**direction** 指定了该属性所应用的侧边:

- t - 应用 margin-top 和 padding-top 的间距
- r - 应用 margin-right 和 padding-right 的间距
- b - 应用 margin-bottom 和 padding-bottom 的间距
- l - 应用 margin-left 和 padding-left 的间距
- x - 应用 *-left 和 *-right 的间距
- y - 应用 *-top 和 *-bottom 的间距
- a - 在所有方向应用该间距

```html
<view class="uni-mt-2"></view>
```

**size** 以`4px`增量控制间距属性:

- 0 		- 通过设置为 0 来消除所有 margin 或 padding.
- 1 		- 设置 margin 或 padding 为 4px
- 2 		- 设置 margin 或 padding 为 8px
- 3 		- 设置 margin 或 padding 为 12px
- 4 		- 设置 margin 或 padding 为 16px
- 5 		- 设置 margin 或 padding 为 20px
- 6 		- 设置 margin 或 padding 为 24px
- 7 		- 设置 margin 或 padding 为 28px
- 8 		- 设置 margin 或 padding 为 32px
- 9 		- 设置 margin 或 padding 为 36px
- 10 		- 设置 margin 或 padding 为 40px
- 11 		- 设置 margin 或 padding 为 44px
- 12 		- 设置 margin 或 padding 为 48px
- 13 		- 设置 margin 或 padding 为 52px
- 14 		- 设置 margin 或 padding 为 56px
- 15 		- 设置 margin 或 padding 为 60px
- 16 		- 设置 margin 或 padding 为 64px
- n1 		- 设置 margin 或 padding 为 -4px
- n2 		- 设置 margin 或 padding 为 -8px
- n3 		- 设置 margin 或 padding 为 -12px
- n4 		- 设置 margin 或 padding 为 -16px
- n5 		- 设置 margin 或 padding 为 -20px
- n6 		- 设置 margin 或 padding 为 -24px
- n7 		- 设置 margin 或 padding 为 -28px
- n8 		- 设置 margin 或 padding 为 -32px
- n9 		- 设置 margin 或 padding 为 -36px
- n10 		- 设置 margin 或 padding 为 -40px
- n11 		- 设置 margin 或 padding 为 -44px
- n12 		- 设置 margin 或 padding 为 -48px
- n13 		- 设置 margin 或 padding 为 -52px
- n14 		- 设置 margin 或 padding 为 -56px
- n15 		- 设置 margin 或 padding 为 -60px
- n16 		- 设置 margin 或 padding 为 -64px


```html
<!-- margin-top 为 8px -->
<view class="uni-mt-2"></view>
<!-- 左右margin 为 8px-->
<view class="uni-mx-2"></view>
<!-- 上下 padding 为 20px -->
<view class="uni-py-5"></view>
```

在 uni.scss 中修改默认值
```css 
$uni-space-root:2;
```

### 文本

控制文本大小、对齐、换行、溢出、变形等等。

规则为  `.uni-${value}`

该 `value` 属性的值是以下之一：

- h1  一级标题			
- h2	二级标题
- h3	三级标题
- h4	四级标题
- h5	五级标题
- h6	六级标题
- subtitle-1 	标题一
- subtitle-2	标题二
- body-1	内容一
- body-2	内容一
- button	按钮文字
- caption	说明文字
- overline 分隔内容

```html
<!-- 设置 一级标题 -->
<view class="uni-text-h1"></view>
```

 
全局样式需要用户决定是否使用 ，如果使用的话css会增大 `27kb` 左右
 
使用需在 App.vue `<style lang='scss'>` 中引入

```css
@import '@/components/styles/uni-ui.scss';
```
