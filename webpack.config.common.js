const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: "./lib/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist/lib"),
    library: "brick",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }, {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      }
    ]
  },
};