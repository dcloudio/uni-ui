const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const modulesId = process.env.UNI_MODULES_ID || process.argv[2]

if (modulesId == null || modulesId.trim() === '' || modulesId === 'uni-ui-x') {
    return
}

const moduleName = modulesId.trim()
const readmePath = path.join(root, 'uni_modules', moduleName, 'readme.md')

if (!fs.existsSync(readmePath)) {
    console.error(`update_readme: readme.md not found for ${moduleName}`)
    return
}

const docName = getDocName(moduleName)
const docUrl = `https://doc.dcloud.net.cn/uni-app-x/component/uni-ui-x/${docName}.html`
const content = `### [\u67e5\u770b\u6587\u6863](${docUrl})\n`

fs.writeFileSync(readmePath, content)
console.log(`update_readme: ${readmePath}`)

function getDocName(moduleName) {
    if (moduleName === 'uni-tab-bar') {
        return 'uni-tab'
    }
    return moduleName.replace(/-x$/, '')
}
