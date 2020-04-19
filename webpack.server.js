const path = require("path");
const webpack = require("webpack");
const webpackNodeExternals = require("webpack-node-externals");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  target: "node",
  mode: "development",
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/build",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|otf|svg|gif)?$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "src/assets/images", to: "assets/images" },
      { from: "src/assets/css", to: "assets/css" },
      { from: "src/assets/fonts", to: "assets/fonts" },
      { from: "src/assets/js", to: "assets/js" },
    ]),
  ],
  externals: [webpackNodeExternals()],
};
