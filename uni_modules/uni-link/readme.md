# uni-link

打开web链接组件。点击后通过内置或外部浏览器打开链接，加载 `href` 属性中配置的 URL。

- 在 `target="_self"` 时，`APP` 和 `MP` 固定使用 `uni_modules/uni-link/pages/link-webview` 页面内的 `web-view` 打开链接。
- 注意小程序需要将域名加入业务域名白名单。
- 在 `target="_blank"` 时，APP平台调用手机浏览器打开链接，小程序平台会复制URL到剪贴板中，并弹框提示用户在外部浏览器中打开。
- 开发者也可以通过条件编译组合使用，比如APP平台使用`_black`，小程序平台使用`_self`

## 基本用法

```html
<uni-link href="https://uniapp.dcloud.net.cn">uni-app x 文档
</uni-link>
```

## Props

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| href | String | `''` | 链接地址 |
| target | String | `'_self'` | 打开方式，可选值为 `_self`、`_blank` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| error | 打开失败时触发 | `message: string` |

## 平台行为

- `WEB`：调用 `window.open(url, '_blank')`
- `MP`：`target="_self"` 时跳转到内置 `web-view` 页面并携带 `url` 参数；跳转失败时自动复制链接，并提示用户使用外部浏览器打开。`target="_blank"` 时直接复制链接并提示外部打开
- `APP`：`target="_self"` 时跳转到内置 `web-view` 页面；`target="_blank"` 时依赖 `uts-openSchema` 插件打开外部链接

## 依赖

`APP` 平台依赖 `uts-openSchema`。`uni-link` 已在 `uni_modules/uni-link/package.json` 中声明该依赖。

组件目录下有 `pages_init.json`，会向应用的 pages.json 中注册组件中自带的内置浏览器页面。如在HBuilderX中弹框询问是否将组件中的页面注册到项目pages.json中时，请选择同意。

## 示例页面

`/pages/uni-ui/link/link`
