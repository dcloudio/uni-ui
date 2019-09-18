<template>
  <view class="uni-numbox">
    <text :class="{ 'uni-numbox--disabled': inputValue <= min || disabled }" class="uni-numbox__minus" @click="_calcValue('minus')">-</text>
    <input :disabled="disabled" v-model="inputValue" class="uni-numbox__value" type="number" @blur="_onBlur" />
    <text :class="{ 'uni-numbox--disabled': inputValue >= max || disabled }" class="uni-numbox__plus" @click="_calcValue('plus')">+</text>
  </view>
</template>
<script>
export default {
  name: 'UniNumberBox',
  props: {
    value: {
      type: [Number, String],
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputValue: 0
    };
  },
  watch: {
    value(val) {
      this.inputValue = +val;
    },
    inputValue(newVal, oldVal) {
      if (+newVal !== +oldVal) {
        this.$emit('change', newVal);
      }
    }
  },
  created() {
    this.inputValue = +this.value;
  },
  methods: {
    _calcValue(type) {
      if (this.disabled) {
        return;
      }
      const scale = this._getDecimalScale();
      let value = this.inputValue * scale;
      let step = this.step * scale;
      if (type === 'minus') {
        value -= step;
      } else if (type === 'plus') {
        value += step;
      }
      if (value < this.min || value > this.max) {
        return;
      }

      this.inputValue = String(value / scale);
    },
    _getDecimalScale() {
      let scale = 1;
      // 浮点型
      if (~~this.step !== this.step) {
        scale = Math.pow(10, (this.step + '').split('.')[1].length);
      }
      return scale;
    },
    _onBlur(event) {
      let value = event.detail.value;
      if (!value) {
        // this.inputValue = 0;
        return;
      }
      value = +value;
      if (value > this.max) {
        value = this.max;
      } else if (value < this.min) {
        value = this.min;
      }
      this.inputValue = value;
    }
  }
};
</script>
<style lang="scss" scoped>
@import '~@/uni.scss';
$box-height:70rpx;
$box-width:70rpx;

.uni-numbox {
  flex-direction: row;
  height: $box-height;
  line-height: $box-height;
  width: 240rpx;
}

.uni-numbox__value {
  background-color: $uni-bg-color;
  width: 80rpx;
  height: $box-height;
  text-align: center;
  font-size: $uni-font-size-lg;
  border-width: 1rpx;
  border-style: solid;
  border-color: $uni-border-color;
  border-left-width: 0;
  border-right-width: 0;
}

.uni-numbox__minus {
  width: $box-width;
  height: $box-height;
  line-height: $box-height;
  text-align: center;
  font-size: 40rpx;
  color: $uni-text-color;
  background-color: $uni-bg-color-grey;
  border-width: 1rpx;
  border-style: solid;
  border-color: $uni-border-color;
  border-top-left-radius: $uni-border-radius-base;
  border-bottom-left-radius: $uni-border-radius-base;
  border-right-width: 0;
}

.uni-numbox__plus {
  width: $box-width;
  height: $box-height;
  line-height: $box-height;
  text-align: center;
  font-size: 40rpx;
  color: $uni-text-color;
  border-width: 1rpx;
  border-style: solid;
  border-color: $uni-border-color;
  border-top-right-radius: $uni-border-radius-base;
  border-bottom-right-radius: $uni-border-radius-base;
  background-color: $uni-bg-color-grey;
  border-left-width: 0;
}

.uni-numbox--disabled {
  color: $uni-text-color-disable;
}
</style>
