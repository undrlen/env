
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = (env) => {
  return {
    mode: env.WEBPACK_BUILD ? "production" : "development",

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        },
        {
          test: /\.(jpe?g|png|ico|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "img",
                name: "[name].[ext]"
              }
            }
          ]
        },
        {
          test: /\.(ttf|woff|woff2|eot|otf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "fonts",
                name: "[name].[ext]"
              }
            }
          ]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            !env.WEBPACK_BUILD ?
              "style-loader" :
              {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: "/public/" }
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
        // injectCss: "body",
        minify: false,
        cache: false
      }),
      // new CopyPlugin({
      //   patterns: [
      //     { from: "public/fonts", to: "fonts" },
      //     { from: "public/img", to: "img" }
      //   ],
      // })
    ].concat(!env.WEBPACK_BUILD ? [] : [new MiniCssExtractPlugin()]),

    devServer: {
      open: true,
      watchFiles: ['src/**/*', 'public/**/*'],
    },

    optimization: {
      minimize: false,
    },

  };
}