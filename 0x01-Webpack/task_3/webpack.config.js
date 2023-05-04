const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public")
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        port: 8564,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                type: 'asset/resource',
                loader: 'image-webpack-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'task_3'
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
    },
}
