<template>
  <view class="uni-list">
    <slot />
  </view>
</template>
<script>
  export default {
    name: 'UniList',
    provide() {
      return {
        list: this
      }
    },
    created() {
      this.firstChildAppend = false
    }
  }
</script>
<style lang="scss">
  @import '~@/uni.scss';

  /* 解决支付宝页面标签指定的样式覆盖组件内类名指定样式的BUG */
  /* #ifdef MP-ALIPAY */
  page {

    /* #endif */
    .uni-list {
      /* #ifndef APP-NVUE */
      display: flex;
      /* #endif */
      background-color: $uni-bg-color;
      position: relative;
      flex-direction: column;
      border-bottom-color: $uni-border-color;
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }

    /* #ifdef MP-ALIPAY */
  }

  /* #endif */
</style>
