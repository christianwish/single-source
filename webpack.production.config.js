const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
    entry: [
        './src/export.js',
    ],
    output: {
        publicPath: './',
        path: path.join(__dirname, 'dist'),
        library: 'singleSource',
        libraryTarget: 'umd',
        filename: 'single-source.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        loaders,
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
                drop_debugger: true,
            },
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
    ],
};
