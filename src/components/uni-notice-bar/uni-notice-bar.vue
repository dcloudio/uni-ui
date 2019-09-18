<template>
  <view v-if="show" class="uni-noticebar" :style="{ backgroundColor: backgroundColor }" @click="onClick">
    <uni-icons v-if="showClose === true || showClose === 'true'" class="uni-noticebar-close" type="closefill" :color="color"
      size="12" @click="close" />
    <uni-icons v-if="showIcon === true || showIcon === 'true'" class="uni-noticebar-icon" type="sound" :color="color"
      size="14" />
    <view class="uni-noticebar-content-wrapper" :class="{'uni-noticebar-content-wrapper--scrollable':scrollable, 'uni-noticebar-content-wrapper--single':!scrollable && (single || moreText)}">
      <view :id="elId" ref="animationEle" class="uni-noticebar-content" :class="{'uni-noticebar-content--scrollable':scrollable, 'uni-noticebar-content--single':!scrollable && (single || moreText)}"
        :style="{'animationDuration': animationDuration, '-webkit-animationDuration': animationDuration ,animationPlayState: animationPlayState,'-webkit-animationPlayState':animationPlayState}">
        <text class="uni-noticebar-content-text" :class="{'uni-noticebar-content-text--scrollable':scrollable,'uni-noticebar-content-text--single':!scrollable && (single || moreText)}"
          :style="{color:color}">{{text}}</text>
      </view>
    </view>
    <view v-if="showGetMore === true || showGetMore === 'true'" class="uni-noticebar-more" @click="clickMore">
      <text v-if="moreText" :style="{ color: color }" class="uni-noticebar-more-text">{{ moreText }}</text>
      <uni-icons type="arrowright" :style="{ color: color }" size="14" />
    </view>
  </view>
</template>

<script>
  import uniIcons from '@/components/uni-icons/uni-icons.vue'
  // #ifdef APP-NVUE
  const dom = weex.requireModule('dom');
  const animation = weex.requireModule('animation');
  // #endif
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
        // #ifdef APP-NVUE
        textWidth: 0,
        stopAnimation: false,
        // #endif
        elId: elId,
        show: true,
        animationDuration: 'none',
        animationPlayState: 'paused'
      }
    },
    mounted() {
      this.setAnimation()
    },
    // #ifdef APP-NVUE
    beforeDestroy() {
      this.stopAnimation = true
    },
    // #endif
    methods: {
      setAnimation() {
        if (this.scrollable) {
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
          // #ifdef APP-NVUE
          dom.getComponentRect(this.$refs['animationEle'], (res)=>{
            this.textWidth = res.size.width;
            this.loopAnimation()
          })
          // #endif
        }
      },
      loopAnimation() {
        // #ifdef APP-NVUE
        animation.transition(this.$refs['animationEle'], {
          styles: {
            transform: `translateX(-${this.textWidth}px)`
          },
          duration: this.textWidth / this.speed * 1000,
          timingFunction: 'linear',
          delay: 0
        },()=>{
          if (!this.stopAnimation) {
            animation.transition(this.$refs['animationEle'], {
              styles: {
                transform: `translateX(0px)`
              },
              duration: 0
            },()=>{
              if (!this.stopAnimation) {
                this.loopAnimation()
              }
            });
          }
        });
        // #endif
      },
      clickMore() {
        this.$emit('getmore')
      },
      close() {
        this.show = false;
        this.$emit('close')
      },
      onClick() {
        this.$emit('click')
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

  .uni-noticebar-content-wrapper {
    flex: 1;
    flex-direction: column;
    overflow: hidden;
  }
  
  .uni-noticebar-content-wrapper--single,
  .uni-noticebar-content-wrapper--scrollable {
    flex-direction: row;
  }
  
  .uni-noticebar-content {
    /* #ifdef APP-NVUE */
    flex: 0;
    /* #endif */
    /* #ifndef APP-NVUE */
    flex: 1;
    animation: notice 10s 0s linear infinite both;
    animation-play-state: paused;
    /* #endif */
  }
  
  .uni-noticebar-content--single {
    /* #ifndef APP-NVUE */
    flex: none;
    width: 100%;
    /* #endif */
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
