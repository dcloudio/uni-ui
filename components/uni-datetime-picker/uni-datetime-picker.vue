<template>
	<view class="uni-datetime-picker">
		<view @click="initTimePicker">
			<slot>
				<view class="uni-datetime-picker-timebox uni-datetime-picker-flex" :class="{'uni-datetime-picker-disabled': disabled}">
					{{time}}
					<view v-if="!time" class="uni-datetime-picker-time">
						选择{{title}}
					</view>
					<view class="uni-datetime-picker-down-arrow"></view>
				</view>
			</slot>
		</view>
		<view v-if="visible" class="uni-datetime-picker-mask" @click="tiggerTimePicker"></view>
		<view v-if="visible" class="uni-datetime-picker-popup">
			<view class="uni-title">
				设置{{title}}
			</view>
			<picker-view v-show="dateShow" class="uni-datetime-picker-view" :indicator-style="indicatorStyle" :value="ymd"
			 @change="bindDateChange">
				<picker-view-column class="uni-datetime-picker-hyphen">
					<view class="uni-datetime-picker-item" v-for="(item,index) in years" :key="index">{{item}}</view>
				</picker-view-column>
				<picker-view-column class="uni-datetime-picker-hyphen">
					<view class="uni-datetime-picker-item" v-for="(item,index) in months" :key="index">{{item < 10 ? '0' + item : item}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="uni-datetime-picker-item" v-for="(item,index) in days" :key="index">{{item < 10 ? '0' + item : item}}</view>
				</picker-view-column>
			</picker-view>
			<picker-view v-show="timeShow" class="uni-datetime-picker-view" :indicator-style="indicatorStyle" :value="hms"
			 @change="bindTimeChange">
				<picker-view-column class="uni-datetime-picker-colon">
					<view class="uni-datetime-picker-item" v-for="(item,index) in hours" :key="index">{{item < 10 ? '0' + item : item}}</view>
				</picker-view-column>
				<picker-view-column class="uni-datetime-picker-colon">
					<view class="uni-datetime-picker-item" v-for="(item,index) in minutes" :key="index">{{item < 10 ? '0' + item : item}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="uni-datetime-picker-item" v-for="(item,index) in seconds" :key="index">{{item < 10 ? '0' + item : item}}</view>
				</picker-view-column>
			</picker-view>
			<view class="uni-datetime-picker-btn">
				<view class="" @click="clearTime">清空</view>
				<view class="uni-datetime-picker-btn-group">
					<view class="uni-datetime-picker-cancel" @click="tiggerTimePicker">取消</view>
					<view class="" @click="setTime">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * DatetimePicker 时间选择器
	 * @description 可以同时选择日期和时间的选择器
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=xxx
	 * @property {String} type = [datetime | date | time] 显示模式
	 * @property {Boolean} multiple = [true|false] 是否多选
	 * @property {String|Number} value 默认值
	 * @property {String|Number} start 起始日期或时间
	 * @property {String|Number} end 起始日期或时间
	 * @property {String} return-type = [timestamp | string]
	 * @event {Function} change  选中发生变化触发
	 */

	export default {
		data() {
			return {
				indicatorStyle: `height: 50px;`,
				visible: false,
				dateShow: true,
				timeShow: true,
				title: '日期和时间',
				// 输入框当前时间
				time: '',
				// 当前的年月日时分秒
				year: 1900,
				month: 0,
				day: 0,
				hour: 0,
				minute: 0,
				second: 0,
				// 起始时间
				startYear: 1920,
				startMonth: 1,
				startDay: 1,
				startHour: 0,
				startMinute: 0,
				startSecond: 0,
				// 结束时间
				endYear: 2120,
				endMonth: 12,
				endDay: 31,
				endHour: 23,
				endMinute: 59,
				endSecond: 59,
			}
		},
		props: {
			type: {
				type: String,
				default: 'datetime'
			},
			value: {
				type: [String, Number],
				default: ''
			},
			start: {
				type: [Number, String],
				default: ''
			},
			end: {
				type: [Number, String],
				default: ''
			},
			returnType: {
				type: String,
				default: 'string'
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			value: {
				handler(newVal, oldVal) {
					if (newVal) {
						this.parseValue(this.fixIosDateFormat(newVal)) //兼容 iOS、safari 日期格式
						this.initTime()
					} else {
						this.parseValue(Date.now())
					}
				},
				immediate: true
			},
			type: {
				handler(newValue) {
					if (newValue === 'date') {
						this.dateShow = true
						this.timeShow = false
						this.title = '日期'
					} else if (newValue === 'time') {
						this.dateShow = false
						this.timeShow = true
						this.title = '时间'
					} else {
						this.dateShow = true
						this.timeShow = true
						this.title = '日期和时间'
					}
				},
				immediate: true
			},
			start: {
				handler(newVal) {
					this.parseDatetimeRange(this.fixIosDateFormat(newVal), 'start') //兼容 iOS、safari 日期格式
				},
				immediate: true
			},
			end: {
				handler(newVal) {
					this.parseDatetimeRange(this.fixIosDateFormat(newVal), 'end') //兼容 iOS、safari 日期格式
				},
				immediate: true
			},

			// 月、日、时、分、秒可选范围变化后，检查当前值是否在范围内，不在则当前值重置为可选范围第一项
			months(newVal) {
				this.checkValue('month', this.month, newVal)
			},
			days(newVal) {
				this.checkValue('day', this.day, newVal)
			},
			hours(newVal) {
				this.checkValue('hour', this.hour, newVal)
			},
			minutes(newVal) {
				this.checkValue('minute', this.minute, newVal)
			},
			seconds(newVal) {
				this.checkValue('second', this.second, newVal)
			}
		},
		created() {
			this.form = this.getForm('uniForms')
			this.formItem = this.getForm('uniFormsItem')

			if (this.formItem) {
				if (this.formItem.name) {
					this.rename = this.formItem.name
					this.form.inputChildrens.push(this)
				}
			}
		},
		computed: {
			ymd() {
				return [this.year - this.startYear, this.month - this.minOfMonths, this.day - this.minOfDays]
			},
			hms() {
				return [this.hour - this.minOfHours, this.minute - this.minOfMintues, this.second - this.minOfSeconds]
			},

			// 当前 date 是 start
			currentDateIsStart() {
				return this.year === this.startYear && this.month === this.startMonth && this.day === this.startDay
			},

			// 当前 date 是 end
			currentDateIsEnd() {
				return this.year === this.endYear && this.month === this.endMonth && this.day === this.endDay
			},

			// 当前年、月、日、时、分、秒选择范围
			years() {
				const yearsRange = []
				for (let i = this.startYear; i <= this.endYear; i++) {
					yearsRange.push(i)
				}
				return yearsRange
			},

			months() {
				const monthsRange = []
				if (this.year === this.startYear) {

					for (let i = this.startMonth; i <= 12; i++) {
						monthsRange.push(i)
					}
				} else if (this.year === this.endYear) {
					for (let i = 1; i <= this.endMonth; i++) {
						monthsRange.push(i)
					}
				} else {
					for (let i = 1; i <= 12; i++) {
						monthsRange.push(i)
					}
				}
				return monthsRange
			},

			days() {
				const daysRange = []
				const trueDays = this.daysInMonth(this.year, this.month)
				if (this.year === this.startYear && this.month === this.startMonth) {
					for (let i = this.startDay; i <= trueDays; i++) {
						daysRange.push(i)
					}
				} else if (this.year === this.endYear && this.month === this.endMonth) {
					for (let i = 1; i <= this.endDay; i++) {
						daysRange.push(i)
					}
				} else {
					for (let i = 1; i <= trueDays; i++) {
						daysRange.push(i)
					}
				}
				return daysRange
			},

			hours() {
				const hoursRange = []
				if (this.type === 'datetime') {
					if (this.currentDateIsStart) {
						for (let i = this.startHour; i <= 23; i++) {
							hoursRange.push(i)
						}
					} else if (this.currentDateIsEnd) {
						for (let i = 0; i <= this.endHour; i++) {
							hoursRange.push(i)
						}
					} else {
						for (let i = 0; i <= 23; i++) {
							hoursRange.push(i)
						}
					}
				}

				if (this.type === 'time') {
					for (let i = this.startHour; i <= this.endHour; i++) {
						hoursRange.push(i)
					}
				}

				return hoursRange
			},

			minutes() {
				const minutesRange = []
				if (this.type === 'datetime') {
					if (this.currentDateIsStart && this.hour === this.startHour) {
						for (let i = this.startMinute; i <= 59; i++) {
							minutesRange.push(i)
						}
					} else if (this.currentDateIsEnd && this.hour === this.endHour) {
						for (let i = 0; i <= this.endMinute; i++) {
							minutesRange.push(i)
						}
					} else {
						for (let i = 0; i <= 59; i++) {
							minutesRange.push(i)
						}
					}
				}

				if (this.type === 'time') {
					if (this.hour === this.startHour) {
						for (let i = this.startMinute; i <= 59; i++) {
							minutesRange.push(i)
						}
					} else if (this.hour === this.endHour) {
						for (let i = 0; i <= this.endMinute; i++) {
							minutesRange.push(i)
						}
					} else {
						for (let i = 0; i <= 59; i++) {
							minutesRange.push(i)
						}
					}
				}

				return minutesRange
			},

			seconds() {
				const secondsRange = []
				if (this.type === 'datetime') {
					if (this.currentDateIsStart && this.hour === this.startHour && this.minute === this.startMinute) {
						for (let i = this.startSecond; i <= 59; i++) {
							secondsRange.push(i)
						}
					} else if (this.currentDateIsEnd && this.hour === this.endHour && this.minute === this.endMinute) {
						for (let i = 0; i <= this.endSecond; i++) {
							secondsRange.push(i)
						}
					} else {
						for (let i = 0; i <= 59; i++) {
							secondsRange.push(i)
						}
					}
				}

				if (this.type === 'time') {
					if (this.hour === this.startHour && this.minute === this.startMinute) {
						for (let i = this.startSecond; i <= 59; i++) {
							secondsRange.push(i)
						}
					} else if (this.hour === this.endHour && this.minute === this.endMinute) {
						for (let i = 0; i <= this.endSecond; i++) {
							secondsRange.push(i)
						}
					} else {
						for (let i = 0; i <= 59; i++) {
							secondsRange.push(i)
						}
					}
				}

				return secondsRange
			},


			// 当前可选最小年、月、日
			minOfMonths() {
				return this.year === this.startYear ? this.startMonth : 1
			},
			minOfDays() {
				return this.year === this.startYear && this.month === this.startMonth ? this.startDay : 1
			},

			// 当前可选最小时、分、秒
			minOfHours() {
				if (this.type === 'datetime') {
					if (this.currentDateIsStart) {
						return this.startHour
					} else {
						return 0
					}
				} else if (this.type === 'time') {
					return this.startHour
				} else {
					return 0
				}
			},
			minOfMintues() {
				if (this.type === 'datetime') {
					if (this.currentDateIsStart && this.hour === this.startHour) {
						return this.startMinute
					} else {
						return 0
					}
				} else if (this.type === 'time') {
					if (this.hour === this.startHour) {
						return this.startMinute
					} else {
						return 0
					}
				} else {
					return 0
				}
			},
			minOfSeconds() {
				if (this.type === 'datetime') {
					if (this.currentDateIsStart && this.hour === this.startHour && this.minute === this.startMinute) {
						return this.startSecond
					} else {
						return 0
					}
				} else if (this.type === 'time') {
					if (this.hour === this.startHour && this.minute === this.startMinute) {
						return this.startSecond
					} else {
						return 0
					}
				} else {
					return 0
				}
			}
		},

		methods: {
			/**
			 * 获取父元素实例
			 */
			getForm(name = 'uniForms') {
				let parent = this.$parent;
				let parentName = parent.$options.name;
				while (parentName !== name) {
					parent = parent.$parent;
					if (!parent) return false
					parentName = parent.$options.name;
				}
				return parent;
			},

			/**
			 * 解析时分秒字符串，例如：00:00:00
			 * @param {String} timeString
			 */
			parseTimeType(timeString) {
				if (timeString) {
					let timeArr = timeString.split(':')
					this.hour = Number(timeArr[0])
					this.minute = Number(timeArr[1])
					this.second = Number(timeArr[2])
				}
			},

			/**
			 * 解析选择器初始值，类型可以是字符串、时间戳，例如：2000-10-02、'08:30:00'、 1610695109000
			 * @param {String | Number} datetime
			 */
			initPickerValue(datetime) {
				let defaultValue = null
				if (datetime) {
					defaultValue = this.compareValueWithStartAndEnd(datetime, this.start, this.end)
				} else {
					defaultValue = Date.now()
					defaultValue = this.compareValueWithStartAndEnd(defaultValue, this.start, this.end)
				}
				this.parseValue(defaultValue)
			},

			/**
			 * 初始值规则：
			 * - 用户设置初始值 value
			 * 	- 设置了起始时间 start、终止时间 end，并 start < value < end，初始值为 value， 否则初始值为 start
			 * 	- 只设置了起始时间 start，并 start < value，初始值为 value，否则初始值为 start
			 * 	- 只设置了终止时间 end，并 value < end，初始值为 value，否则初始值为 end
			 * 	- 无起始终止时间，则初始值为 value
			 * - 无初始值 value，则初始值为当前本地时间 Date.now()
			 * @param {Object} value
			 * @param {Object} dateBase
			 */
			compareValueWithStartAndEnd(value, start, end) {
				let winner = null
				value = this.superTimeStamp(value)
				start = this.superTimeStamp(start)
				end = this.superTimeStamp(end)

				if (start && end) {
					if (value < start) {
						winner = new Date(start)
					} else if (value > end) {
						winner = new Date(end)
					} else {
						winner = new Date(value)
					}
				} else if (start && !end) {
					winner = start <= value ? new Date(value) : new Date(start)
				} else if (!start && end) {
					winner = value <= end ? new Date(value) : new Date(end)
				} else {
					winner = new Date(value)
				}

				return winner
			},

			/**
			 * 转换为可比较的时间戳，接受日期、时分秒、时间戳
			 * @param {Object} value
			 */
			superTimeStamp(value) {
				let dateBase = ''
				if (this.type === 'time' && value && typeof value === 'string') {
					const now = new Date()
					const year = now.getFullYear()
					const month = now.getMonth() + 1
					const day = now.getDate()
					dateBase = year + '/' + month + '/' + day + ' '
				}
				if (Number(value) && typeof value !== NaN) {
					value = parseInt(value)
					dateBase = 0
				}
				return this.createTimeStamp(dateBase + value)
			},

			/**
			 * 解析默认值 value，字符串、时间戳
			 * @param {Object} defaultTime
			 */
			parseValue(value) {
				if (!value) return
				if (this.type === 'time' && typeof value === "string") {
					this.parseTimeType(value)
				} else {
					let defaultDate = null
					defaultDate = new Date(value)
					if (this.type !== 'time') {
						this.year = defaultDate.getFullYear()
						this.month = defaultDate.getMonth() + 1
						this.day = defaultDate.getDate()
					}
					if (this.type !== 'date') {
						this.hour = defaultDate.getHours()
						this.minute = defaultDate.getMinutes()
						this.second = defaultDate.getSeconds()
					}
				}
			},

			/**
			 * 解析可选择时间范围 start、end，年月日字符串、时间戳
			 * @param {Object} defaultTime
			 */
			parseDatetimeRange(point, pointType) {
				if (point && this.type === 'time') {
					const pointArr = point.split(':')
					this[pointType + 'Hour'] = Number(pointArr[0])
					this[pointType + 'Minute'] = Number(pointArr[1])
					this[pointType + 'Second'] = Number(pointArr[2])
				} else {
					if (!point) {
						pointType === 'start' ? this.startYear = this.year - 60 : this.endYear = this.year + 60
						return
					}
					if (Number(point) && Number(point) !== NaN) {
						point = parseInt(point)
					}
					// datetime 的 end 没有时分秒, 则不限制
					const hasTime = /[0-9]:[0-9]/
					if (this.type === 'datetime' && pointType === 'end' && typeof point === 'string' && !hasTime.test(point)) {
						point = point + ' 23:59:59'
					}
					const pointDate = new Date(point)
					this[pointType + 'Year'] = pointDate.getFullYear()
					this[pointType + 'Month'] = pointDate.getMonth() + 1
					this[pointType + 'Day'] = pointDate.getDate()
					if (this.type === 'datetime') {
						this[pointType + 'Hour'] = pointDate.getHours()
						this[pointType + 'Minute'] = pointDate.getMinutes()
						this[pointType + 'Second'] = pointDate.getSeconds()
					}
				}
			},

			// 检查当前值是否在范围内，不在则当前值重置为可选范围第一项
			checkValue(name, value, values) {
				if (values.indexOf(value) === -1) {
					this[name] = values[0]
				}
			},

			// 每个月的实际天数
			daysInMonth(year, month) { // Use 1 for January, 2 for February, etc.
				return new Date(year, month, 0).getDate();
			},

			//兼容 iOS、safari 日期格式
			fixIosDateFormat(value) {
				if (typeof value === 'string') {
					value = value.replace(/-/g, '/')
				}
				return value
			},

			/**
			 * 生成时间戳
			 * @param {Object} time
			 */
			createTimeStamp(time) {
				if (!time) return
				if (typeof time === "number") {
					return time
				} else {
					time = time.replace(/-/g, '/')
					if (this.type === 'date') {
						time = time + ' ' + '00:00:00'
					}
					return Date.parse(time)
				}
			},

			/**
			 * 生成日期或时间的字符串
			 */
			createDomSting() {
				const yymmdd = this.year +
					'-' +
					(this.month < 10 ? '0' + this.month : this.month) +
					'-' +
					(this.day < 10 ? '0' + this.day : this.day)

				const hhmmss = (this.hour < 10 ? '0' + this.hour : this.hour) +
					':' +
					(this.minute < 10 ? '0' + this.minute : this.minute) +
					':' +
					(this.second < 10 ? '0' + this.second : this.second)

				if (this.type === 'date') {
					return yymmdd
				} else if (this.type === 'time') {
					return hhmmss
				} else {
					return yymmdd + ' ' + hhmmss
				}
			},

			/**
			 * 初始化返回值，并抛出 change 事件
			 */
			initTime() {
				this.time = this.createDomSting()
				if (this.returnType === 'timestamp' && this.type !== 'time') {
					this.formItem && this.formItem.setValue(this.createTimeStamp(this.time))
					this.$emit('change', this.createTimeStamp(this.time))
					this.$emit('input', this.createTimeStamp(this.time))
				} else {
					this.formItem && this.formItem.setValue(this.time)
					this.$emit('change', this.time)
					this.$emit('input', this.time)
				}
			},

			/**
			 * 用户选择日期或时间更新 data
			 * @param {Object} e
			 */
			bindDateChange(e) {
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				this.day = this.days[val[2]]
			},
			bindTimeChange(e) {
				const val = e.detail.value
				this.hour = this.hours[val[0]]
				this.minute = this.minutes[val[1]]
				this.second = this.seconds[val[2]]
	},

	/**
	 * 初始化弹出层
	 */
	initTimePicker() {
			if (this.disabled) return
			const value = this.fixIosDateFormat(this.value)
			this.initPickerValue(value)
			this.visible = !this.visible
		},

		/**
		 * 触发或关闭弹框
		 */
		tiggerTimePicker() {
			this.visible = !this.visible
		},

		/**
		 * 用户点击“清空”按钮，清空当前值
		 */
		clearTime() {
			this.time = ''
			this.formItem && this.formItem.setValue(this.time)
			this.$emit('change', this.time)
			this.$emit('input', this.time)
			this.tiggerTimePicker()
		},

		/**
		 * 用户点击“确定”按钮
		 */
		setTime() {
			this.initTime()
			this.tiggerTimePicker()
		}
	}
	}
</script>

<style>
	.uni-datetime-picker-view {
		width: 100%;
		height: 130px;
		margin-top: 30px;
		cursor: pointer;
	}

	.uni-datetime-picker-item {
		line-height: 50px;
		text-align: center;
	}

	.uni-datetime-picker-btn {
		margin-top: 60px;
		display: flex;
		justify-content: space-between;
		color: #007AFF;
		cursor: pointer;
	}

	.uni-datetime-picker-btn-group {
		display: flex;
	}

	.uni-datetime-picker-cancel {
		margin-right: 30px;
	}

	.uni-datetime-picker-mask {
		position: fixed;
		bottom: 0px;
		top: 0px;
		left: 0px;
		right: 0px;
		background-color: rgba(0, 0, 0, 0.4);
		transition-duration: 0.3s;
		z-index: 998;
	}

	.uni-datetime-picker-popup {
		border-radius: 8px;
		padding: 30px;
		width: 270px;
		background-color: #fff;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition-duration: 0.3s;
		z-index: 999;
	}

	.uni-datetime-picker-time {
		color: grey;
	}

	.uni-datetime-picker-colon::after {
		content: ':';
		position: absolute;
		top: 53px;
		right: 0;
	}

	.uni-datetime-picker-hyphen::after {
		content: '-';
		position: absolute;
		top: 53px;
		right: -2px;
	}

	.uni-datetime-picker-timebox {
		border: 1px solid #E5E5E5;
		border-radius: 5px;
		padding: 7px 10px;
		box-sizing: border-box;
		cursor: pointer;
	}

	// 下箭头
	.uni-datetime-picker-down-arrow {
		display: inline-block;
		position: relative;
		width: 20px;
		height: 15px;
	}

	.uni-datetime-picker-down-arrow::after {
		display: inline-block;
		content: " ";
		height: 9px;
		width: 9px;
		border-width: 0 1px 1px 0;
		border-color: #E5E5E5;
		border-style: solid;
		transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
		transform-origin: center;
		transition: transform .3s;
		position: absolute;
		top: 50%;
		right: 5px;
		margin-top: -5px;
	}

	.uni-datetime-picker-flex {
		display: flex;
		justify-content: space-between;
	}

	.uni-datetime-picker-disabled {
		opacity: 0.4;
		/* #ifdef H5 */
		cursor: not-allowed !important;
		/* #endif */
	}
</style>
