### Group 分组

分组组件可用于将组件用于分组，添加间隔，以产生明显的区块，组件名：``uni-group``，代码块： uGroup。

### 平台差异说明

如无特殊说明，则全平台可用

### 组件使用注意事项

为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些必要的错误使用。

- 组件需要依赖 `sass` 插件 ，请自行手动安装
- 在 `HBuilderX` 低版本中，可能会出现组件显示 `undefined` 的问题，请升级最新的 `HBuilderX` 或者 `cli`
- 如使用过程中有任何问题，或者您对uni-ui有一些好的建议，欢迎加入 uni-ui 交流群：871950839

### 使用方式

#### 方式1 (推荐)

`HBuilderX 2.5.5`起支持 `easycom` 组件模式。在使用 `uni-ui` 的时候，只要[`uni-ui` 组件](https://ext.dcloud.net.cn/plugin?id=55) 安装在项目的 `components` 目录下,并符合 `components/组件名称/组件名称.vue` 目录结构。就可以不用引用、注册，直接在页面中使用 `uni-ui` 组件

`easycom` 组件模式的好处在于不管 `components` 目录下安装了多少组件，`easycom` 打包后会自动剔除没有使用的组件，对组件库的使用尤为友好,组件库批量安装，随意使用，自动按需打包。 关于 `easycom` 更详细内容 [参考文档](https://uniapp.dcloud.io/collocation/pages?id=easycom)

#### 方式2（vue-cli）

**初始化项目**

如果是使用 `HBuiderX` 创建的项目，需先执行以下命令初始化：

```
npm init -y
```

**安装 uni-ui**

```
npm install @dcloudio/uni-ui -D
```

在 ``script`` 中引用组件

```javascript
import uniGroup from '@/components/uni-group/uni-group.vue'
export default {
    components: {uniGroup}
}
```

#### 方式3（vue-cli + easycom）

使用 `方式2` 安装好 `uni-ui` 之后，需要配置 `easycom` 规则，让 `npm` 安装的组件支持  `easycom`

打开项目根目录下的 `pages.json` 并添加 `easycom` 节点：

```javascript
// pages.json

{
	"easycom": {
		"autoscan": true,
		"custom": {
			// uni-ui 规则如下配置
			"^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
		}
	},
	
	// 其他内容
	pages:[
		// ...
	]
}

```

### 使用方式

在 ``template`` 中使用组件

```html
<uni-group title="field group" margin-top="20">
    <uni-field
        v-model="name"
        label="姓名"
        placeholder="请填写姓名"
        :error-message="errorMessage"
    ></uni-field>
    <uni-field
        v-model="mobile"
        label="手机号"
        label-position="left"
        placeholder="请填写手机号"
        :error-message="errorMessage"
        type="text"
        :clearable="true"
    >
    </uni-field>
</uni-group>


<uni-group title="field group">
    <uni-field
        v-model="name"
        label="姓名"
        placeholder="请填写姓名"
        :error-message="errorMessage"
    ></uni-field>
    <uni-field
        v-model="mobile"
        label="手机号"
        iconColor="#999"
        label-position="left"
        placeholder="请填写手机号"
        :error-message="errorMessage"
        type="text"
        :clearable="true"
    >
        <button v-if="true" type="primary" slot="right" size="mini">发送验证码</button>
    </uni-field>
</uni-group>

<uni-group title="field group">
    <uni-field
        v-model="name"
        label="姓名"
        placeholder="请填写姓名"
        :error-message="errorMessage"
    ></uni-field>
    <uni-field
        v-model="mobile"
        label="手机号"
        left-icon="camera"
        iconColor="#999"
        label-position="left"
        placeholder="请填写手机号"
        :error-message="errorMessage"
        type="text"
        :clearable="true"
    >
        <button v-if="true" type="primary" slot="right" size="mini">发送验证码</button>
    </uni-field>
    <uni-field
        v-model="weixin"
        label="微信号"
        left-icon="camera"
        label-position="left"
        placeholder="请填写微信号"
        :required="false"
        :focus="true"
        type="text"
        :clearable="true"
        :password="false" 
        :disabled="false"
        confirmType="good"
        :error-message="errorMessage" 
    />
    <uni-field
        v-model="message"
        type="textarea"
        label="家庭地址"
        placeholder="请填写详细住址"
        :error-message="errorMessage" 
    />
</uni-group>
```

### 属性说明

属性名|类型|默认值|说明
:-|:-|:-|:-
title|String|主标题|
top|Number|分组间隔|

### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/group/group](https://uniapp.dcloud.io/h5/pages/extUI/group/group)
