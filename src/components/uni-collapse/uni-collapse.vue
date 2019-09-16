<template>
  <view class="uni-collapse">
    <slot />
  </view>
</template>
<script>
  export default {
    name: 'UniCollapse',
    props: {
      accordion: {
        // 是否开启手风琴效果
        type: [Boolean, String],
        default: false
      }
    },
    data() {
      return {}
    },
    provide() {
      return {
        collapse: this
      }
    },
    created() {
      this.childrens = []
    },
    methods: {
      onChange() {
        let activeItem = []
        this.childrens.forEach((vm, index) => {
          if (vm.isOpen) {
            activeItem.push(vm.nameSync)
          }
        })
        this.$emit('change', activeItem)
      }
    }
  }
</script>
<style lang="scss">
  @import '@/uni.scss';

  .uni-collapse {
    background-color: $uni-bg-color;
    /* #ifndef APP-NVUE */
    width: 100%;
    display: flex;
    /* #endif */
    /* #ifdef APP-NVUE */
    flex: 1;
    /* #endif */
    // border-color: $uni-border-color;
    // border-top-width: 1px;
    // border-bottom-width: 1px;
    // border-style: solid;
  }
</style>
