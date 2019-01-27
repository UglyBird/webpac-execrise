const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
      app: './src/index.js',
      print: './src/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
      contentBase: './dist',
  },
  plugins:[
      new HtmlWebpackPlugin({
        title: 'html-webpack-plugin',
      }),
      new CleanWebpackPlugin(['dist']),
    ]
};