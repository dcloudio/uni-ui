
const path = require('path')
const CopyPlugin = require('./plugin')

module.exports = {
    configureWebpack: {
        plugins: [new CopyPlugin({
            from:path.join(__dirname,'src/pages/vue'),
            to:path.join(__dirname,'src/pages/nvue')
        })]
    }
}
