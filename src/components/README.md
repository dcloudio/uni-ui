
## 命名规则

### 页面
直接使用组件名命名，需要使用 - 连接，不能使用驼峰命名

例：
```javascript
// 正确
swiper-action.vue

// 错误
swiperAction.vue

```

### 组件 
直接使用组件名命名，需要使用 - 连接，不能使用驼峰命名，前缀需要加上 uni- 

例：
```javascript
// 正确
uni-swiper-action.vue

// 错误
swiper-action.vue

// 错误
uniSwiperAction.vue
```


## 组件文件说明
- readme.md 组件使用说明
- config.js 组件配置
- uni-xxx.vue 组件文件

**config.json 说明**
```json
{
	"name":"Collapse", // 组件名称
	"desc":"折叠面板", // 组件中文名称
	"url":"collapse", // 组件地址 （为跳转地址，一般是组件名称，全消协）
	"edition":"1.0.0", // 组件版本，每次修改版本号要递增
	"path":"https://ext.dcloud.net.cn/plugin?id=23", // 插件市场地址
	"update_log":"", // 当前版本的更新日志，markdown 格式
	"compilation":"#ifdef H5 || APP-PLUS || MP-WEIXIN" // 条件编译 ，在什么平台使用，或者在什么平台不使用这个组件
  "update_log":"- 更新内容", // 组件更新日志，支持md格式，注意空格等，写完需要原样粘贴到 md 文件验证是否格式错误
	"hidden":true // 同步后 ，是否隐藏组件（一般是组件为完成，但是需要同步的时候，需要设置为 true ，正常情况不需要写这个参数）
}

```

### 子组件
如果组件依赖子组件且只有当前组件使用，需要放到当前组件目录，加后缀 -item，如：uni-calendar-item.vue

### 嵌套组件
如果组件需要嵌套组件，如 uni-list 组件，子组件需要单独创建目录，参考 uni-list 、uni-list-item

### 其他文件
如果只有当前组件依赖的文件，如js、wxs 等，都需要放到当前组件目录引用



## 注意事项
- 尽量少使用外部js
- 控制组件体积 
- 使用 sass 开发，统一使用全局 sass 样式
- 组件内如非必要，尽量不要使用 uni-ui 组件
- 组件内引用 improt ，文件后缀不能省略
- sass 不能使用 @mixin
- sass 不能使用 background: rgba($color: #000000, $alpha: 1.0)这样的语法