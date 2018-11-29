const path = require('path');
const MyPlugin = require('./plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /.js$/,
        loader: path.resolve('./loader/index.js'),
      }
    ],
  },
  plugins: [
    new MyPlugin(),
  ],
};
