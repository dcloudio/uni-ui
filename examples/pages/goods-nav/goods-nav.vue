<template>
  <view>
    <view class="example-info">
      uni-goods-nav 组件主要用于电商类应用底部导航，可自定义加入购物车，购买等操作
    </view>
    <view class="example-title">基础用法</view>
    <view class="example-body">
      <uni-goods-nav />
    </view>

    <view class="example-title">自定义用法</view>
    <view class="example-body">
      <uni-goods-nav
        :fill="true"
        :options="options"
        :button-group="buttonGroup"
        @click="onClick"
        @buttonClick="buttonClick" />
    </view>
    <view class="goods-carts">
      <uni-goods-nav
        :options="options"
        :button-group="buttonGroup"/>
    </view>

  </view>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
        text: '客服'
      }, {
        icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
        text: '店铺'
      }, {
        icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
        text: '购物车',
        info: 2
      }],
      buttonGroup: [{
        text: '加入购物车',
        backgroundColor: '#ff0000',
        color: '#fff'
      },
      {
        text: '立即购买',
        backgroundColor: '#ffa200',
        color: '#fff'
      }
      ]
    }
  },
  onLoad () {},
  methods: {
    onClick (e) {
      uni.showToast({
        title: `点击${e.content.text}`,
        icon: 'none'
      })
    },
    buttonClick (e) {
      console.log(e)
     
      this.options[2].info++
    }
  }
}
</script>

<style>
  .example-body {
    padding: 0;
  }
  .goods-carts {
    width: 100%;
    position: fixed;
    bottom: 0;
  }
</style>
