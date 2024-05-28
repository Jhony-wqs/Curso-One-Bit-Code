const path = require('path');

module.exports = {
  entry: './src/index.js', // arquivo principal do seu projeto
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') // pasta onde o arquivo transpilado será salvo
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  mode: 'development'
};
