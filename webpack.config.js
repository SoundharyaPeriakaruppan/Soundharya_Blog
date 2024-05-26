const glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: glob.sync("./scripts/*.js").map((filePath) => './' + filePath),
    output: {
      filename: isProduction ? 'bundle.min.js' : 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: './index.html',
        appMountId: 'app',
        filename: 'index.html',
        scripts: isProduction ? 'bundle.min.js' : 'bundle.js',
      }),
    ],
    optimization: isProduction
      ? {
          minimize: true,
          minimizer: [new TerserPlugin({
            terserOptions: {
              ecma: 3,
            },
          })],
        }
      : {},
  };
};