const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const webpackBundleAnalyzer = require("webpack-bundle-analyzer");

module.exports = {
  entry: {
    index: ['@babel/polyfill', './src/index.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/'
  },
  // mode: "development",
  devServer: {
    contentBase: '/dist',
    overlay: true,
    historyApiFallback: true,
    hot: true,
    stats: {
      colors: true
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.sass$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[local]'
            }
          },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: 'public/index.html'
    })
    // new webpackBundleAnalyzer.BundleAnalyzerPlugin()
  ]
};
