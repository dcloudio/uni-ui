<!-- fixed by mehaotian -->
<template>
	<div class="log-item">
		<div class="log-item-title">{{title}}</div>
		<div class="log-item-content">
			<slot>-</slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LogItem',
	functional: false,
	props: {
		title:{
			type:String,
			default:'-'
		},
	}
};
</script>

<style lang="stylus" >
.log-item
	margin 10px 0
	position relative
	// padding-left 45px
	font-size 14px
	color #34495E
	border 1px #f0f0f0 solid
	margin-left 25px
	// padding 10px
	border-radius 5px
	.log-item-title {
		padding 10px 10px
		border-bottom 1px #F0F0F0 solid
		font-size 16px
		color #34495E
	}
	.log-item-content
		padding 10px
	// &::after
	// 	content ''
	// 	position absolute
	// 	left 30px
	// 	top 0
	// 	bottom 0
	// 	margin auto
	// 	width 5px
	// 	height 5px
	// 	border 1px #C0C0C0 solid
	// 	border-radius 50%
</style>
