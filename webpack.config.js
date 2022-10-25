const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebackPlugin = require("copy-webpack-plugin");
const path = require("path");

const { cssLoaders } = require("./webpack-helpers");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  entry: {
    index: {
      import: "./src/index.tsx",
    }
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: "./dist",
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'src', 'index.html') }),
    new CopyWebackPlugin({
      patterns: [
        { from: 'src/images', to: 'images'},
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: cssLoaders(),
      },
      {
        test: /\.less$/,
        use: cssLoaders('less-loader')
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        use: ['file-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader'],
        exclude: '/node_modules/'
      }
    ],
  },
  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
