var path = require("path")

module.exports = {
  devtool: "source-map",
  entry: "./src/app",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
  },
  resolve: {
    alias: { 
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
    },
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: ["ts-loader"],
      },
      { test: /\.scss$/, exclude: path.join(__dirname, 'src/**/**'),use: [{ loader: "sass-loader" }] },
    ],
  },
}
