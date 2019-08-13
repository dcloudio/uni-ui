
import * as uniBadge/uniBadge.vue from './uni-badge/uni-badge.vue'
import * as uniCalendar/uniCalendarItem.vue from './uni-calendar/uni-calendar-item.vue'
import * as uniCalendar/uniCalendar.vue from './uni-calendar/uni-calendar.vue'
import * as uniCard/uniCard.vue from './uni-card/uni-card.vue'
import * as uniCollapseItem/uniCollapseItem.vue from './uni-collapse-item/uni-collapse-item.vue'
import * as uniCollapse/uniCollapse.vue from './uni-collapse/uni-collapse.vue'
import * as uniCountDown/uniCountDown.vue from './uni-count-down/uni-count-down.vue'
import * as uniDrawer/uniDrawer.vue from './uni-drawer/uni-drawer.vue'
import * as uniFab/uniFab.vue from './uni-fab/uni-fab.vue'
import * as uniGridItem/uniGridItem.vue from './uni-grid-item/uni-grid-item.vue'
import * as uniGrid/uniGrid.vue from './uni-grid/uni-grid.vue'
import * as uniIcon/uniIcon.1.vue from './uni-icon/uni-icon.1.vue'
import * as uniIcon/uniIcon.vue from './uni-icon/uni-icon.vue'
import * as uniIndexedList/uniIndexedList.vue from './uni-indexed-list/uni-indexed-list.vue'
import * as uniListItem/uniListItem.vue from './uni-list-item/uni-list-item.vue'
import * as uniList/uniList.vue from './uni-list/uni-list.vue'
import * as uniLoadMore/uniLoadMore.vue from './uni-load-more/uni-load-more.vue'
import * as uniNavBar/uniNavBar.vue from './uni-nav-bar/uni-nav-bar.vue'
import * as uniNoticeBar/uniNoticeBar.vue from './uni-notice-bar/uni-notice-bar.vue'
import * as uniNumberBox/uniNumberBox.vue from './uni-number-box/uni-number-box.vue'
import * as uniPagination/uniPagination.vue from './uni-pagination/uni-pagination.vue'
import * as uniPopup/uniPopup.vue from './uni-popup/uni-popup.vue'
import * as uniRate/uniRate.vue from './uni-rate/uni-rate.vue'
import * as uniSegmentedControl/uniSegmentedControl.vue from './uni-segmented-control/uni-segmented-control.vue'
import * as uniStatusBar/uniStatusBar.vue from './uni-status-bar/uni-status-bar.vue'
import * as uniSteps/uniSteps.vue from './uni-steps/uni-steps.vue'
import * as uniSwipeAction/uniSwipeAction.vue from './uni-swipe-action/uni-swipe-action.vue'
import * as uniSwiperDot/uniSwiperDot.vue from './uni-swiper-dot/uni-swiper-dot.vue'
import * as uniTag/uniTag.vue from './uni-tag/uni-tag.vue'
export {
  uniBadge/uniBadge.vue,
  uniCalendar/uniCalendarItem.vue,
  uniCalendar/uniCalendar.vue,
  uniCard/uniCard.vue,
  uniCollapseItem/uniCollapseItem.vue,
  uniCollapse/uniCollapse.vue,
  uniCountDown/uniCountDown.vue,
  uniDrawer/uniDrawer.vue,
  uniFab/uniFab.vue,
  uniGridItem/uniGridItem.vue,
  uniGrid/uniGrid.vue,
  uniIcon/uniIcon.1.vue,
  uniIcon/uniIcon.vue,
  uniIndexedList/uniIndexedList.vue,
  uniListItem/uniListItem.vue,
  uniList/uniList.vue,
  uniLoadMore/uniLoadMore.vue,
  uniNavBar/uniNavBar.vue,
  uniNoticeBar/uniNoticeBar.vue,
  uniNumberBox/uniNumberBox.vue,
  uniPagination/uniPagination.vue,
  uniPopup/uniPopup.vue,
  uniRate/uniRate.vue,
  uniSegmentedControl/uniSegmentedControl.vue,
  uniStatusBar/uniStatusBar.vue,
  uniSteps/uniSteps.vue,
  uniSwipeAction/uniSwipeAction.vue,
  uniSwiperDot/uniSwiperDot.vue,
  uniTag/uniTag.vue
}
const install = function(Vue, options) {
  const components = require.context('./', true, /.vue$/)
  components.keys().forEach(fileName => {
    const componentConfig = components(fileName)['default']
    Vue.component(componentConfig.name, componentConfig)
  })
}
export default install
