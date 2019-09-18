<template>
  <view>
    <view :class="{
        'uni-fab--leftBottom': leftBottom,
        'uni-fab--rightBottom': rightBottom,
        'uni-fab--leftTop': leftTop,
        'uni-fab--rightTop': rightTop
      }"
      class="uni-fab">
      <view :class="{
          'uni-fab-content--left': horizontal === 'left',
          'uni-fab-content--right': horizontal === 'right',
          'uni-fab-content--flexDirection': direction === 'vertical',
          'uni-fab-content--flexDirectionStart': flexDirectionStart,
          'uni-fab-content--flexDirectionEnd': flexDirectionEnd
        }"
        :style="{ width: boxWidth, height: boxHeight, backgroundColor: styles.backgroundColor }" class="uni-fab-content">
        <view v-if="flexDirectionStart || horizontalLeft" class="uni-fab-item uni-fab-item--first" />
        <view v-for="(item, index) in content" :key="index" :class="{ 'uni-fab-item--active': isShow }" class="uni-fab-item"
          @click="_onItemClick(index, item)">
          <image :src="item.active ? item.selectedIconPath : item.iconPath" class="uni-fab-item-image" mode="widthFix" />
          <text class="uni-fab-item-text" :style="{ color: item.active ? styles.selectedColor : styles.color }">{{ item.text }}</text>
        </view>
        <view v-if="flexDirectionEnd || horizontalRight" class="uni-fab-item uni-fab-item--first" />
      </view>
      <view :class="{
          'uni-fab-circle--left': horizontal === 'left' && direction === 'horizontal',
          'uni-fab-circle--top': vertical === 'top' && direction === 'vertical',
          'uni-fab-circle--bottom': vertical === 'bottom' && direction === 'vertical',
          'uni-fab-circle--right': horizontal === 'right' && direction === 'horizontal'
        }"
        :style="{ 'background-color': styles.buttonColor }" class="uni-fab-circle" @click="_onClick">
        <uni-icons :class="{ 'uni-fab-plus--active': isShow }" class="uni-fab-plus" type="plusempty" color="#FFFFFF"
          size="48"></uni-icons>
      </view>
    </view>
  </view>
</template>

<script>
  import uniIcons from '../uni-icons/uni-icons.vue'
  export default {
    components: {
      uniIcons
    },
    name: 'UniFab',
    props: {
      pattern: {
        type: Object,
        default () {
          return {}
        }
      },
      horizontal: {
        type: String,
        default: 'left'
      },
      vertical: {
        type: String,
        default: 'bottom'
      },
      direction: {
        type: String,
        default: 'horizontal'
      },
      content: {
        type: Array,
        default () {
          return []
        }
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        fabShow: false,
        flug: true,
        isShow: false,
        styles: {
          color: '#3c3e49',
          selectedColor: '#007AFF',
          backgroundColor: '#fff',
          buttonColor: '#3c3e49'
        }
      }
    },
    computed: {
      contentWidth(e) {
        return (this.content.length + 1) * 55 + 10 + 'px'
      },
      contentWidthMin() {
        return 55 + 'px'
      },
      // 动态计算宽度
      boxWidth() {
        return this.getPosition(3, 'horizontal')
      },
      // 动态计算高度
      boxHeight() {
        return this.getPosition(3, 'vertical')
      },
      // 计算左下位置
      leftBottom() {
        return this.getPosition(0, 'left', 'bottom')
      },
      // 计算右下位置
      rightBottom() {
        return this.getPosition(0, 'right', 'bottom')
      },
      // 计算左上位置
      leftTop() {
        return this.getPosition(0, 'left', 'top')
      },
      rightTop() {
        return this.getPosition(0, 'right', 'top')
      },
      flexDirectionStart() {
        return this.getPosition(1, 'vertical', 'top')
      },
      flexDirectionEnd() {
        return this.getPosition(1, 'vertical', 'bottom')
      },
      horizontalLeft() {
        return this.getPosition(2, 'horizontal', 'left')
      },
      horizontalRight() {
        return this.getPosition(2, 'horizontal', 'right')
      }
    },
    watch: {
      pattern(newValue, oldValue) {
        //console.log(JSON.stringify(newValue))
        this.styles = Object.assign({}, this.styles, newValue)
      }
    },
    created() {
      this.isShow = this.show
      if (this.top === 0) {
        this.fabShow = true
      }
      // 初始化样式
      this.styles = Object.assign({}, this.styles, this.pattern)
    },
    methods: {
      _onClick() {
        this.isShow = !this.isShow
      },
      open() {
        this.isShow = true
      },
      close() {
        this.isShow = false
      },
      /**
       * 按钮点击事件
       */
      _onItemClick(index, item) {
        this.$emit('trigger', {
          index,
          item
        })
      },
      /**
       * 获取 位置信息
       */
      getPosition(types, paramA, paramB) {
        if (types === 0) {
          return this.horizontal === paramA && this.vertical === paramB
        } else if (types === 1) {
          return this.direction === paramA && this.vertical === paramB
        } else if (types === 2) {
          return this.direction === paramA && this.horizontal === paramB
        } else {
          return this.isShow && this.direction === paramA ? this.contentWidth : this.contentWidthMin
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '@/uni.scss';

  .uni-fab {
    position: fixed;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .uni-fab--top {
    width: 30px;
    height: 30px;
    right: 15px;
    bottom: 30px;
    border-style: solid;
    border-width: 1px;
    border-color: #5989b9;
    border-radius: 5px;
    transition: opacity 0.3;
    opacity: 0;
  }

  .uni-fab--active {
    opacity: 1;
  }

  .uni-fab--leftBottom {
    left: 15px;
    bottom: 30px;
  }

  .uni-fab--leftTop {
    left: 15px;
    top: 40px;
    /* #ifdef H5 */
    top: calc(40px + var(--window-top));
    /* #endif */
  }

  .uni-fab--rightBottom {
    right: 15px;
    bottom: 30px;
  }

  .uni-fab--rightTop {
    right: 15px;
    top: 40px;
    /* #ifdef H5 */
    top: calc(40px + var(--window-top));
    /* #endif */
  }

  .uni-fab-circle {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 55px;
    height: 55px;
    background-color: #3c3e49;
    border-radius: 50%;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
    z-index: 11;
  }

  .uni-fab-circle--left {
    left: 0;
  }

  .uni-fab-circle--right {
    right: 0;
  }

  .uni-fab-circle--top {
    top: 0;
  }

  .uni-fab-circle--bottom {
    bottom: 0;
  }

  .uni-fab-plus {
    transition: transform 0.3s;
    font-weight: bold;
  }

  .uni-fab-plus--active {
    transform: rotate(135deg);
    font-size: 40px;
  }

  .uni-fab-content {
    /* #ifndef APP-NVUE */
    box-sizing: border-box;
    display: flex;
    /* #endif */
    flex-direction: row;
    border-radius: 50px;
    overflow: hidden;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
    /* #ifdef APP-NVUE */
    transition: width,height 0.2s;
    /* #endif */
    /* #ifndef APP-NVUE */
    transition: all 0.2s;
    /* #endif */
    width: 55px;
  }

  .uni-fab-content--left {
    justify-content: flex-start;
  }

  .uni-fab-content--right {
    justify-content: flex-end;
  }

  .uni-fab-content--flexDirection {
    flex-direction: column;
    justify-content: flex-end;
  }

  .uni-fab-content--flexDirectionStart {
    flex-direction: column;
    justify-content: flex-start;
  }

  .uni-fab-content--flexDirectionEnd {
    flex-direction: column;
    justify-content: flex-end;
  }

  .uni-fab-item {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    opacity: 0;
    transition: opacity 0.2s;
  }

  .uni-fab-item--active {
    opacity: 1;
  }

  .uni-fab-item-image {
    width: 25px;
    height: 25px;
    margin-bottom: 3px;
  }

  .uni-fab-item-text {
    color: #FFFFFF;
    font-size: 12px;
  }

  .uni-fab-item--first {
    width: 55px;
  }
</style>
