const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ["webpack/hot/dev-server", __dirname + "/index.js"],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html",
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("style.css")
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract(["css-loader", "less-loader"])
      }
    ]
  },

  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    inline: true,
    port: 8081
  }
};
