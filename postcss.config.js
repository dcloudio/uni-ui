const pkg = require('./package.json')
module.exports = {
	plugins: [
		require('autoprefixer')({
			browsers: pkg.browserslist
		}),
		require('@dcloudio/vue-cli-plugin-uni/packages/postcss')
	]
}
