const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
baseConfigs = require('./base')
module.exports = merge(baseConfigs,{
    mode: "development",
    devtool: "eval-source-map",
    entry: "./example/index.js",
    output: {
        path: path.resolve(__dirname, "../example/index"),
        filename: "[name].js"
    },
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
            title: "fudex"
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "../example/dist"),
        open: true,
        port: "8808",
        historyApiFallback: true
    }
})

