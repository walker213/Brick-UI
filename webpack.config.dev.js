const common = require('./webpack.config.common')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  entry: {
    brick: "./preview/index.tsx" // index改为brick直接是文件名？
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      // 根据模板html打包一个html到output目录,并自动导入打包后的js文件
      title: "brick - Reack", // title是变量字段，在模板html中通过 <%= htmlWebpackPlugin.options.title %> 获取
      template: "index.html"
    })
  ]
});
