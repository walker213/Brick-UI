const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    brick: "./lib/index.tsx"  // index改为brick直接是文件名？
  },
  output: {
    path: path.resolve(__dirname, "dist/lib"),
    // library: "brick",
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
      }, {
        test: /\.scss$/,
        // sass-loader将scss转成css, css-loader将css代码转成js对象，style-loader将js对象转成<style>csscode...</style>
        use:['style-loader','css-loader','sass-loader']
      }
    ]
  },
};