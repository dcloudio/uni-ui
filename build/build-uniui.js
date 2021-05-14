const path = require('path')
const fs = require('fs')
const modulesId = 'uni-ui'
const root = path.join(__dirname, '..')
const modulesPath = path.join(root, 'uni_modules')
const docsChangeLog = path.join(root, 'docs', 'changelog.md')

function buildChangeLog(callback) {

	let componentsPackageJsons = getAllComponentsList(modulesPath)
	const syncVersions = path.join(root, 'temps', 'sync-version.json')
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
				md = md.replace(/- /g, `- ${id} `).trim()
				content += (md.trim() + '\n')
			})
			uniuimd += (content.trim() + '\n')
		}
		syncVersion[id] = version
	})
	// console.log(uniuimd);
	uniuimd = uniuimd.trim()
	if (uniuimd) {
		let uniuiPackagePath = path.join(modulesPath, modulesId, 'package.json')
		uniuiPackage = JSON.parse(fs.readFileSync(uniuiPackagePath).toString())
		let mdpath = path.join(modulesPath, modulesId, 'changelog.md')
		let newVersion = uniuiPackage.version.split('.')
		newVersion[2] = Number(newVersion[2]) + 1
		newVersion = newVersion.join('.')
		uniuiPackage.version = newVersion
		buildDocsChangeLog(uniuimd, newVersion)
		const uniuiChangelog = updateChangelogFile(
			mdpath,
			newVersion,
			uniuimd
		)
		// 修改合并后的 release
		fs.writeFileSync(mdpath, uniuiChangelog)
		// package.json 版本号 +1
		fs.writeFileSync(uniuiPackagePath, JSON.stringify(uniuiPackage, null, 2))
		console.log('文档日志更新完成，更新内容如下：');
		console.log(uniuimd);
	}else{
		console.log('当前是最新版本，无需更新');
	}
	// 将最新的组件写入缓存区域
	fs.writeFileSync(path.join(__dirname, '..', 'temps', 'sync-version.json'), JSON.stringify(syncVersion, null, 2))

	typeof callback === 'function' && callback()

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
		if (name === modulesId || name === 'uni-test') {
			return
		}
		const packagePath = path.join(modulesPath, name, 'package.json')
		try {
			let data = fs.readFileSync(packagePath).toString()
			content.push(JSON.parse(data))
		} catch (err) {
			// console.log(packagePath + '不存在');
		}
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

function buildDocsChangeLog(md, version) {
	let date = new Date()
	date = `${date.getFullYear()}-${padZero(date.getMonth() + 1)}-${padZero(date.getDate())}`
	md = md.replace(/\r\n/ig, '\n')
	const mds = md.split('\n')
	let content = `<!-- 更新占位 -->\n<log title="${version}" date="${date}">\n`
	let arrs = {}
	mds.forEach(v => {
		if (!v) return
		const nameRE = /-\s+([a-z\-]+ (优化|新增|修复)?).*/g
		const curNameMatch = nameRE.exec(v)
		if (!curNameMatch) return
		let curName = {
			name: curNameMatch[1].replace(curNameMatch[2], '').trim(),
			line: curNameMatch[0],
			status: curNameMatch[2] || null
		}
		const statusName = curName.status || curName.name
		let line = curName.line.indexOf(statusName)
		curName.line = curName.line.substr(line + statusName.length, curName.line.length)
		if (!arrs[curName.name]) {
			arrs[curName.name] = []
		}
		arrs[curName.name].push(curName)
	})
	for (let i in arrs) {
		const item = arrs[i]
		content += `	<log-item title="${i} 组件更新">\n`
		item.forEach(v => {
			let status = ''
			switch (v.status) {
				case '新增':
					status = 'feat'
					break;
				case '修复':
					status = 'fix'
					break
				case '优化':
					status = 'perf'
					break
				default:
					status = 'perf'
			}
			content += `		<log-item-text tag-type="${status}">\n`
			content += '			' + v.line + '\n'
			content += `		</log-item-text>\n`

		})
		content += '	</log-item>\n'
	}
	content += '</log>\n'

	let docsMd = fs.readFileSync(docsChangeLog).toString()
	docsMd = docsMd.replace('<!-- 更新占位 -->', content)
	fs.writeFileSync(docsChangeLog, docsMd)

}

function compareVersion(a, b) {
	a = a.split('.')
	b = b.split('.')
	if (a.length !== b.length) {
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

module.exports = buildChangeLog
