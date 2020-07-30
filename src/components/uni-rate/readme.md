发现错误？想参与编辑？[在 GitHub 上编辑此页面！](https://github.com/dcloudio/uni-ui/blob/master/src/components/uni-rate/readme.md)

## Rate 评分
> 组件名：``uni-rate``，代码块： uRate。

评分组件，多用于购买商品后，对商品进行评价等场景

### 平台差异说明

如无特殊说明，则全平台支持

### 使用说明

为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的使用说明，可以帮你避免一些必要的错误使用。

- 组件需要依赖 `sass` 插件 ，请自行手动安装
- 组件内部依赖 `'uni-icons'` 组件
- 暂时不支持零星选择
- 当前版本暂不支持修改图标，后续版本会继续优化
- 绑定值推荐使用 `v-model` 的方式
- 如需设置一个星星表示多分，如：显示5个星星，最高分10分。这种情况请在 change 事件监听中自行处理，获取到的值乘以你的基数就可以，默认组件是一星一分

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


在 ``script`` 中引用组件：

```javascript
import {uniRate} from '@dcloudio/uni-ui'
export default {
    components: {uniRate}
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


### 基本用法 

```html
<!-- 基本用法 -->
<!-- 需要在 script 中绑定 value 变量 -->
<uni-rate v-model="value" @change="onChange"/>

<!-- 不支持滑动手势选择评分 -->
<uni-rate :touchable="false" :value="5"/>
<!-- 设置尺寸大小 -->
<uni-rate :size="18" :value="5"/>

<!-- 设置评分数 -->
<uni-rate :max="10" :value="5" />
	
<!-- 设置星星间隔 -->
<uni-rate :value="4" :margin="20" />	

<!-- 设置颜色 -->
<uni-rate :value="3" color="#bbb" active-color="red" />

<!-- 选择半星 -->
<uni-rate allow-half :value="3.5" />

<!-- 只读状态 -->
<uni-rate :readonly="true" :value="2" />

<!-- 禁用状态 -->
<uni-rate :disabled="true" disabledColor="#ccc" :value="3" />

<!-- 未选中的星星为镂空状态 -->
<uni-rate :value="3" :is-fill="false" />

			 
```

```javascript

export default {
	components: {},
	data() {
		return {
			value: 2
		}
	},
	methods: {
		onChange(e) {
			console.log('rate发生改变:' + JSON.stringify(e))
		}
	}
}

```


### uni-rate 属性说明

属性名			|	类型			|	默认值	|	说明																									
---				|	----		|	---		|	---	
value/v-model	|	Number 	 	| 1			|	当前评分
color 			|	String 	 	| #ececec	|	未选中状态的星星颜色
activeColor 	|	String 	 	| #ffca3e	|	选中状态的星星颜色
disabledColor 	|	String 	 	| #c0c0c0	|	禁用状态的星星颜色
size 			|	Number 	 	| 24		|	星星的大小
max 			|	Number 	 	| 5			|	最大评分评分数量，目前一分一颗星
margin 			|	Number 	 	| 0			|	星星的间距，单位 px
isFill 			| 	Boolean 	| true		|	星星的类型，是否为实心类型
disabled 		|	Boolean 	| false		|	是否为禁用状态 (之前版本为已读状态，现更正为禁用状态)
readonly 		|	Boolean 	| false		| 	是否为只读状态
allowHalf		| 	Boolean 	| false		|	是否展示半星
touchable		|	Boolean 	| true		|	是否支持滑动手势




### uniListChat 事件说明

事件称名			|	说明						|	返回参数			
---				|	---						|	---	
@change			|	改变 value 的值返回		|	e = { value:number }		



### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/rate/rate](https://uniapp.dcloud.io/h5/pages/extUI/rate/rate)