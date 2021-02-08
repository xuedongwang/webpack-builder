const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  mode: 'development',
  entry: path.join(__dirname, '../src/main.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name]_[hash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};

module.exports = webpackConfig;