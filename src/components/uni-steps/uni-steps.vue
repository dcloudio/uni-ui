<template>
  <view class="uni-steps">
    <view class="uni-steps__row" :class="{'uni-steps__column':direction==='column'}">
      <view class="uni-steps__row-text-container" :class="{'uni-steps__column-text-container':direction==='column'}">
        <view v-for="(item,index) in options" :key="index" :class="{'uni-steps__column-text':direction==='column'}" class="uni-steps__row-text">
          <text :style="{color:index<=active?activeColor:deactiveColor}" :class="{'uni-steps__column-title':direction==='column'}" class="uni-steps__row-title">{{item.title}}</text>
          <text :style="{color:index<=active?activeColor:deactiveColor}" :class="{'uni-steps__column-desc':direction==='column'}" class="uni-steps__row-desc">{{item.desc}}</text>
        </view>
      </view>
      <view class="uni-steps__row-container">
        <view class="uni-steps__row-line-item" v-for="(item,index) in options" :key="index">
          <view :style="{backgroundColor:index<=active&&index!==0?activeColor:index===0?'transparent':deactiveColor}"
            class="uni-steps__row-line uni-steps__row-line--before"></view>
          <uni-icons v-if="index === active" :color="activeColor" class="uni-steps__row-check" type="checkbox-filled"
            size="14"></uni-icons>
          <view v-else :style="{backgroundColor:index<active?activeColor:deactiveColor}" class="uni-steps__row-circle"></view>
          <view :style="{backgroundColor:index<active&&index!==options.length-1?activeColor:index===options.length-1?'transparent':deactiveColor}"
            class="uni-steps__row-line uni-steps__row-line--after"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import uniIcons from '../uni-icons/uni-icons.vue'
  export default {
    name: 'UniSteps',
    components: {
      uniIcons
    },
    props: {
      direction: {
        // 排列方向 row column
        type: String,
        default: 'row'
      },
      activeColor: {
        // 激活状态颜色
        type: String,
        default: '#1aad19'
      },
      deactiveColor: {
        // 未激活状态颜色
        type: String,
        default: '#999999'
      },
      active: {
        // 当前步骤
        type: Number,
        default: 0
      },
      options: {
        type: Array,
        default () {
          return []
        }
      } // 数据
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  @import '@/uni.scss';

  .uni-steps {
    /* #ifndef APP-NVUE */
    display: flex;
    width: 100%;
    /* #endif */
    /* #ifdef APP-NVUE */
    flex: 1;
    /* #endif */
  }

  .uni-steps__column {
    flex-direction: row-reverse;
  }

  .uni-steps__row-text-container {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
  }

  .uni-steps__column-text-container {
    flex-direction: column;
    flex: 1;
  }

  .uni-steps__row-text {
    /* #ifndef APP-NVUE */
    display: inline-flex;
    /* #endif */
    flex: 1;
    flex-direction: column;
  }
  
  .uni-steps__column-text {
    
  }

  .uni-steps__row-title {
    font-size: 14px;
    line-height: 16px;
    text-align: center;
  }
  
  .uni-steps__column-title{
    text-align: left;
  }

  .uni-steps__row-desc {
    font-size: 12px;
    line-height: 14px;
    text-align: center;
  }
  
  .uni-steps__column-desc{
    text-align: left;
  }

  .uni-steps__row-container {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
    height: 14px;
    line-height: 14px;
  }

  .uni-steps__row-line-item {
    /* #ifndef APP-NVUE */
    display: inline-flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
    flex: 1;
  }

  .uni-steps__row-line {
    flex: 1;
    height: 1px;
    background-color: $uni-text-color-grey;
  }

  .uni-steps__row-line--after {
    transform: translateX(1px);
  }

  .uni-steps__row-line--before {
    transform: translateX(-1px);
  }

  .uni-steps__row-circle {
    width: 5px;
    height: 5px;
    border-radius: 10px;
    background-color: $uni-text-color-grey;
    margin: 0px 3px;
  }

  .uni-steps__row-check {
    margin: 0px 6px;
  }
</style>
