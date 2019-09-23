<template>
  <view class="page">
    <view class="example-info"><text class="example-info-text">数字角标通用来标记重点信息使用，如接受到新消息、有未读消息等</text></view>
    <uni-title title="有底色" type="line"></uni-title>
    <view class="example-body">
      <uni-badge class="uni-badge-left-margin" text="1" />
      <uni-badge class="uni-badge-left-margin" text="2" type="primary" />
      <uni-badge class="uni-badge-left-margin" text="34" type="success" />
      <uni-badge class="uni-badge-left-margin" text="45" type="warning" />
      <uni-badge class="uni-badge-left-margin" text="123" type="error" />
    </view>
    <uni-title title="无底色" type="line"></uni-title>
    <view class="example-body">
      <uni-badge class="uni-badge-left-margin" :inverted="true" text="1" />
      <uni-badge class="uni-badge-left-margin" :inverted="true" text="2" type="primary" />
      <uni-badge class="uni-badge-left-margin" :inverted="true" text="34" type="success" />
      <uni-badge class="uni-badge-left-margin" :inverted="true" text="45" type="warning" />
      <uni-badge class="uni-badge-left-margin" :inverted="true" text="123" type="error" />
    </view>
    <uni-title title="迷你" type="line"></uni-title>
    <view class="example-body">
      <uni-badge class="uni-badge-left-margin" text="1" size="small" />
      <uni-badge class="uni-badge-left-margin" text="2" type="primary" size="small" />
      <uni-badge class="uni-badge-left-margin" text="34" type="success" size="small" />
      <uni-badge class="uni-badge-left-margin" text="45" type="warning" size="small" />
      <uni-badge class="uni-badge-left-margin" text="123" type="error" size="small" />
    </view>
  </view>
</template>

<script>
import uniBadge from '@/components/uni-badge/uni-badge.vue';
import uniTitle from '@/components/uni-title/uni-title.vue'
export default {
  components: {
    uniBadge,
    uniTitle
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import '@/common/uni-nvue.scss';
.uni-badge {
  // margin: 20rpx;
}
.example-body {
  flex-direction: row;
  justify-content: flex-start;
}
.uni-badge-left-margin{
  margin-left: 20px;
}
</style>
