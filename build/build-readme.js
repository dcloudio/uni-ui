const path = require('path')
const fs = require('fs')
const root = path.join(__dirname, '..')
const util = require('./util.js')

function buildReadme() {
	const uniui = path.join(root, 'uni_modules')
	const readmePath = path.join(root, 'docs', 'README.md')
	const quickstartPath = path.join(root, 'docs', 'quickstart.md')
	let readmeContent = util.handleReadme(readmePath)
	let quickstartContent = util.handleReadme(quickstartPath)
	const packagesLists = fs.readdirSync(uniui)
	let  componentsLists = '### uni-ui 已支持的组件列表\n|组件名|组件说明|\n|---|---|\n'
	packagesLists.forEach(item=>{
		if(item==='uni-test' || item === 'uni-ui') return
		let packageData = util.read(path.join(uniui,item,'package.json'))
		packageData = JSON.parse(packageData)
		let componentsName = packageData.displayName.split(' ')
		componentsLists += `|${componentsName[0]}|[${componentsName[1]}](https://ext.dcloud.net.cn/plugin?name=${item})|\n`
	})
	quickstartContent = quickstartContent.replace('<!-- 组件列表占位 -->',componentsLists)
	util.write(path.join(root,'README.md'),readmeContent+'\n'+quickstartContent)
}

module.exports = buildReadme
