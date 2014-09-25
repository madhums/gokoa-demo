
/*!
 * Module dependencies.
 */

var koa = require('koa');
var mount = require('koa-mount');
var router = require('./router');
var users = koa();

/*!
 * Expose
 */

module.exports = users;

/**
 * Set model
 */

users.use(function *(next) {
  this.model = this.app.db.model('User');
  yield next;
});

/**
 * Routes
 */

users.use(mount('/users', router.middleware()));
