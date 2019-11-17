const common = require("./webpack.config.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",  // production模式压缩代码等等
  // 不打包react和react-dom
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    },
    'react-dom': {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDom"
    }
  }
});
