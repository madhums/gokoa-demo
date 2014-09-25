
/*!
 * Module dependencies.
 */

var path = require('path');
var extend = require('util')._extend;
var development = require('./env/development');
var test = require('./env/test');
var production = require('./env/production');


// default config
var defaults = {
  root: path.normalize(__dirname + '/..'),
  modulesRoot: path.normalize(__dirname + '/../lib')
};

/**
 * Expose
 */

module.exports = {
  development: extend(development, defaults),
  test: extend(test, defaults),
  production: extend(production, defaults)
}[process.env.NODE_ENV || 'development'];
