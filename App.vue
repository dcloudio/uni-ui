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
@import '@/uni_modules/uni-ui-scss';
/* #ifndef APP-NVUE */
// 设置整个项目的背景色
page {
	background-color: #f5f5f5;
}
/* #endif */
</style>
