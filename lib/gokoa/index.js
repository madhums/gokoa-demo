
/*!
 * Module dependencies.
 */

var bodyParser = require('koa-bodyparser');
var mongoose = require('mongoose');
var logger = require('koa-logger');
var mount = require('koa-mount');
var gzip = require('koa-gzip');
var glob = require('glob');
var koa = require('koa');

/*!
 * Expose
 */

module.exports = Gokoa;

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

/**
 * Gokoa
 */

function Gokoa (config) {
  if (!(this instanceof Gokoa)) return new Gokoa(config);

  this.app = koa();
  this.app.use(logger());
  this.app.use(gzip());
  this.app.use(bodyParser());
  this.app.db = connect(config);
  this.app.config = config;
  loadModels(config);
}

/**
 * use
 *
 * @param {Array} arr
 * @return {Koa}
 * @api public
 */

Gokoa.prototype.use = function (arr) {
  var self = this;
  arr.forEach(function (mod) {
    self.app.use(mount(mod));
  });
  return this.app;
};

/**
 * connect
 *
 * @return {Mongoose}
 * @api private
 */

function connect (config) {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  mongoose.connect(config.db, options);
  return mongoose;
}

/**
 * load models
 *
 * @api public
 */

function loadModels (config) {
  var models = glob.sync(config.modulesRoot + '/**/model.js');
  models.forEach(function (model) {
    require(model);
  });
}
