<template>
	<view
	    ref="uni-rate"
	    class="uni-rate"
	>
		<view
		    class="uni-rate__icon"
		    :style="{ 'margin-right': margin + 'px' }"
		    v-for="(star, index) in stars"
		    :key="index"
		    @touchstart.stop="touchstart"
		    @touchmove.stop="touchmove"
		>
			<uni-icons
			    :color="color"
			    :size="size"
			    :type="isFill ? 'star-filled' : 'star'"
			/>
			<!-- #ifdef APP-NVUE -->
			<view
			    :style="{ width: star.activeWitch.replace('%','')*size/100+'px'}"
			    class="uni-rate__icon-on"
			>
				<uni-icons
				    style="text-align: left;"
				    :color="disabled?'#ccc':activeColor"
				    :size="size"
				    type="star-filled"
				/>
			</view>
			<!-- #endif -->
			<!-- #ifndef APP-NVUE -->
			<view
			    :style="{ width: star.activeWitch}"
			    class="uni-rate__icon-on"
			>
				<uni-icons
				    :color="disabled?disabledColor:activeColor"
				    :size="size"
				    type="star-filled"
				/>
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	import uniIcons from "../uni-icons/uni-icons.vue";
	import rateMixin from './mixins/rate-mixin.js'
	
	/**
	 * Rate 评分
	 * @description 评分组件
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=33
	 * @property {Boolean} 	isFill = [true|false] 		星星的类型，是否为实心类型, 默认为实心
	 * @property {String} 	color 						未选中状态的星星颜色，默认为 "#ececec"
	 * @property {String} 	activeColor 				选中状态的星星颜色，默认为 "#ffca3e"
	 * @property {String} 	disabledColor 				禁用状态的星星颜色，默认为 "#c0c0c0"
	 * @property {Number} 	size 						星星的大小
	 * @property {Number} 	value/v-model 				当前评分
	 * @property {Number} 	max 						最大评分评分数量，目前一分一颗星
	 * @property {Number} 	margin 						星星的间距，单位 px
	 * @property {Boolean} 	disabled = [true|false] 	是否为禁用状态，默认为 false
	 * @property {Boolean} 	readonly = [true|false] 	是否为只读状态，默认为 false
	 * @property {Boolean} 	allowHalf = [true|false] 	是否实现半星，默认为 false
	 * @property {Boolean} 	touchable = [true|false] 	是否支持滑动手势，默认为 true
	 * @event {Function} change 						uniRate 的 value 改变时触发事件，e={value:Number}
	 */
	
	export default {
		components: {
			uniIcons
		},
		name: "UniRate",
		mixins: [rateMixin]
	};
</script>

<style
    lang="scss"
    scoped
>
	.uni-rate {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		line-height: 1;
		font-size: 0;
		flex-direction: row;
	}

	.uni-rate__icon {
		position: relative;
		line-height: 1;
		font-size: 0;
	}

	.uni-rate__icon-on {
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
		line-height: 1;
		text-align: left;
	}
</style>
