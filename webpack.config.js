const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const rootFolder = __dirname;

module.exports = {
    context: rootFolder,
    entry: ['./src/bootstrap/index.js',],
    output: {
        filename: '[hash].js',
        path: path.resolve('./build'),
    },
    module: {
        rules: rules()
    },
    resolve: {
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./src'),
            path.resolve('./assets')
        ]
    },
    plugins: plugins()
};

function rules() {
    return [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                    }
                },
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf)$/, use: 'url-loader'
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/, use: [
                {
                    loader: 'url-loader',
                    options: { limit: '2000' }
                }
            ]
        },
        {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    interpolate: true,
                    attrs: ['link:href', 'img:src']
                }
            },]
        }
    ];
}

function plugins() {
    return [
        new HtmlWebpackPlugin({
            template: 'src/bootstrap/index.html',
            hash: true
        }),
    ];
}