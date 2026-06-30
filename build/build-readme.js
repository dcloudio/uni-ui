const path = require('path')
const fs = require('fs')
const root = path.join(__dirname, '..')
const util = require('./util.js')

const UNI_UI_X_ID = 'uni-ui-x'
const COMPONENTS_START = '<!-- 组件列表开始 -->'
const COMPONENTS_END = '<!-- 组件列表结束 -->'
const LEGACY_PLACEHOLDER = '<!-- 组件列表占位 -->'

function buildReadme() {
	const readmePath = getReadmeSourcePath()
	const readmeContent = buildReadmeContent(readmePath)
	const componentsList = buildComponentsList()
	const nextReadmeContent = updateComponentsList(readmeContent, componentsList)
	util.write(path.join(root, 'README.md'), nextReadmeContent)
	syncUniUiXReadme(nextReadmeContent)
}

function buildReadmeContent(readmePath) {
	const docsReadmePath = path.join(root, 'docs', 'README.md')
	const docsQuickstartPath = path.join(root, 'docs', 'quickstart.md')
	if (fs.existsSync(docsReadmePath) && fs.existsSync(docsQuickstartPath)) {
		return util.handleReadme(docsReadmePath) + '\n' + util.handleReadme(docsQuickstartPath)
	}
	return util.read(readmePath)
}

function getReadmeSourcePath() {
	const moduleReadmePath = path.join(root, 'uni_modules', UNI_UI_X_ID, 'readme.md')
	if (fs.existsSync(moduleReadmePath)) {
		return moduleReadmePath
	}
	return path.join(root, 'README.md')
}

function syncUniUiXReadme(content) {
	const moduleReadmePath = path.join(root, 'uni_modules', UNI_UI_X_ID, 'readme.md')
	if (fs.existsSync(path.dirname(moduleReadmePath))) {
		util.write(moduleReadmePath, content)
	}
}

function buildComponentsList() {
	const uniModulesPath = path.join(root, 'uni_modules')
	const packagesLists = fs.readdirSync(uniModulesPath, { withFileTypes: true })
		.filter(item => item.isDirectory())
		.map(item => item.name)
		.filter(item => item !== 'uni-test' && item !== UNI_UI_X_ID)
		.sort()

	const lines = [
		'## uni-ui x 已支持的组件列表',
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
