console.error('-------- upload.js start--------');

const path = require('path')
const fs = require('fs')
// const modulesId = 'uni-test'
const modulesId = process.env.UNI_MODULES_ID
const comName = modulesId.replace(/uni-/, '')
const comPath = path.join(__dirname, '..', 'uni_modules')
console.error('upload.js - modulesId :' + modulesId);
const packageJson = getPackage(modulesId, comPath)
const examplePath = path.join(__dirname, '..', 'temps')

// 同步 readme.md
// md 地址
const readmePath = path.join(__dirname, '..', 'docs', 'components', comName + '.md')

const mdExists = fs.existsSync(readmePath)
if (mdExists) {
	const content = handleReadme(readmePath)
	fs.writeFileSync(path.join(__dirname, '..', 'uni_modules', modulesId, 'readme.md'), content)
}

let relationComponents = []

// 将示例拷贝到临时目录
const tempExamplePath = path.join(examplePath, 'example_temps')
const exampleExists = fs.existsSync(tempExamplePath)
if (exampleExists) {
	// 删除临时目录
	deleteFolder(tempExamplePath)
}

// 同步临时项目目录
checkDirectory(path.join(examplePath, 'example'), tempExamplePath, copy)

if (modulesId === 'uni-ui') {
	// 同步 uni-ui 示例
	checkDirectory(comPath, path.join(tempExamplePath, 'uni_modules'), copy)
} else {
	// 将组件拷贝到临时目录
	checkDirectory(getModulesPath(modulesId), path.join(tempExamplePath, 'uni_modules', modulesId), copy)
	handlePageJson(comName, tempExamplePath)

	// 获取关联组件
	if (packageJson && packageJson.uni_modules && packageJson.uni_modules.dependencies.length > 0) {
		relationComponents = packageJson.uni_modules.dependencies
	}

	// 同步依赖组件
	if (relationComponents && relationComponents.length > 0) {
		relationComponents.reduce((promise, item) => {
			return new Promise((resolve, reject) => {
				checkDirectory(getModulesPath(item), path.join(tempExamplePath, 'uni_modules', item),
					copy)
			})
		}, Promise.resolve([])).then(res => {
			console.error('所有依赖组件同步完成');
			setPageComponents(modulesId, comName)
		})
	} else {
		setPageComponents(modulesId, comName)
	}
}


function deleteFolder(path) {
	let files = [];
	if (fs.existsSync(path)) {
		files = fs.readdirSync(path);
		files.forEach(function(file, index) {
			let curPath = path + '/' + file
			if (fs.statSync(curPath).isDirectory()) {
				deleteFolder(curPath);
			} else {
				fs.unlinkSync(curPath);
			}
		});
		fs.rmdirSync(path);
	}
}

function copy() {
	// console.log('fuvi');
}


//递归创建目录 同步方法
function mkdirsSync(dirname) {
	if (fs.existsSync(dirname)) {
		return true;
	} else {
		if (mkdirsSync(path.dirname(dirname))) {
			fs.mkdirSync(dirname);
			return true;
		}
	}
}

function _copy(src, dist) {
	var paths = fs.readdirSync(src)
	paths.forEach(function(p) {
		var _src = src + '/' + p;
		var _dist = dist + '/' + p;
		var stat = fs.statSync(_src)
		if (stat.isFile()) { // 判断是文件还是目录
			fs.writeFileSync(_dist, fs.readFileSync(_src));
		} else if (stat.isDirectory()) {
			copyDir(_src, _dist) // 当是目录是，递归复制
		}
	})
}

/*
 * 复制目录、子目录，及其中的文件
 * @param src {String} 要复制的目录
 * @param dist {String} 复制到目标目录
 */
function copyDir(src, dist) {
	var b = fs.existsSync(dist)
	if (!b) {
		mkdirsSync(dist); //创建目录
	}
	_copy(src, dist);
}

function checkDirectory(src, dist, callback) {
	copyDir(src, dist);
	if (callback) {
		callback();
	}
}


function setPageComponents(modulesId, comName) {
	const pagePath = path.join(__dirname, '..', 'pages', 'vue', comName, comName + '.vue')
	const pageContent = fs.readFileSync(pagePath).toString()
	const pageContents = getComName(pageContent)
	console.error('组件名称:' + pageContents);

	if (pageContents.length > 0) {
		pageContents.reduce((promise, item) => {
			const inputPath = getModulesPath(item)
			const exists = fs.existsSync(inputPath)
			if (item === modulesId || !exists) return promise
			return new Promise((resolve, reject) => {
				checkDirectory(inputPath, path.join(tempExamplePath, 'uni_modules', item), copy)
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
	console.log(path.join(tempExamplePath, 'pages.json'))
	fs.writeFileSync(path.join(tempExamplePath, 'pages.json'), pageJson)
	const outPath = path.join(tempExamplePath, 'pages')
	const exists = fs.existsSync(outPath)
	if (exists) {
		deleteFolder(outPath)
	}
	checkDirectory(path.join(__dirname, '..', 'pages', 'vue', comName), path.join(tempExamplePath, 'pages', comName))
	checkDirectory(path.join(__dirname, '..', 'common'), path.join(tempExamplePath, 'common'), copy)

}

function getModulesPath(name) {
	return path.join(comPath, name)
}

/**
 * 处理 readme.md
 * @param {Object} readmePath
 */
function handleReadme(readmePath) {
	let content = this.read(readmePath)
	// 兼容 windows ，将 \r\n 全部替换成 \n
	content = content.replace(/\r\n/ig, '\n')
	// 删除头部额外信息，在其他平台不支持，只在 uni ui 中支持
	content = content.replace(/---([\s\S]*?)---/ig, '')
	// 转换 ::: 语法
	content = content.replace(/::: (.*?)\n([\s\S]*?):::/ig, function(_, $1, $2) {
		$1 = $1.replace(/(tip|danger|warning)+ /,'')
		return '> **'+ $1 +'**\n'+ $2.split('\n').filter(item => item !== '').map(item => `> ${item}\n`).join('')
	})
	return content
}

console.error('-------- upload.js end --------');
