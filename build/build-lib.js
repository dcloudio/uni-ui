const fs = require('fs-extra')
const path = require('path')
const glob = require("glob")
const exec = require('child_process').exec
const argv = process.argv.splice(2)[0]

const packages = path.join(__dirname, '../uni_modules')
const uniui = path.join(__dirname, '../packages')
const lib = path.join(uniui, 'lib')
const root = path.join(__dirname, '../')

var filenames = []
var filenamesUpper = []

const uniuiPackagePath = path.join(uniui, 'package.json')
let uniuiData = fs.readFileSync(path.join(root, 'package.json'), 'utf-8')
uniuiData = JSON.parse(uniuiData)
let uniuiPackageData = fs.readFileSync(uniuiPackagePath, 'utf-8')
uniuiPackageData = JSON.parse(uniuiPackageData)
uniuiPackageData.version = uniuiData.version
fs.outputFileSync(uniuiPackagePath, JSON.stringify(uniuiPackageData, '', 2))
fs.copySync(path.join(root, 'README.md'), path.join(uniui, 'README.md'))
const exists = fs.existsSync(lib)
if (exists) {
	fs.removeSync(lib)
}

const packagesLists = fs.readdirSync(packages)
packagesLists.reduce((promise, item) => {
	const comPath = path.join(packages, item, 'components')
	const coms = fs.readdirSync(comPath)
	return coms.reduce((promise, item) => {
		const componentsPath = path.join(comPath, item)
		fs.copySync(componentsPath, path.join(lib, item))
		console.log(item + ' 组件同步成功');
		return promise
	}, promise)
}, Promise.resolve([])).then(() => {
	console.log('SUCCESS');
	if (argv === 'npm') {
		console.log('----- 开始上传 npm -----');
		start()
	}
})

function start() {
	// 任何你期望执行的cmd命令，ls都可以
	let cmdStr1 = 'npm publish'
	let cmdPath = path.join(__dirname, '..', 'packages', 'uni-ui')
	let workerProcess = null
	console.log(cmdPath);
	// 子进程名称
	runExec(cmdStr1, cmdPath, workerProcess)
}

function runExec(cmdStr, cmdPath, workerProcess) {
	workerProcess = exec(cmdStr, {
		cwd: cmdPath
	})
	// 打印正常的后台可执行程序输出
	workerProcess.stdout.on('data', function(data) {
		process.stdout.write(data)
	})
	// 打印错误的后台可执行程序输出
	workerProcess.stderr.on('data', function(data) {
		process.stdout.write(data)
	})
	// 退出之后的输出
	workerProcess.on('close', function(code) {
		console.log(code)
	})
}
