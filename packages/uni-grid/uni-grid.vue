<template>
  <view
    :class="{ border: showBorder }"
    class="uni-grid"><slot /></view>
</template>

<script>
export default {
  name: 'UniGrid',
  props: {
    // 每列显示个数
    column: {
      type: Number,
      default: 3
    },
    // 是否显示边框
    showBorder: {
      type: Boolean,
      default: true
    },
    // 全局标记水平方向移动距离 ，起点为中心，负数为左移动，正数为右移动
    hor: {
      type: Number,
      default: 0
    },
    // 全局标记垂直方向移动距离 ，起点为中心，负数为上移动，正数为下移动
    ver: {
      type: Number,
      default: 0
    },
    // 是否正方形显示,默认为 true
    square: {
      type: Boolean,
      default: true
    },
    highlight: {
      type: Boolean,
      default: true
    }
  },
  provide () {
    return {
      grid: this
    }
  },
  data () {
    return {
      index: 0
    }
  },
  created () {
    this.index = 0
    this.childrens = []
  },
  methods: {
    change (e) {
      this.$emit('change', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.uni-grid {
	display: flex;
	flex-wrap: wrap;
	box-sizing: border-box;
	.uni-grid-item {
		box-sizing: border-box;
		&__box {
			position: relative;
			width: 100%;
			&-item {
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				width: 100%;
				height: 100%;
				font-size: 32upx;
				color: #666;
				padding: 20upx 0;
				box-sizing: border-box;
				&-image {
					width: 50upx;
					height: 50upx;
				}
				&-text {
					font-size: 26upx;
					margin-top: 10upx;
				}
			}
			&.uni-grid-item__box-square {
				height: 0;
				padding-top: 100%;
				& .uni-grid-item__box-item {
					position: absolute;
					top: 0;
				}
			}
			&.border {
				position: relative;
				border-left: 1px #d0dee5 solid;
				&::after {
					content: '';
					position: absolute;
					top: 0%;
					bottom: 0%;
					left: 0%;
					right: 0%;
					border-right: 1px #d0dee5 solid;
					border-bottom: 1px #d0dee5 solid;
				}
			}
			&.border-top {
				border-top: 1px #d0dee5 solid;
			}
			&.uni-highlight:active {
				background-color: #eee;
			}
		}
	}
}
</style>
