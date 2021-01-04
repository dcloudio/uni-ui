<template>
	<view class="container">
		<!-- #ifndef APP-NVUE -->
		<uni-section title="基础布局" subTitle="使用单一分栏创建基础的栅格布局" type="line"></uni-section>
		<view class="example-body">
			<uni-row class="demo-uni-row">
				<uni-col>
					<view class="demo-uni-col dark_deep"></view>
				</uni-col>
			</uni-row>

			<uni-row class="demo-uni-row">
				<uni-col :span="12">
					<view class="demo-uni-col dark"></view>
				</uni-col>
				<uni-col :span="12">
					<view class="demo-uni-col light"></view>
				</uni-col>
			</uni-row>

			<uni-row class="demo-uni-row">
				<uni-col :span="8">
					<view class="demo-uni-col dark"></view>
				</uni-col>
				<uni-col :span="8">
					<view class="demo-uni-col light"></view>
				</uni-col>
				<uni-col :span="8">
					<view class="demo-uni-col dark"></view>
				</uni-col>
			</uni-row>

			<uni-row class="demo-uni-row">
				<uni-col :span="6">
					<view class="demo-uni-col dark"></view>
				</uni-col>
				<uni-col :span="6">
					<view class="demo-uni-col light"></view>
				</uni-col>
				<uni-col :span="6">
					<view class="demo-uni-col dark"></view>
				</uni-col>
				<uni-col :span="6">
					<view class="demo-uni-col light"></view>
				</uni-col>
			</uni-row>

			<uni-row class="demo-uni-row">
				<uni-col :span="4">
					<view class="demo-uni-col dark"></view>
				</uni-col>
				<uni-col :span="4">
					<view class="demo-uni-col light"></view>
				</uni-col>
				<uni-col :span="4">
					<view class="demo-uni-col dark"></view>
				</uni-col>
				<uni-col :span="4">
					<view class="demo-uni-col light"></view>
				</uni-col>
				<uni-col :span="4">
					<view class="demo-uni-col dark"></view>
				</uni-col>
				<uni-col :span="4">
					<view class="demo-uni-col light"></view>
				</uni-col>
			</uni-row>
		</view>

		<uni-section title="混合布局" subTitle="通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局" type="line"></uni-section>
		<view class="example-body">
			<uni-row class="demo-uni-row" :gutter="10">
				<uni-col :span="8">
					<view class="demo-uni-col dark"></view>
				</uni-col>
				<uni-col :span="8">
					<view class="demo-uni-col dark"></view>
				</uni-col>
				<uni-col :span="4">
					<view class="demo-uni-col dark"></view>
				</uni-col>
				<uni-col :span="4">
					<view class="demo-uni-col dark"></view>
				</uni-col>
			</uni-row>

			<uni-row class="demo-uni-row" :gutter="10">
				<uni-col :span="4">
					<view class="demo-uni-col dark"></view>
				</uni-col>
				<uni-col :span="16">
					<view class="demo-uni-col dark"></view>
				</uni-col>
				<uni-col :span="4">
					<view class="demo-uni-col dark"></view>
				</uni-col>
			</uni-row>
		</view>

		<button type="default" @click="updateGutter">更改Gutter</button>
		<uni-section title="分栏间隔" subTitle="分栏之间存在间隔" type="line"></uni-section>
		<view class="example-body">
			<uni-row class="demo-uni-row" :gutter="gutter">
				<uni-col :span="16">
					<view class="demo-uni-col dark"></view>
				</uni-col>
				<uni-col :span="8">
					<view class="demo-uni-col dark"></view>
				</uni-col>
			</uni-row>
		</view>

		<uni-section title="分栏偏移" subTitle="支持偏移指定的栏数" type="line"></uni-section>
		<view class="example-body">
			<uni-row class="demo-uni-row" :gutter="gutter">
				<uni-col :span="8">
					<view class="demo-uni-col dark"></view>
				</uni-col>
				<uni-col :span="8" :offset="6">
					<view class="demo-uni-col dark"></view>
				</uni-col>
			</uni-row>

			<uni-row class="demo-uni-row" :gutter="gutter">
				<uni-col :span="6" :offset="6">
					<view class="demo-uni-col dark"></view>
				</uni-col>
				<uni-col :span="6" :offset="6">
					<view class="demo-uni-col dark"></view>
				</uni-col>
			</uni-row>

			<uni-row class="demo-uni-row" :gutter="gutter">
				<uni-col :span="12" :pull="6">
					<view class="demo-uni-col dark"></view>
				</uni-col>
			</uni-row>
			<uni-row class="demo-uni-row" :gutter="gutter">
				<uni-col :span="12" :push="6">
					<view class="demo-uni-col dark"></view>
				</uni-col>
			</uni-row>
		</view>

		<uni-section title="响应式布局" subTitle="共五个响应尺寸：xs、sm、md、lg 和 xl" type="line"></uni-section>
		<view class="example-body">
			<uni-row class="demo-uni-row" :gutter="gutter">
				<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
					<view class="demo-uni-col dark"></view>
				</uni-col>
				<uni-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
					<view class="demo-uni-col light"></view>
				</uni-col>
				<uni-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
					<view class="demo-uni-col dark"></view>
				</uni-col>
				<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
					<view class="demo-uni-col light"></view>
				</uni-col>
			</uni-row>
		</view>
		<!-- #endif -->

		<!-- #ifndef MP-QQ || MP-TOUTIAO || MP-BAIDU -->
		<uni-section title="对齐方式" subTitle="通过 flex 布局来对分栏进行灵活的对齐" type="line"></uni-section>
		<view class="example-body">
			<uni-row class="demo-uni-row" justify="center">
				<template v-for="i in 3">
					<!-- #ifndef APP-NVUE -->
					<uni-col :span="6" :key="i">
						<view :class="['demo-uni-col',i%2 === 0 ? 'dark' : 'light']"></view>
					</uni-col>
					<!-- #endif -->
					<!-- #ifdef APP-NVUE -->
					<uni-col :style="{width: nvueWidth}">
						<view :class="['demo-uni-col',i%2 === 0 ? 'dark' : 'light']"></view>
					</uni-col>
					<!-- #endif -->
				</template>
			</uni-row>

			<uni-row class="demo-uni-row" type="flex" justify="end">
				<template v-for="i in 3">
					<!-- #ifndef APP-NVUE -->
					<uni-col :span="6" :key="i">
						<view :class="['demo-uni-col',i%2 === 0 ? 'dark' : 'light']"></view>
					</uni-col>
					<!-- #endif -->
					<!-- #ifdef APP-NVUE -->
					<uni-col :style="{width: nvueWidth}">
						<view :class="['demo-uni-col',i%2 === 0 ? 'dark' : 'light']"></view>
					</uni-col>
					<!-- #endif -->
				</template>
			</uni-row>

			<uni-row class="demo-uni-row" type="flex" justify="space-between">
				<template v-for="i in 3">
					<!-- #ifndef APP-NVUE -->
					<uni-col :span="6" :key="i">
						<view :class="['demo-uni-col',i%2 === 0 ? 'dark' : 'light']"></view>
					</uni-col>
					<!-- #endif -->
					<!-- #ifdef APP-NVUE -->
					<uni-col :style="{width: nvueWidth}">
						<view :class="['demo-uni-col',i%2 === 0 ? 'dark' : 'light']"></view>
					</uni-col>
					<!-- #endif -->
				</template>
			</uni-row>

			<uni-row class="demo-uni-row" type="flex" justify="space-around">
				<template v-for="i in 3">
					<!-- #ifndef APP-NVUE -->
					<uni-col :span="6" :key="i">
						<view :class="['demo-uni-col',i%2 === 0 ? 'dark' : 'light']"></view>
					</uni-col>
					<!-- #endif -->
					<!-- #ifdef APP-NVUE -->
					<uni-col :style="{width: nvueWidth}">
						<view :class="['demo-uni-col',i%2 === 0 ? 'dark' : 'light']"></view>
					</uni-col>
					<!-- #endif -->
				</template>
			</uni-row>
		</view>
		<!-- #endif -->

	</view>
</template>

<script>
	/*
		// 属性
		uni-row
		type			String	nvue:flex
		gutter		Number/String
		justify		String	start、end、center、space-between、space-around		(flex)
		align			String	top、middle、bottom		(flex)

		uni-col
		span、offset、pull、push		Number
		xs、sm、md、lg、xl  				Number、Object({ span:2,offset:4 ... })

		// 使用
		uni-row
			uni-col
				view...

		// 平台差异
		H5、微信（虚拟化组件节点2.11.2+）、阿里小程序，支持所有功能
		字节、QQ、百度小程序，不支持flex模式
		nvue不支持百分比width，只有flex模式
	 */
	export default {
		data() {
			return {
				nvueWidth: '187rpx',
				gutter: 10
			}
		},
		methods: {
			updateGutter() {
				this.gutter += 2;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/common/uni-nvue.scss';

	.demo-uni-row {
		margin-bottom: 10px;

		// QQ、字节小程序文档写有 :host，但实测不生效
		// 百度小程序没有 :host，需要设置block
		/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
		display: block;
		/* #endif */
	}

	// 支付宝小程序没有 demo-uni-row 层级
	// 微信使用了虚拟化节点，也没有 demo-uni-row 层级
	/* #ifdef MP-ALIPAY || MP-WEIXIN */
	/deep/ .uni-row {
		margin-bottom: 10px;
	}

	/* #endif */

	.demo-uni-col {
		height: 36px;
		border-radius: $uni-border-radius-base;
	}

	.dark_deep {
		background-color: #99a9bf;
	}

	.dark {
		background-color: #d3dce6;
	}

	.light {
		background-color: #e5e9f2;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 5rpx 10rpx 0;
		overflow: hidden;
	}
</style>
