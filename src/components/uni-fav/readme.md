### Fav 收藏按钮
*已经支持在nvue页面中使用*

用于收藏功能，可点击切换选中、不选中的状态，组件名：``uni-fav``，代码块： uFav。

### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniFav from '@/components/uni-fav/uni-fav.vue'
export default {
    components: {uniFav}
}
```

在 ``template`` 中使用组件

```html
<uni-fav :checked="checked" @click="onClick"/>
<uni-fav :checked="checked" class="favBtn" circle="true" bgColor="#dd524d" bgColorChecked="#007aff" @click="onClick"/>
```


### 属性说明

|属性名				|类型	|默认值												|说明				|
|---				|----	|---												|---				|
|star				|Boolean|true												|按钮是否带星星		|
|bgColor			|String	|#eeeeee											|未收藏时的背景色	|
|bgColorChecked	|String	|#007aff											|已收藏时的背景色	|
|fgColor			|String	|#666666											|未收藏时的文字颜色	|
|fgColorChecked	|String	|#FFFFFF											|已收藏时的文字颜色	|
|circle				|Boolean|false												|是否为圆角			|
|checked			|Boolean|false												|是否为已收藏		|
|contentText		|Object	|```{contentDefault: '收藏',contentFav: '已收藏'}```|收藏按钮文字		|


### 事件说明

|事件称名	|说明					|返回值	|
|---		|----					|---	|
|click		|点击 fav按钮 触发事件	|-		|

### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/fav/fav](https://uniapp.dcloud.io/h5/pages/extUI/fav/fav)