<template>
	<main class="page">
		<slot name="top" />
		<div class="wrap">
			<Content class="theme-default-content" />
			<div ref="simulator" class="simulator-box">
				<div class="simulator-top"><div class="simulator-top_box"></div></div>
				<div class="simulator-content">
					<div class="simulator-seat"></div>
					<iframe class="simulator-iframe" :src="path"></iframe>
				</div>
				<div class="simulator-bottom"><div class="simulator-bottom_box"></div></div>
			</div>
		</div>
		<PageEdit />

		<PageNav class="page-nav" v-bind="{ sidebarItems }" />

		<slot name="bottom" />
	</main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue';
import PageNav from '@theme/components/PageNav.vue';

export default {
	components: { PageEdit, PageNav },
	props: ['sidebarItems'],
	data() {
		return {
			url: ''
		};
	},
	computed:{
		path(){
			return 'https://uniui.dcloud.net.cn/h5/#/' + this.url +'?v='+new Date().getTime()
		}
	},
	watch: {
		$page: {
			handler(newName) {
				const { frontmatter } = newName;
				this.url = frontmatter.url ? frontmatter.url : '';
			},
			immediate: true
		}
	},
	created() {},
	methods: {
		onload(err){
			console.log('----加载完成',err);
		}
	}
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
	padding-bottom 2rem
	display block
.wrap
	max-width 1400px
	display flex
	width auto
	margin 0 auto
	.simulator-box
		position -webkit-sticky
		position sticky
		top 0px
		z-index 9
		display flex
		flex-direction column
		margin-top 80px
		// margin-left 50px
		flex-shrink 0
		width 400px
		height 790px
		border-radius 20px
		background-color #333
		box-shadow 0px 0px 10px 2px rgba(0, 0, 0, 0.2)
		transform scale(0.85)
		box-sizing border-box
		.simulator-top
			display flex
			justify-content center
			align-items center
			flex-shrink 0
			height 36px
			.simulator-top_box
				width 55px
				height 14px
				background-color #222
				border-radius 8px
				box-shadow -1px -2px 1px 0px rgba(255, 255, 255, 0.4) inset
		.simulator-content
			position relative
			flex 1
			// height 100%
			margin 0 20px
			border-radius 5px
			background-color #FFFFFF
			overflow hidden
			// .simulator-seat
			// 	position absolute
			// 	left 0px
			// 	top 0px
			// 	width 44px
			// 	height 44px
			// 	background-color rgb(0, 122, 255)
			.simulator-iframe
				margin -2px 0
				width 100%
				height 100%
				border none
		.simulator-bottom
			display flex
			justify-content center
			align-items center
			flex-shrink 0
			height 70px
			.simulator-bottom_box
				position relative
				width 44px
				height 44px
				border-radius 50%
				background-color #555
				border 1px #666 solid
				box-shadow 0px 10px 5px 1px rgba(0, 0, 0, 0.3) inset
				&::after
					content ''
					position absolute
					width 15px
					height 15px
					margin auto
					top 1px
					left 0
					bottom 0
					right 0
					border-radius 5px
					border 2px #777 solid
		&.simulator-fixed
			position fixed
		@media (max-width: 1300px)
			display none
.page-nav
	max-width 1400px
	margin 0 auto
	.inner
		display flex
		justify-content space-between
</style>
