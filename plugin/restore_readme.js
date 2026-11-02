const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const modulesId = process.env.UNI_MODULES_ID || process.argv[2]

if (modulesId == null || modulesId.trim() === '' || modulesId.trim() === 'uni-ui-x') {
    return
}

const moduleName = modulesId.trim()
const readmePath = path.join(root, 'uni_modules', moduleName, 'readme.md')
const backupPath = path.join(root, 'temps', 'readme_backups', moduleName + '.md')

if (!fs.existsSync(backupPath)) {
    return
}

// Only remove the backup after the original bytes have been restored successfully.
fs.copyFileSync(backupPath, readmePath)
fs.unlinkSync(backupPath)
console.log(`restore_readme: ${readmePath}`)
