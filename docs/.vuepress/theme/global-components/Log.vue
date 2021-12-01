<!-- fixed by mehaotian -->
<template>
	<div class="log-box">
		<div class="log-title">
			<span>{{title}}</span>
			<Badge :text="date" type="warning" />
		</div>
		<slot><div class="children"></div></slot>
	</div>
</template>

<script>
export default {
	name: 'Log',
	functional: false,
	props: {
		title:{
			type:String,
			default:'-'
		},
		date:{
			type:String,
			default:'-'
		}
	}
};
</script>

<style lang="stylus" >
.log-box
	position relative
	width 100%
	padding-bottom 10px

	font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
	&::before
		content ''
		position absolute
		left 6px
		top 0px
		bottom 0
		width 1px
		background-color #eee
	&:first-of-type::before
		top 20px
	.log-title
		position relative
		padding 10px 25px
		font-size 18px
		font-weight bold
		color #34495E
		&::after
			content ''
			position absolute
			left 0
			top 0
			bottom 0
			margin auto
			width 11px
			height 11px
			border 1px #3eaf7c solid
			border-radius 50%
			background-color #fff
.children
	position relative
	padding-left 45px
	font-size 14px
	color #34495E
	&::after
		content ''
		position absolute
		left 30px
		top 0
		bottom 0
		margin auto
		width 5px
		height 5px
		border 1px #C0C0C0 solid
		border-radius 50%
</style>
