<!-- fixed by mehaotian -->
<template>
	<div class="icons-box">
		<div class="icons-item" v-for="(item, index) in iconsList" :key="index" @click="onClipboard(item)">
			<span class="icons-tip" :class="{ show: item.tipShow }">复制成功</span>
			<span class="uni-icon">{{ item.icon }}</span>
			<span class="icons-text">{{ item.text }}</span>
		</div>
	</div>
</template>

<script>
import uniicons from './icons.js';
import Clipboard from 'clipboard';
export default {
	name: 'iconsLayouts',
	functional: false,
	props: {},
	data() {
		return {
			iconsList: []
		};
	},
	created() {
		for (let i in uniicons) {
			this.iconsList.push({
				icon: uniicons[i],
				text: i,
				tipShow: false
			});
		}
	},
	methods: {
		onClipboard(data) {
			console.log(data);
			let index  = this.iconsList.findIndex((item)=> item.tipShow)
			if(index !== -1){
				this.iconsList[index].tipShow = false
			}
			const _this = this
			let clipboard = new Clipboard('.icons-item', {
				text: function() {
					return data.text;
				}
			});
			clipboard.on('success', e => {
				data.tipShow = true
				clearTimeout(_this.timer)
				_this.timer = setTimeout(()=>{
					data.tipShow = false
				},1000)
				// this.$message({ message: '复制成功', showClose: true, type: 'success' });
				// 释放内存
				clipboard.destroy();
			});
			clipboard.on('error', e => {
				// this.$message({ message: '复制失败,', showClose: true, type: 'error' });
				clipboard.destroy();
			});
		}
	}
};
</script>

<style lang="stylus" >
@font-face
	font-family uniicons
	font-weight normal
	font-style normal
	src url('./uni.ttf') format('truetype')
.icons-box
	display flex
	flex-wrap wrap
	width 100%
	border-left 1px #eaecef solid
	border-top 1px #eaecef solid
	.icons-item
		position relative
		display flex
		flex-direction column
		align-items center
		padding 25px 10px
		width 16.66%
		border-right 1px #eaecef solid
		border-bottom 1px #eaecef solid
		box-sizing border-box
		-moz-user-select none /* 火狐 */
		-webkit-user-select none /* webkit浏览器 */
		-ms-user-select none /* IE10 */
		-khtml-user-select none /* 早期浏览器 */
		user-select none
		.icons-tip
			padding 2px 10px
			position absolute
			top 0
			left 0
			border-radius 5px
			color #1AAD19
			opacity 0
			transition all 0.3s
			&.show
				opacity 1
		&:hover
			background-color #F5F5F5
			cursor pointer
		.icons-text
			text-align center
		.uni-icon
			font-size 35px
			margin-bottom 10px
		@media (max-width: $MQNarrow)
			width 33.3%
			padding 15px 0
</style>
