
# 更新日志 

## 发布周期
- 修订版本号：每周末会进行日常 bugfix 更新。**如果有紧急的 bugfix，则任何时候都可发布**
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。


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

