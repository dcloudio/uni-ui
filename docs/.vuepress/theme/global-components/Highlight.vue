<!-- fixed by mehaotian -->
<template>
	<span class="highlight">{{text}}</span>
</template>

<script>
export default {
	name: 'Highlight',
	functional: false,
	props: {
		text: {
			type: String,
			default: '-'
		},
	}
};
</script>

<style lang="stylus" >
	.highlight
		color #476582
		background-color #1b1f230d
		line-height 1.5
		margin 0 5px
		padding 0 5px
		font-size 14px
		border-radius 3px
</style>
