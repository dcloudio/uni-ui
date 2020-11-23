<template>
	<view class="uni-time-picker">
		<view class="uni-time-picker-time" @click="tiggerTimePicker">
			<slot>{{time ? time : "请选择时间"}}</slot>
		</view>
		<view v-if="visible" class="uni-time-picker-mask" @click="initTimePicker"></view>
		<view v-if="visible" class="uni-time-picker-popup">
			<view class="uni-title">
				设置日期和时间
			</view>
			<picker-view class="uni-time-picker-view" :indicator-style="indicatorStyle" :value="ymd" @change="bindDateChange">
				<picker-view-column class="uni-time-picker-hyphen">
					<view class="uni-time-picker-item" v-for="(item,index) in years" :key="index">{{item}}</view>
				</picker-view-column>
				<picker-view-column class="uni-time-picker-hyphen">
					<view class="uni-time-picker-item" v-for="(item,index) in months" :key="index">{{item < 10 ? '0' + item : item}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="uni-time-picker-item" v-for="(item,index) in days" :key="index">{{item < 10 ? '0' + item : item}}</view>
				</picker-view-column>
			</picker-view>
			<picker-view class="uni-time-picker-view" :indicator-style="indicatorStyle" :value="hms" @change="bindTimeChange">
				<picker-view-column class="uni-time-picker-colon">
					<view class="uni-time-picker-item" v-for="(item,index) in hours" :key="index">{{item < 10 ? '0' + item : item}}</view>
				</picker-view-column>
				<picker-view-column class="uni-time-picker-colon">
					<view class="uni-time-picker-item" v-for="(item,index) in minutes" :key="index">{{item < 10 ? '0' + item : item}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="uni-time-picker-item" v-for="(item,index) in seconds" :key="index">{{item < 10 ? '0' + item : item}}</view>
				</picker-view-column>
			</picker-view>
			<view class="uni-time-picker-btn">
				<view class="" @click="clearTime">重置</view>
				<view class="uni-time-picker-btn-group">
					<view class="uni-time-picker-cancel" @click="tiggerTimePicker">取消</view>
					<view class="" @click="setTime">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			// this.getCurrentDate()
			return {
				visible: false,
				time: '',
				years: [],
				months: [],
				days: [],
				hours: [],
				minutes: [],
				seconds: [],
				year: 0,
				month: 0,
				day: 0,
				hour: 0,
				minute: 0,
				second: 0,
				maxYear: 2030,
				// maxMonth: 0,
				// maxDay: 0,
				minYear: 1900,
				// minMonth: 0,
				// minDay: 0,
				/**
				 * 解决动态设置indicator-style不生效的问题
				 */
				indicatorStyle: `height: 50px;`,
			}
		},
		props: {
			type: {
				type: String,
				default: 'datetime-local'
			},
			timestamp: {
				type: Boolean,
				default: false
			},
			value: {
				type: [String, Number],
				default: ''
			},
			// max: {
			// 	type: String,
			// 	default: '2018-06-14T00:00:00'
			// },
			// min: {
			// 	type: String,
			// 	default: '2010-06-07T00:00'
			// }
		},
		computed: {
			ymd() {
				return [this.year - this.minYear, this.month - 1, this.day - 1]
			},
			hms() {
				return [this.hour, this.minute, this.second]
			}
		},
		watch: {
			value(newValue, oldValue) {
				console.log('--------newValue', newValue)
				this.parseValue(this.value)
				this.initTime()
			}
		},
		created() {
			this.form = this.getForm('uniForms')
			this.formItem = this.getForm('uniFormsItem')

			if (this.formItem) {
				if (this.formItem.name) {
					console.log('======',this.time);
					this.formItem.setValue(this.time)
					this.rename = this.formItem.name
					this.form.inputChildrens.push(this)
				}
			}

		},
		mounted() {
			const date = new Date()
			for (let i = this.minYear; i <= date.getFullYear(); i++) {
				this.years.push(i)
			}

			for (let i = 1; i <= 12; i++) {
				this.months.push(i)
			}

			for (let i = 1; i <= 31; i++) {
				this.days.push(i)
			}

			for (let i = 0; i <= 23; i++) {
				this.hours.push(i)
			}

			for (let i = 0; i <= 59; i++) {
				this.minutes.push(i)
			}

			for (let i = 0; i <= 59; i++) {
				this.seconds.push(i)
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
			parseDOMString(str) {
				console.log('---------str:', str);
				const currentDate = str.split('T')[0]
				const currentTime = str.split('T')[1]
				this.year = Number(currentDate.split('-')[0])
				this.month = Number(currentDate.split('-')[1])
				this.day = Number(currentDate.split('-')[2])
				this.hour = Number(currentTime.split(':')[0])
				this.minute = Number(currentTime.split(':')[1])
				this.second = Number(currentTime.split(':')[2])
			},
			parseTimestamp(timestamp) {
				const defaultDate = new Date(timestamp)
				this.year = defaultDate.getFullYear()
				this.month = defaultDate.getMonth() + 1
				this.day = defaultDate.getDate()
				this.hour = defaultDate.getHours()
				this.minute = defaultDate.getMinutes()
				this.second = defaultDate.getSeconds()
			},
			parseValue(value) {
				this.timestamp ? this.parseTimestamp(value) : this.parseDOMString(value)
			},
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
			initTimePicker() {
				this.parseValue(this.value)
				this.visible = !this.visible
			},
			tiggerTimePicker() {
				this.visible = !this.visible
			},
			clearTime() {
				this.time = ''
				this.tiggerTimePicker()
			},
			initTime() {
				this.time = this.createDomSting()
				if (!this.timestamp) {
					this.formItem && this.formItem.setValue(this.time)
					this.$emit('change', this.time)
				} else {
					this.formItem && this.formItem.setValue(this.createTimeStamp(this.time))
					this.$emit('change', this.createTimeStamp(this.time))
				}
			},
			setTime() {
				this.initTime()
				this.tiggerTimePicker()
			},
			createTimeStamp(time) {
				return Date.parse(new Date(time))
			},
			createDomSting(){
				const yymmdd = this.year +
					'-' +
					(this.month < 10 ? '0' + this.month : this.month) +
					'-' +
					(this.day < 10 ? '0' + this.day : this.day) +
					'T' +
					(this.hour < 10 ? '0' + this.hour : this.hour) +
					':' +
					(this.minute < 10 ? '0' + this.minute : this.minute) +
					':' +
					(this.second < 10 ? '0' + this.second : this.second)

				return yymmdd
			}
		}
	}
</script>

<style>
	.uni-time-picker-view {
		width: 100%;
		height: 130px;
		margin-top: 30px;
	}

	.uni-time-picker-item {
		line-height: 50px;
		text-align: center;
	}

	.uni-time-picker-btn {
		margin-top: 60px;
		display: flex;
		justify-content: space-between;
		color: blue;
		cursor: pointer;
	}

	.uni-time-picker-btn-group {
		display: flex;
	}

	.uni-time-picker-cancel {
		margin-right: 30px;
	}

	.uni-time-picker-mask {
		position: fixed;
		bottom: 0px;
		top: 0px;
		left: 0px;
		right: 0px;
		background-color: rgba(0, 0, 0, 0.4);
		transition-duration: 0.3s;
		z-index: 998;
	}

	.uni-time-picker-popup {
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
	.uni-time-picker-time {
		height: 36px;
		line-height: 36px;
	}
	.uni-time-picker-colon::after {
		content: ':';
		position: absolute;
		top: 53px;
		right: 0;
	}
	.uni-time-picker-hyphen::after {
		content: '-';
		position: absolute;
		top: 53px;
		right: -2px;
	}
</style>
