<template>
  <view>
    <view class="header">
      <view class="input-view">
        <uni-icon
          type="search"
          size="22"
          color="#666666"/>
        <input
          confirm-type="search"
          class="input"
          type="text"
          placeholder="输入搜索关键词"
          @confirm="confirm"
        >
      </view>
    </view>
    <view
      class="uni-padding-wrap"
      style="margin-top:30upx;"
    >这是抽屉式导航组件使用示例，可以指定菜单左侧或者右侧弹出（仅初始化生效），组件内部可以放置任何内容。点击页面按钮即可显示导航菜单。</view>
    <view class="example">
      <view class="example-title">左侧滑出</view>
      <view>
        <button
          type="default"
          @click="show('left')">显示Drawer</button>
        <uni-drawer
          :visible="showLeft"
          mode="left"
          @close="closeDrawer('left')">
          <!-- #ifndef MP-BAIDU || MP-ALIPAY || MP-TOUTIAO -->
          <uni-list>
            <uni-list-item title="Item1"/>
            <uni-list-item title="Item2"/>
            <uni-list-item
              :show-badge="true"
              title="Item3"
              badge-text="12"/>
          </uni-list>
          <!-- #endif -->
          <!-- #ifdef MP-BAIDU || MP-ALIPAY || MP-TOUTIAO -->
          <view class="uni-list">
            <uni-list-item title="Item1"/>
            <uni-list-item title="Item2"/>
            <uni-list-item
              :show-badge="true"
              title="Item3"
              badge-text="12"/>
          </view>
          <!-- #endif -->
          <view class="close">
            <button
              type="default"
              @click="hide">关闭Drawer</button>
          </view>
        </uni-drawer>
      </view>
      <view class="example-title">右侧滑出</view>
      <view>
        <button
          type="default"
          @click="show('right')">显示Drawer</button>
        <uni-drawer
          :visible="showRigth"
          mode="right"
          @close="closeDrawer('right')">
          <!-- #ifndef MP-BAIDU || MP-ALIPAY || MP-TOUTIAO -->
          <uni-list>
            <uni-list-item title="Item1"/>
            <uni-list-item title="Item2"/>
            <uni-list-item
              :show-badge="true"
              title="Item3"
              badge-text="12"/>
          </uni-list>
          <!-- #endif -->
          <!-- #ifdef MP-BAIDU || MP-ALIPAY || MP-TOUTIAO -->
          <view class="uni-list">
            <uni-list-item title="Item1"/>
            <uni-list-item title="Item2"/>
            <uni-list-item
              :show-badge="true"
              title="Item3"
              badge-text="12"/>
          </view>
          <!-- #endif -->
          <view class="close">
            <button
              type="default"
              @click="hide">关闭Drawer</button>
          </view>
        </uni-drawer>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      showRigth: false,
      showLeft: false
    }
  },
  methods: {
    show (e) {
      if (e === 'left') {
        this.showLeft = true
      } else {
        this.showRigth = true
      }
    },
    hide () {
      this.showLeft = false
      this.showRigth = false
    },
    closeDrawer (e) {
      if (e === 'left') {
        this.showLeft = false
      } else {
        this.showRigth = false
      }
    }
  },
  onNavigationBarButtonTap (e) {
    this.showRigth = !this.showRigth
  },
  onBackPress () {
    if (this.showRigth || this.showLeft) {
      this.hide()
      return true
    }
  }
}
</script>

<style>
.header {
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  align-items: center;
}
.input-view {
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #e7e7e7;
  height: 30px;
  border-radius: 15px;
  padding: 0 10px;
  flex: 1;
}
.uni-padding-wrap {
  padding: 0 15px;
  line-height: 1.8;
}
.input {
  flex: 1;
  padding: 0 5px;
  height: 24px;
  line-height: 24px;
  font-size: 16px;
}
.close {
  padding: 30upx;
}
</style>
