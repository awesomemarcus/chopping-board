const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

console.log(process.env.ENV);

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.(scss|sass)$/,
       use: [
         'style-loader',
        //  MiniCssExtractPlugin.loader,
         {
           loader: 'css-loader',
           options: {
             sourceMap: true
           }
         },
         'postcss-loader',
         {
           loader: 'sass-loader',
           options: {
             sourceMap: true,
           }
         }
       ]
     },
     {
      test: /\.(png|jpe?g|gif|svg|ico)$/,
      use: [
        'url-loader?limit=10000',
        {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 7,
            },
            pngquant: {
              quality: '65-90',
              speed: 4,
            },
          },
        }
      ]
    },
   ]
  },
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'src/assets/'),
      App: path.resolve(__dirname, 'src/')
    }
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    // new MiniCssExtractPlugin({
    //   filename: 'style.[contenthash].css',
    // }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash(),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    compress: true,
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    https: true,
    port: 3000,
  }
}