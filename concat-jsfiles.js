const concat = require('concat');

const fileNames = [
  './dist/infy-custom-elements/runtime.js',
  './dist/infy-custom-elements/polyfills.js',
  './dist/infy-custom-elements/main.js'
]

concat(fileNames, './dist/infy-custom-elements.js');