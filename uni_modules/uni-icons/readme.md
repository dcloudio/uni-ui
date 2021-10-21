

## Icons 图标
> **组件名：uni-icons**
> 代码块： `uIcons`


用于展示 icons 图标 。

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件

```html
<uni-icons type="contact" size="30"></uni-icons>
```

## API

### Icons Props

|属性名	|类型		|默认值	|说明				|
|:-:	|:-:		|:-:	|:-:				|
|size	|Number		|24		|图标大小			|
|type	|String		|-		|图标图案，参考示例	|
|color	|String		|-		|图标颜色			|
|customPrefix	|String		|-		|自定义图标|




### Icons Events
|事件名	|说明			|返回值|
|:-:	|:-:			|:-:  |
|@click|点击 Icon 触发事件|-    |

## 自定义图标 
> nvue 页面暂时不支持自定义图标，如需在 nvue 中使用 ，请自行引入字体文件

`uni-icons` 已经收录了日常开发中常用的图标 ，但是因为体积问题 ，不可能一直无限添加新图标 ，所以`uni-icons` 也提供了扩展的方法。 

使用 `custom-prefix` 和 `type` 属性自定义图标

```html
<uni-icons custom-prefix="custom-icon" type="icon-youxi" size="30"></uni-icons>
```

### 获取图标
**以下所有说明都是基于[阿里图标库](https://www.iconfont.cn/)进行扩展，其他图标库同理，明白原理即可方便扩展**


1. 访问 [阿里图标库](https://www.iconfont.cn/)，搜索图标并加入购物车：
![搜索图标](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/8610a5f2-2562-4ca6-9806-679a500a1d0a.png)

2. 点击页面右上角购物车图标 ，点击`添加至项目`，如没有项目，需要点击下图第二步的图标添加一个项目目录，如已经有项目则可以略过第二步，选择项目后点击确定：

![添加至项目](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/2f639b71-a2d3-43a1-bd6b-766134dea8e3.png)

3. 确定后进入项目，点击项目设置 ，对图标库进行一些设置：
![编辑项目](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/996ffe2e-4fdd-42d2-bf04-c44c0c978874.png)

4. 项目名称和项目描述根据自己需求填写， `fontClass` 是图标的前缀 ，需要传入组件`type`属性，`fontFamily` 是图标集名称，需要传入组件`custom-prefix` 属性，字体格式可以只勾选 `ttf`:
![设置项目](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/6992d375-0ec2-4cfb-82eb-6e724a111fd7.png)

5. 点击保存后 ，可以下载图库库到本地：
![下载图标库](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/acaf25c2-8806-4fa8-b502-d9ac4b8138a6.png)

6. 下载解压后，需要用到的文件暂时有两个 `iconfont.css`、`iconfont.ttf`:
![解压](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/8d1b81af-c1f2-494d-b139-2ac6d3ea4ff5.png)

7. 将 `iconfont.ttf`、`iconfont.css` 放到项目根目录 `static` 下。

8. 打开 `iconfont.css` ,修改 `@font-face` 如下,注意 src 字体文件的引用路径是否正确：
	```css
	@font-face {
		font-family: "iconfont"; 
		src  : url('./iconfont.ttf) format('truetype');
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	}
	
	.icon-search:before {
	  content: "\e65c";
	}
	```

通过上述操作 ，现在就获得一个可以自定义的图标库，
### 在 vue 页面使用自定义图标
在项目根目录的 `App.vue` 中，引入上述的 `iconfont.css`，注意自己存放的路径，且通过 `@import` 引入的外部样式，需要写在 `style` 标签有效内容中的最前面

```html
<!-- App.vue -->
<style>
@import "@/static/iconfont.css";
</style>
```


使用 `custom-prefix` 和 `type` 属性自定义图标

```html
<uni-icons custom-prefix="iconfont" type="icon-search" size="30"></uni-icons>
```

## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/icons/icons](https://hellouniapp.dcloud.net.cn/pages/extUI/icons/icons)