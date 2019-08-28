<template>
	<view>
    <!-- 底部占位 -->
		<view class="uni-tab__seat"></view>
		<view class="uni-tab__cart-box flex">
			<view class="flex uni-tab__cart-sub-box">
				<view class="flex uni-tab__cart-button-left">
					<!-- <text class="iconfont icon-kefu"></text> -->
          <uni-icons type="contact" color="#333"></uni-icons>
					<text class="uni-tab__text">客服</text>
				</view>
				<view class="flex uni-tab__cart-button-left">
					<!-- <text class="iconfont icon-dianpu"></text> -->
          <uni-icons type="contact" color="#333"></uni-icons>
					<text class="uni-tab__text">店铺</text>
				</view>
				<view class="flex uni-tab__cart-button-left uni-tab__shop-cart">
					<!-- <text class="iconfont icon-gouwuche"></text> -->
          <uni-icons type="contact" color="#333"></uni-icons>
					<text class="uni-tab__text">购物车</text>
					<view class="flex uni-tab__dot-box">
						<view v-if="amount" class="uni-tab__dot " :class="{ 'uni-tab__dots': amount > 9 }">
							{{ amount }}
						</view>
					</view>
				</view>
			</view>
			<view class="flex uni-tab__cart-sub-box uni-tab__right">
				<view class="flex uni-tab__cart-button-right uni-tab__color-r" @click="add">加入购物车</view>

				<view class="flex uni-tab__cart-button-right uni-tab__color-y ">立即购买</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
  name:'uniGoodsNav',
	props: {
		amount: {
			type: Number,
			default: 0
		}
	},
	methods: {
		add() {
      this.$emit('add')
		}
	}
};
</script>

<style>
.uni-tab__seat{
	width: 100%;
	height: 100upx;
}
.flex {
	display: flex;
}
.uni-tab__cart-box {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100upx;
	background: #fff;
	border-top: #f5f5f5 1px solid;
  z-index: 900;
}
.uni-tab__cart-sub-box {
	width: 100%;
	box-sizing: border-box;
}
.uni-tab__right {
  margin: 5px 0;
  margin-right: 10px;
  border-radius: 100px;
  overflow: hidden;
}
.uni-tab__cart-button-left {
	position: relative;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	font-size: 12px;
}
.uni-tab__cart-button-left .iconfont {
	font-size: 38upx;
	color: #666;
}
.uni-tab__cart-button-left .uni-tab__text {
	margin-top: 5upx;
	color: #666;
}
.uni-tab__cart-button-right {
	justify-content: center;
	align-items: center;
	width: 100%;
	font-size: 12upx;
	color: #fff;
}
.uni-tab__cart-button-right:active {
  opacity: 0.7;
}
.uni-tab__cart-button-left .uni-tab__dot-box {
	position: absolute;
	right: 40upx;
	top: 20upx;
	justify-content: center;
	align-items: center;
	width: 0;
	height: 0;
}
.uni-tab__dot-box .uni-tab__dot {
	flex-shrink: 0;
	width: 30upx;
	height: 30upx;
	line-height: 30upx;
	color: #ffffff;
	text-align: center;
  font-size: 12px;
	background: #ff0000;
	border-radius: 50%;
}
.uni-tab__dot-box .uni-tab__dot.uni-tab__dots {
	padding: 0 8upx;
	width: auto;
	border-radius: 30upx;
}

.uni-tab__color-y {
	background: #ffa200;
}
.uni-tab__color-r {
	background: #ff0000;
}

</style>
