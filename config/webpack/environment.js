const { environment } = require('@rails/webpacker')

// Get the actual sass-loader config
const sassLoader = environment.loaders.get('sass')
const sassLoaderConfig = sassLoader.use.find(function(element) {
  return element.loader == 'sass-loader'
})

// Use Dart-implementation of Sass (default is node-sass)
const options = sassLoaderConfig.options
options.implementation = require('sass')

// SVG loading
const fileLoader = environment.loaders.get('file')
// exclude 'svg' from file loader for @zendeskgarden/svg-icons
// see https://github.com/rails/webpacker/issues/918#issuecomment-706981769
//fileLoader.test = /\.(jpg|jpeg|png|svg|gif|eot|otf|ttf|woff|woff2)$/i;
environment.loaders.prepend('svg', {
  test: /\.svg$/,
  loader: 'url-loader'
})

module.exports = environment
