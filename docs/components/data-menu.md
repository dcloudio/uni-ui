## DataMenu 数据驱动的菜单组件
::: tip 组件名：uni-data-menu
代码块： `uDataMenu`
:::

`<uni-data-menu>` 是一个展示类[datacom组件](https://uniapp.dcloud.net.cn/component/datacom)，自带查询的侧边栏菜单。

`<uni-data-picker>` 支持本地数据、云端静态数据(json)，uniCloud云数据库数据。

`<uni-data-picker>` 可以通过JQL直连uniCloud云数据库。

在uniCloud数据表中新建表“opendb-admin-menus”，自动从“opendb-admin-menus”表查询包含的所有菜单。


::: warning 注意事项

为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。

- 组件需要依赖 `sass` 插件 ，请自行手动安装
- 如使用过程中有任何问题，或者您对uni-ui有一些好的建议，欢迎加入 uni-ui 交流群：871950839
:::

### 平台差异说明

暂不支持在nvue页面中使用

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`componets`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)


## API

### DataMenu Props

|属性名						| 类型	|可选值			| 默认值| 说明																																																	|
|:-:				| :-:							|:-:		| :-:				| :-:		|																																																				|
|v-model					|String	|						|				|当前激活菜单的 url																																											|
|active-text-color|String	|						|				|选中、激活文字的颜色																																										|
|unique-opened		|Boolean| true/false|false	|是否只保持一个子菜单的展开																																							|
|localdata			|Array						|				|						|数据，[详情](https://gitee.com/dcloud/datacom)|																																																				|
|collection				|String	|						|				|表名。支持输入多个表名，用 `,` 分割																																		|
|field						|String	|						|				|查询字段，多个字段用 `,` 分割																																					|
|where						|String	|						|				|查询条件，内容较多，另见jql文档：[详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB?id=jsquery)	|
|orderby					|String	|						|				|排序字段及正序倒叙设置																																									|

::: tip 

`collection/where/orderby` 和 `<unicloud-db>` 的用法一致，[详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db)
:::


### DataMenu Events

|事件称名	| 类型		| 说明						|
|:-:		| :-:		|:-:						|
|@select	|EventHandle|选择完成时触发返回被点击的菜单对象 {item}	|


### 基本用法

::: warning 注意事项
 - `localdata` 和 `collection` 同时配置时，`localdata` 优先
:::


#### 云端数据

::: warning 注意事项
- 云端数据需要关联服务空间  
- 下面示例中使用的表 `opendb-admin-menus`(菜单表), 在[uniCloud控制台](https://unicloud.dcloud.net.cn/)使用opendb创建，[详情](https://gitee.com/dcloud/opendb)
:::

```html
<template>
  <view>
    <uni-data-menu v-model="activeUrl" active-text-color="#409eff" collection="opendb-admin-menus" field="menu_id as value, name as text" orderby="value asc" @select="onSelect"></uni-data-menu>
  </view>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      onSelect(e) {
        const value = e.url
      }
    }
  }
</script>

```


#### 本地数据

```html
<template>
  <view>
    <uni-data-menu :localdata="menus" :unique-opened="true" :active="activeUrl" active-text-color="#409eff" @select="onSelect"></uni-data-menu>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        staticMenu: [{
        	menu_id: "demo",
        	text: '静态功能演示',
        	icon: 'uni-icons-list',
        	value: "",
        	children: [{
        		menu_id: "icons",
        		text: '图标',
        		icon: '',
        		value: '/pages/demo/icons/icons',
        	}, {
        		menu_id: "table",
        		text: '表格',
        		icon: '',
        		value: '/pages/demo/table/table',
        	}]
        }]
      }
    },
    methods: {
      onSelect(e) {
        const value = e.url
      }
    }
  }
</script>

```


#### 自定义solt

通过 slot 插入静态菜单

```html
<template>
  <view>
    <uni-data-menu v-model="activeUrl" active-text-color="#409eff" collection="opendb-admin-menus" field="menu_id as value, name as text" orderby="value asc" @select="onSelect">
			<uni-menu-sidebar :data="staticMenu"></uni-menu-sidebar>
		</uni-data-menu>
  </view>
</template>

<script>
  export default {
    data() {
      return {
				staticMenu: [{
					menu_id: "demo",
					text: '静态功能演示',
					icon: 'uni-icons-list',
					value: "",
					children: [{
						menu_id: "icons",
						text: '图标',
						icon: '',
						value: '/pages/demo/icons/icons',
					}, {
						menu_id: "table",
						text: '表格',
						icon: '',
						value: '/pages/demo/table/table',
					}]
				}]
      }
    },
    methods: {
      onSelect(e) {
        const value = e.url
      }
    }
  }
</script>

```
