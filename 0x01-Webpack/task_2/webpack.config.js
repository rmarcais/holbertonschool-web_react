const path = require('path');

module.exports = {
    mode: "production",
    entry: "./js/dashboard_main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },
    performance: {
        maxAssetSize: 512000
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
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    }
}
