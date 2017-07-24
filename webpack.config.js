const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "[hash].js",
    path: __dirname + "/dist",
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new AssetsPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body'
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css',
        'https://code.jquery.com/jquery-3.1.1.slim.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js',
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js',
      ],
      append: true,
    })
  ]
};