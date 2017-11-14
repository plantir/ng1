const path = require('path');
const webpack = require('webpack');
const ROOT = path.resolve(__dirname, 'src');
const assets = path.join(ROOT, 'assets')

/**
 * Webpack Plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: ROOT,

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [{
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'tslint-loader',
                    options: {
                        emitErrors: true
                    }
                },
                enforce: 'pre'
            },

            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [
                    'ng-annotate-loader',
                    'awesome-typescript-loader'
                ]
            },

            // {
            //     test: /\.scss$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: ['css-loader', 'sass-loader'],
            //         publicPath: '../'
            //     }),
            // },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
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
                                    'node_modules', './src/assets/scss'
                                ],
                                sourceMap: true,
                                minimize: true
                            }
                        }

                    ]
                })
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
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'AngularJS - Webpack',
            template: 'index.html',
            inject: true
        }),
        new LoaderOptionsPlugin({
            debug: true,
            options: {
                tslint: {
                    configuration: require('./tslint.json'),
                    typeCheck: true
                }
            }
        }),
        new ExtractTextPlugin('css/style.css'),
        new CopyWebpackPlugin([{
            from: assets,
            to: 'assets'
        }])
    ],

    entry: {
        index: './index.ts'
    }
};