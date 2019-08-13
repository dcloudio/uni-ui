<template>
  <view class="uni-numbox">
    <view
      :class="{'uni-numbox--disabled': inputValue <= min || disabled}"
      class="uni-numbox__minus"
      @click="_calcValue('minus')">-</view>
    <input
      :disabled="disabled"
      v-model="inputValue"
      class="uni-numbox__value"
      type="number"
      @blur="_onBlur">
    <view
      :class="{'uni-numbox--disabled': inputValue >= max || disabled}"
      class="uni-numbox__plus"
      @click="_calcValue('plus')">+</view>
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
  data () {
    return {
      inputValue: 0
    }
  },
  watch: {
    value (val) {
      this.inputValue = +val
    },
    inputValue (newVal, oldVal) {
      if (+newVal !== +oldVal) {
        this.$emit('change', newVal)
      }
    }
  },
  created () {
    this.inputValue = +this.value
  },
  methods: {
    _calcValue (type) {
      if (this.disabled) {
        return
      }
      const scale = this._getDecimalScale()
      let value = this.inputValue * scale
      let step = this.step * scale
      if (type === 'minus') {
        value -= step
      } else if (type === 'plus') {
        value += step
      }
      if (value < this.min || value > this.max) {
        return
      }
      this.inputValue = value / scale
    },
    _getDecimalScale () {
      let scale = 1
      // 浮点型
      if (~~this.step !== this.step) {
        scale = Math.pow(10, (this.step + '').split('.')[1].length)
      }
      return scale
    },
    _onBlur (event) {
      let value = event.detail.value
      if (!value) {
        this.inputValue = 0
        return
      }
      value = +value
      if (value > this.max) {
        value = this.max
      } else if (value < this.min) {
        value = this.min
      }
      this.inputValue = value
    }
  }
}
</script>
<style lang="scss">
	$numbox-btn-width:70upx;
	$numbox-input-width:80upx;
	$numbox-height:70upx;
	$uni-font-size-xxl:40upx;

	.uni-numbox {
		display: inline-flex;
		flex-direction: row;
		justify-content: flex-start;
		height: $numbox-height;
		position: relative;

		&:after {
			content: '';
			position: absolute;
			transform-origin: center;
			box-sizing: border-box;
			pointer-events: none;
			top: -50%;
			left: -50%;
			right: -50%;
			bottom: -50%;
			border: 1px solid $uni-border-color;
			border-radius: $uni-border-radius-lg;
			transform: scale(.5);
		}

		&__minus,
		&__plus {
			margin: 0;
			background-color: $uni-bg-color-grey;
			width: $numbox-btn-width;
			font-size: $uni-font-size-xxl;
			height: 100%;
			line-height: $numbox-height;
			text-align: center;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			color: $uni-text-color;
			position: relative;
		}

		&__value {
			position: relative;
			background-color: $uni-bg-color;
			width: $numbox-input-width;
			height: 100%;
			text-align: center;
			padding: 0;

			&:after {
				content: '';
				position: absolute;
				transform-origin: center;
				box-sizing: border-box;
				pointer-events: none;
				top: -50%;
				left: -50%;
				right: -50%;
				bottom: -50%;
				border-style: solid;
				border-color: $uni-border-color;
				border-left-width: 1px;
				border-right-width: 1px;
				border-top-width: 0;
				border-bottom-width: 0;
				transform: scale(.5);
			}
		}

		&--disabled {
			color: $uni-text-color-disable;
		}
	}
</style>
