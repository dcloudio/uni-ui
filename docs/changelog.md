
# 更新日志 

## 发布周期
- 修订版本号：每周末会进行日常 bugfix 更新。**如果有紧急的 bugfix，则任何时候都可发布**
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。

<!-- 更新占位 -->
<log title="1.3.3" date="2021-06-18">
	<log-item title="uni-easyinput 组件更新">
		<log-item-text tag-type="feat">
			 passwordIcon 属性，当type=password时是否显示小眼睛图标
		</log-item-text>
		<log-item-text tag-type="fix">
			 confirmType 属性不生效的问题
		</log-item-text>
		<log-item-text tag-type="fix">
			 disabled 状态可清出内容的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-file-picker 组件更新">
		<log-item-text tag-type="fix">
			 删除文件时无法触发 v-model 的Bug
		</log-item-text>
	</log-item>
	<log-item title="uni-popup 组件更新">
		<log-item-text tag-type="fix">
			 H5平台中间弹出后，点击内容，再点击遮罩无法关闭的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 错误的 watch 字段
		</log-item-text>
		<log-item-text tag-type="fix">
			 safeArea 属性不生效的问题
		</log-item-text>
		<log-item-text tag-type="fix">
			 点击内容，再点击遮罩无法关闭的Bug
		</log-item-text>
	</log-item>
</log>

<log title="1.3.2" date="2021-06-04">
	<log-item title="uni-data-checkbox 组件更新">
		<log-item-text tag-type="feat">
			 map 属性，可以方便映射text/value属性
		</log-item-text>
		<log-item-text tag-type="fix">
			 不关联服务空间的情况下组件报错的Bug
		</log-item-text>
	</log-item>
	<log-item title="uni-data-picker 组件更新">
		<log-item-text tag-type="fix">
			 无法加载云端数据的问题
		</log-item-text>
		<log-item-text tag-type="fix">
			 v-model无效问题
		</log-item-text>
		<log-item-text tag-type="fix">
			 loaddata 为空数据组时加载时间过长问题
		</log-item-text>
		<log-item-text tag-type="fix">
			 上个版本引出的本地数据无法选择带有children的2级节点
		</log-item-text>
	</log-item>
	<log-item title="uni-datetime-picker 组件更新">
		<log-item-text tag-type="fix">
			 图标在小程序上不显示的 bug
		</log-item-text>
		<log-item-text tag-type="perf">
			 重命名引用组件，避免潜在组件命名冲突
		</log-item-text>
		<log-item-text tag-type="perf">
			 代码目录扁平化
		</log-item-text>
	</log-item>
	<log-item title="uni-forms 组件更新">
		<log-item-text tag-type="fix">
			 动态删减数据导致报错的问题
		</log-item-text>
		<log-item-text tag-type="feat">
			 modelValue 属性 ，value 即将废弃
		</log-item-text>
		<log-item-text tag-type="feat">
			 uni-forms-item 可以设置单独的 rules
		</log-item-text>
		<log-item-text tag-type="feat">
			 validate 事件增加 keepitem 参数，可以选择那些字段不过滤
		</log-item-text>
		<log-item-text tag-type="perf">
			 submit 事件重命名为 validate
		</log-item-text>
	</log-item>
	<log-item title="uni-tag 组件更新">
		<log-item-text tag-type="fix">
			 未定义 sass 变量 "$uni-color-royal" 的bug
		</log-item-text>
	</log-item>
</log>

<log title="1.3.1" date="2021-05-14">
	<log-item title="uni-badge 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
		<log-item-text tag-type="feat">
			 uni-badge 的 absolute 属性，支持定位
		</log-item-text>
		<log-item-text tag-type="feat">
			 uni-badge 的 offset 属性，支持定位偏移
		</log-item-text>
		<log-item-text tag-type="feat">
			 uni-badge 的 is-dot 属性，支持仅显示有一个小点
		</log-item-text>
		<log-item-text tag-type="feat">
			 uni-badge 的 max-num 属性，支持自定义封顶的数字值，超过 99 显示99+
		</log-item-text>
		<log-item-text tag-type="perf">
			 uni-badge 属性 custom-style， 支持以对象形式自定义样式
		</log-item-text>
		<log-item-text tag-type="fix">
			 uni-badge 在 App 端，数字小于10时不是圆形的bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 uni-badge 在父元素不是 flex 布局时，宽度缩小的bug
		</log-item-text>
		<log-item-text tag-type="feat">
			 uni-badge 属性 custom-style， 支持自定义样式
		</log-item-text>
	</log-item>
	<log-item title="uni-calendar 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-card 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-collapse 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-combox 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-countdown 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
		<log-item-text tag-type="fix">
			 uni-countdown 不能控制倒计时的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-data-checkbox 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-data-picker 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-dateformat 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-datetime-picker 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
		<log-item-text tag-type="fix">
			 ios 下不识别 '-' 日期格式的 bug
		</log-item-text>
		<log-item-text tag-type="perf">
			 pc 下弹出层添加边框和阴影
		</log-item-text>
		<log-item-text tag-type="fix">
			 在 admin 中获取弹出层定位错误的bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 type 属性向下兼容，默认值从 date 变更为 datetime
		</log-item-text>
		<log-item-text tag-type="perf">
			 支持日历形式的日期+时间的范围选择
		</log-item-text>
	</log-item>
	<log-item title="uni-drawer 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-fab 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-fav 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-file-picker 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-forms 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
		<log-item-text tag-type="fix">
			 自定义检验器失效的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-goods-nav 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-grid 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-group 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-icons 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-indexed-list 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-link 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
		<log-item-text tag-type="feat">
			 href 属性支持 tel:|mailto:
		</log-item-text>
	</log-item>
	<log-item title="uni-list 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-load-more 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-notice-bar 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-number-box 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-pagination 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-popup 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
		<log-item-text tag-type="fix">
			 组件内放置 input 、textarea 组件，无法聚焦的问题
		</log-item-text>
		<log-item-text tag-type="feat">
			 type 属性的 left\right 值，支持左右弹出
		</log-item-text>
		<log-item-text tag-type="feat">
			 open(String:type) 方法参数 ，可以省略 type 属性 ，直接传入类型打开指定弹窗
		</log-item-text>
		<log-item-text tag-type="feat">
			 backgroundColor 属性，可定义主窗口背景色,默认不显示背景色
		</log-item-text>
		<log-item-text tag-type="feat">
			 safeArea 属性，是否适配底部安全区
		</log-item-text>
		<log-item-text tag-type="fix">
			 App\h5\微信小程序底部安全区占位不对的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 App 端弹出等待的Bug
		</log-item-text>
		<log-item-text tag-type="perf">
			 提升低配设备性能，优化动画卡顿问题
		</log-item-text>
		<log-item-text tag-type="perf">
			 更简单的组件自定义方式
		</log-item-text>
	</log-item>
	<log-item title="uni-rate 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-row 组件更新">
		<log-item-text tag-type="feat">
			 组件示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-search-bar 组件更新">
		<log-item-text tag-type="feat">
			 项目示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-segmented-control 组件更新">
		<log-item-text tag-type="feat">
			 项目示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-steps 组件更新">
		<log-item-text tag-type="feat">
			 项目示例地址
		</log-item-text>
		<log-item-text tag-type="fix">
			 uni-steps 横向布局时，多行文字高度不合理的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-swipe-action 组件更新">
		<log-item-text tag-type="feat">
			 项目示例地址
		</log-item-text>
	</log-item>
	<log-item title="uni-swiper-dot 组件更新">
		<log-item-text tag-type="feat">
			 示例地址
		</log-item-text>
		<log-item-text tag-type="fix">
			 示例项目缺少组件的Bug
		</log-item-text>
	</log-item>
	<log-item title="uni-table 组件更新">
		<log-item-text tag-type="feat">
			 示例地址
		</log-item-text>
		<log-item-text tag-type="fix">
			 示例项目缺少组件的Bug
		</log-item-text>
	</log-item>
	<log-item title="uni-tag 组件更新">
		<log-item-text tag-type="fix">
			 royal 类型无效的bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 uni-tag 宽度不自适应的bug
		</log-item-text>
		<log-item-text tag-type="feat">
			 uni-tag 支持属性 custom-style 自定义样式
		</log-item-text>
	</log-item>
	<log-item title="uni-title 组件更新">
		<log-item-text tag-type="feat">
			 示例地址
		</log-item-text>
		<log-item-text tag-type="fix">
			 示例项目缺少组件的Bug
		</log-item-text>
	</log-item>
	<log-item title="uni-transition 组件更新">
		<log-item-text tag-type="feat">
			 示例地址
		</log-item-text>
		<log-item-text tag-type="fix">
			 示例项目缺少组件的Bug
		</log-item-text>
	</log-item>
</log>

<log title="1.2.14" date="2021-04-23">
	<log-item title="uni-combox 组件更新">
		<log-item-text tag-type="perf">
			 添加依赖 uni-icons, 导入后自动下载依赖
		</log-item-text>
	</log-item>
	<log-item title="uni-data-picker 组件更新">
		<log-item-text tag-type="fix">
			 非树形数据有 where 属性查询报错的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-fav 组件更新">
		<log-item-text tag-type="perf">
			 添加依赖 uni-icons, 导入后自动下载依赖
		</log-item-text>
	</log-item>
	<log-item title="uni-goods-nav 组件更新">
		<log-item-text tag-type="perf">
			 添加依赖 uni-icons, 导入后自动下载依赖
		</log-item-text>
	</log-item>
	<log-item title="uni-nav-bar 组件更新">
		<log-item-text tag-type="perf">
			 添加依赖 uni-icons, 导入后自动下载依赖
		</log-item-text>
	</log-item>
	<log-item title="uni-notice-bar 组件更新">
		<log-item-text tag-type="perf">
			 添加依赖 uni-icons, 导入后自动下载依赖
		</log-item-text>
	</log-item>
	<log-item title="uni-number-box 组件更新">
		<log-item-text tag-type="fix">
			 uni-number-box 浮点数运算不精确的 bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 uni-number-box change 事件触发不正确的 bug
		</log-item-text>
		<log-item-text tag-type="feat">
			 uni-number-box v-model 双向绑定
		</log-item-text>
	</log-item>
	<log-item title="uni-rate 组件更新">
		<log-item-text tag-type="fix">
			 布局变化后 uni-rate  星星计算不准确的 bug
		</log-item-text>
		<log-item-text tag-type="perf">
			 添加依赖 uni-icons, 导入 uni-rate 自动下载依赖
		</log-item-text>
	</log-item>
	<log-item title="uni-search-bar 组件更新">
		<log-item-text tag-type="perf">
			 添加依赖 uni-icons, 导入后自动下载依赖
		</log-item-text>
	</log-item>
	<log-item title="uni-steps 组件更新">
		<log-item-text tag-type="perf">
			 添加依赖 uni-icons, 导入后自动下载依赖
		</log-item-text>
	</log-item>
	<log-item title="uni-transition 组件更新">
		<log-item-text tag-type="feat">
			 通过方法自定义动画
		</log-item-text>
		<log-item-text tag-type="feat">
			 custom-class 非 NVUE 平台支持自定义 class 定制样式
		</log-item-text>
		<log-item-text tag-type="perf">
			 动画触发逻辑，使动画更流畅
		</log-item-text>
		<log-item-text tag-type="perf">
			 支持单独的动画类型
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档示例
		</log-item-text>
	</log-item>
</log>


<log title="1.2.13" date="2021-04-14">
	<log-item title="uni-data-checkbox 组件更新">
		<log-item-text tag-type="fix">
			 nvue 下无法选中的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-data-picker 组件更新">
		<log-item-text tag-type="feat">
			 支持云端非树形表结构数据
		</log-item-text>
		<log-item-text tag-type="fix">
			 根节点 parent_field 字段等于null时选择界面错乱问题
		</log-item-text>
	</log-item>
	<log-item title="uni-file-picker 组件更新">
		<log-item-text tag-type="fix">
			 选择的文件非 file-extname 字段指定的扩展名报错的Bug
		</log-item-text>
		<log-item-text tag-type="perf">
			 更新组件示例
		</log-item-text>
		<log-item-text tag-type="perf">
			 file-extname 字段支持字符串写法，多个扩展名需要用逗号分隔
		</log-item-text>
	</log-item>
	<log-item title="uni-pagination 组件更新">
		<log-item-text tag-type="feat">
			 PC 和 移动端适配不同的 ui
		</log-item-text>
	</log-item>
	<log-item title="uni-date-picker 组件更新">
		<log-item-text tag-type="perf">
			 发布第一版
		</log-item-text>
	</log-item>
	<log-item title="uni-data-picker 组件更新">
		<log-item-text tag-type="fix">
			 本地数据概率无法回显时问题
		</log-item-text>
	</log-item>
	<log-item title="uni-nav-bar 组件更新">
		<log-item-text tag-type="perf">
			 uni-ui 修复 uni-nav-bar 当 fixed 属性为 true 时铺不满屏幕的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-rate 组件更新">
		<log-item-text tag-type="fix">
			 uni-rate 属性 margin 值为 string 组件失效的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-search-bar 组件更新">
		<log-item-text tag-type="perf">
			 uni-ui 新增 uni-search-bar 的 focus 事件
		</log-item-text>
	</log-item>
	<log-item title="uni-table 组件更新">
		<log-item-text tag-type="feat">
			 sortable 属性，是否开启单列排序
		</log-item-text>
		<log-item-text tag-type="perf">
			 表格多选逻辑
		</log-item-text>
	</log-item>
</log>

<log title="组件工程调整" date="2020-02-05">
	<log-item-text tag-type="docs" only>
		支持uni_modules
	</log-item-text>
</log>

<log title="1.2.11" date="2021-1-19">
	<log-item-text tag-type="feat" only>
		<highlight text="uni-row" /> 栅格系统
	</log-item-text>
	<log-item-text tag-type="feat" only>
		<highlight text="uni-data-picker" /> 数据驱动的picker选择器
	</log-item-text>
	<log-item-text tag-type="feat" only>
		<highlight text="uni-file-picker" /> 文件选择上传
	</log-item-text>
	<log-item title="uni-forms 组件更新">
		<log-item-text tag-type="fix">
			偶发性获取表单值错误的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			校验 uni-data-picker value 为 0 时，返回值错误的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			uni-forms-item 组件隐藏时依然触发校验的bug
		</log-item-text>
		<log-item-text tag-type="perf">
			实时校验
		</log-item-text>
	</log-item>
	<log-item title="uni-fab 组件更新">
		<log-item-text tag-type="perf">
			背景色调整
		</log-item-text>
	</log-item>
	<log-item title="组件 NVUE 化">
		<log-item-text tag-type="perf">
			<highlight text="uni-forms" /> 表单
		</log-item-text>
		<log-item-text tag-type="perf">
			<highlight text="uni-easyinput" /> 输入框
		</log-item-text>
		<log-item-text tag-type="perf">
			<highlight text="uni-group" /> 分组
		</log-item-text>
	</log-item>
	<log-item title="组件适配 PC">
		<log-item-text tag-type="perf">
			<highlight text="uni-fab" /> 悬浮按钮
		</log-item-text>
		<log-item-text tag-type="perf">
			<highlight text="uni-swiper-dot" /> 轮播图指示点
		</log-item-text>
		<log-item-text tag-type="perf">
			<highlight text="uni-rate" /> 评分
		</log-item-text>
		<log-item-text tag-type="perf">
			<highlight text="uni-notice-bar" /> 通告栏
		</log-item-text>
		<log-item-text tag-type="perf">
			<highlight text="uni-indexed-list" /> 索引列表
		</log-item-text>
		<log-item-text tag-type="perf">
			<highlight text="uni-combox" /> 组合框
		</log-item-text>
		<log-item-text tag-type="perf">
			<highlight text="uni-transition" /> 动画
		</log-item-text>
		<log-item-text tag-type="perf">
			<highlight text="uni-swipe-action" /> 滑动操作
		</log-item-text>
	</log-item>
</log>

<log title="官网更新" date="2020-12-19">
	<log-item-text tag-type="docs" only>
		整理组件文档
	</log-item-text>
	<log-item-text tag-type="docs" only>
		右侧编辑器跟随滚动，适应小屏设备
	</log-item-text>
	<log-item-text tag-type="docs" only>
		优化 md 的代码块显示样式
	</log-item-text>
</log>

<log title="1.2.10" date="2020-12-18">
	<log-item title="uni-forms 组件更新">
		<log-item-text tag-type="fix">
			不设置 label 属性的时候 errorMessage 位置错误的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-list 组件更新">
		<log-item-text tag-type="fix">
			uni-list-chat 扩展组件角标显示不正常的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-easyinput 组件更新">
		<log-item-text tag-type="feat">
			styles 属性，可以自定义部分样式
		</log-item-text>
		<log-item-text tag-type="feat">
			图标点击事件
		</log-item-text>
		<log-item-text tag-type="fix">
			校验返回值与实际返回值不一致的问题
		</log-item-text>
	</log-item>
	<log-item title="data-checkbox 组件更新">
		<log-item-text tag-type="fix">
			异步获取数据渲染失败的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			支付宝小程序端报错且显示不正常的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			z-index 错误的Bug
		</log-item-text>
		<log-item-text tag-type="perf">
			兼容属性 disabled
		</log-item-text>
	</log-item>
	<log-item title="uni-indexed-list 组件更新">
		<log-item-text tag-type="fix">
			easyCom 模式下，找不到子组件的问题
		</log-item-text>
	</log-item>
	
</log>

<log title="1.2.9" date="2020-12-04">
	<log-item-text tag-type="feat" only>
		<highlight text="uni-easyinput" /> 增强输入框
	</log-item-text>
	<log-item-text tag-type="feat" only>
		<highlight text="uni-data-checkbox" /> 数据驱动的单选复选框
	</log-item-text>
	<log-item-text tag-type="feat" only>
		<highlight text="uni-dateformat" /> 日期格式化
	</log-item-text>
	<log-item title="uni-list 组件更新">
		<log-item-text tag-type="fix">
			uni-list-chat 扩展组件角标显示不正常的问题
		</log-item-text>
	</log-item>
</log>

<log title="1.2.8" date="2020-10-23">
	<log-item-text tag-type="feat" only>
		<highlight text="uni-forms" /> 表单组件
	</log-item-text>
	<!-- <log-item-text tag-type="feat" only>
		<highlight text="uni-field" /> 输入框组件
	</log-item-text> -->
	<log-item-text tag-type="feat" only>
		<highlight text="uni-group" /> 分组组件
	</log-item-text>
	<log-item-text tag-type="feat" only>
		<highlight text="uni-table" /> 表格组件
	</log-item-text>
</log>

<log title="1.2.5" date="2020-08-14">
	<log-item title="uni-list 组件更新">
		<log-item-text tag-type="feat">
			更新更多模板示例
		</log-item-text>
		<log-item-text tag-type="feat">
			direction 属性，可以改变列表的排版方向
		</log-item-text>
		<log-item-text tag-type="fix">
			uni-list-chat 组件添加 to 属性，@click 事件不触发的Bug
		</log-item-text>
		<log-item-text tag-type="perf">
			to 属性可单独设置
		</log-item-text>
	</log-item>
	<log-item title="uni-fab 组件更新">
		<log-item-text tag-type="perf">
			按钮缺省时，可直接点击大按钮
		</log-item-text>
	</log-item>
	<log-item title="uni-rate 组件更新">
		<log-item-text tag-type="fix">
			超出设置星星的长度，还可以继续选择的Bug
		</log-item-text>
	</log-item>
</log>


<log title="1.2.4" date="2020-08-13">
	<log-item-text tag-type="perf" only>
		<highlight text="uni-ui" /> 项目结构优化
	</log-item-text>
	<log-item-text tag-type="docs" only>
		 添加日志显示
	</log-item-text>
	<log-item title="uni-list 组件更新">
		<log-item-text tag-type="feat">
			clickable 属性，是否开启点击反馈
		</log-item-text>
		<log-item-text tag-type="feat">
			link 属性，显示右侧箭头并开启点击反馈
		</log-item-text>
		<log-item-text tag-type="feat">
			to 属性，直接跳转到指定页面
		</log-item-text>
		<log-item-text tag-type="feat">
			  border 属性，是否显示列表分割线
		</log-item-text>
	</log-item>
	<log-item title="uni-rate 组件更新">
		<log-item-text tag-type="feat">
			  disabled 属性，可设置组件禁用状态（之前版本的不可点击状态）
		</log-item-text>
		<log-item-text tag-type="feat">
			  disabledColor 属性，可设置禁用颜色
		</log-item-text>
		<log-item-text tag-type="feat">
			  readonly 属性，可设置组件只读属性
		</log-item-text>
		<log-item-text tag-type="feat">
			  allowHalf 属性，可设置组件是否开启半星选择
		</log-item-text>
		<log-item-text tag-type="feat">
			  touchable 属性，可设置组件是否支持滑动手势
		</log-item-text>
		<log-item-text tag-type="fix">
			  动态传值不更新的问题
		</log-item-text>
		<log-item-text tag-type="perf">
			  value 属性可使用 v-model 双向绑定数据
		</log-item-text>
	</log-item>
	<log-item title="uni-popup 组件更新">
		<log-item-text tag-type="perf">
			  扩展组件支持 easycom
		</log-item-text>
	</log-item>
	<log-item title="uni-swipe-action 组件更新">
		<log-item-text tag-type="feat">
			  新增左侧滑动方式
		</log-item-text>
		<log-item-text tag-type="feat">
			  新增插槽使用方式
		</log-item-text>
		<log-item-text tag-type="feat">
			  threshold 属性，可以控制滑动缺省值
		</log-item-text>
		<log-item-text tag-type="fix">
			 滚动页面时触发组件滑动的Bug
		</log-item-text>
		<log-item-text tag-type="perf">
			  优化长列表滚动性能
		</log-item-text>
	</log-item>
</log>

<log title="0.0.1" date="2020-08-12">
	<log-item-text tag-type="docs" only>
		  uni-ui 文档初始化更新
	</log-item-text>
</log>

