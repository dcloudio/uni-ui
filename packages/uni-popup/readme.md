## Popup 弹出层

弹出层组件，为了解决遮罩弹层的问题。组件名：``uni-popup``，代码块： uPopup。


**使用方式：**

在 ``script`` 中引用组件 

```javascript
import {uniPopup} from "uni-ui"
export default {
    components: {uniPopup}
}
```

基本用法

```html
<uni-popup :show="top" type="top" mode="fixed" msg="顶部弹出popup" @hidePopup="hidePopup"></uni-popup>
<uni-popup :show="middle" type="middle" mode="fixed" msg="居中弹出popup" @hidePopup="hidePopup"></uni-popup>
<uni-popup :show="bottom" type="bottom" mode="fixed" msg="底部弹出popup" @hidePopup="hidePopup"></uni-popup>
```

slot用法（插屏广告）

```html
<uni-popup :show="showPopupMiddleImg" type="middle" mode="insert" @hidePopup="hidePopup">
	<view class="uni-center center-box">
		<image class="image" src="/static/uni.png" />
	</view>
</uni-popup>
```

slot用法（分享界面）

```html
<uni-popup :show="showPopupBottomShare" type="bottom" @hidePopup="hidePopup">
	<view class="bottom-title">分享到</view>
	<view class="bottom-content">
		<view class="bottom-content-box" v-for="(item, index) in bottomData" :key="index">
			<view class="bottom-content-image" :class="item.name">
				<text class="icon">{{ item.icon }}</text>
			</view>
			<view class="bottom-content-text">{{ item.text }}</view>
		</view>
	</view>
	<view class="bottom-btn" @click="hidePopup">取消分享</view>
</uni-popup>
```


**属性说明：**

|  属性名	|    类型	| 默认值| 说明	|
| ---		| ---		| ---	| ---	|
| show		| Boolean	|false	| 关闭、开启弹窗	|
| position	| String	|middle	| 对齐方式，可选值：top（顶部），middle（居中），bottom（底部）|
| mode		| String	|insert	| 居中显示模式，仅 position 是 middle 时生效，可选值：insert（插屏显示，无边框背景）， fiexd（固定显示，有边框背景）|
| msg		| String	|	-	| 显示文字信息，仅 mode 不是 fixed 时生效|
| button-mode| String	|bottom	| 关闭按钮显示位置，仅 mode 是 insert 时生效，可选值：bottom（底部显示关闭按钮，带竖线）， right（右上角显示关闭按钮）|
| h5-top| Boolean	|false	| H5 下蒙版是否通顶 |


**事件说明：**

|事件称名|说明|
|---|----|
|hidePopup|popup关闭时触发事件|
