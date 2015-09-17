var webpack = require('webpack'),
    path = require('path');

module.exports = [
  {
    name: 'app-js',
    entry: './web/static/js/index.js',
    output: {
      path: './priv/static/js/',
      filename: 'app.min.js'
    },
    module: {
      loaders: [
        {
          test: /web\/static\/js.*\.jsx.js$/,
          loader: 'jsx-loader'
        },
        {
          test: /web\/static\/js.*\.js$/,
          loader: 'babel-loader'
        }
      ]
    },
    externals: {
    }
  },
  {
    name: "app-styles",
    entry: './web/static/css/app.scss',
    output: {
      path: './priv/static/css/',
      filename: 'app.min.css.js'
    },
    module: {
      loaders: [
        {
          test: /web\/static.*\.scss$/,
          loader: 'style!css!sass'
        }
      ]
    }
  }
];
