const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const rootFolder = path.resolve(__dirname, '..');

module.exports = {
    context: rootFolder,
    entry: './src/bootstrap/index.js',
    output: {
        filename: '[chunkhash].js',
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
            test: /.js$/,
            exclude: /node_modules/,
            enforce: 'pre',
            use: 'jshint-loader'
        },
        {
            test: /\.css$/,
            include: /node_modules/,
            use: [
                "file-loader",
                "extract-loader",
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                    }
                },
            ]
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                "file-loader",
                "extract-loader",
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                    }
                },
                'postcss-loader'
            ],
        },
        {
            test: /\.(woff|woff2|eot|ttf)$/, use: 'url-loader'
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/, use: [
                {
                    loader: 'url-loader',
                    options: { limit: '2000' }
                },
                {
                    loader: 'image-webpack-loader',
                    query: {
                        progressive: true,
                        optimizationLevel: 7,
                        interlaced: true,
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        },
                        mozjpeg: {
                            quality: 65
                        },
                        gifsicle: {
                            optimizationLevel: 2
                        }
                    }
                }
            ]
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: ['babel-loader'],
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