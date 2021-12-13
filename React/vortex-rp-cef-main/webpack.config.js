const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Interfaces: path.resolve(__dirname, 'src/interfaces'),
      Styles: path.resolve(__dirname, 'src/styles'),
      Redux: path.resolve(__dirname, 'src/redux'),
      Utils: path.resolve(__dirname, 'src/utils'),
      Hooks: path.resolve(__dirname, 'src/hooks')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg)$/,
        type: 'asset/resource'
      },
    ]
  }
}