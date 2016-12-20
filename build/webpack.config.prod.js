var webpack = require('webpack')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var pathUtil = require('./path-util.js')
var baseWebpackConfig = require('./webpack.config.base')

module.exports = merge(baseWebpackConfig, {
  entry: {
    'vue-typer': pathUtil.getPathFromRoot('src/vue-typer.js'),
  },
  output: {
    filename: '[name].min.js'
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})