### LoadMore 加载更多

用于列表中，做滚动加载使用，展示 loading 的各种状态，组件名：``uni-load-more``，代码块： uLoadMore。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import uniLoadMore from "@/components/load-more/load-more.vue"
export default {
    components: {uniLoadMore}
}
```

在 ``template`` 中使用组件

```html
<uni-load-more :loadingType="1"></uni-load-more>
```

实际效果参考：[https://github.com/dcloudio/uni-ui](https://github.com/dcloudio/uni-ui)

**属性说明：**

|属性名		|类型|默认值	|说明|
|---|----|---|---|
|status	|String	|more|loading 的状态，可选值：more（loading前）、loading（loading中）、noMore（没有更多了）|
|show-icon	|Boolean	|true|是否显示 loading 图标|
|color	|String	|#777777|图标和文字颜色	|
|content-text	|Object	|```{contentdown: "上拉显示更多",contentrefresh: "正在加载...",contentnomore: "没有更多数据了"}```|各状态文字说明|

### 更新日志
**1.1.0**
- 修复 load 动画失效的问题

**1.0.0**
- 初始项目