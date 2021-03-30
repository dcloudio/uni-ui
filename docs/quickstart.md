# 快速开始

## 使用uni_modules安装uni-ui (推荐)

使用 `uni_modules` 方式安装组件库，可以直接通过插件市场导入，通过右键菜单快速更新组件，不需要引用、注册，直接在页面中使用 `uni-ui` 组件。[点击安装 uni-ui 组件库](https://ext.dcloud.net.cn/plugin?id=55)

**注意：下载最新的组件目前仅支持 uni_modules ,非uni_modules版本最高支持到组件的1.2.10版本**

如不能升级到 `uni_modules` 版本，可以使用 `uni_modules` 安装好对应组件，将组件拷贝到对应目录。

例如需更新 `uni-list`和`uni-badge` ,将 `uni_modules>uni-list>components`和`uni_modules>uni-badege>components`下所有目录拷贝到如下目录即可：

**目录示例**
```json {2,3,4,5,6,7}
┌─components              组件目录
│  ├─uni-list             list 列表目录
│  │  └─uni-list.vue      list 组件文件
│  ├─uni-list-item        list-item 列表目录
│  │  └─uni-list-item.vue list 组件文件
│  ├─uni-badge         	  badge 角标目录
│  │  └─uni-badge.vue     badge 组件文件
│  └─ //....              更多组件文件
├─pages                   业务页面文件存放的目录
│  ├─index
│  │  └─index.vue         index示例页面
├─main.js                 Vue初始化入口文件
├─App.vue                 应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json           配置应用名称、appid、logo、版本等打包信息，详见
└─pages.json              配置页

```


## 使用 npm 安装

在 `vue-cli` 项目中可以使用 `npm` 安装 `uni-ui` 库 ，或者直接在 `HBuilderX` 项目中使用 `npm` 。（不推荐后一种方式）

**初始化项目**

在 HBuilderX 中新建 uni-app 项目，进入项目目录，执行：

```
npm init -y 
```

**安装 uni-ui**

```
npm install @dcloudio/uni-ui -d
```


**安装成功后目录示例：**
```json {1,8}
┌─node_modules            组件依赖
├─pages                   业务页面文件存放的目录
│  ├─index
│  │  └─index.vue         index示例页面
├─main.js                 Vue初始化入口文件
├─App.vue                 应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json           配置应用名称、appid、logo、版本等打包信息，详见
├─package.json            npm 配置文件
└─pages.json              配置页

```


在 ``script`` 中引用组件：

```javascript
import {uniBadge} from '@dcloudio/uni-ui'
//import uniBadge from '@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue' //也可使用此方式引入组件
export default {
    components: {uniBadge}
}
```

在 ``template`` 中使用组件： 

```html
<uni-badge text="1"></uni-badge>
<uni-badge text="2" type="success" @click="bindClick"></uni-badge>
<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
```
::: danger 注意
- `CLI` 引用方式， `H5` 端不支持在 `main.js` 中全局注册组件，如有需求请使用方式一 （[easyCom](https://uniapp.dcloud.io/collocation/pages?id=easycom)） 的方式引用组件
:::

## 使用 npm + easycom 

使用 `npm` 安装好 `uni-ui` 之后，需要配置 `easycom` 规则，让 `npm` 安装的组件支持  `easycom`

打开项目根目录下的 `pages.json` 并添加 `easycom` 节点：

```javascript {8}
// pages.json

{
	"easycom": {
		"autoscan": true,
		"custom": {
			// uni-ui 规则如下配置
			"^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
		}
	},
	
	// 其他内容
	pages:[
		// ...
	]
}

```

<!-- 组件列表占位 -->

### 其他

- uni-ui 是全端兼容的基于flex布局的、无dom的ui库
- uni-ui 是uni-app内置组件的扩展。注意与web开发不同，uni-ui不包括基础组件，它是基础组件的补充。web开发中有的开发者习惯用一个ui库完成所有开发，但在uni-app体系中，推荐开发者首先使用性能更高的基础组件，然后按需引入必要的扩展组件。


::: danger 注意
- `uni-ui` 不支持使用 `Vue.use()` 的方式安装
- `uni-ui` 依赖 `scss`，若是 `HBuilderX` 中创建的 `uni-app` 项目，需要在 `HBuilderX` 中安装 `scss` 插件；如果是使用 `cli` 创建的 `uni-app` 项目，需要在项目下`npm`安装 `node-sass` 和 `sass-loader`
:::


### 贡献代码
在使用 `uni-ui` 中，如遇到无法解决的问题，请提 [Issues](https://github.com/dcloudio/uni-ui/issues) 给我们，假如您有更好的点子或更好的实现方式，也欢迎给我们提交 [PR](https://github.com/dcloudio/uni-ui/pulls)