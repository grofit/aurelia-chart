/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AureliaWebpackPlugin = require('aurelia-webpack-plugin');

const outDir = path.resolve(__dirname, 'dist');
module.exports = function ({ production = '', stats = 'errors-only' } = {}) {
  const cssLoaders = [{ loader: 'css-loader', options: { esModule: false } }, 'postcss-loader'];

  return {
    mode: production === 'production' ? 'production' : 'development',
    devtool: production ? false : 'source-map',
    output: {
      path: outDir,
      filename: '[name].[fullhash].js',
      chunkFilename: '[name].[chunkhash].js',
      pathinfo: false
    },
    stats: stats,
    resolve: {
      extensions: ['.ts', '.js'],
      modules: ['src', 'node_modules', '../../node_modules'].map(x => path.resolve(x)),
      alias: {
        'src': path.resolve(__dirname, 'src'),
        'aurelia-chart': path.resolve(__dirname, `../aurelia-chart/src`)
      }
    },
    entry: {
      app: './src/main.ts'
    },
    module: {
      rules: [
        { test: /\.(woff|woff2|png|eot|ttf|svg)(\?|$)/, type: 'asset' },
        { test: /\.ts$/, loader: 'ts-loader' },
        { test: /\.html$/, loader: 'html-loader' },
        // { test: /\.scss$/i, issuer: /(\.html|empty-entry\.js)$/i, use: scssLoaders },
        // { test: /\.scss$/i, issuer: /\.ts$/i, use: ['style-loader', ...scssLoaders] },
        { test: /\.css$/i, issuer: [{ not: /\.html$/i }], use: ['style-loader', 'css-loader'] },
        {
          test: /\.css$/i, issuer: /\.html$/i,
          // CSS required in templates cannot be extracted safely
          // because Aurelia would try to require it again in runtime
          use: ['css-loader']
        },
      ]
    },
    plugins: [
      new AureliaWebpackPlugin.AureliaPlugin({
        aureliaApp: 'src/main',
        dist: 'es2015',
        viewsFor: '{**/!(tslib)*.{ts,js},../**/*.{ts,js}}'
      }),
      new AureliaWebpackPlugin.GlobDependenciesPlugin({ 'main': ['src/{views,elements,converters,attributes}/**/*.{ts,html}'] }),
      new HtmlWebpackPlugin({ template: './index.ejs' })
    ]
  };
};
