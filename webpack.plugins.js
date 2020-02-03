const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const assets = ["img"]; // asset directories
const path = require("path")

module.exports = [
  new ForkTsCheckerWebpackPlugin({
    async: false
  }),
  ...assets.map(asset => {
    return new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src", asset),
        to: path.resolve(__dirname, ".webpack/renderer", asset)
      }
    ]);
  })
];
