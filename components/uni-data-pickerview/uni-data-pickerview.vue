<template>
  <view class="uni-data-pickerview">
    <scroll-view class="selected-area" scroll-x="true">
      <view class="selected-list">
        <view class="selected-item" :class="{'selected-item-active':index==tabIndex}" v-for="(item,index) in selected"
          :key="index" v-if="item.text" @click="handleSelect(index)">
          <text class="">{{item.text}}</text>
        </view>
      </view>
    </scroll-view>
    <view class="tab-c">
      <scroll-view class="list" v-for="(child, i) in dataList" :key="i" v-if="i==tabIndex" scroll-y="false">
        <view class="item" v-for="(item, j) in child" :key="j" @click="handleNode(i, j)">
          <text class="item-text">{{item.text}}</text>
          <view class="check" v-if="selected.length > i && item.value == selected[i].value"></view>
        </view>
      </scroll-view>
      <view class="loading-cover" v-if="loading">
        <uni-load-more class="load-more" :contentText="loadMore" status="loading"></uni-load-more>
      </view>
      <view class="error-message" v-if="errorMessage">
        <text class="error-text">{{errorMessage}}</text>
      </view>
    </view>
  </view>
</template>

<script>
  import DataPicker from "./uni-data-picker.js"
  import DataPickerProps from "./uni-data-picker-props.js"

  /**
   * uni-data-pickerview
   * @description uni-data-pickerview
   * @tutorial https://uniapp.dcloud.net.cn/uniCloud/uni-data-picker
   * @property {Array} localdata 本地数据，参考
   * @property {Boolean} step-searh = [true|false] 是否分布查询
   * @value true 启用分布查询，仅查询当前选中节点
   * @value false 关闭分布查询，一次查询出所有数据
   * @property {String|DBFieldString} self-field 分布查询当前字段名称
   * @property {String|DBFieldString} parent-field 分布查询父字段名称
   * @property {Boolean} array2tree = [true|false] 是否查询出树结构数据
   * @value true 
   * @value false 
   * @property {String|DBCollectionString} collection 表名
   * @property {String|DBFieldString} field 查询字段，多个字段用 `,` 分割
   * @property {String} orderby 排序字段及正序倒叙设置
   * @property {String|JQLString} where 查询条件
   */
  export default {
    name: 'UniDataPickerView',
    mixins: [DataPickerProps],
    props: {
      managedMode: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        selected: [],
        dataList: [],
        tabIndex: 0
      }
    },
    created() {
      this._dataPicker = new DataPicker()
      DataPicker.Properties.forEach((p) => {
        this._dataPicker[p] = this[p]
      })
      this._dataPicker.onloading = (e) => {
        this.loading = e
      }
      this._dataPicker.onerror = (e) => {
        this.errorMessage = e
      }
      this._dataPicker.onchange = this.onDataPickerChange.bind(this)

      this.$watch(() => {
        var al = []
        this._attrs.forEach(key => {
          al.push(this[key])
        })
        return al
      }, (newValue, oldValue) => {
        this._dataPicker.reset()
        DataPicker.Properties.forEach((p) => {
          this._dataPicker[p] = this[p]
        })
        this.loadData()
      })

      if (this.managedMode) {
        return
      }

      if (this.value.length) {
        this._dataPicker.getTreePath((res) => {
          this.loadData()
        })
      } else {
        this.loadData()
      }
    },
    methods: {
      loadData() {
        this.errorMessage = ''
        this._dataPicker.loadData(() => {})
      },
      updateDataPicker(options) {
        this._dataPicker.value = options.value
        this._dataPicker.treeData = options.treeData
        this._dataPicker.dataList = options.dataList
        this._dataPicker.selected = options.selected
        this._dataPicker.selectedIndex = options.selectedIndex
        this._updateData(this._dataPicker)
        if (!this._dataPicker.dataList.length) {
          this.loadData()
        }
      },
      handleSelect(index) {
        this.tabIndex = index
        this.$emit('tabindex', index)
      },
      handleNode(i, j) {
        this._dataPicker.selectedNode(i, j)
      },
      onDataPickerChange(e, isLeaf) {
        this._updateData(this._dataPicker)
        this.$emit('datachange', this._dataPicker)
        if (isLeaf) {
          this._dispatchEvent()
        } else if (e) {
          this.$emit('nodeclick', e)
        }
      },
      _updateData(dataPicker) {
        this.dataList = dataPicker.dataList
        this.selected = dataPicker.selected
        this.tabIndex = dataPicker.selectedIndex
      },
      _dispatchEvent() {
        const data = this._dataPicker.selected.slice(0)
        this.$emit('change', { detail: { value: data } })
      }
    }
  }
</script>

<style scoped>
  .uni-data-pickerview {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .error-text {
    color: #DD524D;
  }
  
  .loading-cover {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, .5);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1001;
  }

  .load-more {
    margin: auto;
  }
  
  .error-message {
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 15px;
    opacity: .9;
    z-index: 102;
  }

  .selected-list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0 5px;
    border-bottom: 1px solid #f8f8f8;
  }

  .selected-item {
    margin-left: 10px;
    margin-right: 10px;
    padding: 12px 0;
  }

  .selected-item-active {
    border-bottom: 2px solid #007aff;
  }

  .selected-item-text {
    color: #007aff;
  }

  .tab-c {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  .list {
    flex: 1;
    height: 100%;
  }

  .item {
    padding: 12px 15px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    flex-direction: row;
  }

  .item-text {
    flex: 1;
    color: #333333;
  }

  .check {
    margin-right: 5px;
    border: 2px solid #007aff;
    border-left: 0;
    border-top: 0;
    height: 12px;
    width: 6px;
    transform-origin: center;
    transition: all 0.3s;
    transform: rotate(45deg);
  }
</style>
