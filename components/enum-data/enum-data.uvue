<script setup lang="uts">
import { ItemType } from './enum-data-types'
import { state } from '@/store/index.uts'

const emit = defineEmits(['change'])
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  items: {
    type: Array as PropType<Array<ItemType>>,
    required: true
  }
})

const isDarkMode = computed(() => state.isDarkMode)
const current = ref(0)

// @ts-ignore
function _change(e : RadioGroupChangeEvent) {
  const selected = props.items.find((item : ItemType) : boolean => {
    return item.value.toString() == e.detail.value
  })
  if (selected != null) {
    emit('change', selected.value)
    uni.showToast({
      icon: 'none',
      title: '当前选中:' + selected.name,
    })
  }
}
</script>

<template>
  <view class="uni-padding-wrap" :class="isDarkMode ? 'theme-dark' : 'theme-light'">
    <view class="uni-title uni-common-mt">
      <text class="uni-title-text"> {{title}} </text>
    </view>
  </view>
  <view class="uni-list uni-common-pl" :class="isDarkMode ? 'theme-dark' : 'theme-light'">
    <radio-group @change="_change">
      <radio class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.name"
        :class="index < items.length - 1 ? 'uni-list-cell-line' : ''"
         :value="item.value + ''" :color="isDarkMode ? '#a8a8b7' : '#007AFF'">
        <text class="radio-text">{{ item.name }}</text>
      </radio>
    </radio-group>
  </view>
</template>

<style>
.uni-list .radio-text {
  color: var(--text-color, #333333);
}
</style>
