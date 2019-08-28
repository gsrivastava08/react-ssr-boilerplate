const path = require('path');
const webpack = require('webpack');

const config = {
    entry: ['./lib/renderer/ClientRenderer.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
      },
      module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/env", "@babel/react"]
            }
          }
        }]
      }
};

module.exports = config;
