<template>
  <view class="example">
    <view class="example-title">实心标签</view>
    <view>
      <view class="tag-view">
        <uni-tag text="标签"/>
      </view>
      <view class="tag-view">
        <uni-tag
          text="标签"
          type="primary"/>
      </view>
      <view class="tag-view">
        <uni-tag
          text="标签"
          type="success"/>
      </view>
      <view class="tag-view">
        <uni-tag
          text="标签"
          type="warning"/>
      </view>
      <view class="tag-view">
        <uni-tag
          text="标签"
          type="error"/>
      </view>
    </view>
    <view class="example-title">空心标签</view>
    <view>
      <view class="tag-view">
        <uni-tag
          :inverted="true"
          text="标签"/>
      </view>
      <view class="tag-view">
        <uni-tag
          :inverted="true"
          text="标签"
          type="primary"/>
      </view>
      <view class="tag-view">
        <uni-tag
          :inverted="true"
          text="标签"
          type="success"/>
      </view>
      <view class="tag-view">
        <uni-tag
          :inverted="true"
          text="标签"
          type="warning"/>
      </view>
      <view class="tag-view">
        <uni-tag
          :inverted="true"
          text="标签"
          type="error"/>
      </view>
    </view>
    <view class="example-title">圆角样式</view>
    <view>
      <view class="tag-view">
        <uni-tag
          :circle="true"
          text="标签"
          type="primary"
          size="small"/>
      </view>
      <view class="tag-view">
        <uni-tag
          :inverted="true"
          :circle="true"
          text="标签"
          type="success"
          size="small"/>
      </view>
      <view class="tag-view">
        <uni-tag
          :circle="true"
          text="标签"
          type="warning"/>
      </view>
      <view class="tag-view">
        <uni-tag
          :inverted="true"
          :circle="true"
          text="标签"
          type="error"/>
      </view>
    </view>
    <view class="example-title">标记样式</view>
    <view>
      <view class="tag-view">
        <uni-tag
          :mark="true"
          text="标签"
          type="primary"
          size="small"/>
      </view>
      <view class="tag-view">
        <uni-tag
          :mark="true"
          text="标签"
          type="success"
          size="small"/>
      </view>
      <view class="tag-view">
        <uni-tag
          :mark="true"
          text="标签"
          type="warning"/>
      </view>
      <view class="tag-view">
        <uni-tag
          :mark="true"
          :circle="true"
          text="标签"
          type="error"/>
      </view>
    </view>
    <view class="example-title">点击事件</view>
    <view>
      <view class="tag-view">
        <uni-tag
          :type="type"
          text="标签"
          @click="setType"/>
      </view>
      <view class="tag-view">
        <uni-tag
          :circle="true"
          :inverted="inverted"
          text="标签"
          type="primary"
          @click="setInverted"/>
      </view>
    </view>

    <view class="example-title">小标签</view>
    <view>
      <view class="tag-view">
        <uni-tag
          text="标签"
          size="small"/>
      </view>
      <view class="tag-view">
        <uni-tag
          text="标签"
          type="primary"
          size="small"/>
      </view>
      <view class="tag-view">
        <uni-tag
          text="标签"
          type="success"
          size="small"/>
      </view>
      <view class="tag-view">
        <uni-tag
          :inverted="true"
          :mark="true"
          text="标签"
          type="warning"
          size="small"/>
      </view>
      <view class="tag-view">
        <uni-tag
          :inverted="true"
          :circle="true"
          text="标签"
          type="error"
          size="small"/>
      </view>
    </view>

    <view class="example-title">不可点击状态</view>
    <view class="page-section">
      <view class="tag-view">
        <uni-tag
          :disabled="true"
          text="标签"/>
      </view>
      <view class="tag-view">
        <uni-tag
          :disabled="true"
          text="标签"
          type="primary"/>
      </view>
      <view class="tag-view">
        <uni-tag
          :inverted="true"
          :disabled="true"
          text="标签"
          type="error"
          size="small"/>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      type: 'default',
      inverted: false
    }
  },
  methods: {
    setType () {
      let types = ['default', 'primary', 'success', 'warning', 'error']
      let index = types.indexOf(this.type)
      types.splice(index, 1)
      let randomIndex = Math.floor(Math.random() * 4)
      this.type = types[randomIndex]
    },
    setInverted () {
      this.inverted = !this.inverted
    }
  }
}
</script>

<style>
    .tag-view {
        margin: 10upx 20upx;
        display: inline-block;
    }
</style>
