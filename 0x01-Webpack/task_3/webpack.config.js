const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        header: {
            import: './modules/header/header.js',
            dependOn: 'shared'
        },
        body: {
            import: './modules/body/body.js',
            dependOn: 'shared'
        },
        footer: {
            import: './modules/footer/footer.js',
            dependOn: 'shared'
        },
        shared: 'jquery'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public")
    },
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
