const fs = require('fs-extra')
const path = require('path')
var glob = require("glob")


const packages = path.join(__dirname, '../packages')
const src = path.join(__dirname, '../src')
const lib = path.join(__dirname, '../lib')
const root = path.join(__dirname, '../')

var filenames = []
var filenamesUpper = []

var files = glob.sync(packages + '/**/*.vue')

//复制vue文件到lib目录
files.forEach(name => {
	var relativePath = path.relative(packages, name)
    let fileName = relativePath.split('\\')[0]
    if(!~fileName.indexOf('uni-')){
        return
    }
	filenames.push(fileName)
	var dest = path.join(lib, relativePath)
	fs.copySync(name, dest)
	
	var data = fs.readFileSync(name).toString();
	// 判断下是否存在 import xx from 'xxx',如果存在，复制其到对应的目录
	var importFiles = data.match(/import.*from\s'.*'/ig);
	if(importFiles){
		importFiles.forEach(value => {
			let importFile = path.resolve(name,'../',data.match(/import.*from\s'.*'/)[0].split('\'')[1]);
			if(path.extname(importFile) === ''){
				importFile += '.js'
			}
			if(path.extname(importFile) !== '.js'){
				return;
			}
			fs.copySync(importFile, path.join(dest,path.relative(name,importFile)))
		})
	}
})
console.log(filenames)
//导入vue文件
const importEvtCode = filenames.map(name => {
	var names = name.split('-')
	names.forEach((value, index) => {
        if(index === 0){
            return
        }
		names[index] = names[index].charAt(0).toUpperCase() + names[index].slice(1)
	})
	filenamesUpper.push(`${names.join('')}`)
	return `import * as ${names.join('')} from './${name}/${name}.vue'`
}).join('\r\n')

// 导出vue文件
const exportEvtCode = filenamesUpper.join(',\r\n  ')

//生成index.js
const outEvtCode =
	`
${importEvtCode}
export {
  ${exportEvtCode}
}
const install = function(Vue, options) {
  const components = require.context('./', true, /\.vue$/)
  components.keys().forEach(fileName => {
    const componentConfig = components(fileName)['default']
    Vue.component(componentConfig.name, componentConfig)
  })
}
export default install
`

fs.outputFileSync(path.join(lib, 'index.js'), outEvtCode, {
	override: true
})
