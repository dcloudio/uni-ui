<template>
	<view>
		<block v-for="(weeks, week) in canlender.weeks" :key="week">
			<view class="calender-body-date-week">
				<block v-for="(day, index) in weeks" :key="index">
					<view
						class="date"
						:class="{
							disable: canlender.month !== day.month || day.disable,
							'date-current':
								(day.date == canlender.date || day.checked) &&
								canlender.month == day.month &&
								!day.disable,
							lunar: lunar,
							active: day.isDay,
							'is-day': day.isDay
						}"
						@tap="
							selectDays(
								week,
								index,
								canlender.month === day.month,
								day.disable,
								canlender.lunar
							)
						"
					>
						<view class="circle-box">
							{{ day.date }}
							<view v-if="lunar" class="lunar">{{ day.lunar }}</view>
							<view v-if="day.have" class="data-circle"></view>
						</view>
					</view>
				</block>
			</view>
		</block>
	</view>
</template>

<script>
export default {
	name:'uni-calendar-item',
	props: {
		/**
		 * 当前日期
		 */
		canlender: {
			type: null,
			default: () => {
				return {};
			}
		},
		lunar: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {};
	},
	created() {
		
	},
	methods: {
		selectDays(week, index, ischeck, isDay, lunar) {
			this.$emit('selectDays', { week, index, ischeck, isDay, lunar });
		}
	}
};
</script>

<style lang="scss" scoped>
@import './uni-calendar.css';
.calender-body-date-week {
	display: flex;
	width: 100%;
	border-bottom: 1px #f5f5f5 solid;
	&:last-child {
		border: none;
	}
	// 日期的样式
	.date {
		position: relative;
		width: 100%;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #000;
		background: #fff;
		// line-height: 100upx;
		box-sizing: border-box;
		padding: 20upx 0;
		line-height: 1.5;
		.lunar {
			font-size: 20upx;
			color: #000;
		}
		.circle-box {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 80upx;
			height: 80upx;
			flex-shrink: 0;
			border-radius: 50%;
			transition: all .2s;

		}
		&.lunar {
// 			padding: 20upx 0;
// 			line-height: 1.5;
		}
		// 本月禁止的样式
		&.disable {
			color: #d4d4d4;
			.lunar {
				color: #d4d4d4;
			}
		}
		&.is-day {
			color: #fd2e32;
		}
		&.is-day .lunar {
			color: #fd2e32;
		}
		// 当前选中
		&.date-current {
			// background: #000; 
			color: #fff;
			box-sizing: border-box;
			.circle-box {
				background: #fd2e32;
			}
			&.active {
			}
			.lunar {
				color: #fff;
			}
		}

		.data-circle {
			position: absolute;
			// bottom: 10rpx;
			top: 10upx;
			right: 10upx;
			// margin: auto;
			width: 10rpx;
			height: 10rpx;
			border-radius: 50%;
			background: #ff5a5f;
			z-index: 2;
		}
	}
}
</style>
