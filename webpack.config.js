'use strict'

const path = require('path')

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.js')
  },

  output: {
    path: path.resolve(__dirname, 'build/js'),
    publicPath: '/',
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  stats: {
    colors: true
  }
}
