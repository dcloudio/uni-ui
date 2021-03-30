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

console.log('---- start');
// 同步临时项目目录
checkDirectory(path.join(examplePath, 'example'), tempExamplePath, copy)
console.log('---- end');

if (modulesId === 'uni-test') {
	// 同步 release
	syncUniuiChangeLog()
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
	console.error('组件名称:' + pageContents.length);

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
	let content = fs.readFileSync(readmePath, 'utf-8')
	// 删除头部额外信息，在其他平台不支持，只在 uni ui 中支持
	content = content.replace(/---([\s\S]*?)---/ig, '')
	// 转换 ::: 语法
	content = content.replace(/::: (.*?)\n([\s\S]*?):::/ig, function(_, $1, $2) {
		return $2.split('\n').filter(item => item !== '').map(item => `> ${item}\n`).join('')
	})
	return content
}



/**
 * 同步所有更新日志
 */

function syncUniuiChangeLog() {
	const modulesPath = path.join(__dirname, '..', 'uni_modules')
	let componentsPackageJsons = getAllComponentsList(modulesPath)
	const syncVersions = path.join(__dirname, '..', 'temps', 'sync-version.json')
	let syncVersionsData = fs.readFileSync(syncVersions).toString()
	syncVersionsData = JSON.parse(syncVersionsData)

	let syncVersion = {}
	let uniuimd = ''
	componentsPackageJsons.forEach(item => {
		let {
			id,
			version
		} = item

		if (version !== syncVersionsData[id]) {
			let changelog = path.join(modulesPath, id, 'changelog.md')
			// let  = readChangelogFile(changelog)
			let changeMd = fs.readFileSync(changelog).toString()
			const mds = versionAll(changeMd, syncVersionsData[id])
			let content = ''
			mds.forEach(md => {
				md = md.replace(/- /g, `- ${id} `)
				content += (md + '\n')
			})
			uniuimd += (content + '\n')
		}
		syncVersion[id] = version
	})

	let uniuiPackage = path.join(modulesPath, modulesId, 'package.json')
	uniuiPackage = JSON.parse(fs.readFileSync(uniuiPackage).toString())
	let mdpath = path.join(modulesPath, modulesId, 'changelog.md')
	const uniuiChangelog = updateChangelogFile(
		mdpath,
		uniuiPackage.version,
		uniuimd
	)
	fs.writeFileSync(mdpath, uniuiChangelog)
	// // 将最新的个组件写入缓存区域
	// fs.writeFileSync(path.join(__dirname,'temps','sync-version.json'),JSON.stringify(syncVersion,null,2))
	//  ------ 写入最新的缓存版本号 end------
}


/**
 * 获取所有组件
 */
function getAllComponentsList(modulesPath) {
	const exists = fs.existsSync(modulesPath)
	if (!exists) {
		return []
	}
	const fileLists = fs.readdirSync(modulesPath);
	let content = []
	fileLists.forEach(name => {
		if (name === modulesId || name === 'uni-ui') {
			return
		}
		const packagePath = path.join(modulesPath, name, 'package.json')
		let data = fs.readFileSync(packagePath).toString()
		content.push(JSON.parse(data))
	})

	return content
}

/**
 * 读取 changelog
 */

function readVersions(str) {
	const versionRE = /##\s+([0-9\.]+).*/g
	const curVersionMatch = versionRE.exec(str)
	if (!curVersionMatch) {
		return []
	}
	const curVersion = {
		version: curVersionMatch[1].trim(),
		line: curVersionMatch[0],
	}
	const lastVersionMatch = versionRE.exec(str)
	if (!lastVersionMatch) {
		return [curVersion]
	}
	return [
		curVersion,
		{
			version: lastVersionMatch[1].trim(),
			line: lastVersionMatch[0],
		},
	]
}

function padZero(val) {
	return val > 9 ? String(val) : '0' + val
}

function generateVersionLog(version, log, date = new Date()) {
	return `## ${version}（${date.getFullYear()}-${padZero(
    date.getMonth() + 1
  )}-${padZero(date.getDate())}）
${log}
`
}

function updateChangelogFile(
	dir,
	newVersion,
	newLog,
	date
) {
	let changelogPath = dir
	if (path.extname(dir) !== '.md') {
		changelogPath = path.resolve(dir, 'changelog.md')
	}
	if (!fs.existsSync(changelogPath)) {
		return generateVersionLog(newVersion, newLog, date)
	}
	return updateChangelog(
		fs.readFileSync(changelogPath).toString(),
		newVersion,
		newLog,
		date
	)
}

function updateChangelog(
	md,
	newVersion,
	newLog,
	date
) {
	const {
		version,
		loc
	} = readChangelog(md)
	if (version === newVersion) {
		return (
			md.substring(0, loc.start) +
			generateVersionLog(newVersion, newLog, date) +
			md.substring(loc.end, md.length)
		)
	} else {
		md = generateVersionLog(newVersion, newLog, date) + md
	}
	return md
}

function readChangelog(md) {
	const [curVersion, lastVersion] = readVersions(md)
	if (!curVersion) {
		return {
			version: '',
			log: '',
			loc: {
				start: 0,
				end: 0
			}
		}
	}
	const start = md.indexOf(curVersion.line)
	const curVersionIndex = start + curVersion.line.length
	const end = lastVersion ? md.indexOf(lastVersion.line) : md.length
	return {
		version: curVersion.version,
		log: md.substring(curVersionIndex, end).trim(),
		loc: {
			start,
			end,
		},
	}
}

function readChangelogFile(dir) {
	let changelogPath = dir
	if (path.extname(dir) !== '.md') {
		changelogPath = path.resolve(dir, 'changelog.md')
	}
	if (!fs.existsSync(changelogPath)) {
		return {
			version: '',
			log: '',
			loc: {
				start: 0,
				end: 0
			}
		}
	}
	return readChangelog(fs.readFileSync(changelogPath).toString())
}

function versionAll(md, oldVersion, mds = []) {
	let data = readChangelog(md)
	let {
		loc,
		log,
		version
	} = data
	if (compareVersion(version, oldVersion)) {
		const newMd = md.substring(loc.end, md.length).trim()
		mds.push(log)
		versionAll(newMd, oldVersion, mds)
	}
	return mds
}

function compareVersion(a, b) {
	console.log(a, b);
	a = a.split('.')
	b = b.split('.')
	if (a.length !== b.length) {
		console.error('版本号格式不正确')
		return false
	}
	if (a[0] !== b[0]) {
		return a[0] >= b[0]
	}
	if (a[1] !== b[1]) {
		return a[1] >= b[1]
	}
	if (a[2] !== b[2]) {
		return a[2] >= b[2]
	}
	return false
}



console.error('-------- upload.js end --------');
