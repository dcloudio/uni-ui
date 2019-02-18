const pkg = require('./package.json')
module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer')({
      browsers: pkg.browserslist
    }),
    require('@dcloudio/vue-cli-plugin-uni/packages/postcss')
  ]
}
