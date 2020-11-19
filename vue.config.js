
const path = require('path')
const CopyPlugin = require('./plugin')

module.exports = {
    configureWebpack: {
        plugins: [new CopyPlugin({
            from:path.join(__dirname,'pages/vue'),
            to:path.join(__dirname,'pages/nvue')
        })]
    }
}
