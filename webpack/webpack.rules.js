module.exports = [{
        test: /\.css$/,
        use: [
            "style-loader",
            // "file-loader",
            // "extract-loader",
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            'postcss-loader'
        ]
    },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: 'url-loader' },
    {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
    },
    {
        test: /\.html$/,
        use: [{
            loader: 'html-loader',
            options: {
                interpolate: true,
                attrs: ["link:href"]
            }
        }, ]
    }
]