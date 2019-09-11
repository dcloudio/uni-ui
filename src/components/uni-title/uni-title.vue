<template>
  <view :class="{sticky:sticky}" :style="{top:stickyTop+'px'}" class="uni-title">
    <view v-if="type" class="uni-title__head">
      <view :class="type" class="uni-title__head-tag" />
    </view>
    <view class="uni-title__content">
      <view :class="{'distraction':!subTitle}" class="uni-title__content-title">{{ title }}</view>
      <view class="uni-title__content-sub">{{ subTitle }}</view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'UniTitle',
    props: {
      type: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ''
      },
      sticky: {
        type: Boolean,
        default: false
      },
      stickyTop: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {}
    },
    watch: {
      title(newVal) {
        if (uni.report && newVal !== '') {
          uni.report('title', newVal)
        }
      }
    },
    methods: {
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss">
  .uni-title {
    margin-top: 10px;
    z-index: 100;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    width: 100%;
    height: 50px;
    background-color: #fdfdfd;
    border-bottom: 1px #f5f5f5 solid;
    box-sizing: border-box;

    &.sticky {
      position: sticky;
      // top: 44px;
    }

    &__head {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px; 

      &-tag {
        &.line {
          height: 15px;
          background: #ccc;
          border-radius: 5px;
          width: 3px;
        }

        &.circle {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ccc;
        }
      }
    }

    &__content {
      color: #464e52;

      &-title {
        font-size: 16px;

        &.distraction {
          display: flex;
          align-items: center;
        }
      }

      &-sub {
        font-size: 12px;
        color: #999;
      }
    }
  }
</style>
