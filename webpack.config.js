
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
            !env.WEBPACK_BUILD ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            // "postcss-loader",
            "sass-loader",
          ],
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "[name]-[contenthash:6].css"
      }),
      new CopyPlugin({
        patterns: [
          { from: "public/fonts", to: "fonts" },
          { from: "public/img", to: "img" }
        ],
      })
    ],

    devServer: {
      open: true,
      watchFiles: ['src/**/*', 'public/**/*'],
    }

  };
}