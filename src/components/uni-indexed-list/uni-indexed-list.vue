<template>
  <view class="uni-indexed">
    <scroll-view :scroll-into-view="scrollViewId" :style="{ height: winHeight + 'px' }" class="uni-indexed__list"
      scroll-y>
      <view v-for="(list, idx) in lists" :key="idx" :id="'uni-indexed-list-' + list.key">
        <view class="uni-indexed__list-title-wrapper">
          <text v-if="list.items && list.items.length > 0" class="uni-indexed__list-title">{{ list.key }}</text>
        </view>
        <view v-if="list.items && list.items.length > 0" class="uni-list">
          <view v-for="(item, index) in list.items" :key="index" class="uni-list-item" hover-class="uni-list-item--hover">
            <view class="uni-list-item__container" @click="onClick(idx, index)">
              <view class="uni-list-item__border">
                <view v-if="showSelect" style="margin-right: 20rpx;">
                  <uni-icons :type="item.checked ? 'checkbox-filled' : 'circle'" :color="item.checked ? '#007aff' : '#aaa'"
                    size="24" />
                </view>
                <text class="uni-list-item__content">{{ item.name }}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view :class="touchmove ? 'active' : ''" :style="{ height: winHeight + 'px' }" class="uni-indexed__menu"
      @touchstart="touchStart" @touchmove.stop.prevent="touchMove" @touchend="touchEnd">
      <view v-for="(list, key) in lists" :key="key"
        class="uni-indexed__menu-item">
        <text class="uni-indexed__menu-text" :class="touchmoveIndex == key ? 'uni-indexed__menu-text--active' : ''">{{ list.key }}</text>
      </view>
    </view>
    <view v-if="touchmove" class="uni-indexed--alert-wrapper">
      <text class="uni-indexed--alert">{{ lists[touchmoveIndex].key }}</text>
    </view>
  </view>
</template>
<script>
  import uniIcons from '@/components/uni-icons/uni-icons.vue'
  export default {
    name: 'UniIndexedList',
    components: {
      uniIcons
    },
    props: {
      options: {
        type: Array,
        default () {
          return []
        }
      },
      showSelect: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        lists: [],
        touchmove: false,
        touchmoveIndex: -1,
        itemHeight: 0,
        winHeight: 0,
        scrollViewId: ''
      }
    },
    watch: {
      options: {
        handler: function() {
          this.setList()
        },
        deep: true
      }
    },
    created() {
      this.setList()
    },
    methods: {
      setList() {
        let winHeight = uni.getSystemInfoSync().windowHeight
        this.itemHeight = winHeight / this.options.length
        this.winHeight = winHeight

        // if (!this.showSelect) {
        // 	this.lists = this.options;
        // 	return;
        // }
        // console.log(this.options)
        this.lists = this.options.map(value => {
          // console.log(value)
          let items = value.data.map(item => {
            let obj = {}
            // for (let key in item) {
            obj['key'] = value.letter
            obj['name'] = item
            // }
            obj.checked = item.checked ? item.checked : false
            return obj
          })
          return {
            title: value.letter,
            key: value.letter,
            items: items
          }
        })
        // console.log(this.lists)
      },
      touchStart(e) {
        this.touchmove = true
        let pageY = e.touches[0].pageY
        let index = Math.floor(pageY / this.itemHeight)
        let item = this.lists[index]
        if (item) {
          this.scrollViewId = 'uni-indexed-list-' + item.key
          this.touchmoveIndex = index
        }
      },
      touchMove(e) {
        let pageY = e.touches[0].pageY
        let index = Math.floor(pageY / this.itemHeight)
        let item = this.lists[index]
        if (item) {
          this.scrollViewId = 'uni-indexed-list-' + item.key
          this.touchmoveIndex = index
        }
      },
      touchEnd() {
        this.touchmove = false
        this.touchmoveIndex = -1
      },
      onClick(idx, index) {
        let obj = {}
        for (let key in this.lists[idx].items[index]) {
          obj[key] = this.lists[idx].items[index][key]
        }
        let select = []
        if (this.showSelect) {
          this.lists[idx].items[index].checked = !this.lists[idx].items[index].checked
          this.lists.forEach((value, idx) => {
            value.items.forEach((item, index) => {
              if (item.checked) {
                let obj = {}
                for (let key in this.lists[idx].items[index]) {
                  obj[key] = this.lists[idx].items[index][key]
                }
                select.push(obj)
              }
            })
          })
        }
        this.$emit('click', {
          item: obj,
          select: select
        })
      }
    }
  }
</script>
<style lang="scss">
  @import '@/uni.scss';

  .uni-list {
    background-color: $uni-bg-color;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: $uni-border-color;
  }

  .uni-list-item {
    font-size: $uni-font-size-lg;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .uni-list-item__container {
    padding-left: $uni-spacing-row-lg;
    flex: 1;
    position: relative;
    /* #ifndef APP-NVUE */
    display: flex;
    box-sizing: border-box;
    /* #endif */
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .uni-list-item__border {
    flex: 1;
    position: relative;
    /* #ifndef APP-NVUE */
    display: flex;
    box-sizing: border-box;
    /* #endif */
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: $uni-spacing-row-lg;
    padding-left: 0;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: $uni-border-color;
  }

  .uni-list-item__content {
    flex: 1;
    font-size: 14px;
  }

  .uni-indexed {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
  }

  .uni-indexed__list {
    flex: 1;
  }

  .uni-indexed__list-title-wrapper {
    /* #ifndef APP-NVUE */
    display: flex;
    width: 100%;
    /* #endif */
    background-color: #f7f7f7;
  }

  .uni-indexed__list-title {
    padding: 6px 12px;
    line-height: 24px;
    font-size: $uni-font-size-sm;
  }

  .uni-indexed__menu {
    width: 24px;
    background-color: lightgrey;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
  }
  


  .uni-indexed__menu-item {
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  
  .uni-indexed__menu-text{
    line-height: 20px;
    font-size: 12px;
    text-align: center;
    color: #aaa;
  }

  .uni-indexed__menu--active {
    background-color: rgb(200, 200, 200);
  }

  .uni-indexed__menu-text--active {
    color: #007aff;
  }

  .uni-indexed--alert-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .uni-indexed--alert {
    width: 80px;
    height: 80px;
    border-radius: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 35px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
