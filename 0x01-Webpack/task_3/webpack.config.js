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
        port: 8564,
        static: {
           directory: path.resolve(__dirname, "public")
        }
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
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin()
    ],
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
    },
}
