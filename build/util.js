const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec

class Util {
	constructor(arg) {

	}

	/**
	 * 执行 npm
	 */
	start(cmd = 'npm publish') {
		// 任何你期望执行的cmd命令，ls都可以
		let cmdStr1 = cmd
		let cmdPath = path.join(__dirname, '..', 'packages')
		let workerProcess = null
		// 子进程名称
		this.runExec(cmdStr1, cmdPath, workerProcess)
	}

	runExec(cmdStr, cmdPath, workerProcess) {
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
		})
	}
	/**
	 * 处理 readme.md
	 * @param {Object} readmePath
	 */
	handleReadme(readmePath) {
		let content = this.read(readmePath)
		// 兼容 windows ，将 \r\n 全部替换成 \n
		content = content.replace(/\r\n/ig, '\n')
		// 删除头部额外信息，在其他平台不支持，只在 uni ui 中支持
		content = content.replace(/---([\s\S]*?)---/ig, '')
		// 转换 ::: 语法
		content = content.replace(/::: (.*?)\n([\s\S]*?):::/ig, function(_, $1, $2) {
			$1 = $1.replace(/(tip|danger|warning)+ /,'')
			return '> **'+ $1 +'**\n'+ $2.split('\n').filter(item => item !== '').map(item => `> ${item}\n`).join('')
		})
		return content
	}

	/**
	 * 读取文件
	 * @param {Object} url
	 */
	read(url) {
		return fs.readFileSync(url).toString()
	}

	/**
	 * 写入文件
	 * @param {Object} url
	 * @param {Object} content
	 */
	write(url, content) {
		return fs.writeFileSync(url, content)
	}

	/**
	 * 拷贝文件
	 * @param {Object} from 文件来自那里
	 * @param {Object} to		拷贝到那里
	 */
	copyFile(from, to) {
		return fs.writeFileSync(to, fs.readFileSync(from))
	}

	/**
	 * 拷贝目录以及子文件
	 * @param {Object} src
	 * @param {Object} dist
	 * @param {Object} callback
	 */
	copyDir(src, dist, callback) {
		this._copyDir(src, dist);
		if (callback) {
			callback();
		}
	}

	/**
	 * 删除目录
	 * @param {Object} path
	 */
	deleteFolder(path) {
		let files = [];
		if (fs.existsSync(path)) {
			files = fs.readdirSync(path);
			files.forEach((file, index) => {
				let curPath = path + '/' + file
				if (fs.statSync(curPath).isDirectory()) {
					this.deleteFolder(curPath);
				} else {
					fs.unlinkSync(curPath);
				}
			});
			fs.rmdirSync(path);
		}
	}

	//递归创建目录 同步方法
	mkdirsSync(dirname) {
		if (fs.existsSync(dirname)) {
			return true;
		} else {
			if (this.mkdirsSync(path.dirname(dirname))) {
				fs.mkdirSync(dirname);
				return true;
			}
		}
	}

	_copy(src, dist) {
		if(fs.statSync(src).isFile()) {
			return
		}
		var paths = fs.readdirSync(src)
		paths.forEach((p)=> {
			var _src = src + '/' + p;
			var _dist = dist + '/' + p;
			var stat = fs.statSync(_src)
			if (stat.isFile()) { // 判断是文件还是目录
				fs.writeFileSync(_dist, fs.readFileSync(_src));
			} else if (stat.isDirectory()) {
				this._copyDir(_src, _dist) // 当是目录是，递归复制
			}
		})
	}

	/*
	 * 复制目录、子目录，及其中的文件
	 * @param src {String} 要复制的目录
	 * @param dist {String} 复制到目标目录
	 */
	_copyDir(src, dist) {
		var b = fs.existsSync(dist)
		if (!b) {
			this.mkdirsSync(dist); //创建目录
		}
		this._copy(src, dist);
	}

}

module.exports = new Util()
