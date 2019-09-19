<script>
  export default {
    onLaunch: function() {
      console.log('App Launch')
    },
    onShow: function() {
      console.log('App Show')
    },
    onHide: function() {
      console.log('App Hide')
    }
  }
</script>

<style lang="scss">
  /* 头条小程序组件内不能引入字体 */
  /* #ifdef MP-TOUTIAO */
  @font-face {
  	font-family: uniicons;
  	font-weight: normal;
  	font-style: normal;
  	src: url('~@/common/uniicons.ttf') format('truetype');
  }
  /* #endif */
  /* #ifndef APP-NVUE */
  /*每个页面公共css */
  page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #efeff4;
  }

  view {
    font-size: 28rpx;
    line-height: inherit;
  }

  .example {
    padding: 0 30rpx 30rpx;
  }

  .example-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 32rpx;
    // line-height: $uni-font-size-base;
    color: #464e52;
    padding: 30rpx 30rpx 30rpx 50rpx;
    margin-top: 20rpx;
    position: relative;
    background-color: #fdfdfd;
    border-bottom: 1px #f5f5f5 solid;
  }

  .example-title__after {
    position: relative;
    color: #031e3c;
  }

  .example .example-title {
    margin: 40rpx 0;
  }

  .example-body {
    padding: 30rpx;
    background-color: #ffffff;
  }

  .example-info {
    padding: 30rpx;
    color: #3b4144;
    background: #ffffff;
  }


  .example-info-text {
    font-size: 28rpx;
    line-height: 36rpx;
  }

  .example-title {
    flex-direction: row;
    justify-content: space-between;
  }

  .example-title-bar {
    width: 6rpx;
    height: 32rpx;
    background-color: #cccccc;
    margin-right: 10rpx;
  }

  .example-title-text {
    flex: 1;
    font-size: 32rpx;
  }

  .example-body {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    font-size: 14rpx;
  }
  /* #endif */
</style>
