# uni-sass 使用说明

uni-sass　插件包含了以下内容

- uni-ui 主题设置变量
- 辅助样式（边框、圆角、间距）
- 内置组件样式 （button、switch等）

## 替换主题

如果需要替换 `uni-ui` 主题样式 ，需要引入 `uni-sass` 提供的变量文件 ，否则设置不生效

```css
// uni.sass
@import '@/uni_modules/uni-scss/variables.scss';
```

### 可替换变量

```css
// 主色
$uni-primary: #2979ff;
$uni-primary-disable:lighten($uni-primary,20%);
$uni-primary-light: lighten($uni-primary,25%);

// 辅助色
// 除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。
$uni-success: #18bc37 !default;
$uni-success-disable:lighten($uni-success,20%);
$uni-success-light: lighten($uni-success,25%);

$uni-warning: #f3a73f !default;
$uni-warning-disable:lighten($uni-warning,20%);
$uni-warning-light: lighten($uni-warning,25%);

$uni-error: #e43d33 !default;
$uni-error-disable:lighten($uni-error,20%);
$uni-error-light: lighten($uni-error,25%);

$uni-info: #8f939c !default;
$uni-info-disable:lighten($uni-info,20%);
$uni-info-light: lighten($uni-info,25%);

// 中性色
// 中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。
$uni-main-color: #3a3a3a; 			// 主要文字
$uni-base-color: #6a6a6a;			// 常规文字
$uni-secondary-color: #909399;	// 次要文字
$uni-extra-color: #c7c7c7;			// 辅助说明

// 边框颜色
$uni-border-1: #DCDFE6;
$uni-border-2: #E4E7ED;
$uni-border-3: #EBEEF5;
$uni-border-4: #F2F6FC;

// 常规色
$uni-black: #000000;
$uni-white: #ffffff;
$uni-transparent: rgba($color: #000000, $alpha: 0);

// 背景色
$uni-bg-color: #f7f7f7;

/* 水平间距 */
$uni-spacing-sm: 8px;
$uni-spacing-base: 15px;
$uni-spacing-lg: 30px;

// 阴影
$uni-shadow-sm:0 1px 5px 0 rgba($color: #d8d8d8, $alpha: 0.5);
$uni-shadow-base:0 1px 6px 1px rgba($color: #a5a5a5, $alpha: 0.2);
$uni-shadow-lg:1 1px 10px 2px rgba($color: #a5a4a4, $alpha: 0.5);

// 蒙版
$uni-mask: rgba($color: #000000, $alpha: 0.4);
```

### 辅助样式
