const lost = require('lost')
const rucksack = require('rucksack-css')

exports.modifyWebpackConfig = function (config) {
  config.merge({
    postcss: [
      lost(),
      rucksack()
    ],
  })

  config.loader('svg', {
    test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
  })

  return config
};
