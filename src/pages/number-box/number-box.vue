<template>
  <view class="page">
    <view class="example-info">数字输入框组件多用于购物车加减商品等场景</view>
    <view class="example-title">基本用法</view>
    <view class="example-body"><uni-number-box/></view>
    <view class="example-title">设置最小值和最大值</view>
    <view class="example-body"><uni-number-box
      :min="2"
      :max="9"
      :value="5"/></view>
    <view class="example-title">设置步长（步长0.1）</view>
    <view class="example-body"><uni-number-box :step="0.1"/></view>
    <view class="example-title">禁用状态</view>
    <view class="example-body"><uni-number-box :disabled="true"/></view>
    <view class="example-title">获取输入的值 : {{ numberValue }}</view>
    <view class="example-body"><uni-number-box
      :value="numberValue"
      @change="change"/></view>

      <!-- <view style="height: 30upx;"></view> -->
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
<style></style>
