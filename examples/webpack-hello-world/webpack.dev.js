const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './index.mjs'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [/(node_modules)/, /\.spec\.js$/],
        include: [
          path.resolve(__dirname, '../js')
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.mjs?$/,
        exclude: [/(node_modules)/, /\.spec\.mjs$/],
        include: [
          path.resolve(__dirname, '../mjs')
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [],
  devServer: {
    contentBase: path.join(__dirname, '../'),
    compress: true,
    historyApiFallback: true
  }
};
