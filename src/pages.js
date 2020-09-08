const fs = require('fs')
const path = require('path')
// const moduleAJsonPath = path.resolve(__dirname, './moduleA.json')

module.exports = function(pagesJson, {
    addDependency /* 增加文件依赖，当该文件发生变化后，会触发编译器热更新 */
}) {

	pagesJson.pages.map(item=>{
		if(item.path === 'pages/vue/index/index'){
			item.style.navigationBarTitleText = 'uni-ui Vue 页面示例'
		}
		return item
	})

	let pages = JSON.parse(JSON.stringify(pagesJson.pages))
	let pageSubPackages = []
	pages.forEach(page=>{
		page.path = page.path.replace('pages/vue/','pages/nvue/')
		if(page.path === 'pages/nvue/index/index'){
			page.style.navigationBarTitleText = 'uni-ui Nvue 页面示例'
		}
		pageSubPackages.push(page)
	})
	pagesJson.pages.push(...pageSubPackages)
    return pagesJson // 返回新的 pages json 对象
}
