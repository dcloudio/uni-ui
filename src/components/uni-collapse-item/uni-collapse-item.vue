<template>
  <view
    :class="['uni-collapse-cell', { 'uni-collapse-cell--disabled': disabled, 'uni-collapse-cell--open': isOpen }]"
    :hover-class="disabled ? '' : 'uni-collapse-cell--hover'">
    <view
      class="uni-collapse-cell__title header"
      @click="onClick">
      <view
        v-if="thumb"
        class="uni-collapse-cell__title-extra"><image
          :src="thumb"
          class="uni-collapse-cell__title-img" /></view>
      <view class="uni-collapse-cell__title-inner">
        <view class="uni-collapse-cell__title-text">{{ title }}</view>
      </view>
      <view
        :class="{ 'uni-active': isOpen, 'uni-collapse-cell--animation': showAnimation === true }"
        class="uni-collapse-cell__title-arrow">
        <uni-icons
          color="#bbb"
          size="20"
          type="arrowdown" />
      </view>
    </view>
    <view
      :style="{ height: isOpen ? 'auto' : '0px' }"
      class="uni-collapse-cell__content">
      <view :class="{ 'uni-collapse-cell--animation': showAnimation === true }" :style="{ transform: isOpen ? 'translateY(0px)' : 'translateY(-50%)','-webkit-transform' : isOpen ? 'translateY(0px)' : 'translateY(-50%)' }">
        <slot />
      </view>
    </view>
  </view>
</template>

<script>
import uniIcons from '../uni-icons/uni-icons.vue'
export default {
  name: 'UniCollapseItem',
  components: {
    uniIcons
  },
  props: {
    title: {
      // 列表标题
      type: String,
      default: ''
    },
    name: {
      // 唯一标识符
      type: [Number, String],
      default: 0
    },
    disabled: {
      // 是否禁用
      type: [Boolean, String],
      default: false
    },
    showAnimation: {
      // 是否显示动画
      type: Boolean,
      default: false
    },
    open: {
      // 是否展开
      type: [Boolean, String],
      default: false
    },
    thumb: {
      // 缩略图
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  watch: {
    open (val) {
      this.isOpen = val
    }
  },
  inject: ['collapse'],
  created () {
    this.isOpen = this.open
    this.nameSync = this.name ? this.name : this.collapse.childrens.length
    this.collapse.childrens.push(this)
    if (String(this.collapse.accordion) === 'true') {
      if (this.isOpen) {
        let lastEl = this.collapse.childrens[this.collapse.childrens.length - 2]
        if (lastEl) {
          this.collapse.childrens[this.collapse.childrens.length - 2].isOpen = false
        }
      }
    }
  },
  methods: {
    onClick () {
      if (this.disabled) {
        return
      }
      if (String(this.collapse.accordion) === 'true') {
        this.collapse.childrens.forEach(vm => {
          if (vm === this) {
            return
          }
          vm.isOpen = false
        })
      }
      this.isOpen = !this.isOpen
      this.collapse.onChange && this.collapse.onChange()
			this.$forceUpdate()
    }
  }
}
</script>

<style lang="scss">
@mixin collapse-hover {
	background-color: #f5f5f5;
}

@mixin collapse-disabled {
	opacity: 0.3;
}

$collapse-title-pd: $uni-spacing-col-lg $uni-spacing-row-lg;

.uni-collapse-cell {
	position: relative;
	&--hover {
		@include collapse-hover;
	}

	&--open {
		@include collapse-hover;
	}

	&--disabled {
		@include collapse-disabled;
	}

	&--animation {
		transition: all 0.3s;
	}

	&:after {
		position: absolute;
		z-index: 3;
		right: 0;
		bottom: 0;
		left: 0px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		background-color: $uni-border-color;
	}

	&__title {
		padding: $collapse-title-pd;
		width: 100%;
		box-sizing: border-box;
		flex: 1;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		&-extra {
			margin-right: 18upx;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}

		&-img {
			height: $uni-img-size-base;
			width: $uni-img-size-base;
		}

		&-arrow {
			width: 20px;
			height: 20px;
			transform: rotate(0deg);
			transform-origin: center center;

			&.uni-active {
				transform: rotate(180deg);
			}
		}

		&-inner {
			flex: 1;
			overflow: hidden;
			display: flex;
			flex-direction: column;
		}

		&-text {
			font-size: $uni-font-size-lg;
			text-overflow: ellipsis;
			white-space: nowrap;
			color: inherit;
			line-height: 1.5;
			overflow: hidden;
		}
	}

	&__content {
		position: relative;
		width: 100%;
		overflow: hidden;

		.view {
			font-size: $uni-font-size-base;
		}
	}
}
</style>
