const path = require('path')
const fs = require('fs')
const root = path.join(__dirname, '..')
const util = require('./util.js')

const COMPONENTS_START = '<!-- 组件列表开始 -->'
const COMPONENTS_END = '<!-- 组件列表结束 -->'
const LEGACY_PLACEHOLDER = '<!-- 组件列表占位 -->'

function buildReadme() {
	const readmePath = path.join(root, 'README.md')
	const readmeContent = util.read(readmePath)
	const componentsList = buildComponentsList()
	util.write(readmePath, updateComponentsList(readmeContent, componentsList))
}

function buildComponentsList() {
	const uniModulesPath = path.join(root, 'uni_modules')
	const packagesLists = fs.readdirSync(uniModulesPath, { withFileTypes: true })
		.filter(item => item.isDirectory())
		.map(item => item.name)
		.filter(item => item !== 'uni-test' && item !== 'uni-ui')
		.sort()

	const lines = [
		'## 已支持的组件列表',
		'',
		'| 组件名 | 组件说明 |',
		'| --- | --- |'
	]

	packagesLists.forEach(item => {
		const packagePath = path.join(uniModulesPath, item, 'package.json')
		if (!fs.existsSync(packagePath)) return
		const packageData = JSON.parse(util.read(packagePath))
		if (packageData.dcloudext && packageData.dcloudext.type === 'uts') return

		const displayName = packageData.displayName || item
		const componentsName = displayName.trim().split(/\s+/)
		const name = item
		const desc = componentsName.slice(1).join(' ') || (componentsName[0] === item ? packageData.description : '') || name
		lines.push(`| ${name} | [${desc}](https://ext.dcloud.net.cn/plugin?name=${item}) |`)
	})

	return lines.join('\n')
}

function updateComponentsList(readmeContent, componentsList) {
	const block = `${COMPONENTS_START}\n${componentsList}\n${COMPONENTS_END}`
	if (readmeContent.includes(COMPONENTS_START) && readmeContent.includes(COMPONENTS_END)) {
		return readmeContent.replace(new RegExp(`${escapeRegExp(COMPONENTS_START)}[\\s\\S]*?${escapeRegExp(COMPONENTS_END)}`), block)
	}
	if (readmeContent.includes(LEGACY_PLACEHOLDER)) {
		return readmeContent.replace(LEGACY_PLACEHOLDER, block)
	}

	const upgradeTitle = '# uni-ui的升级建议@uniuiupgrade'
	if (readmeContent.includes(upgradeTitle)) {
		return readmeContent.replace(upgradeTitle, `${block}\n\n${upgradeTitle}`)
	}
	return `${readmeContent.trim()}\n\n${block}\n`
}

function escapeRegExp(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

module.exports = buildReadme
