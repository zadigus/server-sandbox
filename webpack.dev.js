const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  target: 'node',
  entry: './src/index.ts',
  externals: [nodeExternals()],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      App: path.resolve(__dirname, 'src/App/'),
    }
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts$/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }]
      }
    ]
  },
  plugins: [new NodemonPlugin()],
  mode: 'development'
};
