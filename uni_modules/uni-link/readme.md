# uni-link

外链组件。点击后按平台策略尝试打开链接；小程序无法直接打开时会自动复制链接，并提示用户使用外部浏览器打开。

## 基本用法

```html
<uni-link href="https://uniapp.dcloud.net.cn">
  <text>uni-app x 文档</text>
</uni-link>
```

## Props

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| href | String | `''` | 链接地址 |
| mpWebviewPageUrl | String | `''` | 小程序内承载 web-view 的页面路径（如 `/pages/link-webview/link-webview`） |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 链接文本内容。不传时默认显示 `href` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| error | 打开失败时触发 | `message: string` |

## 平台行为

- `WEB`：调用 `window.open(url, '_blank')`
- `MP`：当 `mpWebviewPageUrl` 有值时，跳转到 web-view 页面并带上 `url` 参数；未配置或跳转失败时，自动复制链接、在弹框中显示链接内容，并提示用户使用外部浏览器打开
- `APP`：依赖 `uts-openSchema` 插件打开外部链接

## 依赖

`APP` 平台依赖 `uts-openSchema`。`uni-link` 已在 `uni_modules/uni-link/package.json` 中声明该依赖。

## 示例页面

`/pages/link/link`

小程序 web-view 承载页示例：`/pages/link-webview/link-webview`
