module.exports = [{
    test: /\.css$/,
    use: [
        // "style-loader",
        "file-loader",
        "extract-loader",
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
            }
        },
        'postcss-loader'
    ]
},
{
    test: /\.(woff|woff2|eot|ttf|svg)$/, use: 'url-loader'
},
{
    test: /\.(jpg|jpeg|gif|png)$/, use: {
        loader: 'url-loader',
        options: {
            limit: 2000
        }
    }
},
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
    },]
}
]