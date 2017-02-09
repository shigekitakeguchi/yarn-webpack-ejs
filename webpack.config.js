var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = [{
  entry: {
    application: './src/scripts/app.js',
  },
  output: {
    path: './app/scripts',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template:  'ejs-render-loader!./src/template.ejs'
    }),
    new HtmlWebpackPlugin({
      filename: '../about.html',
      template:  'ejs-render-loader!./src/template.ejs'
    }),
    new HtmlWebpackPlugin({
      filename: '../products.html',
      template:  'ejs-render-loader!./src/template.ejs'
    })
  ]
},{
  entry: {
    application: './src/scss/app.scss'
  },
  output: {
    path: './app/styles',
    filename: 'bundle.css'
  },
  module: {
    loaders: [
      {
        test: /\.css|scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new BrowserSyncPlugin(
                  {
                    host: 'localhost',
                    port: 8081,
                    server: { baseDir: ['public'] }
                  }
                )
  ]
}];
