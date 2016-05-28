const path = require('path');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, './app');
const BUILD_DIR = path.resolve(__dirname, APP_DIR, './dist');

module.exports = {
  entry: `${APP_DIR}/js/main.js`,
  output: {
    path: BUILD_DIR,
    publicPath: '/assets/',
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
    ],
  },
  resolve: {
    alias: {
      components: `${APP_DIR}/js/components`,
    },
  },
};
