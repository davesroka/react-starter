const path = require('path');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, './app');
const BUILD_DIR = path.resolve(__dirname, APP_DIR, './dist');

module.exports = {
  entry: `${APP_DIR}/js/main.js`,
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.woff|woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    alias: {
      containers: `${APP_DIR}/js/containers`,
      components: `${APP_DIR}/js/components`,
      actions: `${APP_DIR}/js/actions`,
      reducers: `${APP_DIR}/js/reducers`,
      services: `${APP_DIR}/js/services`,
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'source-map',
};
