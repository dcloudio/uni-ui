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
		background-color: #FFFFFF;
	}
    view{
        font-size: 28upx;
        line-height: inherit;
    }
    .example{
        padding: 0 30upx 30upx;
    }
	.example-title {
		font-size: 32upx;
        line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
        position: relative;
	}
    .example .example-title{
        margin: 40upx 0;
    }
    .example-body{
        padding: 0 40upx;
    }
</style>
