### List 列表

列表组件，组件名：``uni-list``、``uni-list-item``，代码块： uList。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import {uniList,uniListItem} from "uni-ui"
export default {
    components: {uniList,uniListItem}
}
```

List 一般用法

```html
<uni-list>
    <uni-list-item title="标题文字" show-arrow="false"></uni-list-item>
    <uni-list-item title="标题文字"></uni-list-item>
    <uni-list-item title="标题文字" show-badge="true" badge-text="12"></uni-list-item>
    <uni-list-item title="禁用状态" disabled="true" show-badge="true" badge-text="12"></uni-list-item>
</uni-list>
```

带描述信息

```html
<uni-list>
    <uni-list-item title="标题文字" note="描述信息"></uni-list-item>
    <uni-list-item title="标题文字" note="描述信息" show-badge="true" badge-text="12"></uni-list-item>
</uni-list>
```

包含图片

```html
<uni-list>
    <uni-list-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
</uni-list>
```

包含图标

```html
<uni-list>
    <uni-list-item title="标题文字" show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
</uni-list>
```

显示Switch

```html
<uni-list>
    <uni-list-item title="标题文字" show-switch="true" show-arrow="false"></uni-list-item>
</uni-list>
```


**uniListItem 属性说明：**

|属性名|类型|默认值	|说明|
|---|----|---|---|
|title|String||标题|
|note|String||描述|
|disabled|Boolean|false|是否禁用|
|show-arrow|Boolean|true|是否显示箭头图标|
|show-badge|Boolean|false|是否显示数字角标|
|badge-text|String||数字角标内容|
|badge-type|String||数字角标类型，参考[xxx](xxx)|
|show-switch|Boolean|false|是否显示Switch|
|switch-checked|Boolean|false|Switch是否被选中|
|show-extra-icon|Boolean|false|左侧是否显示扩展图标|
|extra-icon|Object||扩展图标参数，格式为 ``{color: '#4cd964',size: '22',type: 'spinner'}``，参考 [xxx](xxx)|
|thumb|String||左侧缩略图，若thumb有值，则不会显示扩展图标|

**uniListItem 事件说明：**

|事件称名|说明|返回参数|
|---|----|---|
|click|点击 uniListItem 触发事件||
|switchChange|点击切换 Switch 时触发|{value:checked}|


### 更新日志

**1.0.0**
- 初始项目