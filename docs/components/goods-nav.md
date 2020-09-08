
### GoodsNav 商品导航
*已经支持在nvue页面中使用*

商品加入购物车，立即购买，组件名：`uni-goods-nav`，代码块： uGoodsNav。

### 使用方式

引用组件 

```javascript
import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
export default {
    components: {uniGoodsNav}
}
```

使用组件

```html
<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
```

```javascript
export default {
	data () {
	  return {
	    options: [{
	      icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
	      text: '客服'
	    }, {
	      icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
	      text: '店铺'
	    }, {
	      icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
	      text: '购物车',
	      info: 2
	    }],
	    buttonGroup: [{
	      text: '加入购物车',
	      backgroundColor: '#ff0000',
	      color: '#fff'
	    },
	    {
	      text: '立即购买',
	      backgroundColor: '#ffa200',
	      color: '#fff'
	    }
	    ]
	  }
	},
	methods: {
	  onClick (e) {
	    uni.showToast({
	      title: `点击${e.content.text}`,
	      icon: 'none'
	    })
	  },
	  buttonClick (e) {
	    console.log(e)
	    this.options[2].info++
	  }
	}
}
```

### 属性说明

|属性名		|类型	|默认值	|说明			|
|---		|----	|---	|---			|
|options	|Array	|-		|组件参数		|
|buttonGroup|Array	|-		|组件按钮组参数	|
|fill		|Boolean|false	|按钮是否平铺	|


**options 参数说明：**

|属性名	|类型	|默认值	|说明								|
|---	|----	|---	|---								|
|icon	|String	|-		|显示图片，本地绝对路径或线上路径	|
|text	|String	|-		|显示文字							|
|info	|Number	|0		|右上角数字角标						|

**buttonGroup 参数说明：**

|属性名				|类型	|默认值	|说明		|
|---				|----	|---	|---		|
|text				|String	|-		|按钮文字	|
|background-color	|String	|-		|按钮背景色	|
|color				|String	|-		|字体颜色	|

### 事件说明

|事件名			|说明				|返回值				|
|---			|---				|---				|
|@click			|左侧点击事件		|e = {index,content}|
|@buttonClick	|右侧按钮组点击事件	|e = {index,content}|

### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/goods-nav/goods-nav](https://uniapp.dcloud.io/h5/pages/extUI/goods-nav/goods-nav)