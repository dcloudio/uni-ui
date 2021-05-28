# uni-app 组件库适配 Vue3 指南
uni-app 适配 Vue3 后，现有的组件库并不能完全平滑迁移到 Vue3 环境下，所以需要一些兼容调整来进行适配，[如何使用 Vue3](https://ask.dcloud.net.cn/article/37834)。

Vue3 下会有两个模式 ，所以插件开发者需要兼容三个环境：
- Vue2 （不兼容 Vue3）
- Vue3 非兼容模式 （不兼容 Vue2）
- Vue3 兼容模式 （兼容 Vue2）

**注意：Vue3 工程与 Vue2 工程不兼容**
## 配置 Vue3 模式
通过配置 Vue3 模式来决定当前的项目使用的是`Vue3 非兼容模式` 还是 `Vue3 兼容模式`

### 全局配置
在 `manifest.json` 的 `compatConfig` 选项来配置全局的Vue3模式，会作用于所有组件和页面:
- MODE:2 	代表兼容Vue2模式
- MODE:3	代表非兼容Vue2模式

```json
// manifest.json 
{
	// ...
	"compatConfig": {
	    "MODE": 2// 2代表兼容Vue2模式，3代表非兼容Vue2模式
	},
	// ...
}

```

### 局部配置
在组件内部配置 `compatConfig` 选项 ，可以让当前组件或页面忽略 `manifest.json` 的配置 ，只在当前页面或者组件内部生效：

```javascript
// 组件内配置 
export default {
	"compatConfig": {
		"MODE": 3// 2代表兼容Vue2模式，3代表非兼容Vue2模式
	}
}
```

### 使用 Vue3 兼容模式还是非兼容模式？
首先要明确的一点是：升级 Vue3 后是否还需要兼容 Vue2 ?

####  不需要兼容Vue2 
如果不需要兼容Vue2了，可以直接使用`非兼容模式（MODE:3）`来进行开发，体验Vue3的最新特性和性能。[查看Vue3迁移指南](https://v3.cn.vuejs.org/guide/migration/introduction.html)

#### 需要平滑过渡到Vue3
现有项目或插件代码量比较大，无法直接完成Vue3的迁移，可以使用`兼容模式（MODE:2）`，先让项目正常运行起来，根据控制台警告，逐步进行Vue3的迁移工作。

#### 兼容Vue2
对于插件开发者来说 ，一定是要兼容Vue2和Vue3的，同时 Vue3 的两种模式也是要兼容的。本篇文章主要是针对的这种情况。

## v-if 与 v-for 的适配
[Vue3 v-if 与 v-for 的优先级对比](https://v3.cn.vuejs.org/guide/migration/v-if-v-for.html#%E6%A6%82%E8%A7%88)

Vue2 中，在一个元素上同时使用 v-if 和 v-for 时，v-for 会优先作用。所以如下的代码是可以生效的：

```html
<view v-if="index < 6" v-for="(item ,index) in list" :key="index">
	<!-- ... -->
</view>
```

而 Vue3 中，v-if 总是优先于 v-for 生效。以上写法将会在 Vue3 中与预期不符合，由于语法上存在歧义，建议避免在同一元素上同时使用两者。

比起在模板层面管理相关逻辑，更好的办法是通过创建计算属性筛选出列表，并以此创建可见元素。

```html
<template v-for="(item ,index) in dataLists">
	<view :key="index">
		<!-- ... -->
	</view>
</template>
<script>
	export default {
		data(){
			return {
				lists:[
					// ...
				]
			}
		},
		computed:{
			// 使用计算属性筛选值
			dataLists(){
				return this.lists.filter(item=> index < 6)
			}
		}
	}
</script>
```

## 事件的适配
[emits
选项](https://v3.cn.vuejs.org/guide/migration/emits-option.html#overview)

Vue3 现在提供了一个`emits`选项，类似于现有`props`选项。此选项可用于定义组件可以向其父对象发出的事件

**强烈建议您使用`emits`记录每个组件发出的所有事件。**

这一点特别重要，因为去除了`.native`修饰剂。`emits` 现在，未使用声明的事件的所有侦听器都将包含在组件的中`$attrs`，默认情况下，该侦听器将绑定到组件的根节点。

```html
<template>
  <button @click="onClick">OK</button>
</template>
<script>
export default {
  emits: ['click'],
  methods:{
	  onClick(){
		  this.$emit('click', 'OK')
	  }
  }
}
</script>
```

## v-model 的适配
[v-model](https://v3.cn.vuejs.org/guide/migration/v-model.html#%E6%A6%82%E8%A7%88)

Vue3 的 v-model 相对 Vue2 来说 ，有了较大的改变 ，为了能够适配不同模式 ，我们需要改变一些写法来同时兼容 Vue2 和 Vue3

### 修改 modelValue
用于自定义组件时，Vue3 v-model prop 和事件默认名称已更改
- prop：value -> modelValue
- event：input -> update:modelValue

所以在兼容 Vue2 的时候 ，我们可以使用 Vue2 的 `model` 选项使用 Vue2与Vue3 默认prop 一致 ,Vue3 下 `model` 选项将不生效。

修改 `props.value` 修改为 `props.modelValue`


```javascript
export default {
	"compatConfig": {
		"MODE": 2,
		// 配置 COMPONENT_V_MODEL 为 false,可以取消控制台的 modelValue 的警告
		 COMPONENT_V_MODEL: false
	},
	model:{
		prop: 'modelValue',
		event: 'update:modelValue'
	},
	props: {
		// value:String,
		// 替换 value 为 modelValue
		modelValue:String
	}
}
```

### 事件返回
将之前的 `this.$emit('input')` 事件保留，并增加 `this.$emit('update:modelValue')` 来同时兼容 Vue2 和 Vue3 的事件返回

**完整示例**

```html
<template>
	<view>
		数据显示：{{inputValue}}
		<button @click="onClick">数据双向绑定</button>	
	</view>
</template>
<script>
	export default {
		"compatConfig": {
			"MODE": 3,
			// 使用 MODE:2,需要使用下面的属性取消警告
			// COMPONENT_V_MODEL: false
		},
		model:{
			prop: 'modelValue',
			event: 'update:modelValue'
		},
		props: {
			modelValue:String
		}
		data(){
			return {
				inputValue:''
			}
		},
		methods:{
			onClick(){
				this.inputValue = this.modelValue + '变化'
				this.$emit('input',this.inputValue)
				// 兼容 Vue3 ，为了保证组件本身就有 input 事件的情况下正常运行，保留以上写法
				this.$emit('update:modelValue',this.inputValue)
			}
		}
	}
</script>
```


## 插槽的适配
[插槽](https://v3.cn.vuejs.org/guide/component-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD)

Vue3 将不支持 `slot="xxx"` 的用法 ，请使用 `v-slot:xxx` 用法。

**Vue2 支持的用法**
```html
<uni-nav-bar>
	<view slot="left" class="city">
		<!-- ... -->
	</view>
</uni-nav-bar>
```

**Vue3 支持的用法**
```html
<uni-nav-bar>
	<template v-slot:left>
		<view class="city">
			<!-- ... -->
		</view>
	</template>
</uni-nav-bar>
```

## 生命周期的适配
在Vue3中组件卸载的生命周期被重新命名
- `destroyed` 修改为 `unmounted`
- `beforeDestroy` 修改为 `beforeUnmount`

因为修改命名的原因 ，所以这两个生命周期在3个模式下表现完全不一致
- 纯Vue2模式下，只执行 `destroyed` 和 `beforeDestroy`
- 兼容模式下，只执行 `unmounted` 和 `beforeUnmount`
- 非兼容模式下，4 个生命周期都会执行

我们只需要在非兼容下，保证同一个生命周期只执行一次，就可以兼容三个模式。

### 方式一：变量限制
我们通过一个变量来记录某个生命周期是否已经执行

```javascript
export default {
	// TODO Vue2
	destroyed() {
		// 如果 unmounted 执行过，则停止执行
		if(this.__isUnmounted) return
		this.unmountedFn()
	},
	// TODO Vue3
	unmounted(){
		// 记录生命周期执行
		this.__isUnmounted = true
		this.unmountedFn()
	},
	methods:{
		// TODO 这里写实际的业务逻辑代码
		unmountedFn(){
			console.log('组件卸载')
		}
	}
}
```


## 待补充
