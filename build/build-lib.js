const fs = require('fs')
const path = require('path')
const util = require('./util.js')

function buildLib(callback) {
	const root = path.join(__dirname, '..')
	const uniui = path.join(root, 'uni_modules')
	const packages = path.join(root, 'packages')
	const lib = path.join(packages, 'lib')
	var filenames = []
	var filenamesUpper = []

	const uniuiPackagePath = path.join(packages, 'package.json')
	let uniuiData = util.read(path.join(uniui, 'uni-ui', 'package.json'))
	let uniuiPackageData = util.read(uniuiPackagePath)
	uniuiData = JSON.parse(uniuiData)
	uniuiPackageData = JSON.parse(uniuiPackageData)
	uniuiPackageData.version = uniuiData.version
	util.write(uniuiPackagePath, JSON.stringify(uniuiPackageData, null, 2))
	util.copyFile(path.join(root, 'README.md'), path.join(packages, 'README.md'))

	const exists = fs.existsSync(lib)
	if (exists) {
		util.deleteFolder(lib)
	}
	const packagesLists = fs.readdirSync(uniui)
	packagesLists.reduce((promise, item) => {
		if (item === 'uni-test' || item === 'uni-ui') return promise
		const comPath = path.join(uniui, item, 'components')
		const coms = fs.readdirSync(comPath)

		return coms.reduce((promise, item) => {
			const componentsPath = path.join(comPath, item)
			util.copyDir(componentsPath, path.join(lib, item))
			console.log(item + ' 组件同步成功');
			return promise
		}, promise)
	}, Promise.resolve([])).then(() => {
		console.log('SUCCESS');
		typeof callback === 'function' && callback()
	})

}

module.exports = buildLib
