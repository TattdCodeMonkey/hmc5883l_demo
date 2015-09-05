var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './web/static/js/index.js',
  output: {
    path: './priv/static/js/',
    filename: 'app.min.js'
  },
  plugins: [
    new ExtractTextPlugin('../css/app.css', {allChunks: true})
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
        test: /web\/static.*\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass!autoprefixer')
      }
    ]
  },
  externals: {
  }
};
