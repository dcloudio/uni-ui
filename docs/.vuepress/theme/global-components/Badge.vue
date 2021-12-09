<script>
export default {
	functional: true,
	props: {
		type: {
			type: String,
			default: 'tip'
		},
		text: String,
		vertical: {
			type: String,
			default: 'top'
		},
		right: {
			type: String,
			default: '0'
		}
	},
	render(h, { props, slots }) {
		return h(
			'span',
			{
				class: ['badge', props.type],
				style: {
					verticalAlign: props.vertical,
					marginRight: props.right + 'px'
				}
			},
			props.text || slots().default
		);
	}
};
</script>

<style lang="stylus" >
.badge
	display inline-block
	font-size 13px
	height 18px
	line-height 18px
	border-radius 3px
	padding 2px 8px
	color white
	background-color #42b983
	&.tip, &.green
		background-color $badgeTipColor
	&.error
		background-color $badgeErrorColor
	&.warning, &.warn, &.yellow
		background-color $badgeWarningColor
&.feat
	background-color #ecf8f3
	color #42B983
	border 1px #d9f1e6 solid
&.fix
	background-color #f0f9eb
	color #67c23a
	border 1px #f0f9eb solid
&.docs, &.test
	background-color #f4f4f5
	color #909399
	border 1px #e9e9eb solid
&.perf
	background-color #fdf6ec
	color #e6a23c
	border 1px #faecd8 solid
&.refactor, &.revert
	background-color #fef0f0
	color #f56c6c
	border 1px #fde2e2 solid
	& + &
		margin-left 5px
</style>
