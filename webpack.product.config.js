const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

console.log(process.env);

module.exports = merge(baseConfig, {
    output: {
        filename: "index.js",
        path: path.join(__dirname, './dist'),
        libraryTarget: 'umd',
        // publicPath: "./"
    },
    mode: 'production',
    entry: {
        index: './src/index.js'
    },
    // entry: {
    //     test: './src/example/index.js'
    //     // test: './src/app.js'
    // },
})