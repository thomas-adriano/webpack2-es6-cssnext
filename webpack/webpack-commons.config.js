const path = require('path');
const rootFolder = path.resolve(__dirname, '..');

const rules = require('./webpack.rules.js');
const plugins = require('./webpack.plugins.js');

module.exports = {
    context: rootFolder,
    entry: ['./src/bootstrap/index.js', ],
    output: {
        filename: '[hash].js',
        path: path.resolve('./build'),
    },
    module: {
        rules
    },
    resolve: {
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./src')
        ]
    },
    plugins
};