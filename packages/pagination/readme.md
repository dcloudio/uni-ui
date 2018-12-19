### Pagination 分页器

分页器组件，用于展示页码、请求数据等。组件名：``uni-pagination``，代码块： uPagination。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import {uniPagination} from "uni-ui"
export default {
    components: {uniPagination}
}
```

用法

```html
<uni-pagination title="标题文字" total="20"></uni-pagination>
<uni-pagination title="标题文字" show-icon="true" total="50" current="2"></uni-pagination>
```

**uniPagination 属性说明：**

|属性名|类型|默认值	|说明|
|---|----|---|---|
|prev-text|String|上一页|左侧按钮文字|
|next-text|String|下一页|右侧按钮文字|
|current|Number|1|当前页|
|total|Number|0|数据总量|
|pageSize|Number|10|每页数据量|
|show-icon|Boolean|false|是否以 icon 形式展示按钮|


**uniPagination 事件说明：**

|事件称名|说明|返回参数|
|---|----|---|
|change|点击页码按钮时触发|{type,current} current为当前页，type值为：next/prev，表示点击的是上一页还是下一个|
