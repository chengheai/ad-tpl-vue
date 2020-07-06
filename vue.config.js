const path = require('path');
const resolve = function(dir) {
  return path.join(__dirname, dir);
};

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false, // 是否开启eslint保存检测
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  chainWebpack: config => {
    config.resolve.alias.set('src', resolve('src'));
    config.optimization.runtimeChunk('single');
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: true,
    }
  },
};
