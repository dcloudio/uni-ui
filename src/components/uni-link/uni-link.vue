<template>
	<text style="text-decoration:underline" :href="href" @click="openURL">{{text}}</text>
</template>

<script>
	/**
	 * Link 外部网页超链接组件
	 * @description uni-link是一个外部网页超链接组件，在小程序内复制url，在app内打开外部浏览器，在h5端打开新网页
	 * @property {String} href 点击后打开的外部网页url，小程序中必须以https://开头
	 * @property {String} text 显示的文字
	 * @example * <uni-link href="https://ext.dcloud.net.cn" text="https://ext.dcloud.net.cn" :inWhiteList="true"></uni-link>
	 */
	export default {
		name: 'uniLink',
		props: {
			href: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				default: ''
			}
		},
		methods: {
			openURL() {
				// #ifdef APP-PLUS
				plus.runtime.openURL(this.href) //这里默认使用外部浏览器打开而不是内部web-view组件打开
				// #endif
				// #ifdef H5
				window.open(this.href)
				// #endif
				// #ifdef MP
				uni.setClipboardData({
					data: this.href
				});
				uni.showModal({
					content: '本网址无法直接在小程序内打开。已自动复制网址，请在手机浏览器里粘贴该网址',
					showCancel: false
				});
				// #endif
			}
		}
	}
</script>

<style>

</style>
