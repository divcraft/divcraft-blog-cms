var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: './__client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash:6].min.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpe?g|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:6].[ext]',
            outputPath: 'images',
            publicPath: 'images',
            emitFile: true,
            esModule: false,
          },
        },
      },
    ],
  },
  mode: 'development',
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    overlay: true,
    historyApiFallback: { index: '/' },
    publicPath: '/',
    proxy: {
      '/': {
        target: 'http://localhost:5000',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '__client/public/index.html',
      favicon: '__client/public/favicon.svg',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/,
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};
