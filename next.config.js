const prod = process.env.NODE_ENV === 'production'
const assetPrefix = prod ? '/esrgc-newsite' : '';
const webpack = require('webpack');
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  assetPrefix: assetPrefix,
  target: 'serverless',
  webpack (config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: '/_next/static/',
          outputPath: 'static/',
          name: '[name].[ext]'
        }
      }
    });
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix)
      }),
    )
    return config
  }
})
