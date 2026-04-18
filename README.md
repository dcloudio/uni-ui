# 项目介绍
uni-ui x，是DCloud为 uni-app x 提供的扩展组件库。

uni-ui x 是全新设计的，与为uni-app做的uni ui不同。

# 设计原则
- 性能
uni-ui x 非常注重性能，在DOM层级控制、包体积、代码执行时间方面精益求精。

- 完全的自定义样式 - 基于externalClass

传统的组件把样式封装在组件属性上，造成用户需要自定义样式时无限封装属性，并且这些属性的控制无法使用css变量。

如果不能满足自定义需求，就要查看组件内部的类名进行强制覆盖，甚至修改组件源码。

uni-ui x 的所有样式，都不封装在组件属性上，属性只控制逻辑功能。
* 组件的根节点样式，可以在使用组件时的组件class或style上设置。
* 组件的子节点样式，可以通过externalClass设置样式。子组件开放自己的样式出来，外部可通过externalClass进行子组件的样式自定义。

组件使用者完全可以通过css自己控制所有样式。无需修改组件源码。加上css变量加持，灵活度远高于其他组件库。

- 优先代码而不是二进制文件
uni-ui x 目前没有引入字体文件。这处于性能考虑，也出于AI友好度考虑。

以箭头为例，uni-ui x 中使用一个view配置左下边框并transform旋转来实现，这种设计性能比字体更好，且AI可以方便的理解这段代码的UI表现，可以在代码层面调整样式。

如果是字体图片，AI很难生成、也很难理解。

再举一个例子，uni-tab下沉midbutton，涉及一个贝塞尔曲线，此时没有使用图片，而是使用svg，同样是为了方便AI理解和修改。

- UI上出现的文字均可自定义
没有写死的文字，不影响国际化。

# uni-ui的升级建议@uniuiupgrade
为uni-app提供的uni-ui，升级到uni-app x时无法直接对照升级，因为组件名称、属性都有变化。

但升级时，老版uni-ui组件在uni-app x下同等功能的新组件是什么，映射说明如下：

|uni-ui组件						|中文名称								|在uni-app x下的方案																	|
|--										|--											|--																									|
|uni-badge						|数字角标								|改用uni-badge-view																	|
|uni-calendar					|日历										|见hello uni-app x里的模板中的日历页面								|
|uni-card							|卡片										|无																									|
|uni-collapse					|折叠面板								|改用uni-collapse																		|
|uni-combox						|组合框									|无																									|
|uni-countdown				|倒计时									|无																									|
|uni-data-checkbox		|数据选择器							|无																									|
|uni-data-picker			|数据驱动的picker选择器	|组件本身支持uni-app x																|
|uni-dateformat				|日期格式化							|改用uni-time-format																	|
|uni-datetime-picker	|日期选择器							|内置组件picker支持mode=date													|
|uni-drawer						|抽屉										|改用内置组件page-container													|
|uni-easyinput				|增强输入框							|无																									|
|uni-fab							|悬浮按钮								|改用uni-fab-button																	|
|uni-fav							|收藏按钮								|无																									|
|uni-file-picker			|文件选择上传						|无																									|
|uni-forms						|表单										|改用内置组件form																		|
|uni-goods-nav				|商品导航								|无																									|
|uni-grid							|宫格										|无																									|
|uni-group						|分组										|无																									|
|uni-icons						|图标										|无																									|
|uni-indexed-list			|索引列表								|改用uni-index-bar																		|
|uni-link							|超链接									|改用uni-link																				|
|uni-list							|列表										|使用内置组件list																		|
|uni-load-more				|加载更多								|使用内置组件loading																	|
|uni-nav-bar					|自定义导航栏						|改用uni-nav-bar																			|
|uni-notice-bar				|通告栏									|无																									|
|uni-number-box				|数字输入框							|改用uni-number-box																	|
|uni-pagination				|分页器									|无																									|
|uni-popup						|弹出层									|改用内置组件page-container													|
|uni-rate							|评分										|改用uni-rate																				|
|uni-row							|布局-行									|无																									|
|uni-search-bar				|搜索栏									|无																									|
|uni-segmented-control|分段器									|无																									|
|uni-steps						|步骤条									|无																									|
|uni-swipe-action			|滑动操作								|参考hello uni-app x模板中可左滑删除长列表示例				|
|uni-swiper-dot				|轮播图指示点						|改用内置组件swiper，通过externalClass控制指示点样式	|
|uni-table						|表格										|推荐使用rich-text或web-view中的table。																									|
|uni-tag							|标签										|无																									|
|uni-title						|章节标题								|无																									|
|uni-transition				|过渡动画								|无																									|

标记为`无`的，大多比较简单，对于AI而言直接写相关UI比下载学习一个组件更合适。

