const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/app.js',
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
              test: /\.(png|jpe?g|gif|mp3)$/i,
              loader: 'file-loader',
              options: {
                name: 'assets/[name].[ext]',
              },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            js: ["assets/app.js"],
            template: './src/index.html'
        }),
    ],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
