const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const vendorPath = path.resolve(__dirname, './dist/dll');
const library = '[name]_lib';

module.exports = {
    mode: 'production',
    entry: {
        vendors: [
            'react',
            'react-dom',
            'antd'
        ]
    },
    resolve: {
        mainFiles: ['index.web', 'index'],
        modules: [
            'node_modules'
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    output: {
        filename: '[name].dll.js',
        path: vendorPath,
        library
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('production')
        // }),
        new webpack.DllPlugin({
            path: path.join(vendorPath, '[name].manifest.json'),
            name: library
        }),
    ]
};