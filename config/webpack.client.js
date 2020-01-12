let merge = require('webpack-merge');
let base = require('./webpack.base');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = merge(base, {
    // 入口
    entry: {
        client: path.resolve(__dirname, '../src/client-entry.js')
    },
    plugins: [
        new VueSSRClientPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../public/index.html')
        })
    ]
})