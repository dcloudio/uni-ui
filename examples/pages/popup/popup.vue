<template>
	<view class="page">
        <view class="example">
        	<view class="example-title">居中弹出</view>
        	<button type="button" @click="showMiddlePopup">弹出 Popup</button>
        	<uni-popup :show="showPopupMiddle" :type="popType" v-on:hidePopup="hidePopup">
        		<view class="uni-center" style="font-size:0;">
        			<image class="image" style="width:150upx;height:150upx;" mode="widthFix" src="/static/laoren.png" />
        		</view>
        		<view class="uni-common-mt uni-helllo-text uni-center">
        			消息内容使用 slot 形式定义
        		</view>
        	</uni-popup>
        	<view class="example-title">顶部弹出</view>
        	<button type="button" @click="showTopPopup" data-position="top">弹出 Popup</button>
            <uni-popup :show="showPopupTop" :type="popType" :msg="msg" v-on:hidePopup="hidePopup"></uni-popup>
        	<view class="example-title">底部弹出</view>
        	<button type="button" @click="showBottomPopup" data-position="bottom">弹出 Popup</button>
        	<uni-popup :show="showPopupBottom" :type="popType" :msg="msg" v-on:hidePopup="hidePopup"></uni-popup>
        </view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				popType: 'middle',
				showPopupMiddle: false,
				showPopupTop: false,
				showPopupBottom: false,
				msg: ''
			}
		},
        onBackPress() {
        	// 返回按钮监听
        	if(this.showPopupMiddle || this.showPopupTop || this.showPopupBottom){
        		this.hidePopup();
        		return true;
        	}
        },
		methods: {
			//统一的关闭popup方法
			hidePopup: function() {
				this.showPopupMiddle = false;
				this.showPopupTop = false;
				this.showPopupBottom = false;
			},
			//展示居中 popup
			showMiddlePopup: function() {
				this.hidePopup();
				this.popType = 'middle';
				this.showPopupMiddle = true;
			},
			//展示顶部 popup
			showTopPopup: function() {
				this.hidePopup();
				this.popType = 'top';
				this.msg = '顶部 popup 信息内容';
				this.showPopupTop = true;
			},
			//展示底部 popup
			showBottomPopup: function() {
				this.hidePopup();
				this.popType = 'bottom';
				this.msg = '底部 popup 信息内容';
				this.showPopupBottom = true;
			}
		}
	}
</script>
<style>

</style>
