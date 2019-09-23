<template>
  <view class="uni-searchbar">
    <view
      :class="show?'':'uni-searchbar-form-hide'"
      class="uni-searchbar-form"
    >
      <view
        :style="{borderRadius:radius+'rpx'}"
        class="uni-searchbar-form__box"
        v-if="show"
      >
        <uni-icons
          :color="'#999999'"
          class="uni-searchbar-form__box-icon-search"
          size="18"
          type="search"
        />
        <input
          :focus="show"
          :placeholder="placeholder"
          @confirm="confirm"
          class="uni-searchbar-form__box-search-input"
          confirm-type="search"
          placeholder-style="color:#cccccc"
          type="text"
          v-model="searchVal"
        />
        <uni-icons
          :color="'#999999'"
          @click="clear"
          class="uni-searchbar-form__box-icon-clear"
          size="24"
          type="clear"
          v-if="clearButton==='always'||clearButton==='auto'&&searchVal!==''"
        />
      </view>
      <view
        :style="{borderRadius:radius+'rpx'}"
        @click="searchClick"
        class="uni-searchbar-form__text"
        v-if="!show"
      >
        <uni-icons
          class="uni-searchbar-form__text-icon-search"
          color="#999999"
          size="18"
          type="search"
        />
        <text class="uni-searchbar-form__text-placeholder">{{ placeholder }}</text>
      </view>
      <text
        @click="cancel"
        class="uni-searchbar-form__cancel"
        v-if="show"
      >取消</text>
    </view>
  </view>
</template>

<script>
import uniIcons from "@/components/uni-icons/uni-icons.vue";
export default {
  name: "UniSearchBar",
  components: {
    uniIcons
  },
  props: {
    placeholder: {
      type: String,
      default: "搜索"
    },
    radius: {
      type: [Number, String],
      default: 10
    },
    clearButton: {
      type: String,
      default: "auto"
    }
  },
  data() {
    return {
      show: false,
      searchVal: ""
    };
  },
  watch: {
    searchVal() {
      this.$emit("input", {
        value: this.searchVal
      });
    }
  },
  methods: {
    searchClick() {
      this.searchVal = "";
      this.show = true;
    },
    clear() {
      this.searchVal = "";
    },
    cancel() {
      this.$emit("cancel", {
        value: this.searchVal
      });
      // setTimeout(function(){
        this.searchVal = "";
        this.show = false;
      // },0)
    },
    confirm() {
      this.$emit("confirm", {
        value: this.searchVal
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/uni.scss";
$uni-searchbar-height: 32px;

  /* 解决支付宝页面标签指定的样式覆盖组件内类名指定样式的BUG */
  /* #ifdef MP-ALIPAY */
    page {
  /* #endif */

.uni-searchbar-form {
  /* #ifndef APP-PLUS-NVUE */
    display: flex;
  /* #endif */
  flex-direction: row;
  position: relative;
  padding: 15rpx 0;
  width: 690rpx;
}

.uni-searchbar-form__box {
  /* #ifndef APP-PLUS-NVUE */
    display: flex;
  /* #endif */
  position: relative;
  flex: 1;
  flex-direction: row;
  align-items: center;
  // width: 100%;
  height: $uni-searchbar-height;
  color: #c8c7cc;
  background-color: #ffffff;
  border-width: 1rpx;
  border-style: solid;
  border-color: #c8c7cc;
  border-radius: 10rpx;
}

.uni-searchbar-form__box-icon-search {
  color: #c8c7cc;
  line-height: 24px;
  padding: 0rpx 10rpx 0rpx 15rpx;
}

.uni-searchbar-form__box-search-input {
  /* #ifdef APP-PLUS */
  position:absolute;
  top:10rpx;
  left:66rpx;
  height: 28rpx;
  line-height: 28rpx;
  padding-top: 0;
  padding-bottom: 0;
  /* #endif */
  
  flex: 1;
  font-size: 28rpx;
  color: #333333;
}

.uni-searchbar-form__box-icon-clear {
  position: absolute;
  right:0;
  color: #c8c7cc;
  /* #ifndef APP-PLUS-NVUE */
  margin-top: 3px;
  /* #endif */
  
  line-height: 24px;
  padding: 0rpx 15rpx 0rpx 10rpx;
}

.uni-searchbar-form__text {
  /* #ifndef APP-PLUS-NVUE */
    display: flex;
  /* #endif */
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
  // width: 530rpx;
  height: $uni-searchbar-height;
  line-height: $uni-searchbar-height;
  text-align: center;
  color: #c8c7cc;
  background-color: #ffffff;
  border-width: 1rpx;
  border-style: solid;
  border-color: #c8c7cc;
  border-radius: 10rpx;
}

.uni-searchbar-form__text-icon-search {
  height: $uni-searchbar-height;
  line-height: $uni-searchbar-height;
}

.uni-searchbar-form__text-placeholder {
  font-size: 28rpx;
  color: #cccccc;
  margin-left: 10rpx;
}

.uni-searchbar-form__cancel {
  width: 80rpx;
  padding-left: 20rpx;
  line-height: $uni-searchbar-height;
  font-size: $uni-font-size-base;
  color: $uni-text-color;
}

/* #ifdef MP-ALIPAY */ 
  }  
/* #endif */

</style>
