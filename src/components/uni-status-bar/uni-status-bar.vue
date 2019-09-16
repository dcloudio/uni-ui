<template>
  <view
    :style="{ height: statusBarHeight }"
    class="uni-status-bar"><slot/></view>
</template>

<script>
// var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
 var statusBarHeight = '70px'
// console.log(statusBarHeight);
export default {
  name: 'UniStatusBar',
  data () {
    return {
      statusBarHeight: statusBarHeight
    }
  }
}
</script>

<style>
.uni-status-bar {
	width: 100%;
	height: 20px;
	/* height: var(--status-bar-height); */
}
</style>
