<template>
  <view class="uni-searchbar">
    <view :class="show?'':'uni-searchbar-form-hide'" class="uni-searchbar-form">
      <view v-if="show" :style="{borderRadius:radius+'rpx'}" class="uni-searchbar-form__box" >
        <uni-icons :color="'#999999'" class="uni-searchbar-form__box-icon-search" type="search" size="18" />
        <input :placeholder="placeholder" :focus="show" v-model="searchVal" class="uni-searchbar-form__box-search-input"
          type="text" placeholder-style="color:#cccccc" confirm-type="search" @confirm="confirm">
        <uni-icons :color="'#999999'" v-if="clearButton==='always'||clearButton==='auto'&&searchVal!==''" class="uni-searchbar-form__box-icon-clear"
          type="clear" size="24" @click="clear" />
      </view>
      <view v-if="!show" :style="{borderRadius:radius+'rpx'}" class="uni-searchbar-form__text" @click="searchClick">
        <uni-icons color="#999999" class="uni-searchbar-form__text-icon-search" type="search" size="18" />
        <text class="uni-searchbar-form__text-placeholder">{{ placeholder }}</text>
      </view>
      <text v-if="show" class="uni-searchbar-form__cancel" @click="cancel">取消</text>
    </view>
  </view>
</template>

<script>
  import uniIcons from '@/components/uni-icons/uni-icons.vue'
  export default {
    name: 'UniSearchBar',
    components: {
      uniIcons
    },
    props: {
      placeholder: {
        type: String,
        default: '搜索'
      },
      radius: {
        type: [Number, String],
        default: 10
      },
      clearButton: {
        type: String,
        default: 'auto'
      }
    },
    data() {
      return {
        show: false,
        searchVal: ''
      }
    },
    watch: {
      searchVal() {
        this.$emit('input', {
          value: this.searchVal
        })
      }
    },
    methods: {
      searchClick() {
        this.searchVal = ''
        this.show = true
      },
      clear() {
        this.searchVal = ''
      },
      cancel() {
        this.$emit('cancel', {
          value: this.searchVal
        })
        this.searchVal = ''
        this.show = false
      },
      confirm() {
        this.$emit('confirm', {
          value: this.searchVal
        })
      }
    }
  }
</script>

<style lang="scss">
  $uni-searchbar-height:64rpx;

  .uni-searchbar-form {
    flex-direction: row;
    position: relative;
    padding: 15rpx 0;
    width: 690rpx;
  }

  .uni-searchbar-form__box {
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
    flex: 1;
    font-size: 28rpx;
    height: $uni-searchbar-height;
    line-height: $uni-searchbar-height;
    color: #333333;
  }

  .uni-searchbar-form__box-icon-clear {
    color: #c8c7cc;
    line-height: 20px;
    padding: 0rpx 15rpx 0rpx 10rpx;
  }

  .uni-searchbar-form__text {
    display: flex;
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

  // .uni-searchbar-form-hide {
  //   .uni-searchbar-form__box {
  //     display: none;
  //   }

  //   .uni-searchbar-form__text {
  //     display: block;
  //   }

  //   .uni-searchbar-form__cancel {
  //     display: none;
  //   }
  // }
</style>
