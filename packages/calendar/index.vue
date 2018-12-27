<template>
    <view class="uni-calendar">
        <view className='at-calendar__header header'>
            <view className='header__flex'>
                <view className='header__flex-item'>日</view>
                <view className='header__flex-item'>一</view>
                <view className='header__flex-item'>二</view>
                <view className='header__flex-item'>三</view>
                <view className='header__flex-item'>四</view>
                <view className='header__flex-item'>五</view>
                <view className='header__flex-item'>六</view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: 'uni-calendar',
        data() {
            const date = new Date()
            return {
                year: date.getFullYear(),
                month: date.getMonth(),
                date: date.getDate(),
                dayList: []
            }
        },
        created() {
            console.log(this.getMonthDate(this.year, this.month))
            console.log("本月的第一天是星期：" + this.getDay(this.year, this.month, 1))
            console.log("得到天数列表",this.getDaysList())
        },
        methods: {
            getDaysList() {
                return [...this.getLastMonthArray(),...this.getCurrentMonthArray(),...this.getNextMonthArray()]
            },
            getLastMonthArray() { //得到上一个月的剩余天数
                const date = this.getMonthDate(this.year, this.month - 1)
                const arr = []
                for (let i = date; i <= date; i--) {
                    if (i < date - this.getDay(this.year, this.month - 1, date)) {
                        break
                    }
                    arr.unshift(i)
                }
                return arr
            },
            getCurrentMonthArray() { //得到本月天数
                const date = this.getMonthDate(this.year, this.month)
                const arr = []
                for (let i = 1; i <= date; i++) {
                    arr.push(i)
                }
                return arr
            },
            getNextMonthArray() { //得到下一个月的开始天数
                const date = this.getMonthDate(this.year, this.month + 1)
                const arr = []
                for (let i = 1; i < date; i++) {
                    if (i > 7 - this.getDay(this.year, this.month + 1, 1)) {
                        break
                    }
                    arr.push(i)
                }
                return arr
            },
            getDay(year, month, day) { //获得日期是星期几
                return new Date(year, month, day).getDay()
            },
            getMonthDate(year, month) { //获得每月的总天数
                return new Date(year, month + 1, 0).getDate()
            }
        }
    }
</script>

<style lang="scss">
    .uni-calendar {
        background-color: $uni-bg-color;
    }
</style>
