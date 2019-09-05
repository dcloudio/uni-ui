
### GoodsNav 商品导航

商品加入购物车，立即购买，组件名：``uni-title``，代码块： uTitle。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import uniGoodsNav from "@/components/uni-goods-nav/uni-goods-nav.vue"
export default {
    components: {uniGoodsNav}
}
```

在 ``template`` 中使用组件

```html
<uni-goods-nav :fill="true"  :options="options" :button-group="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
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

**GoodsNav 属性说明：**

|属性名			|类型		|默认值	|说明						|
|---				|----		|---		|---						|
|options		|Array	|				|组件参数		|
|buttonGroup|Array	|				|组件按钮组参数	|
|fill				|Boolean|false	|按钮是否平铺		|


**options 参数说明：**

|属性名	|类型		|默认值	|说明															|
|---		|----		|---		|---															|
|icon		|String	|				|显示图片，本地绝对路径或线上路径	|
|text		|String	|				|显示文字													|
|info		|Number	|0			|右上角数字角标										|

**buttonGroup 参数说明：**

|属性名					|类型		|默认值	|说明				|
|---						|----		|---		|---				|
|text						|String	|				|按钮文字		|
|background-color|String	|			|按钮背景色	|
|color					|String	|				|字体颜色		|

**事件说明**

|事件名				|说明																					|
|---					|---																					|
|@click				|左侧点击事件，返回 e = {index,content}				|
|@buttonClick	|右侧按钮组点击事件，返回 e = {index,content}	|

### 更新日志
**0.0.1**
- 初始项目