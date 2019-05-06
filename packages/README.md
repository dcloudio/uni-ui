## config.json 说明

```json
{
	"name":"Collapse", // 组件名称
	"desc":"折叠面板", // 组件中文名称
	"url":"collapse", // 组件地址 （为跳转地址，一般是组件名称，全消协）
	"edition":"1.0.0", // 组件版本，每次修改版本号要递增
	"path":"https://ext.dcloud.net.cn/plugin?id=23", // 插件市场地址
	"compilation":"#ifdef H5 || APP-PLUS || MP-WEIXIN" // 条件编译 ，在什么平台使用，或者在什么平台不使用这个组件
	"hidden":true // 同步后 ，是否隐藏组件（一般是组件为完成，但是需要同步的时候，需要设置为 true ，正常情况不需要写这个参数）
}

```