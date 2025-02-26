const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "production",
  entry: './cookies.js',
  output: {
    filename: 'cookies.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new CompressionPlugin()],
}
