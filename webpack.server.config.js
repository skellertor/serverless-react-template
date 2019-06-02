const path = require('path');
const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');

module.exports = [
  {
    entry: slsw.lib.entries,
    output: {
      libraryTarget: 'umd',
      path: path.resolve(__dirname, '.webpack'),
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                include: __dirname,
                exclude: [/node_modules/]
            }
        ]
    }
  },
  {
    entry: { 'src/server/bundle': './src/browser/handler.js' },
    target: 'web',
    output: {
      path: path.resolve(__dirname, '.webpack'),
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/env',
                '@babel/react'
              ]
            }
          },
          include: __dirname,
          exclude: /node_modules/
        }
      ]
    }
  }
];
