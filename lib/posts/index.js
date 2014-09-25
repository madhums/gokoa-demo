
/*!
 * Module dependencies.
 */

var koa = require('koa');
var mount = require('koa-mount');
var router = require('./router');
var posts = koa();

/*!
 * Expose
 */

module.exports = posts;

/**
 * Set model
 */

posts.use(function *(next) {
  this.model = this.app.db.model('Post');
  yield next;
});

/**
 * Routes
 */

posts.use(mount('/posts', router.middleware()));
