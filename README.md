### uni-ui 使用说明

#### 初始化项目

在 HBuilderX 中新建 uni-app 项目，进入项目目录，执行：

```
npm init -y
```

#### 安装 uni-ui

```
npm install @dcloudio/uni-ui
```

#### 使用 uni-ui

在 ``script`` 中引用组件：

```javascript
import {uniBadge} from '@dcloudio/uni-ui'
//import uniBadge from '@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue' //也可使用此方式引入组件
export default {
    components: {uniBadge}
}
```

在 ``template`` 中使用组件：

```html
<uni-badge text="1"></uni-badge>
<uni-badge text="2" type="success" @click="bindClick"></uni-badge>
<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
```
