<template>
  <view v-if="visibleSync" :class="{ 'uni-drawer--visible': showDrawer }" class="uni-drawer">
    <view class="uni-drawer__mask" :class="{ 'uni-drawer__mask--visible': showDrawer && mask }" @tap="close" />
    <view class="uni-drawer__content" :class="{'uni-drawer--right': rightMode,'uni-drawer--left': !rightMode, 'uni-drawer__content--visible': showDrawer}">
      <slot />
    </view>
  </view>
</template>

<script>
  export default {
    name: 'UniDrawer',
    props: {
      /**
       * 显示状态
       */
      visible: {
        type: Boolean,
        default: false
      },
      /**
       * 显示模式（左、右），只在初始化生效
       */
      mode: {
        type: String,
        default: ''
      },
      /**
       * 蒙层显示状态
       */
      mask: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        visibleSync: false,
        showDrawer: false,
        rightMode: false,
        closeTimer: null,
        watchTimer: null
      }
    },
    watch: {
      visible(val) {
        console.log('visible:',val)
        if(val){
          this.open()
        }else{
          this.close()
        }
        // clearTimeout(this.watchTimer)
        // setTimeout(() => {
        //   this.showDrawer = val
        // }, 100)
        // if (this.visibleSync) {
        //   clearTimeout(this.closeTimer)
        // }
        // if (val) {
        //   this.visibleSync = val
        // } else {
        //   this.watchTimer = setTimeout(() => {
        //     this.visibleSync = val
        //   }, 300)
        // }
      }
    },
    created() {
      this.visibleSync = this.visible
      setTimeout(() => {
        this.showDrawer = this.visible
      }, 100)
      this.rightMode = this.mode === 'right'
    },
    methods: {
      close() {
        // this.showDrawer = false
        // this.$nextTick(()=>{
        //   setTimeout(() => {
        //      this.visibleSync = false
        //      this.$emit('close')
        //    }, 200)
        // })
        this._change('showDrawer','visibleSync',false)
      },
      open(){
        // this.visibleSync = true
        // this.$nextTick(()=>{
        //   setTimeout(() => {
        //     this.showDrawer = true
        //     this.$emit('open')
        //   }, 100)
        // })
        this._change('visibleSync','showDrawer',true)
      },
      _change(param1,param2,status){
        this[param1] = status
        this.$nextTick(()=>{
          setTimeout(() => {
            this[param2] = status
            this.$emit(status?'open':'close')
          }, 100)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/uni.scss';

  $drawer-width: 220px;

  .uni-drawer {
    /* #ifndef APP-NVUE */
    display: block;
    /* #endif */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 999;
  }

  .uni-drawer__content {
    /* #ifndef APP-NVUE */
    display: block;
    /* #endif */
    position: absolute;
    top: 0;
    width: $drawer-width;
    bottom: 0;
    background-color: $uni-bg-color;
    transition: transform 0.3s ease;
  }

  .uni-drawer--left {
    left: 0;
    transform: translateX(-220px);
  }

  .uni-drawer--right {
    right: 0;
    transform: translateX(220px);
  }

  .uni-drawer__content--visible {
    transform: translateX(0);
  }


  .uni-drawer__mask {
    /* #ifndef APP-NVUE */
    display: block;
    /* #endif */
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: $uni-bg-color-mask;
    transition: opacity 0.3s;
  }

  .uni-drawer__mask--visible {
    /* #ifndef APP-NVUE */
    display: block;
    /* #endif */
    opacity: 1;
  }
</style>
