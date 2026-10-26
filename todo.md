- uni-datetime-picker 日历选择
	[老规范](https://uniapp.dcloud.net.cn/component/uniui/uni-datetime-picker.html)
	把border去掉
	type 原有值域: date/datetime，time默认不包含秒，和微信的picker保持一致。后续可以考虑新增值域：datetimewithsecond。
	新增属性 range true/false 是否范围选择。或者范围新起一个组件叫 uni-datetime-picker-range？

	结构：
		结果框 + 弹层。类似picker组件的做法。
		弹层使用page-container（小程序上只能有一个，考虑退化成普通弹层，不能监听back）
		根样式在范围结果框时，无法直接作用于结果框
		新增pop-class，弹层样式
		新增result-class，结果框样式
		新增year-month-class，年月标题样式
		新增year-month-arrow-class，年月标题左右箭头样式
		新增week-class、week-item-class，星期的样式
		新增day-class
		新增day-selected-class
		新增confirm-class、cancel-class

	默认通过@media适配暗黑，与picker处理方式一致。

- 竖排滚动
- menu
- segment
	[](https://uniapp.dcloud.net.cn/component/uniui/uni-segmented-control.html)
	类似radio。
	uni-segment 和 uni-segment-item。item通过slot支持里面的text或其他内容
	或者是一个uni-data-segment，通过externalclass指定样式
-	uni-swiper-action
	<uni-swiper-action bind-type="list-item的type">slot</uni-swiper-action>
	bind-type属性绑定list-item。滑动时弹出
- uni-table
	[](https://uniapp.dcloud.net.cn/component/uniui/uni-table.html)
- uni-pagination
	[](https://uniapp.dcloud.net.cn/component/uniui/uni-pagination.html)
- uni-forms 表单校验，直接翻译选项式为组合式，去掉过期nvue条件编译，发布新版uni-forms-x的uni_modules

# uniCloud
- searchinput/easyinput
	[](https://uniapp.dcloud.net.cn/component/uniui/uni-easyinput.html)
	2个图标，密码显示、删除x。搞2个svg
	trim：改用Vue 提供了自带的修饰符 .trim，绑定时会自动在 change 事件后去掉前后空格：<input v-model.trim="username" />
	前后缀字体图标，感觉没大用啊。

	是不是不用再封这个组件了？

- uni-file-picker
	[](https://uniapp.dcloud.net.cn/component/uniui/uni-file-picker.html)

# datacom
处理mixin。AI是否能把mixin的代码转成setup？
- uni-data-checkbox
自身一个组件同时包括了radio和checkbox的功能，通过multiple切换。

组件结构：
uni-data-checkbox是一个group组件，包括一组item，每个item里包括一个checkbox/radio + label。

这些元素都有externalClass：label-class、label-active-class、checkbox-Class、checkbox-active-Class、item-class、item-active-class

关于mode，可以用externalClass实现：
+ list模式：整体组件套框，item变成竖排。只是让checkbox/radio的外框隐藏（小程序上需要写条件编译，侵入组件内部修改样式）
之前通过icon这个属性设置checkbox/radio的位置可以在左边或右边，其实意义不大。手机上都是在右边，pc上都不用list，直接横排。去掉icon这个属性更简洁。
但mode作为一个属性，没法通过媒体查询设置宽屏时横排。这个问题怎么解决好？此时只能不用mode属性，自己在externalClass里写媒体查询来实现list样式。
+ tag模式：把radio/checkbox隐藏或设为0px。设置label-class、label-active-class即可。
+ button模式：给item-class、item-active-class设边框即可。

之前的属性表格：
|属性名						|类型								|可选值									|默认值											|说明																														|
|:-:							|:-:								|:-:										|:-:												|:-:																														|
|value/v-model		|Array/String/Number|-											|-													|默认值，multiple=true时为 Array类型，否则为 String或Number类型	|
|localdata				|Array							|-											|-													|本地渲染数据																										|
|mode							|String							|default/list/button/tag|default										|显示模式																												|
|multiple					|Boolean						|-											|false											|是否多选																												|
|min							|String/Number			|-											|-													|最小选择个数 ，multiple为true时生效														|
|max							|String/Number			|-											|-													|最大选择个数 ，multiple为true时生效														|
|wrap							|Boolean						|-											|-													|是否换行显示																										|
|icon							|String							|left/right							|left												|list 列表模式下 icon 显示的位置																|
|selectedColor		|String							|-											|#007aff										|选中颜色																												|
|selectedTextColor|String							|-											|#333												|选中文本颜色，如不填写则自动显示																|
|emptyText				|String							|-											|暂无数据										|没有数据时显示的文字 ，本地数据无效														|
|map							|Object							|-											|{text:'text',value:'value'}|字段映射，将text/value映射到数据中的其他字段										|

其中icon废弃，wrap、selectedColor、selectedTextColor，mode，这些属性使用externalClass替代。
但为了向下兼容，这些功能可以保留。

内部自适应暗黑模式。

- uni-data-picker
- uni-data-tab


## uni-admin用到的组件

- `uni-badge`：用于菜单数量、调试错误日志数量等数字角标。
- `uni-breadcrumb`：用于统计页面的面包屑导航。
- `uni-captcha`：由 `uni-id-pages` 间接使用，提供登录、注册和密码重置的人机验证码。
- `uni-card`：用于应用管理页面中基础信息、App、小程序和 Web 配置分组。
- `uni-data-checkbox`：用于角色、标签、应用授权、菜单和统计指标的单选、多选。
- `uni-data-picker`：由升级中心间接使用，用于版本平台数据的层级选择和展示。
- `uni-data-select`：用于短信模板、应用类型、平台、版本和渠道等下拉筛选。
- `uni-dateformat`：用于用户、订单、应用、角色和安全日志等时间字段格式化。
- `uni-datetime-picker`：用于统计报表的日期范围筛选。
- `uni-drawer`：用于 JS 错误统计页面的 sourcemap 上传侧边抽屉。
- `uni-easyinput`：用于系统表单、短信任务、数字、链接和退款原因等输入。
- `uni-file-picker`：用于上传应用图标、截图、平台素材和升级安装包。
- `uni-forms`：用于系统管理、短信、退款和应用配置表单的组织与校验。
- `uni-icons`：用于导航、菜单、帮助、操作状态图标及字体图标资源。
- `uni-id-pages`：提供后台登录、注册、找回密码、用户资料、登录状态和路由鉴权体系。
- `uni-link`：用于文档、邮箱、统计说明等外部链接。
- `uni-list`：由 `uni-id-pages` 间接使用，构建用户资料、实名认证和账号操作列表。
- `uni-load-more`：用于 sourcemap 和错误数据加载状态提示。
- `uni-notice-bar`：用于首页公告、AppID 缺失提醒、应用配置和统计规则提示。
- `uni-pagination`：用于系统列表、演示表格和统计报表分页。
- `uni-popup`：用于短信编辑、图标选择、退款和错误日志等模态弹层。
- `uni-scss`：提供项目及 uni-ui 组件使用的 SCSS 变量和基础辅助样式。
- `uni-table`：用于系统管理、统计报表、订单和错误日志表格。
- `uni-tag`：用于展示系统标签和用户所属标签。
- `uni-tooltip`：用于统计指标、支付指标和表头的悬停说明。
- `uni-transition`：由 `uni-popup` 间接使用，提供遮罩和弹层内容的进入、退出动画。
- `uni-upgrade-center`：用于管理 App 安装包版本、发布状态、更新内容和升级记录，当前为 Admin 端插件。

- `qiun-data-charts`：用于渠道、用户、设备、错误和支付漏斗等统计图表。改成echart官方的小程序版。

uni-starter 使用：
当时为了 uni-admin 和 uni-starter 的统一，uni-starter 用到的前后端一体插件（即使只含 schema.json 也算云端插件，也同步了）也导入了 uni-admin 的插件。uni-starter 使用了以下插件：
- `uni-feedback`：用于提供用户提交问题、意见和图片的前后端一体反馈页面。
- `uni-sign-in`：用于提供连续签到、积分奖励及激励视频变现功能。


下面这几个组件，uni-admin里很常见，需要重做x蒸汽版了
uni-data-checkbox
uni-data-select
uni-data-picker
uni-datetime-picker
uni-easyinput
uni-file-picker
uni-pagination`
