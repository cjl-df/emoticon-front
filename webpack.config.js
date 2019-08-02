var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: ["webpack/hot/dev-server", __dirname + "/src/index.js"],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html",
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    inline: true,
    port: 8080
  }
};
