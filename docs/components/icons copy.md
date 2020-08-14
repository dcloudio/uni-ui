## Icons 图标
> 组件名：``uni-icons``，代码块： `uIcons`。

用于展示 icons 图标



### 平台差异说明

如无特殊说明，则全平台支持
 
### 使用方式

#### 方式1 (推荐)

`HBuilderX 2.5.5`起支持 `easycom` 组件模式。在使用 `uni-ui` 的时候，只要[`uni-ui` 组件](https://ext.dcloud.net.cn/plugin?id=55) 安装在项目的 `components` 目录下,并符合 `components/组件名称/组件名称.vue` 目录结构。就可以不用引用、注册，直接在页面中使用 `uni-ui` 组件

`easycom` 组件模式的好处在于不管 `components` 目录下安装了多少组件，`easycom` 打包后会自动剔除没有使用的组件，对组件库的使用尤为友好,组件库批量安装，随意使用，自动按需打包。 关于 `easycom` 更详细内容 [参考文档](https://uniapp.dcloud.io/collocation/pages?id=easycom)



#### 其他方式
请参考[快速开始](../quickstart.md#方式二（cli）)中的其他方式 

## 基本用法
```html
<uni-icons type="contact" size="30" color="#ff5a5f"></uni-icons>
```

## 属性说明

|	属性名					|	类型				|	默认值		|	说明							|
|	---						|	----			|	---			|	---							|
|	size					|	Number		|	24			|	图标大小					|
|	type					|	String		|	-				|	图标图案，参考示例	|
|	color					|	String		|	-				|	图标颜色					|
|	customIcons 	|	String 		|	- 			| 自定义图标 				|


### 事件说明
|	事件名		|	说明								|	返回值	|
|	---			|	----							|	---  	|
|	@click	|	点击 Icon 触发事件	|	-    	|

## 图标示例

<!-- <icons></icons> -->

## 123
::: warning  组件使用注意事项 

为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些必要的错误使用。

- 组件需要依赖 `sass` 插件 ，请自行手动安装

:::