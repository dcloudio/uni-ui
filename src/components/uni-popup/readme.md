## Popup 弹出层

弹出层组件，为了解决遮罩弹层的问题。组件名：``uni-popup``，代码块： uPopup。


**使用方式：**

在 ``script`` 中引用组件 

```javascript
import uniPopup from "@/components/uni-popup/uni-popup.vue"
export default {
    components: {uniPopup}
}
```

**基本用法**

```html
<uni-popup ref="popup" type="bottom">底部弹出 Popup</uni-popup>
```

**属性说明：**

|  属性名	|    类型	| 默认值| 说明															|
| ---		| ---		| ---	| ---															|
| animation	| Boolean	|true	| 是否开启动画													|
| type		| String	|center	| 弹出方式，可选值：top（顶部），center（居中），bottom（底部）	|
| show		| Boolean	|false	| 显示弹窗	|
| custom	| Boolean	|false	| 是否自定义内容												|
| maskClick	| Boolean	|true	| 蒙版点击是否关闭弹窗											|
| change	| function	|true	| 打开关闭弹窗触发											|


**方法说明：**
通过 `ref` 获取组件方法

|方法称名	|说明		|
|---		|----		|
|open		|打开弹出层	|
|close		|关闭弹出层	|

```html
<view>
	<button @click="openPopup">打开弹出层</button>
	<uni-popup ref="popup" type="center">
		弹出层示例
		<button @click="closePopup">关闭弹出层</button>
	</uni-popup>
</view>
```

```javascript
export default {
	methods:{
		openPopup(){
			this.$refs.popup.open()
		},
		closePopup(){
			this.$refs.popup.close()
		}
	}
}
```

Tips 
- show 的作用与 open() 效果一致 ，在使用中显示弹窗二者只能选择其一。如果使用 show 显示弹窗，那么关闭弹窗时，应将 show 置为 false

### 更新日志
**1.1.3**
- 新增 打开关闭弹窗的回调事件

**1.1.2**
- 新增 显示弹窗属性
- 修复 h5 取消导航栏，顶部空白问题

**1.1.1**
- 修复 图片不显示的问题

**1.1.0**
- 新增 动画效果
- 修复 示例底部弹出样式错乱的 bug
- 优化 代码重构 可完全自定义内容

**1.0.0**
- 初始化项目