### Grid 宫格

宫格组件，组件名：``uni-grid``，代码块： uGrid。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import uniGrid from "@/components/uni-grid/uni-grid.vue"
import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
export default {
    components: {uniGrid,uniGridItem}
}
```



**Grid 一般用法**

```html
<uni-grid :column="3">
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
</uni-grid>
```

**Grid 添加角标红点**

```html
<uni-grid :column="3" :hor="35" :ver="-45">
	<uni-grid-item marker="dot">
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item marker="badge" text="99" type="success">
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item marker="image" :hor="35" :ver="-45" :img-width="25" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/recommend.png">
		<text class="text">文本</text>
	</uni-grid-item>
</uni-grid>
```

**Gird 不带边框并矩形显示**

```html
<uni-grid :column="3" :show-border="false"  :square="false">
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
</uni-grid>
```



**uni-grid 属性说明：**

|属性名		|类型		|默认值	|说明																		|
|---		|----		|---	|---																		|
|column		|Number		|3		|每列显示个数																|
|showBorder	|Boolean	|true	|是否显示边框																|
|borderColor|String		|#d0dee5|边框颜色																	|
|hor		|Number		|0		|全局 marker 水平方向移动距离 ，起点为中心，负数为左移动，正数为右移动		|
|ver		|Number		|0		|全局 marker 垂直方向移动距离 ，起点为中心，负数为上移动，正数为下移动		|
|square		|Boolean	|true	|是否方形显示																|
|highlight	|Boolean	|true	|点击背景是否高亮															|
|@change	|function	|	-	|点击 grid 触发，返回 event={detail:{index:0}},index 为当前点击 gird 下标	|

**uni-grid-item 属性实名：**

|属性名		|类型	|默认值	|说明																							|
|---		|----	|---	|---																							|
|marker		|String	|-		| marker 类型，可选值，dot：圆点；badge：角标；image：图片； 默认不显示							|
|hor		|Number	|0		| 局部 marker 水平方向移动距离 ，起点为中心，负数为左移动，正数为右移动，可覆盖全局 hor			|
|ver		|Number	|0		| 局部 marker 垂直方向移动距离 ，起点为中心，负数为上移动，正数为下移动，可覆盖全局 ver			|
|type		|String	|-		| **marker:badge 下生效** ，marker 显示内容，如果为汉字最多长度最大为1							|
|size		|String	|normal	| **marker:badge 下生效** ，marker 大小，可取值：normal、small									|
|inverted	|Boolean|false	| **marker:badge 下生效** ，marker 是否无需背景颜色，为 true 时，背景颜色将变为文字的字体颜色	|
|src		|String	|-		| **marker:image 下生效** ，marker 图片地址路径													|
|imgWidth	|Number	|30		| **marker:image 下生效** ，marker 宽度，高度自适应												|


Tips
- marker:dot ， 暂不支持修改大小，和颜色
- Grid 组件仅在自定义组件模式下支持
- column 属性最大值最好不要超过 5 个，如果超过，注意内容显示
- 支付宝小程序平台需要在支付宝小程序开发者工具里开启 component2 编译模式，开启方式： 详情 --> 项目配置 --> 启用 component2 编译

### 更新日志

**1.1.1**
- 修复 依赖组件找不不到的问题

**1.1.0**
- 新增 红点、数字角标、图片角标
- 新增 可显示隐藏边框，修改边框颜色
- 优化 内容改为插槽，提高定制性
- 优化 （重要）组件代码重构，与之前代码不兼容，如需使用新功能，请替换当前最新组件

**1.0.0**
- 初始项目
