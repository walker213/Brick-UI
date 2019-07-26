const common = require('./webpack.config.common')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "brick - Reack",
      template: "index.html"
    })
  ],
});
