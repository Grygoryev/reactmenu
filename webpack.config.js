const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: "babel-loader"
                  },
                  {
                    loader: "react-svg-loader",
                    options: {
                      jsx: true // true outputs JSX tags
                    }
                  }
                ]
            },
            {
                test: /\.scss$/,
                use:  
                [  
                    'style-loader', 
                    cssPlugin.loader, 
                    'css-loader', 
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new cssPlugin({
            filename: 'main.css',
        })
    ]
}; 