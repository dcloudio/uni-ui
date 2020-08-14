<!-- fixed by mehaotian -->
<template>
	<div class="icons-box">
		<div class="icons-item" v-for="(item,index) in iconsList" :key="index">
			<span class="uni-icon">{{item}}</span>
			<span class="icons-text">{{index}}</span>
		</div>
	</div>
</template>

<script>
import uniicons from './icons.js'
export default {
	name: 'iconsLayouts',
	functional: false,
	props: {},
	data(){
		return {
			iconsList:[]
		}
	},
	created() {
		this.iconsList = uniicons
	}
};
</script>

<style lang="stylus" scoped>
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
		display flex
		flex-direction column
		align-items center
		padding 25px 10px
		width 16.66%
		border-right 1px #eaecef solid
		border-bottom 1px #eaecef solid
		box-sizing border-box
		-moz-user-select:none;/*火狐*/
		-webkit-user-select:none;/*webkit浏览器*/
		-ms-user-select:none;/*IE10*/
		-khtml-user-select:none;/*早期浏览器*/
		user-select:none;
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
