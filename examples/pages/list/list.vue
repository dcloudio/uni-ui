<template>
  <view>
    <view class="example-title">基本用法</view>
    <uni-list>
      <uni-list-item
        :show-arrow="false"
        title="标题文字"/>
      <uni-list-item title="标题文字"/>
      <uni-list-item
        :show-badge="true"
        :badge-text="12"
        title="标题文字"/>
      <uni-list-item
        :disabled="true"
        :show-badge="true"
        :badge-text="12"
        title="禁用状态"/>
    </uni-list>
    <view class="example-title">包含描述信息</view>
    <uni-list>
      <uni-list-item
        :show-arrow="false"
        title="标题文字"
        note="描述信息"/>
      <uni-list-item
        title="标题文字"
        note="描述信息"/>
      <uni-list-item
        :show-badge="true"
        :badge-text="12"
        title="标题文字"
        note="描述信息"/>
    </uni-list>
    <view class="example-title">显示缩略图</view>
    <uni-list>
      <uni-list-item
        title="标题文字"
        thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"/>
      <uni-list-item
        title="标题文字"
        note="描述信息"
        thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"/>
    </uni-list>
    <view class="example-title">显示扩展图标</view>
    <uni-list>
      <uni-list-item
        :show-extra-icon="true"
        :extra-icon="extraIcon1"
        title="标题文字"/>
      <uni-list-item
        :show-extra-icon="true"
        :extra-icon="extraIcon2"
        title="标题文字"
        note="描述信息"/>
    </uni-list>
    <view class="example-title">显示Switch</view>
    <uni-list>
      <uni-list-item
        :show-switch="true"
        :show-arrow="false"
        title="标题文字"
        @switchChange="switchChange"/>
      <uni-list-item
        :show-switch="true"
        :switch-checked="true"
        :show-arrow="false"
        title="标题文字"
        @switchChange="switchChange"/>
      <uni-list-item
        :disabled="true"
        :show-switch="true"
        :switch-checked="true"
        :show-arrow="false"
        title="禁用状态"
        @switchChange="switchChange"/>
    </uni-list>
  </view>
</template>

<script>
export default {
  data () {
    return {
      extraIcon1: {
        color: '#007aff',
        size: '22',
        type: 'info-filled'
      },
      extraIcon2: {
        color: '#4cd964',
        size: '22',
        type: 'spinner'
      }
    }
  },
  methods: {
    switchChange (e) {
      uni.showToast({
        title: 'change:' + e.value,
        icon: 'none'
      })
    }
  }
}
</script>

<style>
</style>
