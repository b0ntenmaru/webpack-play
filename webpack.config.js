module.exports = {
  entry: './src/main.ts',

  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      }
    ],
  },

  resolve: {
    extensions: [
      '.ts', '.js'
    ],
  },

  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },

  devServer: {
    contentBase: 'dist',
    open: true
  }
};
