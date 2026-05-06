const buildLib = require('./build-lib.js')
const buildChangeLog = require('./build-uniui.js')
const buildReadme = require('./build-readme.js')
const argv = process.argv.splice(2)[0]
const util = require('./util.js')
if(argv === 'lib'){
	buildLib()
}
if(argv === 'release'){
	buildReadme()
	buildChangeLog()
}

if(argv === 'npm'){
	buildLib(()=>{
		util.start()
	})
}
if(argv === 'readme') {
	buildReadme()
}
