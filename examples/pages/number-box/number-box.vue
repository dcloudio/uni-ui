<template>
  <view class="page">
    <view class="example">
      <view class="example-title">基本用法</view>
      <uni-number-box/>
      <view class="example-title">设置最小值和最大值</view>
      <uni-number-box
        :min="2"
        :max="9"
        :value="5"/>
      <view class="example-title">设置步长（步长0.1）</view>
      <uni-number-box :step="0.1"/>
      <view class="example-title">禁用状态</view>
      <uni-number-box :disabled="true"/>
      <view class="example-title">获取输入的值 : {{ numberValue }}</view>
      <uni-number-box
        :value="numberValue"
        @change="change"/>
      <view style="height: 30upx;"/>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      numberValue: 0
    }
  },
  methods: {
    change (value) {
      this.numberValue = value
    }
  }
}
</script>
<style>
</style>
