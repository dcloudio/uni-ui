console.error('-------- upload.js start--------');
const path = require('path')
const fs = require('fs-extra')
const modulesId = process.env.UNI_MODULES_ID
const comName = modulesId.replace(/uni-/, '')
const comPath = path.join(__dirname, '..', 'uni_modules')
console.error('upload.js - modulesId :' + process.env.UNI_MODULES_ID);
const packageJson = getPackage(modulesId, comPath)
const examplePath = path.join(__dirname, '..', 'temps')

// 同步 readme.md
// md 地址
const readmePath = path.join(__dirname, '..', 'docs', 'components', comName + '.md')


const mdExists = fs.existsSync(readmePath)
if (mdExists) {
	const content = handleReadme(readmePath)
	fs.outputFileSync(path.join(__dirname, '..', 'uni_modules',modulesId,'readme.md'), content)
}

let relationComponents = []

// 将示例拷贝到临时目录
const tempExamplePath = path.join(examplePath, 'example_temps')
const exampleExists = fs.existsSync(tempExamplePath)
if (exampleExists) {
	fs.removeSync(tempExamplePath)
}

fs.copySync(path.join(examplePath, 'example'), tempExamplePath)

// 将组件拷贝到临时目录
fs.copySync(getModulesPath(modulesId), path.join(tempExamplePath, 'uni_modules', modulesId))

handlePageJson(comName, tempExamplePath)

// 获取关联组件
if (packageJson && packageJson.uni_modules && packageJson.uni_modules.dependencies.length > 0) {
	relationComponents = packageJson.uni_modules.dependencies
}

// 同步依赖组件
if (relationComponents && relationComponents.length > 0) {
	relationComponents.reduce((promise, item) => {
		return fs.copy(getModulesPath(item), path.join(tempExamplePath, 'uni_modules', item)).then(res => {
			console.error(item + '组件同步完成');
		})
	}, Promise.resolve([])).then(res => {
		console.error('所有依赖组件同步完成');
		setPageComponents(modulesId, comName)
	})
} else {
	setPageComponents(modulesId, comName)
}

function setPageComponents(modulesId, comName) {
	const pagePath = path.join(__dirname, '..', 'pages', 'vue', comName, comName + '.vue')
	const pageContent = fs.readFileSync(pagePath, 'utf8')
	const pageContents = getComName(pageContent)
	console.error('组件名称:' + pageContents.length);

	if (pageContents.length > 0) {
		pageContents.reduce((promise, item) => {
			const inputPath = getModulesPath(item)
			const exists = fs.existsSync(inputPath)
			if (item === modulesId || !exists) return promise
			return fs.copy(inputPath, path.join(tempExamplePath, 'uni_modules', item)).then(res => {
				console.error(item + '组件同步完成');
			})
		}, Promise.resolve([])).then(res => {
			console.error('所有依赖组件同步完成');
		})
	}
}

/**
 * 获取当前组件 package.json
 * @param {Object} modulesId
 */
function getPackage(modulesId, url) {
	const comPath = path.join(url, modulesId, 'package.json')
	// 获取所有组件
	const exists = fs.existsSync(comPath)
	if (!exists) return {}
	return JSON.parse(fs.readFileSync(comPath, 'utf8'))
}


/**
 * 获取页面依赖组件信息
 * @param {Object} dataFile
 */
function getComName(dataFile) {
	let uniNameArray = dataFile.match(/<uni-\S+?(?=\s|\/?>)/ig)
	let newUniNameArray = []
	if (!uniNameArray) return []
	uniNameArray.forEach(value => {
		value = value.replace(/>|</ig, '')
		if (!~newUniNameArray.indexOf(value)) {
			newUniNameArray.push(value)
		}
	})
	return newUniNameArray
}

function handlePageJson(comName, tempExamplePath) {
	// 处理 pages.json 文件
	// const pages = fs.readdirSync(inputIndexPages)
	const uniUiPagesJson = path.join(__dirname, '..', 'pages.json')
	let pageJsonData = fs.readFileSync(uniUiPagesJson, 'utf8')
	// 避免unicode转为实体字符
	pageJsonData = pageJsonData.replace(/\\u/, '\\\\u')
	const pagesJson = JSON.parse(pageJsonData)
	let examplePages = pagesJson.pages

	let jsonData = examplePages.find(item => {
		return item.path === `pages/vue/${comName}/${comName}`
	})
	let pagePaths = []
	if (jsonData) {
		jsonData.path = `pages/${comName}/${comName}`
		pagePaths.push(jsonData)
	}

	let pageJson = JSON.stringify({
		'pages': pagePaths,
		'globalStyle': {
			'navigationBarTextStyle': 'black',
			'navigationBarTitleText': 'uni-app',
			'navigationBarBackgroundColor': '#F8F8F8',
			'backgroundColor': '#F8F8F8'
		}
	}, '', 2)

	// 转换回对应的字符
	pageJson = pageJson.replace(/\\\\u/, '\\u')

	// 同步 json 文件
	fs.outputFileSync(path.join(tempExamplePath, 'pages.json'), pageJson)
	const outPath = path.join(tempExamplePath, 'pages')
	const exists = fs.existsSync(outPath)
	if (exists) {
		fs.removeSync(outPath)
	}
	fs.copySync(path.join(__dirname, '..', 'pages', 'vue', comName), path.join(tempExamplePath, 'pages', comName))
	fs.copySync(path.join(__dirname, '..', 'common'), path.join(tempExamplePath, 'common'))
}

function getModulesPath(name) {
	return path.join(comPath, name)
}

/**
 * 处理 readme.md
 * @param {Object} readmePath
 */
function handleReadme(readmePath) {
	let content = fs.readFileSync(readmePath, 'utf-8')
	// 删除头部额外信息，在其他平台不支持，只在 uni ui 中支持
	content = content.replace(/---([\s\S]*?)---/ig, '')
	// 转换 ::: 语法
	content = content.replace(/::: (.*?)\n([\s\S]*?):::/ig, function(_, $1, $2) {
		return $2.split('\n').filter(item => item !== '').map(item => `> ${item}\n`).join('')
	})
	return content
}

console.error('-------- upload.js end --------');
