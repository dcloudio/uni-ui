### SegmentedControl 分段器

用作不同视图的显示，组件名：``uni-segmented-control``，代码块： uSegmentedControl。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
export default {
    components: {uniSegmentedControl},
    data() {
    	return {
    		items: ['选项卡1','选项卡2','选项卡3'],
    		current: 0
    	}
    },
    methods: {
    	onClickItem(index) {
    		if (this.current !== index) {
    			this.current = index;
    		}
    	}
    }
}
```

SegmentedControl 在 ``template`` 中的使用

```html
<template>
    <view>
        <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#4cd964"></uni-segmented-control>
        <view class="content">
            <view v-show="current === 0">
                选项卡1的内容
            </view>
            <view v-show="current === 1">
                选项卡2的内容
            </view>
            <view v-show="current === 2">
                选项卡3的内容
            </view>
        </view>
    </view>
</template>
```

**SegmentedControl 属性说明：**

|属性名		|类型|默认值	|说明|
|---|----|---|---|
|current	|Number|0|当前选中的tab索引值，从0计数|
|values	|Array&lt;String&gt;|-|选项数组|
|style-type	|String	|button|分段器样式类型，可选值：button（按钮类型），text（文字类型）|
|active-color|String	|#007aff|选中的标签背景色与边框颜色|
|@clickItem|EventHandle|-|组件触发点击事件时触发，参数为当前选中的tab索引值 current	|
