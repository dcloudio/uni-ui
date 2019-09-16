<template>
  <view
    v-if="text"
    :class="[
      'uni-tag--' + type,
      disabled === true || disabled === 'true' ? 'uni-tag--disabled' : '',
      inverted === true || inverted === 'true' ? type + '-uni-tag--inverted' : '',
      circle === true || circle === 'true' ? 'uni-tag--circle' : '',
      mark === true || mark === 'true' ? 'uni-tag--mark' : '',
      'uni-tag--' + size
    ]"
    class="uni-tag"
    @click="onClick()"
  >
    <text class="uni-tag-text" :class="['uni-tag--' + size]">{{ text }}</text>
  </view>
</template>

<script>
export default {
  name: 'UniTag',
  props: {
    type: {
      // 标签类型default、primary、success、warning、danger、royal
      type: String,
      default: 'default'
    },
    size: {
      // 标签大小 normal, small
      type: String,
      default: 'normal'
    },
    // 标签内容
    text: {
      type: String,
      default: ''
    },
    disabled: {
      // 是否为禁用状态
      type: [String, Boolean],
      defalut: false
    },
    inverted: {
      // 是否为空心
      type: [String, Boolean],
      defalut: false
    },
    circle: {
      // 是否为圆角样式
      type: [String, Boolean],
      defalut: false
    },
    mark: {
      // 是否为标记样式
      type: [String, Boolean],
      defalut: false
    }
  },
  methods: {
    onClick() {
      if (this.disabled === true || this.disabled === 'true') {
        return;
      }
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss">
@import '~@/uni.scss';
$tag-pd: 0px 32rpx;
$tag-small-pd: 0px 16rpx;

@mixin tag-disabled {
  opacity: 0.5;
}

.uni-tag {
  padding: $tag-pd;
  height: 60rpx;
  line-height: 60rpx;
  justify-content: center;
  color: $uni-text-color;
  border-radius: $uni-border-radius-base;
  background-color: $uni-bg-color-grey;
  border-width: 1rpx;
  border-style: solid;
  border-color: $uni-bg-color-grey;
}
.uni-tag-text {
  font-size: $uni-font-size-base;
}
.uni-tag--circle {
  border-radius: 30rpx;
}
.uni-tag--mark {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 30rpx;
  border-bottom-right-radius: 30rpx;
}

.uni-tag--disabled {
  @include tag-disabled;
}

.uni-tag--small {
  height: 40rpx;
  padding: $tag-small-pd;
  line-height: 40rpx;
  font-size: $uni-font-size-sm;
}

.uni-tag--primary {
  color: $uni-text-color-inverse;
  background-color: $uni-color-primary;
  border-width: 1rpx;
  border-style: solid;
  border-color: $uni-color-primary;
}
.primary-uni-tag--inverted {
  color: $uni-color-primary;
  background-color: $uni-bg-color;
  border-width: 1rpx;
  border-style: solid;
  border-color: $uni-color-primary;
}

.uni-tag--success {
  color: $uni-text-color-inverse;
  background-color: $uni-color-success;
  border-width: 1rpx;
  border-style: solid;
  border-color: $uni-color-success;
}
.success-uni-tag--inverted {
  color: $uni-color-success;
  background-color: $uni-bg-color;
  border-width: 1rpx;
  border-style: solid;
  border-color: $uni-color-success;
}
.uni-tag--warning {
  color: $uni-text-color-inverse;
  background-color: $uni-color-warning;
  border-width: 1rpx;
  border-style: solid;
  border-color: $uni-color-warning;
}
.warning-uni-tag--inverted {
  color: $uni-color-warning;
  background-color: $uni-bg-color;
  border-width: 1rpx;
  border-style: solid;
  border-color: $uni-color-warning;
}
.uni-tag--error {
  color: $uni-text-color-inverse;
  background-color: $uni-color-error;
  border-width: 1rpx;
  border-style: solid;
  border-color: $uni-color-error;
}
.error-uni-tag--inverted {
  color: $uni-color-error;
  background-color: $uni-bg-color;
  border-width: 1rpx;
  border-style: solid;
  border-color: $uni-color-error;
}
.uni-tag--inverted {
  color: $uni-text-color;
  background-color: $uni-bg-color;
  border-width: 1rpx;
  border-style: solid;
  border-color: $uni-bg-color-grey;
}
</style>
