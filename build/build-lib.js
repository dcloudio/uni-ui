const fs = require('fs-extra')
const path = require('path')
const glob = require("glob")
const exec = require('child_process').exec
const argv = process.argv.splice(2)[0]

const packages = path.join(__dirname, '../src/components')
const lib = path.join(__dirname, '../lib')
const root = path.join(__dirname, '../')

var filenames = []
var filenamesUpper = []

fs.copy(packages, lib).then(() => {
	console.log('---- 同步完成 ----');
	const delFileLists = glob.sync(lib + '/**/*.{json,md,bak}')
	// 删除json  md 等不必要文件
	delFileLists.reduce((promise, fileName) => {
		return promise.then(() => {
			return fs.remove(fileName)
		})
	}, Promise.resolve([])).then(() => {
		// 删除所有文件成功之后，开始去同步 npm
		if (argv === 'npm') {
			start()
		}
	})

})

function start() {
	// 任何你期望执行的cmd命令，ls都可以
	let cmdStr1 = 'npm publish'
	let cmdPath = path.join(__dirname, '..')
	let workerProcess = null
	// 子进程名称
	runExec(cmdStr1, cmdPath, workerProcess)
}

function runExec(cmdStr, cmdPath, workerProcess) {
	workerProcess = exec(cmdStr, {
		cwd: cmdPath
	})
	// 打印正常的后台可执行程序输出
	workerProcess.stdout.on('data', function(data) {
		console.log(data)
	})
	// 打印错误的后台可执行程序输出
	workerProcess.stderr.on('data', function(data) {
		console.log(data)
	})
	// 退出之后的输出
	workerProcess.on('close', function(code) {
		console.log(code)
	})
}
