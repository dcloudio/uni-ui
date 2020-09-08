### LoadMore 加载更多
*已经支持在nvue页面中使用*

用于列表中，做滚动加载使用，展示 loading 的各种状态，组件名：``uni-load-more``，代码块： uLoadMore。

### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
export default {
    components: {uniLoadMore}
}
```

在 ``template`` 中使用组件

```html
<uni-load-more :status="more"></uni-load-more>
```


### 属性说明

|属性名			|类型	|默认值		|说明	|
|---			|----	|---		|---														|
|iconSize		|Number	|24			|指定图标大小			|
|status			|String	|more		|loading 的状态，可选值：more（loading前）、loading（loading中）、noMore（没有更多了）			|
|showIcon		|Boolean|true		|是否显示 loading 图标				|
|iconType		|String	|auto		|指定图标样式，可选值：snow（ios雪花加载样式）、circle（安卓环形加载样式）、auto（根据平台自动选择加载样式）。**注意：**APP-NVUE不支持此选项|
|color			|String	|#777777	|图标和文字颜色		|
|contentText	|Object	|`{contentdown: "上拉显示更多",contentrefresh: "正在加载...",contentnomore: "没有更多数据了"}`	|各状态文字说明	|

**说明**

- `iconType`为`snow`时，在`APP-NVUE`平台不可设置大小，在非`APP-NVUE`平台不可设置颜色


### 事件说明

|事件名			|说明				|返回值						|
|---			|---				|---						|
|clickLoadMore	|点击加载更多时触发	|e.detail={status:'loading'}|

### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/load-more/load-more](https://uniapp.dcloud.io/h5/pages/extUI/load-more/load-more)