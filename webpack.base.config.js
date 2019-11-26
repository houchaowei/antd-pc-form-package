const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    // ['style-loader', 'css-loader', 'postcss-loader']
                    'css-loader'
                ]
            }, {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react',"env","es2015","stage-0"],
                }
            }, {
                test: /\.less$/,
                use: ['style-loader', {
                    loader: 'css-loader', options: {
                        importLoaders: 1
                    },
                }, 'less-loader']
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules')],
        extensions: ['.js', '.jsx',],
    },
};