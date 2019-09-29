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
<style lang="scss" scoped>
  @import '~@/uni.scss';

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
</style>
