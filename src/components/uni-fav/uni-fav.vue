<template>
  <view
    :style="[{ backgroundColor: checked ? bgColorChecked : bgColor }]"
    :class="[circle === true || circle === 'true' ? 'uni-fav--circle' : '']"
    class="uni-fav"
    @click="onClick"
  >
    <uni-icons :style="{color: checked ? fgColorChecked : fgColor}" v-if="!checked && (star === true || star === 'true')" :color="fgColor" class="uni-fav-star" type="star-filled" size="14" />
    <text :style="{color: checked ? fgColorChecked : fgColor}" class="uni-fav-text">{{ checked ? contentText.contentFav : contentText.contentDefault }}</text>
  </view>
</template>

<script>
import uniIcons from '../uni-icons/uni-icons.vue';
export default {
  name: 'UniFav',
  components: {
    uniIcons
  },
  props: {
    star: {
      type: [Boolean, String],
      default: true
    },
    bgColor: {
      type: String,
      default: '#eeeeee'
    },
    fgColor: {
      type: String,
      default: '#666666'
    },
    bgColorChecked: {
      type: String,
      default: '#007aff'
    },
    fgColorChecked: {
      type: String,
      default: '#FFFFFF'
    },
    circle: {
      type: [Boolean, String],
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    contentText: {
      type: Object,
      default() {
        return {
          contentDefault: '收藏',
          contentFav: '已收藏'
        };
      }
    }
  },
  watch: {
    checked() {
      if (uni.report) {
        if (this.checked) {
          uni.report('收藏', '收藏');
        } else {
          uni.report('取消收藏', '取消收藏');
        }
      }
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss">
@import '~@/uni.scss';
$fav-height: 50rpx;
$fav-font-size: 28rpx;
.uni-fav {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 120rpx;
  height: $fav-height;
  line-height: $fav-height;
  text-align: center;
  border-radius: 6rpx;
}
.uni-fav--circle {
  border-radius: 60rpx;
}
.uni-fav-star {
  height: $fav-height;
  line-height: $fav-height;
  margin-right: 5rpx;
  align-items: center;
  justify-content: center;
}
.uni-fav-text {
  height: $fav-height;
  line-height: $fav-height;
  align-items: center;
  justify-content: center;
  font-size: $fav-font-size;
}
</style>
