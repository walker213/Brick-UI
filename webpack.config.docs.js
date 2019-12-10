const common = require("./webpack.config.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  entry: {
    index: "./preview/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "docs")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "brick - Reack",
      template: "index.html"
    })
  ]
});
