const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const vendorPath = path.resolve(__dirname, './dist/dll');

module.exports = merge(baseConfig, {
    target: 'web',
    output: {
        filename: '[name].js',
        // filename: '[name].js',
        path: path.resolve(__dirname, './dist/'),
        // chunkFilename: 'js/[name].[chunkhash:8].js',
        chunkFilename: '[name].js',
        libraryTarget: 'umd',
        publicPath: "./"
    },
    mode: 'production',
    entry: {
        index: ['./src/index.js']
        // index: ['./src/example/index.js']
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                uglifyOptions: {
                    warnings: false,
                    parse: {},
                    compress: true,
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_fnames: false,
                }
            })
        ],
        namedModules: true,
        occurrenceOrder: false,
        minimize: true,
        splitChunks: {
            chunks: "all",
            minSize: 10,
            minChunks: 10,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                // reactBase: {
                //     name: 'reactBase',
                //     test: /react/,
                //     // enforce: true,
                //     minChunks: 1,
                //     // chunks: 'all',
                //     priority: 10,
                // },
                // antd: {
                //     name: 'antd',
                //     test: /antd/,
                //     enforce: true,
                //     minChunks: 1,
                //     // chunks: 'all',
                //     priority: 8,
                // },
                // index: {
                //     name: 'index',
                //     chunks: 'initial',
                //     priority: 2,
                //     minChunks: 1,
                //     enforce: true,
                // },
            }
        },
        // runtimeChunk: true
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: "./src/index.html",
        //     filename: 'index.html',
        //     templateParameters: {
        //         vendor: `${vendorPath}/vendors.dll.js`,
        //         title: 'ceshi',
        //         node_env: 'production'
        //     },
        //     inject: true,
        //     cache: true
        // }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name]-[hash].css',
            chunkFilename: '[id][hash].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new BundleAnalyzerPlugin(),
        // new webpack.DllReferencePlugin({
        //     context: path.join(__dirname, '..'),
        //     manifest: require(`${vendorPath}/vendors.manifest.json`)
        // }),
        new CleanWebpackPlugin(),
        new CompressionPlugin(),
    ]
});