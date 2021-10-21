<script>

export default {
	onLaunch: function() {
		console.log('App Launch');
		uni.navigateTo({
			url: 'pages/vue/fab/fab'
		})
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
@import '@/static/customicons.css';
@import '@/uni_modules/uni-ui-scss';
/* #ifndef APP-NVUE */
// 设置整个项目的背景色
page {
	background-color: #f5f5f5;
}
/* #endif */
.example-info {
	font-size: 14px;
	color: #333;
	padding: 10px;
}
</style>
