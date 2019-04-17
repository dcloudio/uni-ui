<template>
  <view>
    <view class="example-title">布局组件</view>
    <uni-list>
      <uni-list-item
        v-for="(layout,index) in layouts"
        :key="index"
        :title="layout.name"
        @click="goDetailPage(layout)"/>
    </uni-list>
    <view class="example-title">视图组件</view>
    <uni-list>
      <uni-list-item
        v-for="(view,index) in views"
        :key="index"
        :title="view.name"
        @click="goDetailPage(view)"/>
    </uni-list>
  </view>
</template>
<script>
export default {
  data () {
    return {
      layouts: [{
        name: 'Card 卡片',
        url: 'card'
      },
      // #ifdef H5 || APP-PLUS || MP-WEIXIN
      {
        name: 'Collapse 折叠面板',
        url: 'collapse'
      },
      // #endif
      {
        name: 'Drawer 抽屉',
        url: 'drawer'
      }, {
        name: 'Grid 宫格',
        url: 'grid'
      }, {
        name: 'List 列表',
        url: 'list'
      }, {
        name: 'NavBar 导航栏',
        url: 'nav-bar'
      }, {
        name: 'Pagination 分页器',
        url: 'pagination'
      }, {
        name: 'SwiperDot 轮播图指示点',
        url: 'swiper-dot'
      }, {
        name: 'Steps 步骤条',
        url: 'steps'
      }, {
        name: 'SegmentedControl 分段器',
        url: 'segmented-control'
      }, {
        name: 'SwipeAction 滑动操作',
        url: 'swipe-action'
      }],
      views: [{
        name: 'Badge 数字角标',
        url: 'badge'
      }, {
        name: 'CountDown 倒计时',
        url: 'count-down'
      }, {
        name: 'Icon 图标',
        url: 'icon'
      }, {
        name: 'LoadMore 加载更多',
        url: 'load-more'
      }, {
        name: 'NoticeBar 通告栏',
        url: 'notice-bar'
      }, {
        name: 'NumberBox 数字输入框',
        url: 'number-box'
      }, {
        name: 'Popup 弹出层',
        url: 'popup'
      }, {
        name: 'Rate 评分',
        url: 'rate'
      }, {
        name: 'Tag 标签',
        url: 'tag'
      }, {
        name: 'Calendar 日历',
        url: 'calendar'
      }]
    }
  },
  methods: {
    goDetailPage (e) {
      let path = e.url
      uni.navigateTo({
        url: `/pages/${path}/${path}`
      })
      return false
    }
  }
}
</script>

<style>
</style>
