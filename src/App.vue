<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
/*每个页面公共css */
page {
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	background-color: #efeff4;
}
view {
	font-size: 28upx;
	line-height: inherit;
}
.example {
	padding: 0 30upx 30upx;
}
.example-title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 32upx;
	// line-height: $uni-font-size-base;
	color: #464e52;
	padding: 30upx;
	margin-top: 20upx;
	position: relative;
	background-color: #fdfdfd;
}
.example-title__after {
	position: relative;
	color: #031e3c;
}
.example-title:after {
	content: '';
	position: absolute;
	left:0px;
	margin: auto;
	top: 0;
	bottom: 0;
	width: 10upx;
	height: 40upx;
	border-top-right-radius: 10upx;
	border-bottom-right-radius: 10upx;
	background-color: #031e3c;
}
.example .example-title {
	margin: 40upx 0;
}
.example-body {
	border-top: 1px #f5f5f5 solid;
	padding: 30upx;
	background: #ffffff;
}
.example-info {
	padding: 30upx;
	color: #3b4144;
	background: #ffffff;
}
</style>
