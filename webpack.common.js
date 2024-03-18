const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require("assets-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "src/js", "main.js"),
    home: path.join(__dirname, "src/js/page", "home.js"),
    about: path.join(__dirname, "src/js/page", "about.js"),
  },

  resolve: {
    alias: {
      Component: path.resolve(__dirname, 'src/js/component'),
      Style: path.resolve(__dirname, 'src/css/'),
    },
  },

  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "",
  },

  module: {
    rules: [
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "name=/[hash].[ext]",
        },
      },

      { test: /\.json$/, loader: "json-loader" },

      {
        loader: "babel-loader",
        test: /\.js?$/,
        exclude: /node_modules/,
        options: { cacheDirectory: true },
      },

      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              additionalData: `
                  @import "src/css/base.scss";
                `
            },
          }
        ]
      }
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      fetch:
        "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch",
    }),

    new AssetsPlugin({
      filename: "webpack.json",
      path: path.join(process.cwd(), "site/data"),
      prettyPrint: true,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/fonts/",
          to: "fonts/",
        },
      ],
    }),

  ],
};
