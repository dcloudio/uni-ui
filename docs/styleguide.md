# 风格指南

::: tip 欢迎大家一同参与到 `uni-ui` 的开发中
`UI` 是一种需求非常发散的产品，`DCloud` 官方也无意用 `uni-ui` 压制第三方 `UI` 插件的空间，但官方有义务在性能和多端方面提供一个开源的标杆给大家。
我们欢迎更多优秀的 `UI` 组件出现，也欢迎更多人贡献 `uni-ui` 的主题风格，满足更多用户的需求。

欢迎给我们提交 [PR](https://github.com/dcloudio/uni-ui/pulls) ，在参与 `uni-ui` 开发时，请遵守约定的单文件组件风格指南，指南内容节选自 [Vue 官方风格指南](https://cn.vuejs.org/v2/style-guide/)。
:::

## 组件数据

**组件的 `data` 必须是一个函数。**

当在组件中使用 `data` property 的时候 (除了 `new Vue` 外的任何地方)，它的值必须是返回一个对象的函数。

```javascript {3,4,5} 
// 反例
export default {
  data: {
    foo: 'bar'
  }
}

```

```javascript {3,4,5,6} 
// 好例子
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}

```

## 为 v-for 设置键值

```html {3}
// 反例
<view>
  <view v-for="todo in todos">
    {{ todo.text }}
  </view>
</view>

```

```html {3}
// 好例子
<view>
  <view v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </view>
</view>

```