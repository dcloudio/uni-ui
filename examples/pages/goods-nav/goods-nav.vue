<template>
  <view class="content">
    <uni-goods-nav :amount="amount" @add="add"/>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        amount: 0
      };
    },
    onLoad() {},
    methods: {
      add() {
        this.amount++
      }
    }
  };
</script>

<style></style>
