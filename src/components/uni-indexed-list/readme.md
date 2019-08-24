### IndexedList 索引列表

用于展示索引列表，组件名：``uni-indexed-list``，代码块： uIndexedList。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import uniIndexedList from "@/components/uni-indexed-list/uni-indexed-list.vue"
export default {
    components: {uniIndexedList}
}
```

在 ``template`` 中使用组件

```html
<uni-indexed-list :options="list" :showSelect="false" @click="bindClick"></uni-indexed-list>
```

**IndexedList 属性说明：**

|属性名		|类型|默认值	|说明|
|---|----|---|---|
|options	|Object	|-|索引列表需要的数据对象|
|showSelect	|Boolean	|-| 展示模式	，true 为展示默认，false 为选择模式，默认为 false|

**IndexedList 事件说明：**

|事件名		|说明									|
|---		|---									|
|click	|function	|点击列表事件 ，返回当前选择项的事件对象|



**options 数据格式说明**

```json

 [{
	"letter": "A",
	"data": [
		"阿克苏机场",
		"阿拉山口机场",
		"阿勒泰机场",
		"阿里昆莎机场",
		"安庆天柱山机场",
		"澳门国际机场"
	]
}, {
	"letter": "B",
	"data": [
		"保山机场",
		"包头机场",
		"北海福成机场",
		"北京南苑机场",
		"北京首都国际机场"
	]
}]
```

### 更新日志
**1.0.1**
- 修复 添加列表数据变化的监听
-
**1.0.0**
- 初始项目