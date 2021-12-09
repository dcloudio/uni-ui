<!-- fixed by mehaotian -->
<template>
	<div class="log-item-text" :class="{ 'text--only': only }">
		<Badge v-if="showTag" :text="tagName" :type="tagType" right="10" />
		<slot>-</slot>
	</div>
</template>

<script>
export default {
	name: 'LogItemText',
	functional: false,
	props: {
		showTag: {
			type: Boolean,
			default: true
		},
		/**
		 *  feat： 			新增 feature
		 *  fix: 				修复 bug
		 *  docs: 			仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE等等
		 *  style: 			仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
		 *  refactor: 	代码重构，没有加新功能或者修复 bug
		 *  perf: 			优化相关，比如提升性能、体验
		 *  test: 			测试用例，包括单元测试、集成测试等
		 *  chore: 			改变构建流程、或者增加依赖库、工具等
		 *  revert: 		回滚到上一个版本
		 */
		tagType: {
			type: String,
			default: 'feat'
		},
		// 单独使用的情况下，左侧留空白
		only: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		tagName() {
			let name = '新增';
			switch (this.tagType) {
				case 'feat':
					name = '新增';
					break;
				case 'fix':
					name = '修复';
					break;
				case 'docs':
					name = '文档';
					break;
				case 'refactor':
					name = '重构';
					break;
				case 'perf':
					name = '优化';
					break;
				case 'test':
					name = '测试';
					break;
				case 'revert':
					name = '回滚';
					break;
			}
			return name;
		}
	}
};
</script>

<style lang="stylus" >
.log-item-text
	position relative
	padding 10px 0
	padding-left 15px
	color #5e6d82
	display flex
	align-items center
	box-sizing border-box
	>>> .badge
		flex-shrink 0
	&::after
		content ''
		position absolute
		left 0
		top 0
		bottom 0
		margin auto
		width 5px
		height 5px
		border 1px #C0C0C0 solid
		border-radius 50%
	&.text--only
		margin-left 25px
		&::after
			width 7px
			height 7px
			border none
			background-color #ddd
</style>
