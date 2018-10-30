/*eslint-disable  func-names, no-param-reassign prefer-arrow-callback, object-shorthand, no-console, prefer-template, vars-on-top */
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractText = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const paths = require('./paths');
const webpackConfig = require('./webpack.config.base');

const NPMPackage = require(paths.packageJson);

let GITHASH = '';
const definePlugin = webpackConfig.plugins.find(d => d.constructor.name === 'DefinePlugin');
if (definePlugin) {
  GITHASH = definePlugin.definitions.GITHASH ? definePlugin.definitions.GITHASH.replace(/"/g, '') : '';
}

const isWithDll = process.env.noDll !== 'true';

const plugins = [
    new CleanPlugin(['dist/scripts', 'dist/styles'], { root: paths.root }),
    new CopyPlugin([
      { from: '../assets/manifest.json' }
    ]),
    new ExtractText('styles/app.[git-hash].css'),
    /*new HtmlPlugin({
      githash: GITHASH,
      inject: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      template: './index.ejs',
      title: NPMPackage.title,
      externals: [ "/antd.dll.js" ],
    }),*/
    new LodashModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      mangle: {
        keep_fnames: true,
      },
    }),
    new webpack.IgnorePlugin(/mock-data/)
  ]

if (isWithDll) {
  plugins.push(
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(paths.destinationDLL + '/app_libs-manifest.json')
    })
  )
}


module.exports = merge.smart(webpackConfig, {
  entry: {
    // 'scripts/modernizr': paths.modernizr,
    'scripts/app': paths.appIndexJs,
  },
  output: {
    chunkFilename: 'scripts/[name].[git-hash].js',
    filename: '[name].[git-hash].js',
    path: paths.destination,
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: plugins
});
