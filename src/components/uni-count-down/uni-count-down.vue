<template>
  <view class="uni-countdown">
    <text v-if="showDay" :style="{ borderColor: borderColor, color: color, backgroundColor: backgroundColor }" class="uni-countdown__number">{{ d }}</text>
    <text v-if="showDay" :style="{ color: splitorColor }" class="uni-countdown__splitor">天</text>
    <text :style="{ borderColor: borderColor, color: color, backgroundColor: backgroundColor }" class="uni-countdown__number">{{ h }}</text>
    <text :style="{ color: splitorColor }" class="uni-countdown__splitor">{{ showColon ? ':' : '时' }}</text>
    <text :style="{ borderColor: borderColor, color: color, backgroundColor: backgroundColor }" class="uni-countdown__number">{{ i }}</text>
    <text :style="{ color: splitorColor }" class="uni-countdown__splitor">{{ showColon ? ':' : '分' }}</text>
    <text :style="{ borderColor: borderColor, color: color, backgroundColor: backgroundColor }" class="uni-countdown__number">{{ s }}</text>
    <text v-if="!showColon" :style="{ color: splitorColor }" class="uni-countdown__splitor">秒</text>
  </view>
</template>
<script>
  export default {
    name: 'UniCountDown',
    props: {
      showDay: {
        type: Boolean,
        default: true
      },
      showColon: {
        type: Boolean,
        default: true
      },
      backgroundColor: {
        type: String,
        default: '#FFFFFF'
      },
      borderColor: {
        type: String,
        default: '#000000'
      },
      color: {
        type: String,
        default: '#000000'
      },
      splitorColor: {
        type: String,
        default: '#000000'
      },
      day: {
        type: Number,
        default: 0
      },
      hour: {
        type: Number,
        default: 0
      },
      minute: {
        type: Number,
        default: 0
      },
      second: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        timer: null,
        d: '00',
        h: '00',
        i: '00',
        s: '00',
        leftTime: 0,
        seconds: 0
      }
    },
    created: function(e) {
      this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second)
      this.countDown()
      this.timer = setInterval(() => {
        this.seconds--
        if (this.seconds < 0) {
          this.timeUp()
          return
        }
        this.countDown()
      }, 1000)
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    methods: {
      toSeconds(day, hours, minutes, seconds) {
        return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds
      },
      timeUp() {
        clearInterval(this.timer)
        this.$emit('timeup')
      },
      countDown() {
        let seconds = this.seconds
        let [day, hour, minute, second] = [0, 0, 0, 0]
        if (seconds > 0) {
          day = Math.floor(seconds / (60 * 60 * 24))
          hour = Math.floor(seconds / (60 * 60)) - day * 24
          minute = Math.floor(seconds / 60) - day * 24 * 60 - hour * 60
          second = Math.floor(seconds) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60
        } else {
          this.timeUp()
        }
        if (day < 10) {
          day = '0' + day
        }
        if (hour < 10) {
          hour = '0' + hour
        }
        if (minute < 10) {
          minute = '0' + minute
        }
        if (second < 10) {
          second = '0' + second
        }
        this.d = day
        this.h = hour
        this.i = minute
        this.s = second
      }
    }
  }
</script>
<style lang="scss">
  @import '~@/uni.scss';
  $countdown-height: 48upx;
  $countdown-width: 52upx;

  /* 解决支付宝页面标签指定的样式覆盖组件内类名指定样式的BUG */
  /* #ifdef MP-ALIPAY */
    page {
  /* #endif */

  .uni-countdown {
    flex-direction: row;
    justify-content: flex-start;
    padding: 2upx 0;
  }

  .uni-countdown__splitor {
    justify-content: center;
    line-height: $countdown-height;
    padding:  5upx;
    font-size: $uni-font-size-sm;
  }

  .uni-countdown__number {
    width: $countdown-width;
    height: $countdown-height;
    line-height: $countdown-height;
    // justify-content: center;
    // align-items: center;
    border-radius: $uni-border-radius-base;
    margin: 5upx;
    border-width: 1rpx;
    border-style: solid;
    border-color: #000000;
    text-align: center;
    font-size: $uni-font-size-sm;
  }
  /* #ifdef MP-ALIPAY */ 
    }  
  /* #endif */
</style>
