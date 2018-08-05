const path = require('path');
const ROOT = path.resolve(__dirname, 'src');
const ASSETS = path.join(ROOT, 'assets')
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: ROOT,
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
                test: /\.ts$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: [{
                    loader: 'tslint-loader',
                }, ],
            },
            {
                test: /\.(t|j)s$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'ng-annotate-loader'
                    },
                    {
                        loader: 'awesome-typescript-loader'
                    },
                ],
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.(svg|woff|woff2|eot|ttf)$/,
                use: 'file-loader?outputPath=fonts/'
            },
            {
                test: /.html$/,
                exclude: /index.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    process.env.ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            minimize: true
                        }

                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: [
                                'node_modules', './src/Helper/scss'
                            ],
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true
        }),
        // new ExtractTextPlugin('css/style.css'),
        new CopyWebpackPlugin(['robots.txt', {
            from: ASSETS,
            to: 'assets'
        }]),
        new MiniCssExtractPlugin({
            filename: "css/style.css",
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        }),
    ],

    entry: {
        index: './index.ts'
    }
}