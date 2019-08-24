<template>
  <view>
    <view class="example-info">倒计时组件主要用于促销商品剩余时间，发送短信验证等待时间等场景</view>
    <view class="example-title">一般用法</view>
    <view class="example-body"><uni-count-down
      :day="1"
      :hour="1"
      :minute="12"
      :second="40"/></view>
    <view class="example-title">不显示天数</view>
    <view class="example-body"><uni-count-down
      :show-day="false"
      :hour="12"
      :minute="12"
      :second="12"/></view>
    <view class="example-title">文字分隔符</view>
    <view class="example-body"><uni-count-down
      :minute="30"
      :second="0"
      :show-colon="false"/></view>
    <view class="example-title">修改颜色</view>
    <view class="example-body">
      <uni-count-down
        :day="1"
        :hour="2"
        :minute="30"
        :second="0"
        color="#FFFFFF"
        background-color="#00B26A"
        border-color="#00B26A"/>
    </view>
    <view class="example-title">倒计时回调事件</view>
    <view class="example-body"><uni-count-down
      :show-day="false"
      :second="10"
      @timeup="timeup"/></view>
  </view>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    timeup () {
      uni.showToast({
        title: '时间到'
      })
    }
  }
}
</script>

<style>
.title {
	margin: 80upx 0 20upx 0;
}
</style>
