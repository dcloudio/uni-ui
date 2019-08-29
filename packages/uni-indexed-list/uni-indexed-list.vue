<template>
  <view class="uni-indexed">
    <scroll-view
      :scroll-into-view="scrollViewId"
      :style="{ height: winHeight + 'px' }"
      class="uni-indexed__list"
      scroll-y>
      <block
        v-for="(list, idx) in lists"
        :key="idx">
        <view
          v-if="list.items && list.items.length > 0"
          :id="'uni-indexed-list-' + list.key"
          class="uni-indexed__list-title">{{ list.key }}</view>
        <view
          v-if="list.items && list.items.length > 0"
          class="uni-list">
          <view
            v-for="(item, index) in list.items"
            :key="index"
            class="uni-list-item"
            hover-class="uni-list-item--hover">
            <view
              class="uni-list-item__container"
              @click="onClick(idx, index)">
              <view
                v-if="showSelect"
                style="margin-right: 20upx;">
                <uni-icons
                  :type="item.checked ? 'checkbox-filled' : 'circle'"
                  :color="item.checked ? '#007aff' : '#aaa'"
                  size="24" />
              </view>
              <view class="uni-list-item__content">{{ item.name }}</view>
            </view>
          </view>
        </view>
      </block>
    </scroll-view>
    <view
      :class="touchmove ? 'active' : ''"
      :style="{ height: winHeight + 'px' }"
      class="uni-indexed__menu"
      @touchstart="touchStart"
      @touchmove.stop.prevent="touchMove"
      @touchend="touchEnd"
    >
      <text
        v-for="(list, key) in lists"
        :key="key"
        :class="touchmoveIndex == key ? 'active' : ''"
        :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
        class="uni-indexed__menu-item"
      >
        {{ list.key }}
      </text>
    </view>
    <view
      v-if="touchmove"
      class="uni-indexed--alert">{{ lists[touchmoveIndex].key }}</view>
  </view>
</template>
<script>
import uniIcons from '../uni-icons/uni-icons.vue'
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
  data () {
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
      handler: function () {
        this.setList()
      },
      deep: true
    }
  },
  created () {
    this.setList()
  },
  methods: {
    setList () {
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
    touchStart (e) {
      this.touchmove = true
      let pageY = e.touches[0].pageY
      let index = Math.floor(pageY / this.itemHeight)
      let item = this.lists[index]
      if (item) {
        this.scrollViewId = 'uni-indexed-list-' + item.key
        this.touchmoveIndex = index
      }
    },
    touchMove (e) {
      let pageY = e.touches[0].pageY
      let index = Math.floor(pageY / this.itemHeight)
      let item = this.lists[index]
      if (item) {
        this.scrollViewId = 'uni-indexed-list-' + item.key
        this.touchmoveIndex = index
      }
    },
    touchEnd () {
      this.touchmove = false
      this.touchmoveIndex = -1
    },
    onClick (idx, index) {
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
.uni-list {
	background-color: $uni-bg-color;
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;

	&::after {
		position: absolute;
		z-index: 10;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		background-color: $uni-border-color;
	}

	&::before {
		position: absolute;
		z-index: 10;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		background-color: $uni-border-color;
	}

	&-item {
		font-size: $uni-font-size-lg;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		&__container {
			padding: $uni-spacing-col-lg $uni-spacing-row-lg;
			width: 100%;
			box-sizing: border-box;
			flex: 1;
			position: relative;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			&:after {
				position: absolute;
				z-index: 3;
				right: 0;
				bottom: 0;
				left: 30upx;
				height: 1px;
				content: '';
				-webkit-transform: scaleY(0.5);
				transform: scaleY(0.5);
				background-color: $uni-border-color;
			}
		}
	}
}

.uni-indexed {
	display: flex;
	flex-direction: row;

	&__list {
		flex: 1;
		height: 100vh;

		&-title {
			padding: 10upx 24upx;
			line-height: 1.5;
			background-color: #f7f7f7;
			font-size: $uni-font-size-sm;
		}
	}

	&__menu {
		width: 46upx;
		height: 100vh;
		background-color: lightgrey;
		display: flex;
		flex-direction: column;

		&.active {
			background-color: rgb(200, 200, 200);

			.uni-indexed__menu-item {
				color: #333;

				&.active {
					color: #007aff;
				}
			}
		}

		&-item {
			color: #aaa;
			font-size: 22upx;
			text-align: center;
		}
	}

	&--alert {
		position: absolute;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		z-index: 20;
		width: 160upx;
		height: 160upx;
		left: 50%;
		top: 50%;
		margin-left: -80upx;
		margin-top: -80upx;
		border-radius: 80upx;
		text-align: center;
		font-size: 70upx;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.5);
	}
}
</style>
