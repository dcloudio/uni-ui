<template>
  <view class="uni-noticebar" :style="{ backgroundColor: backgroundColor }">
    <uni-icons v-if="showClose === true || showClose === 'true'" class="uni-noticebar-close" type="closefill" :color="color"
      size="12" />
    <uni-icons v-if="showIcon === true || showIcon === 'true'" class="uni-noticebar-icon" type="sound" :color="color"
      size="14" />
    <view class="uni-noticebar-content-wrapper">
      <view class="uni-noticebar-content" :class="{'uni-noticebar-content--scrollable':scrollable}">
        <text :id="elId" ref="animationEle" class="uni-noticebar-content-text" :class="{'uni-noticebar-content-text--scrollable':scrollable,'uni-noticebar-content-text--single':!scrollable && (single || moreText)}"
          :style="{'animationDuration': animationDuration, '-webkit-animationDuration': animationDuration ,animationPlayState: animationPlayState,'-webkit-animationPlayState':animationPlayState, color:color}">{{text}}</text>
      </view>
    </view>
    <view v-if="showGetMore === true || showGetMore === 'true'" class="uni-noticebar-more" @click="clickMore">
      <text v-if="moreText" :style="{ color: color }" class="uni-noticebar-more-text">{{ moreText }}</text>
      <uni-icons type="arrowright" :style="{ color: color }" size="14" />
    </view>
  </view>
</template>

<script>
  import uniIcons from '../uni-icons/uni-icons.vue'
  export default {
    name: 'UniNoticeBar',
    components: {
      uniIcons
    },
    props: {
      text: {
        type: String,
        default: ''
      },
      moreText: {
        type: String,
        default: ''
      },
      backgroundColor: {
        type: String,
        default: '#fffbe8'
      },
      speed: {
        // 默认1s滚动100px
        type: [String, Number],
        default: 100
      },
      color: {
        type: String,
        default: '#de8c17'
      },
      single: {
        // 是否单行
        type: [String, Boolean],
        default: false
      },
      scrollable: {
        // 是否滚动，添加后控制单行效果取消
        type: [String, Boolean],
        default: false
      },
      showIcon: {
        // 是否显示左侧icon
        type: [String, Boolean],
        default: false
      },
      showGetMore: {
        // 是否显示右侧查看更多
        type: [String, Boolean],
        default: false
      },
      showClose: {
        // 是否显示左侧关闭按钮
        type: [String, Boolean],
        default: false
      }
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 10e5).toString(36)}`
      return {
        elId: elId,
        show: true,
        animationDuration: 'none',
        animationPlayState: 'paused'
      }
    },
    mounted() {
      this.setAnimation()
    },
    methods: {
      setAnimation() {
        if (this.scrollable) {
          // #ifdef APP-NVUE

          // #endif
          // #ifndef APP-NVUE
          uni.createSelectorQuery()
            .in(this)
            .select(`#${this.elId}`)
            .boundingClientRect()
            .exec(ret => {
              this.animationDuration = `${ret[0].width / this.speed}s`
              this.animationPlayState = 'running'
            })
          // #endif
          // const query = uni.createSelectorQuery().in(this);
          // query.select("animationEle")
          // this.animationDuration = 
          // const animation = weex.requireModule('animation');
          // animation.transition(this.$refs['tab-bar'], {
          //   styles: {
          //     transform: `translateX(${index * 375}px)`
          //   },
          //   duration: 150,
          //   timingFunction: 'ease',
          //   delay: 0
          // });
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '@/uni.scss';

  .uni-noticebar {
    /* #ifndef APP-NVUE */
    display: flex;
    width: 100%;
    /* #endif */
    flex-direction: row;
    align-items: center;
    padding: 6px 12px;
    margin-bottom: 10px;
  }

  .uni-noticebar-close {
    margin-right: 5px;
  }

  .uni-noticebar-icon {
    margin-right: 5px;
  }
  
  .uni-noticebar-content-wrapper{
    flex: 1;
    overflow: hidden;
  }

  .uni-noticebar-content {
    /* #ifdef APP-NVUE */
    display: block;
    /* #endif */
    flex: 0;
    overflow: visible;
  }

  .uni-noticebar-content-text {
    font-size: 14px;
    line-height: 18px;
  }

  .uni-noticebar-content-text--single {
    /* #ifdef APP-NVUE */
    lines: 1;
    /* #endif */
    /* #ifndef APP-NVUE */
    white-space: nowrap;
    /* #endif */
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .uni-noticebar-content-text--scrollable {
    /* #ifdef APP-NVUE */
    lines: 1;
    /* #endif */
    /* #ifndef APP-NVUE */
    white-space: nowrap;
    /* #endif */
    padding-left: 750rpx;
    animation: notice 10s 0s linear infinite both;
    animation-play-state: paused;
  }

  .uni-noticebar-more {
    /* #ifndef APP-NVUE */
    display: inline-flex;
    /* #endif */
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding-left: 5px;
  }

  .uni-noticebar-more-text {
    font-size: 14px;
  }

  @keyframes notice {
    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }
</style>
