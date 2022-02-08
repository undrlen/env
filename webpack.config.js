// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {

  return {
    entry: './src/index.js',

    mode: env.WEBPACK_BUILD ? "production" : "development",

    output: {
      filename: '[name].bundle.js',
      // path: './dist',
      clean: true,
      pathinfo: false,
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          // include: './src',
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name][ext]'
          },
        },
        {
          test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]'
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            !env.WEBPACK_BUILD ?
              "style-loader" :
              {
                loader: MiniCssExtractPlugin.loader,
              },
            { loader: "css-loader", options: { sourceMap: true } },
            // "postcss-loader",
            { loader: "sass-loader", options: { sourceMap: true } },
          ],
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
        inject: "body",
        minify: false,
      }),
    ].concat(!env.WEBPACK_BUILD ? [] : [new MiniCssExtractPlugin()]),

    devServer: {
      open: true,
      watchFiles: ['src/**/*', 'public/**/*'],
      static: "./dist",
    },

  };
}