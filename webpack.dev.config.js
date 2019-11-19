const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
    output: {
        filename: "index.js",
        path: path.join(__dirname, './dist'),
        libraryTarget: 'umd',
    },
    entry: {
        test: './src/example/index.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 4001
    }
});