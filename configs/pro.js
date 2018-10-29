var merge = require('webpack-merge')
const baseConfigs = require('./base')
const path = require('path');

module.exports = merge(baseConfigs, {
    mode: "production",
    entry: "./src/index.js",
    devtool: "source-map",
    // target: "web",
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: "/dist/",
        libraryTarget: "umd",
        library: 'fudux',
        filename: "index.js"
    },
    performance: {
        hints: false
    },
    optimization: {
        minimize: false,
    }
})