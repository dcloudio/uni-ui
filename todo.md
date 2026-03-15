tabbar，需要控制激活样式
	传入激活和不激活的图片？这个只有内置pages.json的tabbar才有，公开给开发者时意义不大

movable-view

tab-bar
menu

[x] nav-bar
[x] badge-view
[x] rate form
[x] 下拉刷新
[x] 折叠面板
	箭头变颜色+旋转Android会消失
[x] dateformat
[x] 超链接uni-link
[x] fab-button
	鸿蒙按下有时不缩小
[x] numberbox form
[x] index-bar
[ ] drag-cell
	鸿蒙拖动后视图和数据的顺序对不上。拖动时乱跑

[ ] 日历选择

drag-list
	sort-type 哪个list-item的type要排序。不写就是所有item都参与排序
	sort-selector 哪个元素要拖动选择？ 不写就无法拖动排序
	<swiper-action bind-type="list-item的type">slot</swiper-action> 不写就没有左滑删除功能。不写bind-type属性就是所有都左滑出菜单

searchinput
combox