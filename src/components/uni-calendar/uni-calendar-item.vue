<template>
	<view class="uni-calendar__weeks-box" :class="{
		'uni-calendar--disable':weeks.disable,
		'uni-calendar--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
		'uni-calendar--checked':(calendar.fullDate === weeks.fullDate && !weeks.isDay) ,
		'uni-calendar--multiple': weeks.multiple
		}"
	 @click="choiceDate(weeks)">
		<view class="uni-calendar__weeks-box-item">
			<text v-if="selected&&weeks.extraInfo" class="uni-calendar__weeks-box-circle"></text>
			<text class="uni-calendar__weeks-box-text" :class="{
				'uni-calendar--isDay-text': weeks.isDay,
				'uni-calendar--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar--multiple': weeks.multiple,
				'uni-calendar--disable':weeks.disable,
				}">{{weeks.date}}</text>
			<text v-if="!lunar&&!weeks.extraInfo && weeks.isDay" class="uni-calendar__weeks-lunar-text" :class="{
				'uni-calendar--isDay-text':weeks.isDay,
				'uni-calendar--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar--multiple': weeks.multiple,
				}">今天</text>
			<text v-if="lunar&&!weeks.extraInfo" class="uni-calendar__weeks-lunar-text" :class="{
				'uni-calendar--isDay-text':weeks.isDay,
				'uni-calendar--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar--multiple': weeks.multiple,
				'uni-calendar--disable':weeks.disable,
				}">{{weeks.isDay?'今天': weeks.lunar.IDayCn}}</text>
			<text v-if="weeks.extraInfo&&weeks.extraInfo.info" class="uni-calendar__weeks-lunar-text" :class="{
				'uni-calendar--extra':weeks.extraInfo.info,
				'uni-calendar--isDay-text':weeks.isDay,
				'uni-calendar--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar--multiple': weeks.multiple,
				'uni-calendar--disable':weeks.disable,
				}">{{weeks.extraInfo.info}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			weeks: {
				type: Object,
				default () {
					return {}
				}
			},
			calendar: {
				type: Object,
				default: () => {
					return {}
				}
			},
			selected: {
				type: Array,
				default: () => {
					return []
				}
			},
			lunar: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			choiceDate(weeks) {
				this.$emit('change', weeks)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-calendar__weeks-box {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.uni-calendar__weeks-box-text {
		font-size: 15px;
		color: #666;
	}

	.uni-calendar__weeks-lunar-text {
		font-size: 12px;
		color: #666;
	}

	.uni-calendar__weeks-box-item {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
	}

	.uni-calendar__weeks-box-circle {
		position: absolute;
		top: 5px;
		right: 5px;
		width: 8px;
		height: 8px;
		border-radius: 8px;
		background-color: #ff5a5f;

	}

	.uni-calendar--disable {
		background-color: rgba(249, 249, 249, 0.8);
		color: #ddd;
		/* opacity: 0.8; */
	}

	.uni-calendar--isDay-text {
		color: #ff5a5f;
	}

	.uni-calendar--isDay {
		background-color: #76d471;
		opacity: 0.8;
		color: #fff;
	}

	.uni-calendar--extra {
		color: #ff5a5f;
		opacity: 0.8;
	}

	.uni-calendar--checked {
		background-color: #76d471;
		color: #fff;
		opacity: 0.8;
	}

	.uni-calendar--multiple {
		background-color: #76d471;
		color: #fff;
		opacity: 0.8;
	}
</style>
