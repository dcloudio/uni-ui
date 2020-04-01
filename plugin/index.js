const fs = require('fs-extra')
const path = require('path')

class CopyPlugin {
  constructor(option) {
    this.options = option
  }

  apply(compiler) {
    const { from, to } = this.options
    console.log('-----', from, to)
    const fromFiles = fs.readdirSync(from)
    console.log(fromFiles)
    const exists = fs.existsSync(to)
    console.log(exists)
    if (exists) {
      fs.removeSync(to)
    }
    fromFiles.forEach(pathName => {
      // let name = path.join(from, pathName, pathName + '.vue')
      const subFileLists = fs.readdirSync(path.join(from, pathName))
      subFileLists.forEach((item) => {
        const basename = path.basename(item, '.vue')
        fs.copySync(path.join(from, pathName, item), path.join(to, pathName, basename + '.nvue'))
      })
    })
    // fs.exists(to, (exists) => {
    //   console.log(exists)
    //   if (exists) {
    //     fs.removeSync(to)
    //   }
    //   fromFiles.forEach(pathName=>{
    //     let name = path.join(from,pathName,pathName+'.vue')
    //     console.log(name)
    //   })
    // })

    // fs.copy(from, to, (err) => {
    //   if (err) console.error(err)
    // })
    compiler.hooks.watchRun.tapAsync('CopyPlugin', (watching, callback) => {
      console.log('这里进行了修改，注意看')
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

        // console.log(name)
        // console.log(extname)
        // console.log(basename)
        console.log(path.join(filePath, '..'))
        console.log(from)
        if (path.join(filePath, '..').indexOf(from) === -1) {
          console.log('不修改这个文件', filePath)
        } else {
          console.log('修改这个文件到:', toFilePath)
          fs.copySync(filePath, toFilePath)
        }

        // const toFilePath  = path.join(to,name)
        // const basename = path.basename(toFilePath, path.extname(toFilePath))
        // console.log(basename)
        // console.log(filePath.split(dirname).pop())
        // console.log(path.join(to,'..',basename+'.nvue'))
      })
      // changedFiles 格式为键值对，键为发生变化的文件路径。
      callback();
    });
  }
}

module.exports = CopyPlugin;
