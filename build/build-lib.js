const fs = require('fs-extra')
const path = require('path')
const glob = require("glob")
const exec = require('child_process').exec


const packages = path.join(__dirname, '../src/components')
const lib = path.join(__dirname, '../lib')
const root = path.join(__dirname, '../')

var filenames = []
var filenamesUpper = []

var files = glob.sync(packages + '/**/*.vue')



// //复制vue文件到lib目录
//   var relativePath = path.relative(packages, name)
//   let fileName = relativePath.split('\\')[0]
//   if (!~fileName.indexOf('uni-')) {
//     return
//   }
//   const fileCatalog =fileName.split('/')
//   const fileSubName = fileCatalog[1].split('.')[0]
//   if(fileCatalog[0] === fileSubName){
//     filenames.push(fileSubName)
//   }
//   var dest = path.join(lib, relativePath)
fs.copySync(packages, lib)

const delFileLists = glob.sync(lib + '/**/*.{json,md,bak}')
// 删除json  md 等不必要文件
delFileLists.forEach((fileName) => {
	fs.removeSync(fileName)
})
// fs.outputFileSync(path.join(lib, 'index.js'), outEvtCode, {
// 	override: true
// })
start()
function start () {
  // 任何你期望执行的cmd命令，ls都可以
  let cmdStr1 = 'npm publish'
  let cmdPath = path.join(__dirname,'../lib')
  // 子进程名称
  let workerProcess
  runExec(cmdStr1)
  function runExec (cmdStr) {
    workerProcess = exec(cmdStr, { cwd: cmdPath })
    // 打印正常的后台可执行程序输出
    workerProcess.stdout.on('data', function (data) {
      console.log('stdout: ' + data)
    })
    // 打印错误的后台可执行程序输出
    workerProcess.stderr.on('data', function (data) {
      console.log('stderr: ' + data)
    })
    // 退出之后的输出
    workerProcess.on('close', function (code) {
        console.log(code)
    })
  }
}
