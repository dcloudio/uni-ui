const path = require('path')
const fs = require('fs')
const modulesPath = path.join(__dirname, 'uni_modules')
let componentsPackageJsons = getAllComponentsList(modulesPath)
const syncVersions = path.join(__dirname, 'temps', 'sync-version.json')
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
		const mds = versionAll(changeMd,syncVersionsData[id])
		let content = ''
		mds.forEach(md=>{
			md = md.replace(/- /g,`- ${id} `)
			content += (md +'\n')
		})
		uniuimd += (content +'\n')
	}
	syncVersion[id] = version
})

let uniuiPackage = path.join(modulesPath, 'uni-ui', 'package.json')
uniuiPackage = JSON.parse(fs.readFileSync(uniuiPackage).toString())
const uniuiChangelog =  updateChangelogFile(
	path.join(modulesPath, 'uni-ui', 'changelog.md'),
	uniuiPackage.id,
	uniuimd
)

// // 将最新的个组件写入缓存区域
// fs.writeFileSync(path.join(__dirname,'temps','sync-version.json'),JSON.stringify(syncVersion,null,2))
//  ------ 写入最新的缓存版本号 end------

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
		if (name === 'uni-ui') {
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

function versionAll(md,oldVersion,mds=[]){
	let data = readChangelog(md)
	let {loc,log,version} = data
	if(compareVersion(version , oldVersion)){
		const newMd  = md.substring(loc.end,md.length).trim()
		mds.push(log)
		versionAll(newMd,oldVersion,mds)
	}
	return mds
}

function compareVersion (a,b){
	a = a.split('.')
	b = b.split('.')
	if(a.length !== b.length){
		console.error('版本号格式不正确')
		return false
	}
	if(a[0] !== b[0]){
		return a[0] >= b[0]
	}
	if(a[1] !== b[1]){
		return a[1] >= b[1]
	}
	if(a[2] !== b[2]){
		return a[2] >= b[2]
	}
	return false
}
