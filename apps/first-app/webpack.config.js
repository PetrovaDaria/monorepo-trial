const HTMLWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const ExternalTemplatesRemotePlugin = require("external-remotes-plugin");
const path = require("path");

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3001
  },
  output: {
    publicPath: 'auto'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"]
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'first_app',
      remotes: {
        second_app: "second_app@[app2Url]/remoteEntry.js"
      },
      shared: {
        react: {
          singleton: true
        },
        "react-dom": {
          singleton: true
        }
      }
    }),
    new ExternalTemplatesRemotePlugin(),
    new HTMLWebpackPlugin({
      template: "./public/index.html"
    })
  ]
}
