var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./src/main.js",

    output: {
        path: __dirname + '/public/build',
        publicPath: "/build",
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "react-hot!babel?presets[]=es2015,presets[]=stage-0,presets[]=react",
                exclude: [/node_modules/, /public/],

            },
            {
                test: /\.jsx$/,
                loader: "react-hot!babel?presets[]=es2015,presets[]=stage-0,presets[]=react",
                exclude: [/node_modules/, /public/],
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader?strictMath&noIeCompat"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },

            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf$/, loader: "file-loader"
            },
            {
                test: /\.eot$/, loader: "file-loader"
            },

        ]
    },
    devServer: {
        contentBase: "./public",
        hot: true,
        port: 8000,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery/dist/jquery.min.js",
            jQuery: "jquery/dist/jquery.min.js",
            "window.jQuery": "jquery/dist/jquery.min.js"
        }),

    ],
}