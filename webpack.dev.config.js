const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name]-[hash].css',
            chunkFilename: '[id][hash].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ]
});