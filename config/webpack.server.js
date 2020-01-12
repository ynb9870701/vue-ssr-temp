let base = require('./webpack.base');
let path = require('path');
let merge = require('webpack-merge');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
let externals = require('webpack-node-externals');

module.exports = merge(base, {
    // 打包出的结果给node用
    target: 'node',
    entry: {
        server: path.resolve(__dirname, '../src/serve-entry.js')
    },
    // module.exports = server.entry.js
    output: {
        libraryTarget: 'commonjs2'
    },
    // 第三方模块不需要打包，因为js是在node中运行的默认可以使用第三方库
    externals: [externals()],
    plugins: [
        new VueSSRServerPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.ssr.html',
            template: path.resolve(__dirname, '../public/index.ssr.html')
        })
    ]
})
