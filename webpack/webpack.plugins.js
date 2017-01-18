const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const commonPlugins = [

]

module.exports = [
    new HtmlWebpackPlugin({
        template: 'src/bootstrap/index.html',
        hash: true
    }),
];