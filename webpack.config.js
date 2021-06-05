const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const getRemotes = require('./utils').getRemotes;
const getSharedDeps = require('./utils').getSharedDeps;

const services = [
  {
    url: 'http://localhost:3005/',
    endpoint: 'mf4navigation', // only for production
    name: 'mf4Navigation',
  },
];

module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: 'auto',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      remotes: getRemotes(services),
      shared: getSharedDeps(),
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['main'],
    }),
  ],
};
