<template>
  <view
    :class="{ 'uni-card--full': isFull === true || isFull === 'true', 'uni-card--shadow': isShadow === true || isShadow === 'true' }"
    class="uni-card"
    @click="onClick">
    <view
      v-if="mode === 'style'"
      class="uni-card__thumbnailimage">
      <image
        :src="thumbnail"
        mode="aspectFill" />
      <view
        v-if="title"
        class="uni-card__thumbnailimage-title">{{ title }}</view>
    </view>
    <view
      v-if="mode === 'title'"
      class="uni-card__title">
      <view class="uni-card__title-header"><image
        :src="thumbnail"
        mode="aspectFill" /></view>
      <view class="uni-card__title-content">
        <view class="uni-card__title-content-title">{{ title }}</view>
        <view class="uni-card__title-content-extra">{{ extra }}</view>
      </view>
    </view>
    <!-- 标题 -->
    <view
      v-if="mode === 'basic' && title"
      class="uni-card__header">
      <view
        v-if="thumbnail"
        class="uni-card__header-extra-img-view"><image
          :src="thumbnail"
          class="uni-card__header-extra-img" /></view>
      <view class="uni-card__header-title-text">{{ title }}</view>
      <view
        v-if="extra"
        class="uni-card__header-extra-text">{{ extra }}</view>
    </view>
    <!-- 内容 -->
    <view class="uni-card__content uni-card__content--pd">
      <view
        v-if="mode === 'style' && extra"
        class="uni-card__content-extra">{{ extra }}</view>
      <slot />
    </view>
    <!-- 底部 -->
    <view
      v-if="note"
      class="uni-card__footer">
      <slot name="footer">
        <text>{{ note }}</text>
      </slot>
    </view>
  </view>
</template>

<script>
export default {
  name: 'UniCard',
  props: {
    title: {
      type: String,
      default: ''
    }, // 标题
    extra: {
      type: String,
      default: ''
    }, // 扩展信息
    note: {
      type: String,
      default: ''
    }, // Tips
    thumbnail: {
      type: String,
      default: ''
    }, // 缩略图
    // 卡片模式 ， 可选值 basic：基础卡片 ；style ：图文卡片 ； title ：标题卡片
    mode: {
      type: String,
      default: 'basic'
    },
    isFull: {
      // 内容区域是否通栏
      type: Boolean,
      default: false
    },
    isShadow: {
      // 是否开启阴影
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
$card-extra-width: 30%;
$uni-spacing-marign: 24upx;

@mixin text-omit {
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

.uni-card {
	margin-left: $uni-spacing-marign;
	margin-right: $uni-spacing-marign;
	background: $uni-bg-color;
	box-shadow: none;
	position: relative;
	display: flex;
	flex-direction: column;
	border: 1px #ddd solid;
	border-radius: 6upx;
	overflow: hidden;

	&__thumbnailimage {
		position: relative;
		height: 300upx;

		image {
			width: 100%;
			height: 100%;
		}

		&-title {
			position: absolute;
			bottom: 0;
			padding: 15upx 20upx;
			font-size: 32upx;
			width: 100%;
			color: #fff;
		}
	}

	&__title {
		display: flex;
		padding: 20upx;
		border-bottom: 1px #f5f5f5 solid;

		&-header {
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			overflow: hidden;
			border-radius: 10upx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		&-content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 20upx;
			height: 80upx;
			overflow: hidden;

			&-title {
				font-size: 30upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			&-extra {
				font-size: 26upx;
				color: #999;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}

	&__header {
		position: relative;
		display: flex;
		flex-direction: row;
		padding: $uni-spacing-col-base;
		align-items: center;
	}

	&__header {
		&:after {
			position: absolute;
			bottom: 0;
			right: 0;
			left: 0;
			height: 1px;
			content: '';
			-webkit-transform: scaleY(0.5);
			transform: scaleY(0.5);
			background-color: $uni-border-color;
		}

		&-title {
			flex: 1;
			margin-right: $uni-spacing-col-base;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;

			&-text {
				font-size: $uni-font-size-lg;
				flex: 1;
				@include text-omit;
			}
		}

		&-extra {
			&-img-view {
				display: flex;
			}

			&-img {
				height: $uni-img-size-sm;
				width: $uni-img-size-sm;
				margin-right: $uni-spacing-col-base;
			}

			&-text {
				flex: 0 0 auto;
				width: $card-extra-width;
				margin-left: $uni-spacing-col-base;
				font-size: $uni-font-size-base;
				text-align: right;
				color: #666;
				@include text-omit;
			}
		}
	}

	&__content {
		color: #555;
		&--pd {
			padding: $uni-spacing-col-base;
		}

		&-extra {
			padding-bottom: 20upx;
			color: #999;
		}
	}

	&__footer {
		// justify-content: space-between;
		padding: 20upx;
		color: $uni-text-color-grey;
		font-size: $uni-font-size-sm;
		border-top: 1px #f5f5f5 solid;
	}

	&--shadow {
		border: 1px #ddd solid;
		box-shadow: 0px 1px 2px rgba($color: #000000, $alpha: 0.2);
		&:after {
			border: none;
		}
	}

	&--full {
		margin: 0;
		border-left: none;
		border-right: none;
		border-radius: 0;
		// &:after {
		// 	border-left: none;
		// 	border-right: none;
		// 	border-radius: 0;
		// }
	}
}
</style>
