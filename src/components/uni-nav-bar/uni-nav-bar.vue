<template>
  <view class="uni-navbar">
    <view
      :class="{ 'uni-navbar--fixed': fixed, 'uni-navbar--shadow': border, 'uni-navbar--border': border }"
      :style="{ 'background-color': backgroundColor }"
      class="uni-navbar__content"
    >
      <uni-status-bar v-if="statusBar" />
      <view
        :style="{ color: color }"
        class="uni-navbar__header uni-navbar__content_view"
      >
        <view
          @tap="onClickLeft"
          class="uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view"
        >
          <view
            class="uni-navbar__content_view"
            v-if="leftIcon.length"
          >
            <uni-icons
              :color="color"
              :type="leftIcon"
              size="24"
            />
          </view>
          <view
            :class="{ 'uni-navbar-btn-icon-left': !leftIcon.length }"
            class="uni-navbar-btn-text uni-navbar__content_view"
            v-if="leftText.length"
          >
            <text class="uni-nav-bar-text">{{ leftText }}</text>
          </view>
          <slot name="left" />
        </view>
        <view class="uni-navbar__header-container uni-navbar__content_view">
          <view
            class="uni-navbar__header-container-inner uni-navbar__content_view"
            v-if="title.length"
          >
            <text class="uni-nav-bar-text">{{ title }}</text>
          </view>
          <!-- 标题插槽 -->
          <slot />
        </view>
        <view
          :class="title.length ? 'uni-navbar__header-btns-right' : ''"
          @tap="onClickRight"
          class="uni-navbar__header-btns uni-navbar__content_view"
        >
          <view
            class="uni-navbar__content_view"
            v-if="rightIcon.length"
          >
            <uni-icons
              :color="color"
              :type="rightIcon"
              size="24"
            />
          </view>
          <!-- 优先显示图标 -->
          <view
            class="uni-navbar-btn-text uni-navbar__content_view"
            v-if="rightText.length && !rightIcon.length"
          >
            <text class="uni-nav-bar-text">{{ rightText }}</text>
          </view>
          <slot name="right" />
        </view>
      </view>
    </view>
    <view
      class="uni-navbar__placeholder"
      v-if="fixed"
    >
      <uni-status-bar v-if="statusBar" />
      <view class="uni-navbar__placeholder-view" />
    </view>
  </view>
</template>

<script>
import uniStatusBar from "@/components/uni-status-bar/uni-status-bar.vue";
import uniIcons from "@/components/uni-icons/uni-icons.vue";

export default {
  name: "UniNavBar",
  components: {
    uniStatusBar,
    uniIcons
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    leftText: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    },
    leftIcon: {
      type: String,
      default: ""
    },
    rightIcon: {
      type: String,
      default: ""
    },
    fixed: {
      type: [Boolean, String],
      default: false
    },
    color: {
      type: String,
      default: "#000000"
    },
    backgroundColor: {
      type: String,
      default: "#FFFFFF"
    },
    statusBar: {
      type: [Boolean, String],
      default: false
    },
    shadow: {
      type: [String, Boolean],
      default: true
    },
    border: {
      type: [String, Boolean],
      default: true
    }
  },
  methods: {
    onClickLeft() {
      this.$emit("clickLeft");
    },
    onClickRight() {
      this.$emit("clickRight");
    }
  }
};
</script>

<style lang="scss">
@import "~@/uni.scss";
$nav-height: 44px;
/* 解决支付宝页面标签指定的样式覆盖组件内类名指定样式的BUG */ 
 /* #ifdef MP-ALIPAY */ 
  page {  
/* #endif */
.uni-nav-bar-text {
  font-size: $uni-font-size-lg;
}

.uni-navbar {
  width: 750rpx;
}

.uni-navbar__content {
  position: relative;
  width: 750rpx;
  background-color: $uni-bg-color;
  overflow: hidden;
}

.uni-navbar__content_view {
  align-items: center;
  flex-direction: row;
}

.uni-navbar__header {
  flex-direction: row;
  width: 750rpx;
  height: $nav-height;
  line-height: $nav-height;
  font-size: 16px;
}

.uni-navbar__header-btns {
  flex-wrap: nowrap;
  width: 120upx;
  padding: 0 12upx;
  justify-content: center;
  align-items: center;
}

.uni-navbar__header-btns-left {
  width: 150upx;
  justify-content: flex-start;
}

.uni-navbar__header-btns-right {
  width: 150upx;
  // text-align: right;
  padding-right: 30rpx;
  justify-content: flex-end;
}

.uni-navbar__header-container {
  flex: 1;
  // margin: 0 10upx;
}

.uni-navbar__header-container-inner {
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 30upx;
}

.uni-navbar__placeholder {
}

.uni-navbar__placeholder-view {
  height: $nav-height;
}

.uni-navbar--fixed {
  position: fixed;
  z-index: 998;
}

.uni-navbar--shadow {
  box-shadow: 0 1px 6px #ccc;
}

.uni-navbar--border {
  border-bottom: 1rpx solid $uni-border-color;
}
 /* #ifdef MP-ALIPAY */ 
  } 
/* #endif */
</style>
