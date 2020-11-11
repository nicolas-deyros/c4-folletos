const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');
const commonPaths = require('./common-paths');

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  devServer: {
    contentBase: commonPaths.outputPath,
    open: true,
  },
});
