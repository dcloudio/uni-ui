
# 更新日志 

## 发布周期
- 修订版本号：每周末会进行日常 bugfix 更新。**如果有紧急的 bugfix，则任何时候都可发布**
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。

<!-- 更新占位 -->
<log title="1.4.19" date="2022-07-07">
	<log-item title="uni-data-picker 组件更新">
		<log-item-text tag-type="perf">
			 pc端图标位置不正确的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-data-select 组件更新">
		<log-item-text tag-type="fix">
			 pc端宽度异常的bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 pc端宽度异常的bug
		</log-item-text>
	</log-item>
</log>

<log title="1.4.18" date="2022-07-06">
	<log-item title="uni-breadcrumb 组件更新">
		<log-item-text tag-type="fix">
			 微信小程序 separator 不显示问题
		</log-item-text>
	</log-item>
	<log-item title="uni-data-checkbox 组件更新">
		<log-item-text tag-type="perf">
			 在 uni-forms 中的依赖注入方式
		</log-item-text>
	</log-item>
	<log-item title="uni-data-picker 组件更新">
		<log-item-text tag-type="perf">
			 显示样式
		</log-item-text>
		<log-item-text tag-type="fix">
			 uni-data-picker 在 uni-forms-item 中宽度不正确的bug
		</log-item-text>
	</log-item>
	<log-item title="uni-data-select 组件更新">
		<log-item-text tag-type="perf">
			 显示样式
		</log-item-text>
	</log-item>
	<log-item title="uni-datetime-picker 组件更新">
		<log-item-text tag-type="perf">
			 组件样式，调整了组件图标大小、高度、颜色等，与uni-ui风格保持一致
		</log-item-text>
		<log-item-text tag-type="fix">
			 日历顶部年月及底部确认未国际化 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-easyinput 组件更新">
		<log-item-text tag-type="feat">
			 在 uni-forms 1.4.0 中使用可以在 blur 时校验内容
		</log-item-text>
		<log-item-text tag-type="feat">
			 clear 事件，点击右侧叉号图标触发
		</log-item-text>
		<log-item-text tag-type="feat">
			 change 事件 ，仅在输入框失去焦点或用户按下回车时触发
		</log-item-text>
		<log-item-text tag-type="perf">
			 组件样式，组件获取焦点时高亮显示，图标颜色调整等
		</log-item-text>
		<log-item-text tag-type="perf">
			 clearable 显示策略
		</log-item-text>
		<log-item-text tag-type="perf">
			 clearable 显示策略
		</log-item-text>
	</log-item>
	<log-item title="uni-file-picker 组件更新">
		<log-item-text tag-type="fix">
			 在uni-forms下样式不生效的bug
		</log-item-text>
	</log-item>
	<log-item title="uni-forms 组件更新">
		<log-item-text tag-type="feat">
			 更多表单示例
		</log-item-text>
		<log-item-text tag-type="perf">
			 子表单组件过期提示的问题
		</log-item-text>
		<log-item-text tag-type="perf">
			 子表单组件uni-datetime-picker、uni-data-select、uni-data-picker的显示样式
		</log-item-text>
		<log-item-text tag-type="perf">
			 更新 删除组件日志
		</log-item-text>
		<log-item-text tag-type="fix">
			 由 1.4.0 引发的 label 插槽不生效的bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 子组件找不到 setValue 报错的bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 uni-data-picker 在 uni-forms-item 中报错的bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 uni-data-picker 在 uni-forms-item 中宽度不正确的bug
		</log-item-text>
		<log-item-text tag-type="perf">
			 【重要】组件逻辑重构，部分用法用旧版本不兼容，请注意兼容问题
		</log-item-text>
		<log-item-text tag-type="perf">
			 【重要】组件使用 Provide/Inject 方式注入依赖，提供了自定义表单组件调用 uni-forms 校验表单的能力
		</log-item-text>
		<log-item-text tag-type="feat">
			 model 属性，等同于原 value/modelValue 属性，旧属性即将废弃
		</log-item-text>
		<log-item-text tag-type="feat">
			 validateTrigger 属性的 blur 值，仅 uni-easyinput 生效
		</log-item-text>
		<log-item-text tag-type="feat">
			 onFieldChange 方法，可以对子表单进行校验，可替代binddata方法
		</log-item-text>
		<log-item-text tag-type="feat">
			 子表单的 setRules 方法，配合自定义校验函数使用
		</log-item-text>
		<log-item-text tag-type="feat">
			 uni-forms-item 的 setRules 方法，配置动态表单使用可动态更新校验规则
		</log-item-text>
		<log-item-text tag-type="perf">
			 动态表单校验方式，废弃拼接name的方式
		</log-item-text>
		<log-item-text tag-type="fix">
			 表单校验顺序无序问题
		</log-item-text>
	</log-item>
	<log-item title="uni-nav-bar 组件更新">
		<log-item-text tag-type="fix">
			 组件示例中插槽用法无法显示内容的bug
		</log-item-text>
	</log-item>
	<log-item title="uni-swipe-action 组件更新">
		<log-item-text tag-type="fix">
			 vue3 下使用组件不能正常运行的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 h5端点击click触发两次的Bug
		</log-item-text>
	</log-item>
	<log-item title="uni-table 组件更新">
		<log-item-text tag-type="fix">
			 微信小程序存在无使用组件的问题
		</log-item-text>
	</log-item>
</log>

<log title="1.4.16" date="2022-06-06">
	<log-item title="uni-breadcrumb 组件更新">
		<log-item-text tag-type="feat">
			 支持 uni.scss 修改颜色
		</log-item-text>
	</log-item>
	<log-item title="uni-data-select 组件更新">
		<log-item-text tag-type="fix">
			 localdata 赋值不生效的 bug
		</log-item-text>
		<log-item-text tag-type="feat">
			 支持  uni.scss 修改颜色
		</log-item-text>
		<log-item-text tag-type="feat">
			 支持选项禁用（数据选项设置 disabled: true 即禁用）
		</log-item-text>
		<log-item-text tag-type="fix">
			 当 value 为 0 时选择不生效的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-easyinput 组件更新">
		<log-item-text tag-type="fix">
			 关闭图标某些情况下无法取消的bug
		</log-item-text>
	</log-item>
	<log-item title="uni-fav 组件更新">
		<log-item-text tag-type="feat">
			 stat 属性 ，是否开启uni统计功能
		</log-item-text>
	</log-item>
	<log-item title="uni-goods-nav 组件更新">
		<log-item-text tag-type="feat">
			 stat属性，是否开启uni统计功能
		</log-item-text>
	</log-item>
	<log-item title="uni-group 组件更新">
		<log-item-text tag-type="feat">
			 stat属性，是否开启uni统计功能
		</log-item-text>
	</log-item>
	<log-item title="uni-nav-bar 组件更新">
		<log-item-text tag-type="feat">
			 stat 属性 ，可开启统计title 上报 ，仅使用了title 属性且项目开启了uni统计生效
		</log-item-text>
	</log-item>
	<log-item title="uni-search-bar 组件更新">
		<log-item-text tag-type="feat">
			 readonly 属性，组件只读
		</log-item-text>
	</log-item>
	<log-item title="uni-swipe-action 组件更新">
		<log-item-text tag-type="fix">
			 isPC 找不到的Bug
		</log-item-text>
		<log-item-text tag-type="perf">
			  修复 在 nvue 下 disabled 失效的bug
		</log-item-text>
	</log-item>
	<log-item title="uni-title 组件更新">
		<log-item-text tag-type="perf">
			 修改组件描述
		</log-item-text>
	</log-item>
	<log-item title="uni-tooltip 组件更新">
		<log-item-text tag-type="fix">
			 content 为空时仍然弹出的bug
		</log-item-text>
	</log-item>
</log>

<log title="1.4.15" date="2022-05-07">
	<log-item title="uni-breadcrumb 组件更新">
		<log-item-text tag-type="perf">
			 初始化
		</log-item-text>
	</log-item>
	<log-item title="uni-data-picker 组件更新">
		<log-item-text tag-type="fix">
			 字节小程序 本地数据无法选择下一级的Bug
		</log-item-text>
	</log-item>
	<log-item title="uni-data-select 组件更新">
		<log-item-text tag-type="feat">
			 记住上次的选项（仅 collection 存在时有效）
		</log-item-text>
		<log-item-text tag-type="perf">
			 初始化
		</log-item-text>
	</log-item>
	<log-item title="uni-search-bar 组件更新">
		<log-item-text tag-type="fix">
			  vue3 input 事件不生效的bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 多余代码导致的bug
		</log-item-text>
	</log-item>
	<log-item title="uni-tooltip 组件更新">
		<log-item-text tag-type="perf">
			 更新 text 属性变更为 content
		</log-item-text>
		<log-item-text tag-type="perf">
			 更新 移除 width 属性
		</log-item-text>
		<log-item-text tag-type="fix">
			 组件根 text 嵌套组件 warning
		</log-item-text>
		<log-item-text tag-type="perf">
			 初始化
		</log-item-text>
	</log-item>
</log>

<log title="1.4.14" date="2022-04-18">
	<log-item title="uni-datetime-picker 组件更新">
		<log-item-text tag-type="fix">
			 Vue3 下动态赋值,单选类型未响应的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-easyinput 组件更新">
		<log-item-text tag-type="fix">
			 默认值不生效的bug
		</log-item-text>
	</log-item>
</log>

<log title="1.4.13" date="2022-04-02">
	<log-item title="uni-calendar 组件更新">
		<log-item-text tag-type="fix">
			 条件编译 nvue 不支持的 css 样式
		</log-item-text>
		<log-item-text tag-type="fix">
			 条件编译 nvue 不支持的 css 样式
		</log-item-text>
		<log-item-text tag-type="fix">
			 startDate、 endDate 属性失效的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-data-picker 组件更新">
		<log-item-text tag-type="fix">
			 nvue 不支持的 v-show 的 bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 条件编译 nvue 不支持的 css 样式
		</log-item-text>
	</log-item>
	<log-item title="uni-datetime-picker 组件更新">
		<log-item-text tag-type="fix">
			 Vue3 下动态赋值未响应的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-easyinput 组件更新">
		<log-item-text tag-type="fix">
			 value不能为0的bug
		</log-item-text>
	</log-item>
	<log-item title="uni-list 组件更新">
		<log-item-text tag-type="perf">
			 删除无用文件
		</log-item-text>
	</log-item>
	<log-item title="uni-popup 组件更新">
		<log-item-text tag-type="fix">
			 弹出层内部无法滚动的bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 小程序中高度错误的bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 快速调用open出现问题的Bug
		</log-item-text>
	</log-item>
	<log-item title="uni-rate 组件更新">
		<log-item-text tag-type="fix">
			 条件判断 `NaN` 错误的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-swipe-action 组件更新">
		<log-item-text tag-type="fix">
			 按钮字体大小不能设置的bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 h5和app端下报el错误的bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 HBuilderX 1.4.X 版本中，h5和app端下报错的bug
		</log-item-text>
	</log-item>
</log>

<log title="1.4.12" date="2022-02-19">
	<log-item title="uni-collapse 组件更新">
		<log-item-text tag-type="fix">
			 初始化的时候 ，open 属性失效的bug
		</log-item-text>
	</log-item>
	<log-item title="uni-data-checkbox 组件更新">
		<log-item-text tag-type="fix">
			 multiple 为 true 时，v-model 的值为 null 报错的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-icons 组件更新">
		<log-item-text tag-type="perf">
			 size 属性可以传入不带单位的字符串数值
		</log-item-text>
		<log-item-text tag-type="perf">
			 size 支持其他单位
		</log-item-text>
	</log-item>
	<log-item title="uni-nav-bar 组件更新">
		<log-item-text tag-type="perf">
			 更新 组件示例
		</log-item-text>
		<log-item-text tag-type="feat">
			 left-width/right-width属性 ，可修改左右两侧的宽度
		</log-item-text>
	</log-item>
	<log-item title="uni-popup 组件更新">
		<log-item-text tag-type="fix">
			 safeArea 属性不能设置为false的bug
		</log-item-text>
	</log-item>
</log>

<log title="1.4.11" date="2022-01-21">
	<log-item title="uni-collapse 组件更新">
		<log-item-text tag-type="fix">
			 微信小程序resize后组件收起的bug
		</log-item-text>
	</log-item>
	<log-item title="uni-countdown 组件更新">
		<log-item-text tag-type="fix">
			 在微信小程序中样式不生效的bug
		</log-item-text>
		<log-item-text tag-type="feat">
			 update 方法 ，在动态更新时间后，刷新组件
		</log-item-text>
	</log-item>
	<log-item title="uni-load-more 组件更新">
		<log-item-text tag-type="feat">
			 showText属性 ，是否显示文本
		</log-item-text>
		<log-item-text tag-type="fix">
			 nvue 平台下不显示文本的bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 微信小程序平台样式选择器报警告的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-nav-bar 组件更新">
		<log-item-text tag-type="fix">
			 在vue下，标题不垂直居中的bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 height 属性类型错误
		</log-item-text>
		<log-item-text tag-type="feat">
			 height 属性,可修改组件高度
		</log-item-text>
		<log-item-text tag-type="feat">
			 dark 属性可可开启暗黑模式
		</log-item-text>
		<log-item-text tag-type="perf">
			 标题字数过多显示省略号
		</log-item-text>
		<log-item-text tag-type="perf">
			 插槽，插入内容可完全覆盖
		</log-item-text>
	</log-item>
	<log-item title="uni-popup 组件更新">
		<log-item-text tag-type="fix">
			 isMaskClick 失效的bug
		</log-item-text>
		<log-item-text tag-type="feat">
			 cancelText \ confirmText 属性 ，可自定义文本
		</log-item-text>
		<log-item-text tag-type="feat">
			 maskBackgroundColor 属性 ，可以修改蒙版颜色
		</log-item-text>
		<log-item-text tag-type="perf">
			 maskClick属性 更新为 isMaskClick ，解决微信小程序警告的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-scss 组件更新">
		<log-item-text tag-type="perf">
			 组件示例
		</log-item-text>
	</log-item>
</log>

<log title="1.4.10" date="2022-01-17">
	<log-item title="uni-card 组件更新">
		<log-item-text tag-type="fix">
			 在vue页面下略缩图显示不正常的bug
		</log-item-text>
	</log-item>
	<log-item title="uni-datetime-picker 组件更新">
		<log-item-text tag-type="fix">
			 clear-icon 属性在小程序平台不生效的 bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 日期范围选在小程序平台，必须多点击一次才能取消选中状态的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-fab 组件更新">
		<log-item-text tag-type="perf">
			 更新 组件依赖
		</log-item-text>
	</log-item>
	<log-item title="uni-icons 组件更新">
		<log-item-text tag-type="fix">
			 nvue 有些图标不显示的bug，兼容老版本图标
		</log-item-text>
		<log-item-text tag-type="perf">
			 示例可复制图标名称
		</log-item-text>
	</log-item>
	<log-item title="uni-nav-bar 组件更新">
		<log-item-text tag-type="fix">
			 color 属性不生效的bug
		</log-item-text>
	</log-item>
	<log-item title="uni-popup 组件更新">
		<log-item-text tag-type="fix">
			 设置 safeArea 属性不生效的bug
		</log-item-text>
		<log-item-text tag-type="perf">
			 组件示例
		</log-item-text>
		<log-item-text tag-type="fix">
			 vuedoc 文字错误
		</log-item-text>
	</log-item>
</log>

<log title="1.4.9" date="2021-11-23">
	<log-item title="uni-collapse 组件更新">
		<log-item-text tag-type="fix">
			 vue3中个别scss变量无法找到的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-combox 组件更新">
		<log-item-text tag-type="perf">
			 label、label-width 属性
		</log-item-text>
	</log-item>
	<log-item title="uni-data-picker 组件更新">
		<log-item-text tag-type="fix">
			 由上个版本引发的map、v-model等属性不生效的bug
		</log-item-text>
	</log-item>
	<log-item title="uni-drawer 组件更新">
		<log-item-text tag-type="fix">
			 vue3中个别scss变量无法找到的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-file-picker 组件更新">
		<log-item-text tag-type="fix">
			 参数为对象的情况下，url在某些情况显示错误的bug
		</log-item-text>
	</log-item>
	<log-item title="uni-group 组件更新">
		<log-item-text tag-type="fix">
			 vue3中某些scss变量无法找到的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-icons 组件更新">
		<log-item-text tag-type="perf">
			 兼容旧组件 type 值
		</log-item-text>
	</log-item>
	<log-item title="uni-indexed-list 组件更新">
		<log-item-text tag-type="fix">
			 vue3中某些scss变量无法找到的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-list 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-list](https://uniapp.dcloud.io/component/uniui/uni-list)
		</log-item-text>
		<log-item-text tag-type="fix">
			 在vue3中to属性在发行应用的时候报错的bug
		</log-item-text>
	</log-item>
	<log-item title="uni-number-box 组件更新">
		<log-item-text tag-type="fix">
			 vue3中某些scss变量无法找到的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-pagination 组件更新">
		<log-item-text tag-type="fix">
			 vue3中某些scss变量无法找到的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-scss 组件更新">
		<log-item-text tag-type="fix">
			 / 符号在 vue 不同版本兼容问题引起的报错问题
		</log-item-text>
		<log-item-text tag-type="fix">
			 vue3中scss语法兼容问题
		</log-item-text>
	</log-item>
	<log-item title="uni-steps 组件更新">
		<log-item-text tag-type="fix">
			 vue3中某些scss变量无法找到的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-transition 组件更新">
		<log-item-text tag-type="fix">
			 init 方法初始化问题
		</log-item-text>
	</log-item>
</log>

<log title="1.4.8" date="2021-11-19">
	<log-item title="uni-fab 组件更新">
		<log-item-text tag-type="fix">
			 阴影颜色不正确的bug
		</log-item-text>
	</log-item>
</log>

<log title="1.4.3" date="2021-11-19">
	<log-item title="uni-badge 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-badge](https://uniapp.dcloud.io/component/uniui/uni-badge)
		</log-item-text>
		<log-item-text tag-type="perf">
			 升级ui
		</log-item-text>
		<log-item-text tag-type="perf">
			 修改 size 属性默认值调整为 small
		</log-item-text>
		<log-item-text tag-type="perf">
			 修改 type 属性，默认值调整为 error，info 替换 default
		</log-item-text>
		<log-item-text tag-type="fix">
			 在字节小程序上样式不生效的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-calendar 组件更新">
		<log-item-text tag-type="feat">
			 支持国际化
		</log-item-text>
		<log-item-text tag-type="fix">
			 弹出层被 tabbar 遮盖 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-card 组件更新">
		<log-item-text tag-type="perf">
			 重构插槽的用法 ，header 替换为 title 
		</log-item-text>
		<log-item-text tag-type="feat">
			 actions 插槽
		</log-item-text>
		<log-item-text tag-type="feat">
			 cover 封面图属性和插槽
		</log-item-text>
		<log-item-text tag-type="feat">
			 padding 内容默认内边距离
		</log-item-text>
		<log-item-text tag-type="feat">
			 margin 卡片默认外边距离
		</log-item-text>
		<log-item-text tag-type="feat">
			 spacing 卡片默认内边距
		</log-item-text>
		<log-item-text tag-type="feat">
			 shadow 卡片阴影属性
		</log-item-text>
		<log-item-text tag-type="perf">
			 取消 mode 属性，可使用组合插槽代替
		</log-item-text>
		<log-item-text tag-type="perf">
			 取消 note 属性 ，使用actions插槽代替
		</log-item-text>
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-card](https://uniapp.dcloud.io/component/uniui/uni-card)
		</log-item-text>
	</log-item>
	<log-item title="uni-collapse 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-collapse](https://uniapp.dcloud.io/component/uniui/uni-collapse)
		</log-item-text>
		<log-item-text tag-type="perf">
			 show-arrow 属性默认为true
		</log-item-text>
		<log-item-text tag-type="feat">
			 show-arrow 属性，控制是否显示右侧箭头
		</log-item-text>
	</log-item>
	<log-item title="uni-combox 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-combox](https://uniapp.dcloud.io/component/uniui/uni-combox)
		</log-item-text>
	</log-item>
	<log-item title="uni-countdown 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-countdown](https://uniapp.dcloud.io/component/uniui/uni-countdown)
		</log-item-text>
		<log-item-text tag-type="perf">
			 重构
		</log-item-text>
		<log-item-text tag-type="feat">
			 font-size 支持自定义字体大小
		</log-item-text>
		<log-item-text tag-type="feat">
			 支持国际化
		</log-item-text>
	</log-item>
	<log-item title="uni-data-checkbox 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-data-checkbox](https://uniapp.dcloud.io/component/uniui/uni-data-checkbox)
		</log-item-text>
		<log-item-text tag-type="fix">
			 在uni-forms中 modelValue 中不存在当前字段，当前字段必填写也不参与校验的问题
		</log-item-text>
		<log-item-text tag-type="fix">
			 单选 list 模式下 ，icon 为 left 时，选中图标不显示的问题
		</log-item-text>
		<log-item-text tag-type="fix">
			 在 uni-forms 中重置表单，错误信息无法清除的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-data-picker 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-data-picker](https://uniapp.dcloud.io/component/uniui/uni-data-picker)
		</log-item-text>
	</log-item>
	<log-item title="uni-dateformat 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-dateformat](https://uniapp.dcloud.io/component/uniui/uni-dateformat)
		</log-item-text>
		<log-item-text tag-type="perf">
			 调整 默认时间不再是当前时间，而是显示'-'字符
		</log-item-text>
	</log-item>
	<log-item title="uni-datetime-picker 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-datetime-picker](https://uniapp.dcloud.io/component/uniui/uni-datetime-picker)
		</log-item-text>
		<log-item-text tag-type="feat">
			 提供组件设计资源，组件样式调整
		</log-item-text>
		<log-item-text tag-type="fix">
			 hide-second 在移动端的 bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 单选赋默认值时，赋值日期未高亮的 bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 赋默认值时，移动端未正确显示时间的 bug
		</log-item-text>
		<log-item-text tag-type="feat">
			 hide-second 属性，支持只使用时分，隐藏秒
		</log-item-text>
		<log-item-text tag-type="perf">
			 取消选中时（范围选）直接开始下一次选择, 避免多点一次
		</log-item-text>
		<log-item-text tag-type="perf">
			 移动端支持清除按钮，同时支持通过 ref 调用组件的 clear 方法
		</log-item-text>
		<log-item-text tag-type="perf">
			 调整字号大小，美化日历界面
		</log-item-text>
		<log-item-text tag-type="fix">
			 因国际化导致的 placeholder 失效的 bug
		</log-item-text>
		<log-item-text tag-type="feat">
			 支持国际化
		</log-item-text>
		<log-item-text tag-type="perf">
			 范围选择器在 pc 端过宽的问题
		</log-item-text>
		<log-item-text tag-type="feat">
			 适配 vue3
		</log-item-text>
		<log-item-text tag-type="feat">
			 支持作为 uni-forms 子组件相关功能
		</log-item-text>
		<log-item-text tag-type="fix">
			 在 uni-forms 中使用时，选择时间报 NAN 错误的 bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 type 属性动态赋值无效的 bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 ‘确认’按钮被 tabbar 遮盖 bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 组件未赋值时范围选左、右日历相同的 bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 范围选未正确显示当前值的 bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 h5 平台（移动端）报错 'cale' of undefined 的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-drawer 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-drawer](https://uniapp.dcloud.io/component/uniui/uni-drawer)
		</log-item-text>
	</log-item>
	<log-item title="uni-easyinput 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-easyinput](https://uniapp.dcloud.io/component/uniui/uni-easyinput)
		</log-item-text>
		<log-item-text tag-type="fix">
			 在 uni-forms 的动态表单中默认值校验不通过的 bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 在 uni-forms 中重置表单，错误信息无法清除的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-fab 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-fab](https://uniapp.dcloud.io/component/uniui/uni-fab)
		</log-item-text>
		<log-item-text tag-type="feat">
			 提供组件设计资源，组件样式调整
		</log-item-text>
	</log-item>
	<log-item title="uni-fav 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-fav](https://uniapp.dcloud.io/component/uniui/uni-fav)
		</log-item-text>
		<log-item-text tag-type="feat">
			 支持国际化
		</log-item-text>
	</log-item>
	<log-item title="uni-file-picker 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-file-picker](https://uniapp.dcloud.io/component/uniui/uni-file-picker)
		</log-item-text>
		<log-item-text tag-type="feat">
			 参数中返回 fileID 字段
		</log-item-text>
		<log-item-text tag-type="fix">
			 腾讯云传入fileID 不能回显的bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 选择图片后，不能放大的问题
		</log-item-text>
		<log-item-text tag-type="fix">
			 由于 0.2.11 版本引起的不能回显图片的Bug
		</log-item-text>
		<log-item-text tag-type="feat">
			 clearFiles(index) 方法，可以手动删除指定文件
		</log-item-text>
		<log-item-text tag-type="fix">
			 v-model 值设为 null 报错的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 return-type="object" 时，无法删除文件的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 auto-upload 属性失效的Bug
		</log-item-text>
	</log-item>
	<log-item title="uni-forms 组件更新">
		<log-item-text tag-type="fix">
			 label 插槽不生效的bug
		</log-item-text>
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-forms](https://uniapp.dcloud.io/component/uniui/uni-forms)
		</log-item-text>
		<log-item-text tag-type="fix">
			 没有添加校验规则的字段依然报错的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 重置表单错误信息无法清除的问题
		</log-item-text>
		<log-item-text tag-type="perf">
			 组件文档
		</log-item-text>
		<log-item-text tag-type="fix">
			 表单验证只生效一次的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-goods-nav 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-goods-nav](https://uniapp.dcloud.io/component/uniui/uni-goods-nav)
		</log-item-text>
		<log-item-text tag-type="feat">
			 支持国际化
		</log-item-text>
	</log-item>
	<log-item title="uni-grid 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-grid](https://uniapp.dcloud.io/component/uniui/uni-grid)
		</log-item-text>
		<log-item-text tag-type="feat">
			 提供组件设计资源，组件样式调整
		</log-item-text>
	</log-item>
	<log-item title="uni-group 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-group](https://uniapp.dcloud.io/component/uniui/uni-group)
		</log-item-text>
	</log-item>
	<log-item title="uni-icons 组件更新">
		<log-item-text tag-type="feat">
			 更多图标
		</log-item-text>
		<log-item-text tag-type="perf">
			 自定义图标使用方式
		</log-item-text>
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-icons](https://uniapp.dcloud.io/component/uniui/uni-icons)
		</log-item-text>
	</log-item>
	<log-item title="uni-indexed-list 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-indexed-list](https://uniapp.dcloud.io/component/uniui/uni-indexed-list)
		</log-item-text>
	</log-item>
	<log-item title="uni-link 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-link](https://uniapp.dcloud.io/component/uniui/uni-link)
		</log-item-text>
		<log-item-text tag-type="fix">
			 在 nvue 下不显示的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-load-more 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-load-more](https://uniapp.dcloud.io/component/uniui/uni-load-more)
		</log-item-text>
		<log-item-text tag-type="feat">
			 支持国际化
		</log-item-text>
	</log-item>
	<log-item title="uni-nav-bar 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-nav-bar](https://uniapp.dcloud.io/component/uniui/uni-nav-bar)
		</log-item-text>
	</log-item>
	<log-item title="uni-notice-bar 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-notice-bar](https://uniapp.dcloud.io/component/uniui/uni-notice-bar)
		</log-item-text>
		<log-item-text tag-type="feat">
			 提供组件设计资源，组件样式调整
		</log-item-text>
	</log-item>
	<log-item title="uni-number-box 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-number-box](https://uniapp.dcloud.io/component/uniui/uni-number-box)
		</log-item-text>
		<log-item-text tag-type="feat">
			 提供组件设计资源，组件样式调整
		</log-item-text>
	</log-item>
	<log-item title="uni-pagination 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-pagination](https://uniapp.dcloud.io/component/uniui/uni-pagination)
		</log-item-text>
		<log-item-text tag-type="fix">
			 current 、value 属性未监听，导致高亮样式失效的 bug
		</log-item-text>
		<log-item-text tag-type="feat">
			 支持国际化
		</log-item-text>
	</log-item>
	<log-item title="uni-popup 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-popup](https://uniapp.dcloud.io/component/uniui/uni-popup)
		</log-item-text>
		<log-item-text tag-type="feat">
			 支持国际化
		</log-item-text>
	</log-item>
	<log-item title="uni-rate 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-rate](https://uniapp.dcloud.io/component/uniui/uni-rate)
		</log-item-text>
		<log-item-text tag-type="perf">
			 默认值修改为 0 颗星
		</log-item-text>
	</log-item>
	<log-item title="uni-row 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-row](https://uniapp.dcloud.io/component/uniui/uni-row)
		</log-item-text>
	</log-item>
	<log-item title="uni-search-bar 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-search-bar](https://uniapp.dcloud.io/component/uniui/uni-search-bar)
		</log-item-text>
		<log-item-text tag-type="fix">
			 value 属性与 modelValue 属性不兼容的Bug
		</log-item-text>
		<log-item-text tag-type="feat">
			 支持国际化
		</log-item-text>
	</log-item>
	<log-item title="uni-segmented-control 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-segmented-control](https://uniapp.dcloud.io/component/uniui/uni-segmented-control)
		</log-item-text>
	</log-item>
	<log-item title="uni-steps 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-steps](https://uniapp.dcloud.io/component/uniui/uni-steps)
		</log-item-text>
	</log-item>
	<log-item title="uni-swipe-action 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-swipe-action](https://uniapp.dcloud.io/component/uniui/uni-swipe-action)
		</log-item-text>
		<log-item-text tag-type="perf">
			 close-all 方法
		</log-item-text>
		<log-item-text tag-type="feat">
			 close-all 方法，关闭所有已打开的组件
		</log-item-text>
		<log-item-text tag-type="feat">
			 resize() 方法，在非微信小程序、h5、app-vue端出现不能滑动的问题的时候，重置组件
		</log-item-text>
		<log-item-text tag-type="fix">
			 app 端偶尔出现类似 Page[x][-x,xx;-x,xx,x,x-x] 的问题 
		</log-item-text>
		<log-item-text tag-type="perf">
			 微信小程序、h5、app-vue 滑动逻辑，避免出现动态新增组件后不能滑动的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-swiper-dot 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-swiper-dot](https://uniapp.dcloud.io/component/uniui/uni-swiper-dot)
		</log-item-text>
	</log-item>
	<log-item title="uni-table 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-table](https://uniapp.dcloud.io/component/uniui/uni-table)
		</log-item-text>
	</log-item>
	<log-item title="uni-tag 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-tag](https://uniapp.dcloud.io/component/uniui/uni-tag)
		</log-item-text>
		<log-item-text tag-type="feat">
			 提供组件设计资源，组件样式调整
		</log-item-text>
		<log-item-text tag-type="perf">
			 移除 插槽
		</log-item-text>
		<log-item-text tag-type="perf">
			 移除 type 属性的 royal 选项
		</log-item-text>
		<log-item-text tag-type="perf">
			 type 不是 default 时，size 为 small 字体大小显示不正确
		</log-item-text>
	</log-item>
	<log-item title="uni-title 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-title](https://uniapp.dcloud.io/component/uniui/uni-title)
		</log-item-text>
	</log-item>
	<log-item title="uni-transition 组件更新">
		<log-item-text tag-type="perf">
			 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
		</log-item-text>
		<log-item-text tag-type="perf">
			 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-transition](https://uniapp.dcloud.io/component/uniui/uni-transition)
		</log-item-text>
	</log-item>
</log>

<log title="1.3.9" date="2021-08-02">
	<log-item title="uni-datetime-picker 组件更新">
		<log-item-text tag-type="feat">
			 return-type 属性支持返回 date 日期对象
		</log-item-text>
	</log-item>
	<log-item title="uni-file-picker 组件更新">
		<log-item-text tag-type="fix">
			 fileExtname属性不指定值报错的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 在某种场景下图片不回显的Bug
		</log-item-text>
	</log-item>
	<log-item title="uni-link 组件更新">
		<log-item-text tag-type="perf">
			 支持自定义插槽
		</log-item-text>
	</log-item>
</log>

<log title="1.3.8" date="2021-07-31">
	<log-item title="uni-ui">
		<log-item-text tag-type="perf">
			H5、微信小程序兼容VUE3
		</log-item-text>
	</log-item>
	<log-item title="uni-collapse 组件更新">
		<log-item-text tag-type="fix">
			 由1.2.0版本引起的 change 事件返回 undefined 的Bug
		</log-item-text>
		<log-item-text tag-type="feat">
			 组件折叠动画
		</log-item-text>
		<log-item-text tag-type="feat">
			 value\v-model 属性 ，动态修改面板折叠状态
		</log-item-text>
		<log-item-text tag-type="feat">
			 title 插槽 ，可定义面板标题
		</log-item-text>
		<log-item-text tag-type="feat">
			 border 属性 ，显示隐藏面板内容分隔线
		</log-item-text>
		<log-item-text tag-type="feat">
			 title-border 属性 ，显示隐藏面板标题分隔线
		</log-item-text>
		<log-item-text tag-type="fix">
			 resize 方法失效的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 change 事件返回参数不正确的Bug
		</log-item-text>
		<log-item-text tag-type="perf">
			 H5、App 平台自动更具内容更新高度，无需调用 reszie() 方法
		</log-item-text>
	</log-item>
	<log-item title="uni-data-checkbox 组件更新">
		<log-item-text tag-type="perf">
			 在uni-forms组件，与label不对齐的问题
		</log-item-text>
		<log-item-text tag-type="fix">
			 单选默认值为0不能选中的Bug
		</log-item-text>
	</log-item>
	<log-item title="uni-easyinput 组件更新">
		<log-item-text tag-type="perf">
			 errorMessage 属性支持 Boolean 类型
		</log-item-text>
	</log-item>
	<log-item title="uni-file-picker 组件更新">
		<log-item-text tag-type="fix">
			 return-type为object下，返回值不正确的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			（重要） H5 平台下如果和uni-forms组件一同使用导致页面卡死的问题
		</log-item-text>
		<log-item-text tag-type="fix">
			 vue3 下赋值错误的Bug
		</log-item-text>
	</log-item>
	<log-item title="uni-forms 组件更新">
		<log-item-text tag-type="fix">
			 vue2 下条件编译导致destroyed生命周期失效的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 1.2.1 引起的示例在小程序平台报错的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 动态校验表单，默认值为空的情况下校验失效的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 不指定name属性时，运行报错的Bug
		</log-item-text>
		<log-item-text tag-type="perf">
			 label默认宽度从65调整至70，使required为true且四字时不换行
		</log-item-text>
		<log-item-text tag-type="perf">
			 组件示例，新增动态校验示例代码
		</log-item-text>
		<log-item-text tag-type="perf">
			 组件文档，使用方式更清晰
		</log-item-text>
	</log-item>
	<log-item title="uni-swipe-action 组件更新">
		<log-item-text tag-type="fix">
			 跨页面修改组件数据 ，导致不能滑动的问题
		</log-item-text>
	</log-item>
</log>

<log title="1.3.7" date="2021-07-16">
	<log-item title="uni-datetime-picker 组件更新">
		<log-item-text tag-type="fix">
			 单选日期类型，初始赋值后不在当前日历的 bug
		</log-item-text>
		<log-item-text tag-type="feat">
			 clearIcon 属性，显示框的清空按钮可配置显示隐藏（仅 pc 有效）
		</log-item-text>
		<log-item-text tag-type="perf">
			 移动端移除显示框的清空按钮，无实际用途
		</log-item-text>
		<log-item-text tag-type="fix">
			 组件赋值为空，界面未更新的 bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 start 和 end 不能动态赋值的 bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 范围选类型，用户选择后再次选择右侧日历（结束日期）显示不正确的 bug
		</log-item-text>
	</log-item>
</log>

<log title="1.3.6" date="2021-07-09">
	<log-item title="uni-data-checkbox 组件更新">
		<log-item-text tag-type="perf">
			 删除无用日志
		</log-item-text>
		<log-item-text tag-type="fix">
			 由 0.1.9 引起的非 nvue 端图标不显示的问题
		</log-item-text>
		<log-item-text tag-type="fix">
			 nvue 黑框样式问题
		</log-item-text>
	</log-item>
	<log-item title="uni-datetime-picker 组件更新">
		<log-item-text tag-type="fix">
			 范围选择不能动态赋值的 bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 范围选择的初始时间在一个月内时，造成无法选择的bug
		</log-item-text>
		<log-item-text tag-type="perf">
			 弹出层在超出视窗边缘定位不准确的问题
		</log-item-text>
		<log-item-text tag-type="fix">
			 范围起始点样式的背景色与今日样式的字体前景色融合，导致日期字体看不清的 bug
		</log-item-text>
		<log-item-text tag-type="perf">
			 弹出层在超出视窗边缘被遮盖的问题
		</log-item-text>
		<log-item-text tag-type="feat">
			 maskClick 事件
		</log-item-text>
		<log-item-text tag-type="fix">
			 特殊情况日历 rpx 布局错误的 bug，rpx -> px
		</log-item-text>
		<log-item-text tag-type="fix">
			 范围选择时清空返回值不合理的bug，['', ''] -> []
		</log-item-text>
		<log-item-text tag-type="feat">
			 日期时间显示框支持插槽
		</log-item-text>
	</log-item>
	<log-item title="uni-file-picker 组件更新">
		<log-item-text tag-type="fix">
			 sourceType 缺少默认值导致 ios 无法选择文件
		</log-item-text>
		<log-item-text tag-type="perf">
			 解耦与uniCloud的强绑定关系 ，如不绑定服务空间，默认autoUpload为false且不可更改
		</log-item-text>
	</log-item>
	<log-item title="uni-table 组件更新">
		<log-item-text tag-type="feat">
			 uni-th 支持 date 日期筛选范围
		</log-item-text>
		<log-item-text tag-type="feat">
			 uni-th 支持 range 筛选范围
		</log-item-text>
		<log-item-text tag-type="feat">
			 uni-th 筛选功能
		</log-item-text>
	</log-item>
</log>

<log title="1.3.5" date="2021-07-02">
	<log-item title="uni-card 组件更新">
		<log-item-text tag-type="perf">
			 图文卡片无图片加载时，提供占位图标
		</log-item-text>
		<log-item-text tag-type="feat">
			 header 插槽，自定义卡片头部（ 图文卡片 mode="style" 时，不支持）
		</log-item-text>
		<log-item-text tag-type="fix">
			 thumbnail 不存在仍然占位的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-data-checkbox 组件更新">
		<log-item-text tag-type="fix">
			 selectedTextColor 属性不生效的Bug
		</log-item-text>
	</log-item>
	<log-item title="uni-datetime-picker 组件更新">
		<log-item-text tag-type="perf">
			 添加 uni-icons 依赖
		</log-item-text>
	</log-item>
	<log-item title="uni-easyinput 组件更新">
		<log-item-text tag-type="fix">
			 confirmType 属性（仅 type="text" 生效）导致多行文本框无法换行的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-forms 组件更新">
		<log-item-text tag-type="fix">
			 pattern 属性在微信小程序平台无效的问题
		</log-item-text>
	</log-item>
</log>

<log title="1.3.4" date="2021-06-25">
	<log-item title="uni-badge 组件更新">
		<log-item-text tag-type="perf">
			 示例项目
		</log-item-text>
	</log-item>
	<log-item title="uni-countdown 组件更新">
		<log-item-text tag-type="fix">
			 uni-countdown 重复赋值跳两秒的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-easyinput 组件更新">
		<log-item-text tag-type="fix">
			 passwordIcon 属性拼写错误的 bug
		</log-item-text>
	</log-item>
	<log-item title="uni-forms 组件更新">
		<log-item-text tag-type="fix">
			 validate-trigger属性为submit且err-show-type属性为toast时不能弹出的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 只写setRules方法而导致校验不生效的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 由上个办法引发的错误提示文字错位的Bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 不设置 label 属性 ，无法设置label插槽的问题
		</log-item-text>
		<log-item-text tag-type="fix">
			 不设置label属性，label-width属性不生效的bug
		</log-item-text>
		<log-item-text tag-type="fix">
			 setRules 方法与rules属性冲突的问题
		</log-item-text>
	</log-item>
	<log-item title="uni-link 组件更新">
		<log-item-text tag-type="feat">
			 download 属性，H5平台下载文件名
		</log-item-text>
	</log-item>
	<log-item title="uni-popup 组件更新">
		<log-item-text tag-type="feat">
			 mask-click 遮罩层点击事件
		</log-item-text>
		<log-item-text tag-type="fix">
			 nvue 平台中间弹出后，点击内容，再点击遮罩无法关闭的Bug
		</log-item-text>
	</log-item>
	<log-item title="uni-tag 组件更新">
		<log-item-text tag-type="fix">
			 uni-tag 在字节跳动小程序上 css 类名编译错误的 bug
		</log-item-text>
	</log-item>
</log>

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

