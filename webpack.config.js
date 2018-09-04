'use strict'

const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),

  output: {
    path: path.resolve(__dirname, 'build/js'),
    publicPath: '/',
    filename: 'app.js'
  },

  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve(__dirname, 'node_modules')
    ]
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /nodo_modules/,
        use: 'babel-loader'
      }
    ]
  },

  stats: {
    colors: true
  }
}
