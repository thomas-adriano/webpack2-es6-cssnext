const configs = require('./webpack-commons.config.js');
const webpack = require('webpack');

configs.devtool = 'cheap-module-source-map';
configs.plugins = configs.plugins.concat([
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: true,
        },
        sourceMap: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
    }),
]);

module.exports = configs;