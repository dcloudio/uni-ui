<template>
	<view class="calendar-content" :class="{ 'calendar-content-active ': infoShow }">
		<text class="calendar-title">日历组件</text>
		<!-- 插入模式 -->
		<uni-calendar
			:insert="true"
			:lunar="tags[0].checked"
			:disable-before="tags[3].checked"
			:range="tags[5].checked"
			:start-date="startDate"
			:end-date="endDate"
			:date="date"
			:selected="selected"
			@change="change"
		/>
		<view class="calendar-tags-group">
			<view v-for="(item, index) in tags" :class="{ checked: item.checked }" :key="index" class="calendar-tags" @click="toggle(index, item)">
				<view class="calendar-tags-item">{{ item.name }}</view>
			</view>
		</view>
		<button class="calendar-button" type="button" @click="open">打开日历</button>
		<view class="calendar-box" :class="{ 'calendar-active': infoShow }">
			<view v-if="timeData.lunar" class="calendar-info-header">
				<text class="calendar-title">已选日期详情</text>
				<text @click="retract">{{ infoShow ? '收起' : '展开' }}</text>
			</view>
			<view v-if="timeData.lunar" class="calendar-info">
				<view>当前选择时间 : {{ timeData.fulldate }}</view>
				<view v-if="tags[0].checked">农历日期 : {{ timeData.year + '年' + timeData.month + '月' + timeData.date + '日 （' + timeData.lunar.astro + ')' }}</view>
				<view v-if="tags[0].checked">
					{{ timeData.lunar.gzYear + '年' + timeData.lunar.gzMonth + '月' + timeData.lunar.gzDay + '日 (' + timeData.lunar.Animal + '年)' }}
					{{ timeData.lunar.IMonthCn + timeData.lunar.IDayCn }} {{ timeData.lunar.isTerm ? timeData.lunar.Term : '' }}
				</view>
				<view>是否打点 : {{ timeData.clockinfo.have ? '是' : '否' }}</view>
				<view v-if="timeData.clockinfo.have">打点信息 : {{ timeData.clockinfo.info }}</view>
				<view v-if="timeData.clockinfo.have">打点额外信息 : {{ JSON.stringify(timeData.clockinfo.data) }}</view>
				<view v-if="tags[5].checked">范围选择开始时间 : {{ timeData.range.begin }}</view>
				<view v-if="tags[5].checked">范围选择结束时间 : {{ timeData.range.end }}</view>
				<view v-if="tags[5].checked">范围日期 : {{ JSON.stringify(timeData.range.data) }}</view>
			</view>
		</view>
		<uni-calendar
			ref="calendar"
			:lunar="tags[0].checked"
			:disable-before="tags[3].checked"
			:range="tags[5].checked"
			:start-date="startDate"
			:end-date="endDate"
			:date="date"
			:selected="selected"
			@confirm="confirm"
			@change="change"
		/>
	</view>
</template>

<script>
export default {
	data() {
		/**
		 * 时间计算
		 */
		function getDate(date, AddMonthCount = 0, AddDayCount = 0) {
			if (typeof date !== 'object') {
				date = date.replace(/-/g, '/');
			}
			let dd = new Date(date);
			dd.setMonth(dd.getMonth() + AddMonthCount); // 获取AddDayCount天后的日期
			dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期
			let y = dd.getFullYear();
			let m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
			let d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
			return y + '-' + m + '-' + d;
		}
		let tags = [
			{
				id: 0,
				name: '农历',
				checked: false,
				attr: 'lunar'
			},
			{ id: 1, name: '开始日期(' + getDate(new Date(), -1) + ')', checked: false, value: getDate(new Date(), -1), attr: 'startDate' },
			{ id: 2, name: '结束日期(' + getDate(new Date(), 2) + ')', value: getDate(new Date(), 2), checked: false, attr: 'endDate' },
			{ id: 3, name: '禁用今天之前的日期', checked: false, attr: 'disableBefore' },
			{ id: 4, name: '自定义当前日期(' + getDate(new Date(), 1) + ')', value: getDate(new Date(), 1), checked: false, attr: 'date' },
			{ id: 5, name: '范围选择', checked: false, attr: 'range' },
			{
				id: 6,
				name: '打点',
				value: [
					{ date: getDate(new Date(), 0, -1), info: '打卡' },
					{ date: getDate(new Date(), 0), info: '签到', data: { custom: '自定义信息', name: '自定义消息头' } },
					{ date: getDate(new Date(), 0, 1), info: '已打卡' }
				],
				checked: false,
				attr: 'selected'
			}
		];

		return {
			tags,
			date: '',
			startDate: '',
			endDate: '',
			timeData: {},
			selected: [],
			infoShow: false
		};
	},
	onLoad() {},
	methods: {
		toggle(index, item) {
			this.tags[index].checked = !item.checked;
			this.reckon();
		},
		open() {
			this.reckon();
			this.$refs.calendar.open();
		},
		reckon() {
			if (this.tags[1].checked) {
				this.startDate = this.tags[1].value;
			} else {
				this.startDate = '';
			}
			if (this.tags[2].checked) {
				this.endDate = this.tags[2].value;
			} else {
				this.endDate = '';
			}
			if (this.tags[4].checked) {
				this.date = this.tags[4].value;
			} else {
				this.date = '';
			}
			if (this.tags[6].checked) {
				this.selected = this.tags[6].value;
			} else {
				this.selected = [];
			}
		},
		change(e) {
			console.log('change 返回:', e);
			this.timeData = e;
			this.infoShow = true;
		},
		confirm(e) {
			console.log('confirm 返回:', e);
			console.log(JSON.stringify(e));
			this.timeData = e;
			this.infoShow = true;
		},
		retract() {
			this.infoShow = !this.infoShow;
		}
	}
};
</script>

<style>
page {
	background: #fff;
}

.calendar-content {
	padding: 20upx 0;
	padding-bottom: 100upx;
	font-size: 26upx;
}
.calendar-content-active {
	padding-bottom: 450upx;
}

.calendar-tags-group {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 10upx;
}
.calendar-tags {
	width: 100%;
	box-sizing: border-box;
}
.calendar-tags-item {
	padding: 20upx 20upx;
	border: 1px rgba(0, 0, 0, 0.2) solid;
	color: #333;
	border-radius: 10upx;
	text-align: center;
	margin: 10upx;
	background: #f8f8f8;
}
.calendar-tags-item:active {
	background: #f8f8f8;
}
.checked .calendar-tags-item {
	background: rgb(0, 122, 255);
	color: #fff;
	border: 1px rgba(0, 0, 0, 0.1) solid;
}
.calendar-button {
	margin: 10upx 20upx;
}

.calendar-button-groups {
	position: absolute;
	width: 100%;
	bottom: 0;
	display: flex;
}
.calendar-button-confirm {
	width: 50%;
	margin: 10upx;
	border: 1px #eee solid;
	font-size: 32upx;
}

.calendar-button-confirm:after {
	border: none;
}

.calendar-box {
	position: fixed;
	bottom: 0;
	background: #fff;
	color: #444;
	line-height: 1.5;
	width: 100%;
	transition: all 0.3s;
	transform: translateY(320upx);
	/* background: #f5f5f5; */
}
.calendar-active {
	transform: translateY(0);
}
.calendar-info-header {
	display: flex;
	justify-content: space-between;
	padding: 20upx 30upx;
	padding-left: 0;
	border-top: 1px #eee solid;
	border-bottom: 1px #eee solid;
}
.calendar-title {
	/* height: 80upx; */
	font-weight: bold;
	color: #666;
	font-size: 32upx;
	border-left: 2px #0d9ebb solid;
	padding-left: 20upx;
	margin: 0 20upx;
}
.calendar-info {
	overflow-y: scroll;
	height: 260upx;
	padding: 30upx 30upx;
}
</style>
