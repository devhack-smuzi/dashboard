const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getEnv = require('./utils').getEnv;
const getRemotes = require('./utils').getRemotes;
const getSharedDeps = require('./utils').getSharedDeps;

const services = [
  {
    url: 'http://localhost:5001/',
    endpoint: 'widget/main',
    name: 'mf1Main',
  },
  {
    url: 'http://localhost:5002/',
    endpoint: 'widget/payments',
    name: 'mf2Payments',
  },
  {
    url: 'http://localhost:5003/',
    endpoint: 'widget/cards',
    name: 'mf3Cards',
  },
  {
    url: 'http://localhost:5004/',
    endpoint: 'widget/navigation',
    name: 'mf4Navigation',
  },
  {
    url: 'http://localhost:5005/',
    endpoint: 'widget/legal-payments',
    name: 'mf5LegalPayments',
  },
];

console.log(`/* REMOTES: */`);
console.log(getRemotes(services));

module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: getEnv() === 'production' ? '/dashboard/' : 'auto',
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
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
        ],
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
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
