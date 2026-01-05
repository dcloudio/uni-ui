<template>
  <view slot="refresher" class="uni-refresh-box-buildin"> <!-- TODO 鸿蒙需要在这个view上补属性slot="refresher"，不认外层传入-->
    <slot name="loading" :state="currentState">
      <loading ref="loadingRef" :paused="currentState != 2" class="uni-loading-class-buildin" :class="loadingClass"></loading>
			<!-- TODO Android的loading第1次设置paused为false不生效，第2次才有用 -->
    </slot>
    <text class="uni-text-class-buildin" :class="textClass">{{ tipText }}</text>
  </view>
</template>

<script setup lang="uts">
defineOptions({
	externalClasses: ['loading-class', 'text-class']
})

// Props
const props = defineProps({
  // 下拉距离（由外部 scroll-view 传入）
  pullingDistance: {
    type: Number,
    default: 0
  },
  // 是否正在刷新
  refreshing: {
    type: Boolean,
    default: false
  },
  // 触发刷新的下拉阈值(px)
  threshold: {
    type: Number,
    default: 45
  },
  // 下拉过程中的提示文字
  pullingText: {
    type: String,
    default: '下拉刷新'
  },
  // 下拉超过阈值的提示文字
  loosingText: {
    type: String,
    default: '松手刷新'
  },
  // 刷新中的提示文字
  loadingText: {
    type: String,
    default: '正在刷新'
  },
  // 刷新完成的提示文字
  completeText: {
    type: String,
    default: ''
  },
  // 文字样式
  textClass: {
    type: String,
    default: ''
  },
  // loading 样式
  loadingClass: {
    type: String,
    default: ''
  }
})

// Data
const loadingRef = ref<UniElement | null>(null)
const resetting = ref(false)

// 状态：0-下拉中 1-松手可刷新 2-刷新中 3-刷新完成
const currentState = computed((): number => {
  if (resetting.value) {
    return 3
  }
  if (props.refreshing) {
    return 2
  }
  if (props.pullingDistance > props.threshold) {
    return 1
  }
	// console.log(0)
  return 0
})

// 提示文字
const tipText = computed((): string => {
  switch (currentState.value) {
    case 0:
      return props.pullingText
    case 1:
      return props.loosingText
    case 2:
      return props.loadingText
    case 3:
      return props.completeText
    default:
      return props.pullingText
  }
})

// 监听外部 refreshing 变化
watch((): boolean => props.refreshing, (newVal: boolean, oldVal: boolean) => {
  if (!newVal && oldVal) {
    // 外部结束刷新，显示完成状态
    resetting.value = true
    setTimeout(() => {
      resetting.value = false
    }, 300)
  }
})

// 更新 loading 旋转角度
watch((): number => props.pullingDistance, (distance: number) => {
  const el = loadingRef.value
	// console.log(el?.style);
  if (el != null && !props.refreshing) {
    const maxDistance = 200
    const maxRotation = 540
    const rotation = Math.min((distance / maxDistance) * maxRotation, maxRotation)
    el.style.setProperty('transform', `rotate(${rotation}deg)`)
  }
})

// 暴露状态给外部
defineExpose({
  currentState
})
</script>

<style>
.uni-refresh-box-buildin {
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 30px;
}

.uni-loading-class-buildin {
  width: 14px;
  height: 14px;
  border-color: #888;
}

.uni-text-class-buildin {
  color: #888;
  font-size: 14px;
  margin-left: 4px;
}
</style>
