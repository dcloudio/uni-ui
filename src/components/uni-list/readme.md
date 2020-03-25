### List 列表
*已经支持在nvue页面中使用*

列表组件，组件名：``uni-list``、``uni-list-item``，代码块： uList。

### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniList from '@/components/uni-list/uni-list.vue'
import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
export default {
    components: {uniList,uniListItem}
}
```

在 ``template`` 中使用组件 

```html
<!-- 一般用法 -->
<uni-list>
    <uni-list-item title="标题文字" :show-arrow="false"></uni-list-item>
    <uni-list-item title="标题文字"></uni-list-item>
    <uni-list-item title="标题文字" :show-badge="true" badge-text="12"></uni-list-item>
    <uni-list-item title="禁用状态" :disabled="true" :show-badge="true" badge-text="12"></uni-list-item>
</uni-list>

<!-- 带描述信息 -->
<uni-list>
    <uni-list-item title="标题文字" note="描述信息"></uni-list-item>
    <uni-list-item title="标题文字" note="描述信息" :show-badge="true" badge-text="12"></uni-list-item>
</uni-list>

<!-- 包含图片 -->
<uni-list>
    <uni-list-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
</uni-list>

<!-- 包含图标 -->
<uni-list>
    <uni-list-item title="标题文字" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
</uni-list>

<!-- 显示Switch -->
<uni-list>
    <uni-list-item title="标题文字" :show-switch="true" :show-arrow="false"></uni-list-item>
</uni-list>

<!-- 右侧插槽 -->
<uni-list>
    <uni-list-item title="右侧插槽" :showArrow="false">
        <template v-slot:right="">
            <image style="width: 40px;height: 40px;" src="/static/logo.png" mode="widthFix"></image>
        </template>
    </uni-list-item>
</uni-list>
```

### 属性说明

**uniListItem 属性说明：**

|属性名			|类型	|默认值	|说明																																|
|---			|----	|---	|---																																|
|title			|String	|-		|标题																																|
|note			|String	|-		|描述																																|
|thumb			|String	|-		|左侧缩略图，若thumb有值，则不会显示扩展图标																						|
|badgeText		|String	|-		|数字角标内容																														|
|badgeType		|String	|-		|数字角标类型，参考[uni-icons](https://ext.dcloud.net.cn/plugin?id=21)																|
|rightText		|String	|-		|右侧文字内容																														|
|disabled		|Boolean|false	|是否禁用																															|
|showArrow		|Boolean|true	|是否显示箭头图标																													|
|showBadge		|Boolean|false	|是否显示数字角标																													|
|showSwitch	    |Boolean|false	|是否显示Switch																														|
|switchChecked	|Boolean|false	|Switch是否被选中																													|
|showExtraIcon  |Boolean|false	|左侧是否显示扩展图标																												|
|scroll-y       |Boolean|false	|允许纵向滚动，需要显式的设置其宽高|
|extraIcon		|Object	|-		|扩展图标参数，格式为 ``{color: '#4cd964',size: '22',type: 'spinner'}``，参考 [uni-icons](https://ext.dcloud.net.cn/plugin?id=28)	|

**插槽**

|名称	|说明					|
|:-		|:-						|
|default|显示在title位置的插槽	|
|right	|右侧插槽				|

**uniListItem 事件说明：**

|事件称名		|说明						|返回参数			|
|---			|---						|---				|
|click			|点击 uniListItem 触发事件	|-					|
|switchChange	|点击切换 Switch 时触发		|e={value:checked}	|

**Tips**

- 支付宝小程序平台需要在支付宝小程序开发者工具里开启 component2 编译模式，开启方式： 详情 --> 项目配置 --> 启用 component2 编译
- 页面纵向滚动时，Android 平台不支持区域滚动，iOS 支持
- iOS 有Bounce效果，Android 仅可滚动时有

### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/list/list](https://uniapp.dcloud.io/h5/pages/extUI/list/list)