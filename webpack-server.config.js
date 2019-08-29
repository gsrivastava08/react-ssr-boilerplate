const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  target: "node",
  entry: {
    app: ["./lib/server.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js"
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/react",
            [
              "@babel/env",
              {
                "targets": {
                  "node": "current"
                }
              }
            ]
          ]
        }
      }
    },
    {
        test: /\.scss$/,
        loader: 'ignore-loader',
        include: path.resolve(__dirname, "lib")
    }
    ]
    }
};