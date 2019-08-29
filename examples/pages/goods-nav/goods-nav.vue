<template>
  <view class="content">
    <uni-goods-nav
      :options="options"
      :button-group="buttonGroup"
      @add="add"/>
  </view>
</template>

<script>
export default {
  data () {
    return {
      options:[{
        icon:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
        text:'客服'
      },{
        icon:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
        text:'店铺'
      },{
        icon:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
        text:'购物车',
        info:2,
      }],
      buttonGroup:[
        {
          text:'加入购物车',
          backgroundColor:'#ff0000',
          color:'#fff'
        },
        {
          text:'立即购买',
          backgroundColor:'#ffa200',
          color:'#fff'
        }
      ]
    }
  },
  onLoad () {},
  methods: {
    add (e) {
      console.log(e);
      this.options[2].info ++
    }
  }
}
</script>

<style></style>
