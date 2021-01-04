---
url : pages/vue/table/table
---

## Table 表单
> 组件名：``uni-table``，代码块： `uTable`。

用于展示多条结构类似的数据

### 平台差异说明

目前仅支持pc端

### 组件使用注意事项

为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。

- 组件需要依赖 `sass` 插件 ，请自行手动安装
- 如使用过程中有任何问题，或者您对uni-ui有一些好的建议，欢迎加入 uni-ui 交流群：871950839

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)


### 基本用法 
表格是由4个组件： `uni-table`表格组件、`uni-tr`表格行 、`uni-th` 表格头、`uni-td` 单元格组成

需要注意的是：
- `uni-table` 的根节点一定是 `uni-tr`
- `uni-tr` 的根节点一定是 `uni-th` 或者 `uni-td`
- 一个表格内理论上只能包含表头行
- 目前只能在 `uni-th` 中设置 width 属性，`uni-td` 的宽度跟随 `uni-th` 宽度变化


```html
<uni-table border stripe emptyText="暂无更多数据" >
	<!-- 表头行 -->
	<uni-tr>
		<uni-th align="center">日期</uni-th>
		<uni-th align="center">姓名</uni-th>
		<uni-th align="left">地址</uni-th>
	</uni-tr>
	<!-- 表格数据行 -->
	<uni-tr>
		<uni-td>2020-10-20</uni-td>
		<uni-td>Jeson</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>
	<uni-tr>
		<uni-td>2020-10-21</uni-td>
		<uni-td>HanMeiMei</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>
	<uni-tr>
		<uni-td>2020-10-22</uni-td>
		<uni-td>LiLei</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>
	<uni-tr>
		<uni-td>2020-10-23</uni-td>
		<uni-td>Danner</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>

</uni-table>
</script>
			 
```




## API

### Table Props

属性名		| 类型			|默认值	 		| 可选值	| 说明
:-:			| :-:			|:-:			| :-:	| :-:	
border		| Boolean		| false			| -		| 是否带有纵向边框	
stripe		| Boolean		| false			| -		| 是否显示斑马线样式	
type		| Boolean		| false			| -		| 是否开启多选	
emptyText	| String		| 没有更多数据	| -		| 空数据时显示的文本内容	
loading		| Boolean		| false			| -		| 显示加载中	

### Table Events

事件称名				|说明									| 返回参数			
:-:					|:-:									| :-:				
selection-change	| 开启多选时，当选择项发生变化时会触发该事件	| Function(Object)


### Th Props

属性名	|类型	|默认值	 	|可选值				|说明
:-:		|:-:		|:-:		|:-:				|:-:
width	|String	| -			|-					| 单元格宽度
align	|Boolean| left		|left/center/right	| 表头对齐方式

### Td Props

属性名	|类型	|默认值	 	|可选值				|说明
:-:		|:-:		|:-:			|:-:				|:-:
align	|Boolean| left		|left/center/right	| 单元格对齐方式
