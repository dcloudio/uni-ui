<template>
  <view
    :class="disabled ? 'uni-list-item--disabled' : ''"
    :hover-class="disabled || showSwitch ? '' : 'uni-list-item--hover'"
    class="uni-list-item"
    @click="onClick">
    <view class="uni-list-item__container">
      <view
        v-if="thumb"
        class="uni-list-item__icon"><image
          :src="thumb"
          class="uni-list-item__icon-img" /></view>
      <view
        v-else-if="showExtraIcon"
        class="uni-list-item__icon">
        <uni-icon
          :color="extraIcon.color"
          :size="extraIcon.size"
          :type="extraIcon.type"
          class="uni-icon-wrapper" />
      </view>
      <view class="uni-list-item__content">
        <view class="uni-list-item__content-title">{{ title }}</view>
        <view
          v-if="note"
          class="uni-list-item__content-note">{{ note }}</view>
      </view>
      <view
        v-if="showBadge || showArrow || showSwitch"
        class="uni-list-item__extra">
        <uni-badge
          v-if="showBadge"
          :type="badgeType"
          :text="badgeText" />
        <switch
          v-if="showSwitch"
          :disabled="disabled"
          :checked="switchChecked"
          @change="onSwitchChange" />
        <uni-icon
          v-if="showArrow"
          :size="20"
          class="uni-icon-wrapper"
          color="#bbb"
          type="arrowright" />
      </view>
    </view>
  </view>
</template>

<script>
import uniIcon from '../uni-icon/uni-icon.vue'
import uniBadge from '../uni-badge/uni-badge.vue'
export default {
  name: 'UniListItem',
  components: {
    uniIcon,
    uniBadge
  },
  props: {
    title: {
      type: String,
      default: ''
    }, // 列表标题
    note: {
      type: String,
      default: ''
    }, // 列表描述
    disabled: {
      // 是否禁用
      type: [Boolean, String],
      default: false
    },
    showArrow: {
      // 是否显示箭头
      type: [Boolean, String],
      default: true
    },
    showBadge: {
      // 是否显示数字角标
      type: [Boolean, String],
      default: false
    },
    showSwitch: {
      // 是否显示Switch
      type: [Boolean, String],
      default: false
    },
    switchChecked: {
      // Switch是否被选中
      type: [Boolean, String],
      default: false
    },
    badgeText: {
      // badge内容
      type: String,
      default: ''
    },
    badgeType: {
      // badge类型
      type: String,
      default: 'success'
    },
    thumb: {
      // 缩略图
      type: String,
      default: ''
    },
    showExtraIcon: {
      // 是否显示扩展图标
      type: [Boolean, String],
      default: false
    },
    extraIcon: {
      type: Object,
      default () {
        return {
          type: 'contact',
          color: '#000000',
          size: 20
        }
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    onClick () {
      this.$emit('click')
    },
    onSwitchChange (e) {
      this.$emit('switchChange', e.detail)
    }
  }
}
</script>

<style lang="scss">
@mixin list-hover {
	background-color: $uni-bg-color-hover;
}

@mixin list-disabled {
	opacity: 0.3;
}

$list-item-pd: $uni-spacing-col-lg $uni-spacing-row-lg;

.uni-list-item {
	font-size: $uni-font-size-lg;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	&--disabled {
		@include list-disabled;
	}

	&--hover {
		@include list-hover;
	}

	&__container {
		padding: $list-item-pd;
		width: 100%;
		box-sizing: border-box;
		flex: 1;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		&:after {
			position: absolute;
			z-index: 3;
			right: 0;
			bottom: 0;
			left: 30upx;
			height: 1px;
			content: '';
			-webkit-transform: scaleY(0.5);
			transform: scaleY(0.5);
			background-color: $uni-border-color;
		}
	}

	&__content {
		flex: 1;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		color: #3b4144;
		&-title {
			font-size: $uni-font-size-lg;
			text-overflow: ellipsis;
			white-space: nowrap;
			color: inherit;
			line-height: 1.5;
			overflow: hidden;
		}

		&-note {
			margin-top: 6upx;
			color: $uni-text-color-grey;
			font-size: $uni-font-size-base;
			white-space: normal;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
	}

	&__extra {
		width: 25%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	&__icon {
		margin-right: 18upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		&-img {
			height: $uni-img-size-base;
			width: $uni-img-size-base;
		}
	}
}

.uni-list > .uni-list-item:last-child .uni-list-item-container:after {
	height: 0px;
}
</style>
