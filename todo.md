tabbar，需要控制激活样式
	传入激活和不激活的图片？这个只有内置pages.json的tabbar才有，公开给开发者时意义不大

movable-view

nav-bar
tab-bar
badge-view
rate form
下拉刷新
折叠面板
dateformat
超链接uni-link
fab-button
numberbox form
index-bar

drag-cell

drag-list
	sort-type 哪个list-item的type要排序。不写就是所有item都参与排序
	sort-selector 哪个元素要拖动选择？ 不写就无法拖动排序
	<swiper-action bind-type="list-item的type">slot</swiper-action> 不写就没有左滑删除功能。不写bind-type属性就是所有都左滑出菜单

searchinput
combox