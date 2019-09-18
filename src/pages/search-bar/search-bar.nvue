<template>
  <view>
    <uni-title title="基本用法" type="line"></uni-title>
    <view class="example-body">
      <uni-search-bar @confirm="search" @input="input" @cancel="cancel"/>
      <view class="" style="margin-bottom: 20px;text-align: center;">
        当前输入为：{{ searchVal }}
      </view>
    </view>
    <uni-title title="自定义样式" type="line"></uni-title>
		<view class="example-body">
			<uni-search-bar placeholder="自定义placeholder" @confirm="search" />
			<uni-search-bar radius="100" placeholder="自定义圆角" @confirm="search" />
		</view>
    <uni-title title="控制清除按钮" type="line"></uni-title>
		<view class="example-body">
			<uni-search-bar radius="100" clearButton="always" @confirm="search" />
			<uni-search-bar radius="100" clearButton="auto" @confirm="search" />
			<uni-search-bar radius="100" clearButton="no" @confirm="search" />
		</view>
  </view>
</template>

<script>
  import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
  import uniTitle from '@/components/uni-title/uni-title.vue'
  export default {
    components: {
      uniSearchBar,
      uniTitle
    },
    data() {
      return {
        searchVal: ''
      }
    },
    methods: {
      search(res) {
        uni.showModal({
          content: '搜索：' + res.value,
          showCancel: false
        })
      },
      input(res) {
        this.searchVal = res.value
      },
			cancel(res) {
				uni.showModal({
				  content: '点击取消，输入值为：' + res.value,
				  showCancel: false
				})
			}
    }
  }
</script>

<style lang="scss">
  @import '@/common/uni-nvue.scss';
  @import '@/uni.scss';
  .search-result {
    margin-top: 10px;
  }
</style>
