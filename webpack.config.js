var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './web/static/js/app.js',
  output: {
    path: './priv/static/js/',
    filename: 'app.min.js'
  },
  plugins: [
    new ExtractTextPlugin('./priv/static/css/app.css', {allChunks: true})
  ],
  module: {
    loaders: [
      {
        test: /web\/static\/js.*\.jsx.js$/,
        loader: 'jsx-loader'
      },
      {
        test: /web\/static\/js.*\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /web\/static\/css.*\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIndentName=[name]__[local]___[hash:base64:5]!sass!autoprefixer')
      }
    ]
  },
  externals: {
  }
};
