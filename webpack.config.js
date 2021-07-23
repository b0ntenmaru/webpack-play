const { VueLoaderPlugin } = require('vue-loader')

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
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },

  resolve: {
    extensions: [
      '.ts', '.js'
    ],

    alias: {
      vue: "vue/dist/vue.js"
    }
  },

  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],

  output: {
    path: `${__dirname}/public`,
    filename: 'main.js',
  },

  devServer: {
    contentBase: 'public',
    open: true
  },

  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};
