const fs = require('fs-extra')
const path = require('path')
var glob = require("glob")


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
