const fs = require('fs')
const util = require('../build/util.js')
const path = require('path')

class CopyPlugin {
  constructor(option) {
    this.options = option
  }

  apply(compiler) {
    const { from, to } = this.options
    const fromFiles = fs.readdirSync(from)
    const exists = fs.existsSync(to)
    if (exists) {
      util.deleteFolder(to)
    }
    fromFiles.forEach(pathName => {
      if(pathName === '.DS_Store') return
      // let name = path.join(from, pathName, pathName + '.vue')
      const subFileLists = fs.readdirSync(path.join(from, pathName))
      subFileLists.forEach((item) => {
        const basename = path.basename(item, '.vue')
				util.mkdirsSync(path.join(to, pathName))
				util.copyFile(path.join(from, pathName, item), path.join(to, pathName, basename + '.nvue'))
      })
    })

    compiler.hooks.watchRun.tapAsync('CopyPlugin', (watching, callback) => {
      // changedFiles 格式为键值对，键为发生变化的文件路径。
      // 获取发生变化的文件列表
      const changedFiles = watching.watchFileSystem.watcher.mtimes;
      Object.keys(changedFiles).forEach(filePath => {
        /*
          例子:
          filePath = /Users/mehaotian/project/uni-cli/my-project/src/copy/index/index.vue
          from = /Users/mehaotian/project/uni-cli/my-project/src/pages
          to = /Users/mehaotian/project/uni-cli/my-project/src/copy
        */

        // 获取被同步文件根目录  如； /Users/mehaotian/project/uni-cli/my-project/src
        // const fromDirname = path.join(from,'..')

        // 获取 from 相对路径  如 : /index/index.vue
        const name = filePath.split(from).pop()
        //  获取后缀 如 ： .vue
        const extname = path.extname(filePath)
        // 获取文件不带后缀 index
        const basename = path.basename(name, extname)
        // 获取要copy 的路径
        const toFilePath = path.join(to, name, '..', basename + '.nvue')

        if (path.join(filePath, '..').indexOf(from) === -1) {
          // console.log('不修改这个文件', filePath)
        } else {
          // console.log('同步文件到:', toFilePath)
          util.copyFile(filePath, toFilePath)
        }

      })
      callback();
    });
  }
}

module.exports = CopyPlugin;
