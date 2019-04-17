<template>
  <view>
    <view class="example-title">基础卡片</view>
    <uni-card
      title="标题文字"
      @click="clickCard">
      这是一个基础卡片示例，内容样式可自定义，卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、时间等。
    </uni-card>
    <view class="example-title">完整卡片</view>
    <uni-card
      title="标题文字"
      thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
      extra="额外信息"
      note="Tips">
      内容主体，可自定义内容及样式
    </uni-card>
    <view class="example-title">通栏卡片</view>
    <uni-card
      :is-full="true"
      title="DCloud"
      thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
      extra="2018.12.12"
      note="Tips">
      内容主体，可自定义内容及样式，内容主体，可自定义内容及样式，内容主体，可自定义内容及样式
    </uni-card>
  </view>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    clickCard () {
      uni.showToast({
        title: '点击卡片',
        icon: 'none'
      })
    }
  }
}
</script>

<style>

</style>
