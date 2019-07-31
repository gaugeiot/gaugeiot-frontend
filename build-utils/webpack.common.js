const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: [path.resolve(__dirname, '../', 'node_modules')],
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(), // trackes unused files in the distribution folder and removes them
    //automatically replace the new genereted bundle in the index.html output
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../', 'assets/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: '../dist',
    inline: true,
    hot: true,
    host: '0.0.0.0',
    port: 3000
  }
};
