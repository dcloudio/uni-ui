### Popup 弹出层
*已经支持在nvue页面中使用*

弹出层组件，为了解决遮罩弹层的问题。组件名：``uni-popup``，代码块： uPopup。


### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniPopup from '@/components/uni-popup/uni-popup.vue'
import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
export default {
    components: {
		uniPopup,
		uniPopupMessage,
		uniPopupDialog
	}
}
```

在 ``template`` 中使用组件

```html
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" type="bottom">底部弹出 Popup</uni-popup>
```

```javascript
export default {
   methods:{
      open(){
         this.$refs.popup.open()
      }
   }

}
```

### 属性说明

| 属性名	| 类型		| 默认值| 说明					|
| ---		| ---		| ---	| ---					|
| animation	| Boolean	|true	| 是否开启动画			|
| type		| String	|center	| 弹出方式				|
| maskClick	| Boolean	|true	| 蒙版点击是否关闭弹窗	|

#### type 属性说明
| 属性名	| 说明							|
| ---		| ---						|
| top		| 顶部弹出					|
| center	| 居中弹出					|
| bottom	| 底部弹出					|
| message	| 预置样式 ：消息提示			|
| dialog	| 预置样式 ：对话框			|
| share 	| 预置样式 ：底部弹出分享示例	|

### 方法说明

通过 `ref` 获取组件调用方法

|方法称名	|说明		|
|---		|----		|
|open		|打开弹出层	|
|close		|关闭弹出层	|


### 事件说明

|事件称名	|说明				|返回值			    |
|---		|----				|---			|
|change		|组件状态发生变化触发	|e={show: false,type:当前模式}    |


### 预置样式说明
`uni-popup` 本质上只是提供了可扩展的组件，并没有任何样式，只提供基础的动画效果。所以提供了三种基础扩展样式

#### message 提示信息

将 `uni-popup` 的`type`属性改为 `message`，并引入对应组件即可使用消息提示 ，*该组件不支持单独使用*

**示例**

```html
<uni-popup ref="popup" type="message">
	<uni-popup-message type="success" message="成功消息" :duration="2000"></uni-popup-message>
</uni-popup>
```

#### message 属性说明

| 属性名	| 类型	| 默认值| 说明																					|
| ---		| ---	| ---	| ---																					|
| type		| String|success| 消息提示主题，可选值： success/warn/info/error										|
| message	| String|		| 消息提示文字																			|
| duration	| Number|3000	| 消息显示时间，超过显示时间组件自动关闭，设置为0 将不会关闭，需手动调用 close 方法关闭	|

#### dialog 对话框

将 `uni-popup` 的`type`属性改为 `dialog`，并引入对应组件即可使用对话框 ，*该组件不支持单独使用*

**示例**

```html
<uni-popup ref="popup" type="dialog">
	<uni-popup-dialog type="input" message="成功消息" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
</uni-popup>
```

```javascript
export default {
	methods:{
		/**
		 * 点击取消按钮触发
		 * @param {Object} done
		 */
		close(done){
			// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
			// ...
			done()
		},
		/**
		 * 点击确认按钮触发
		 * @param {Object} done
		 * @param {Object} value
		 */
		confirm(done,value){
			// 输入框的值
			console.log(value)
			// TODO 做一些其他的事情，手动执行 done 才会关闭对话框
			// ...
			done()
		}
	}
}
```

#### dialog 属性说明

| 属性名		| 类型			| 默认值| 说明																							|
| ---			| ---			| ---	| ---																							|
| type			| String		|success| 对话框标题主题，可选值： success/warn/info/error											|
| mode			| String		|base	| 对话框模式，可选值：base（提示对话框）/input（可输入对话框）									|
| title			| String		|		| 对话框标题																					|
| content		| String		|		| 对话框内容，base模式下生效																	|
| value			| String\Number	|		| 输入框默认值，input模式下生效																	|
| placeholder	| String		|		| 输入框提示文字，input模式下生效																|
| before-close	| Boolean		|false	| 是否拦截取消按钮，如为true，则不会关闭对话框，关闭需要监听 dialog 的 close 事件，并执行 done()|

#### dialog 事件说明

|事件称名	|说明					|返回值												|
|---		|----					|---												|
|close		|点击dialog取消按钮触发	|done:执行关闭对话框								|
|confirm	|点击dialog确定按钮触发	|done:执行关闭对话框：value：input模式下输入框的值	|


#### share 分享示例

分享示例，不作为最终可使用的组件，将 `uni-popup` 的 `type` 属性改为 `share`，并引入对应组件即可使用 ，*该组件不支持单独使用*

**示例**

```html
<uni-popup ref="popup" type="share">
	<uni-popup-share title="分享到" @select="select"></uni-popup-share>
</uni-popup>
```

#### share 属性说明

| 属性名| 类型																					| 默认值| 说明			|
| ---	| ---																					| ---	| ---			|
| title	| String																				|		| 分享弹窗标题	|

#### share 事件说明

|事件称名	|说明		|返回值											|
|---		|----		|---											|
|select		|选择触发	|e = {item,index}：所选参数,done：执行关闭窗口	|

Tips
- share 分享组件，只是作为一个扩展示例，如果需要修改数据源，请到组件内修改

### 如何扩展自己的 uni-popup 弹出层样式？
`uni-popup` 组件内容是通过 `slot` 插槽的方式去实现的，所以这极大的方便了我们的扩展。

现在我们可以在不改动 `uni-popup` 组件主体的情况下，方便的去扩展我们自己的弹出层样式。

#### 添加自定义类型
如果要去扩展 `uni-popup`，我们需要把组件*引入本地*，才能去进行扩展。

组件放到本地后，在组件目录找到 `popup.js` ，在 `config` 变量中定义自己的类型，key 为当前要定义的类型，value 为弹出类型（top/bottom/center）
我们以 `uni-popup-share` 为例，看如何扩展一个`share` 底部分享的一个 `uni-popup` 子组件，代码参考 `uni-popup-share.vue`。

```javascript

// popup.js

const config = {
	// ...
	// 分享 key:share 为我们定义的类型 value : 'bottom' 为弹出方向（top/bottom/center）
	// 这样配置好之后，我们自定义的弹出层就会从底部弹出
	share:'bottom',
}

```

#### 创建子组件

在 `uni-popup` 组件根目录创建文件 ，例 `uni-popup-share.vue`，结构与其他组件没有区别。

在组件内直接编写样式逻辑即可，如需自定义效果更强，可以通过 props 接受页面参数。


#### 与父组件 `uni-popup` 进行通讯

组件通讯我们使用了 `provide/inject` ， 具体逻辑我们不需要关心，只要在子组件配置 `inject` ，即可获取父组件方法变量等。

```javascript

// uni-popup-share.vue

export default {
	name: 'UniPopupShare',
	props: {
		title: {
			type: String,
			default: '分享到'
		}
	},
	// 直接把下面这一行代码，放到自己的组件内
	inject: ['popup'],
	// ...
	methons:{
		/**
		 * 定义的选择事件，选择内容后触发
		 */
		select(item, index) {
			// 将事件发送到页面，在页面进行监听
			this.$emit('select', {
				item,
				index
			}, () => {
				// 延迟操作，执行父组件的close事件，关闭弹出层
				this.popup.close()
			})
		},
		/**
		 * 关闭窗口
		 */
		close() {
			// 执行父组件的close事件，关闭弹出层
			this.popup.close()
		}
	}
}
```


#### 使用自定义组件

通过上面几个步骤 ，我们就可以使用这个组件了，只需要把我们自定义的组件放置到 `uni-popup` 组件内即可 ，指定 `uni-popup` 的 `type` 为我们第一步定义好的 `share` 

```html
<uni-popup ref="popup" type="share">
	<uni-popup-share title="分享到" @select="select"></uni-popup-share>
</uni-popup>
```

之后就可以按照 `uni-popup` 的使用方式去打开关闭弹出层了。更多细节可以参考 `uni-popup-message` 和 `uni-popup-dialog`。


### 分享你的组件

通过组件扩展，你可以扩展出更丰富的弹出层样式，如果您想让更多人使用你定制的组件，或者您有更好的点子或更好的实现方式，欢迎给我们提交 [PR](https://github.com/dcloudio/uni-ui/pulls)，如被采用，会合并到示例中。

在使用中如遇到无法解决的问题，请提 [Issues](https://github.com/dcloudio/uni-ui/issues) 给我们。



**Tips**
- 在使用 `uni-popup` 时，尽量将组件置于其他元素后面，避免出现层级问题
- 在微信小程序开发者工具中，启用真机调试，popup 会延时出现，是因为 setTimeout 在真机调试中的延时问题导致的，预览和发布小程序不会出现此问题
- `uni-popup` 并不能完全阻止页面滚动，可在打开 `uni-popup` 的时候，去做一些处理，禁止页面滚动
- 如果需要在子组件内关闭 `uni-popup` ，请使用上述的扩展（provide/inject）方式，其他方式可能会出现不可预知问题
- 扩展组件使用前不要忘记注册组件
- 如果想在页面渲染完毕后就打开 `uni-popup` ，请在 `onReady` 或 `mounted` 生命周期内调用，确保组件渲染完毕
- 使用 `npm` 方式引入组件，如果确认引用正确，但是提示未注册组件或显示不正常，请尝试重新编译项目

### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/popup/popup](https://uniapp.dcloud.io/h5/pages/extUI/popup/popup)