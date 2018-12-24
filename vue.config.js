const path = require('path')

const isWin = /^win/.test(process.platform)
const normalizePath = path => (isWin ? path.replace(/\\/g, '/') : path)

module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'uni-ui': path.resolve(__dirname, './src')
			}
		}
	},
	chainWebpack: webpackConfig => {
		// Vue
		webpackConfig.module
			.rule('vue')
			.include
			.add(path.resolve(__dirname, './packages'))
	},
	css: {
		loaderOptions: {
			sass: {
				data: `@import "${normalizePath(path.resolve(__dirname, './uni.scss'))}";`
			}
		}
	}
}
