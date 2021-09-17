<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
// uni-icons 扩展图标库
@import '@/static/iconfont.css';

/* #ifndef APP-NVUE */
page {
	background-color: #efeff4;
}
/* #endif */

/* #ifdef H5 */
.uni-app--showleftwindow .hideOnPc {
	display: none !important;
}

.uni-app--showleftwindow uni-page-body {
		background-color: #F5F5F5 !important;
		min-height: 100% !important;
	}
/* #endif */
</style>
