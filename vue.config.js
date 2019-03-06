const path = require('path')
const isWin = /^win/.test(process.platform)
const normalizePath = path => (isWin ? path.replace(/\\/g, '/') : path)
process.env.UNI_INPUT_DIR= path.join(__dirname,'./examples')

module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'uni-ui': path.resolve(__dirname, './src')
			}
		}
	},
	css: {
		loaderOptions: {
			sass: {
				data: `@import "${normalizePath(path.resolve(__dirname, './uni.scss'))}";`
			}
		}
	}
}
