// console.error('-------- upload.js start--------');

const path = require('path')
const fs = require('fs')
const util = require('../build/util.js')
const buildReadme = require('../build/build-readme.js')
const root = path.join(__dirname,'..')
const modulesId = process.env.UNI_MODULES_ID
// const modulesId = 'uni-forms'
const comName = modulesId.replace(/uni-/, '')
const comPath = path.join(root, 'uni_modules')
// console.error('upload.js - modulesId :' + modulesId);
const packageJson = getPackage(modulesId, comPath)
const examplePath = path.join(root, 'temps')

// 同步 readme.md
// md 地址
const readmePath = path.join(root, 'docs', 'components', comName + '.md')

const mdExists = fs.existsSync(readmePath)
if (mdExists) {
	const content = handleReadme(readmePath,comName)
	util.write(path.join(root, 'uni_modules', modulesId, 'readme.md'), content)
}

let relationComponents = []

// 将示例拷贝到临时目录
const tempExamplePath = path.join(examplePath, 'example_temps')
const exampleExists = fs.existsSync(tempExamplePath)
if (exampleExists) {
	// 删除临时目录
	util.deleteFolder(tempExamplePath)
}

// 同步临时项目目录
util.copyDir(path.join(examplePath, 'example'), tempExamplePath)

if (modulesId === 'uni-ui') {
	buildReadme()
	util.copyFile(path.join(root, 'README.md'),path.join(root, 'uni_modules', modulesId, 'readme.md'))
	// 同步 uni-ui 示例
	util.copyDir(comPath, path.join(tempExamplePath, 'uni_modules'))
} else {
	// 将组件拷贝到临时目录
	util.copyDir(getModulesPath(modulesId), path.join(tempExamplePath, 'uni_modules', modulesId))
	handlePageJson(comName, tempExamplePath)
	// 同步页面使用的组件
	setPageComponents(modulesId, comName)
	// 同步组件依赖的组间
	syncRelyOn(modulesId)
}

function setPageComponents(modulesId, comName) {
	const pagePath = path.join(root, 'pages', 'vue', comName, comName + '.vue')
	const pageContent = fs.readFileSync(pagePath).toString()
	const pageContents = getComName(pageContent)
	if (pageContents.length > 0) {
		pageContents.reduce((promise, item) => {
			const inputPath = getModulesPath(item)
			const exists = fs.existsSync(inputPath)
			if (item === modulesId || !exists) return promise
			return new Promise((resolve, reject) => {
				util.copyDir(inputPath, path.join(tempExamplePath, 'uni_modules', item))
				resolve()
			}).then(()=>{
				syncRelyOn(item)
			})
		}, Promise.resolve([])).then(res => {
			// console.log('所有依赖组件同步完成');
		})
	}
}

function syncRelyOn(modulesName){
	const packageJson = getPackage(modulesName, comPath)
	let relationComponents = []
	// 获取关联组件
	if (packageJson && packageJson.uni_modules && packageJson.uni_modules.dependencies.length > 0) {
		relationComponents = packageJson.uni_modules.dependencies
	}
	// 同步依赖组件
	if (relationComponents && relationComponents.length > 0) {
		return	relationComponents.reduce((promise, item) => {
			return new Promise((resolve, reject) => {
				util.copyDir(getModulesPath(item), path.join(tempExamplePath, 'uni_modules', item))
				resolve()
			}).then(()=>{
				syncRelyOn(item)
			})
		}, Promise.resolve([])).then(res => {
			// console.error('所有依赖组件同步完成');
			// setPageComponents(modulesId, comName)
		}).catch((err)=>{
			// console.log('error',err);
		})
	}
	return Promise.resolve()
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
	const uniUiPagesJson = path.join(root, 'pages.json')
	let pageJsonData = util.read(uniUiPagesJson)
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
	util.write(path.join(tempExamplePath, 'pages.json'), pageJson)
	const outPath = path.join(tempExamplePath, 'pages')
	const exists = fs.existsSync(outPath)
	if (exists) {
		util.deleteFolder(outPath)
	}
	util.copyDir(path.join(root, 'pages', 'vue', comName), path.join(tempExamplePath, 'pages', comName))
	util.copyDir(path.join(root, 'common'), path.join(tempExamplePath, 'common'))

}

function getModulesPath(name) {
	return path.join(comPath, name)
}

/**
 * 处理 readme.md
 * @param {Object} readmePath
 */
function handleReadme(readmePath,comName) {
	let content = util.read(readmePath)
	// 兼容 windows ，将 \r\n 全部替换成 \n
	content = content.replace(/\r\n/ig, '\n')
	// 删除头部额外信息，在其他平台不支持，只在 uni ui 中支持
	content = content.replace(/---([\s\S]*?)---/ig, '').replace(/## 图标示例([\s\S]*?)\<\/icons-layouts\>/ig, '')

	// 转换 ::: 语法
	content = content.replace(/::: (.*?)\n([\s\S]*?):::/ig, function(_, $1, $2) {
		$1 = $1.replace(/(tip|danger|warning)+ /,'')
		return '> **'+ $1 +'**\n'+ $2.split('\n').filter(item => item !== '').map(item => `> ${item}\n`).join('')
	})

	content += `\n\n## 组件示例\n\n点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/${comName}/${comName}](https://hellouniapp.dcloud.net.cn/pages/extUI/${comName}/${comName})`

	return content
}

// console.error('-------- upload.js end --------');
