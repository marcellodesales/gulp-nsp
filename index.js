'use strict';

var nsp = require('nsp');
var fs = require('fs');

module.exports = function (options) {
  options = options || {};

  if (!fs.existsSync('package.json') && !fs.existsSync('npm-shrinkwrap.json')) {
    throw new gutil.PluginError('gulp-nsp', 'Could not find a package.json or npm-shrinkwrap.json');
  }

  return through.obj(nodeunitRunner, function (callback) {
    // TODO
  });
};
