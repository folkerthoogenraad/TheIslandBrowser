const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config = {
  entry: './src/index.js',
  mode: "development",
  devtool: 'inline-source-map',

  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },  
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    plugins: [new TsconfigPathsPlugin({})]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'src', 'html'), to: path.resolve(__dirname, 'docs')},
      { from: path.resolve(__dirname, 'src', 'assets'), to: path.resolve(__dirname, 'docs', 'assets')},
      ]),
  ]
};

module.exports = config;
