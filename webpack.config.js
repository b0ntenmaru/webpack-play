const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');

module.exports = {
  entry: './src/main.ts',

  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },

  resolve: {
    extensions: [
      '.ts', '.js'
    ],

    alias: {
      vue: 'vue/dist/vue.js',
      '@': path.resolve(__dirname, 'src/')
    }
  },

  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ['web', 'es5'],

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
