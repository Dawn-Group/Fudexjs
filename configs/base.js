const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"]

      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css']
  }
}

