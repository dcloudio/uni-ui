<template>
  <view>
    <view class="example-info">折叠面板用来折叠/显示过长的内容或者是列表。通常是在多内容分类项使用，折叠不重要的内容，显示重要内容。点击可以展开折叠部分。</view>
    <view class="example-title">基础用法</view>
    <uni-collapse
      class="warp"
      @change="change">
      <uni-collapse-item
        :open="true"
        title="默认开启">
        <view class="content"> 折叠内容主体，可自定义内容及样式 </view>
      </uni-collapse-item>
      <uni-collapse-item title="折叠内容">
        <view class="content">
          折叠列表内容，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。
        </view>
      </uni-collapse-item>
      <uni-collapse-item title="折叠列表">
        <uni-list>
          <uni-list-item
            title="标题文字"
            thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"/>
          <uni-list-item
            title="标题文字"
            note="描述信息"
            thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"/>
          <uni-list-item
            :show-extra-icon="true"
            :extra-icon="extraIcon"
            :show-switch="true"
            title="标题文字"
            @switchChange="change"/>
        </uni-list>
      </uni-collapse-item>
      <uni-collapse-item
        :disabled="true"
        title="禁用状态">
        <view class="content"> 禁用状态 </view>
      </uni-collapse-item>
    </uni-collapse>
    <view class="example-title">添加动画效果</view>
    <uni-collapse>
      <uni-collapse-item
        :show-animation="true"
        title="标题文字">
        <view class="content">
          折叠内容主体，可自定义内容及样式
        </view>
      </uni-collapse-item>
      <uni-collapse-item
        :show-animation="true"
        title="标题文字">
        <uni-list>
          <uni-list-item
            title="标题文字"
            thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"/>
          <uni-list-item
            title="标题文字"
            note="描述信息"
            thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"/>
          <uni-list-item
            :show-extra-icon="true"
            :extra-icon="extraIcon"
            :show-switch="true"
            title="标题文字"
            @switchChange="change"/>
        </uni-list>
      </uni-collapse-item>
    </uni-collapse>
    <view class="example-title">手风琴效果</view>
    <uni-collapse :accordion="true">
      <uni-collapse-item
        v-for="item in list"
        :key="item.id"
        :title="item.title"
        :show-animation="item.animation">
        <view class="content">
          {{ item.content }}
        </view>
      </uni-collapse-item>
    </uni-collapse>
    <view class="example-title">配置图标</view>
    <uni-collapse>
      <uni-collapse-item
        title="标题文字"
        thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png">
        <view class="content">
          折叠内容主体，可自定义内容及样式
        </view>
      </uni-collapse-item>
      <uni-collapse-item
        title="标题文字"
        thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png">
        <view class="content">
          折叠内容主体，可自定义内容及样式
        </view>
      </uni-collapse-item>
    </uni-collapse>
  </view>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        id: 0,
        title: '标题文字',
        content: '手风琴效果',
        animation: true
      }, {
        id: 1,
        title: '标题文字',
        content: '手风琴效果',
        animation: true
      }, {
        id: 2,
        title: '标题文字',
        content: '手风琴效果',
        animation: true
      }],
      extraIcon: {
        color: '#4cd964',
        size: '26',
        type: 'image'
      }
    }
  },
  methods: {
    change (e) {
      console.log(e)
    }
  }
}
</script>

<style>
	.content {
		padding: 30upx;
		background: #f9f9f9;
		color: #666;
	}
</style>
