
/*!
 * Module dependencies.
 */

var extend = require('util')._extend;

/**
 * Load
 */

exports.load = function *(id, next) {
  this.post = yield this.model.load(this.params.id);
  if (!this.post) return this.status = 404;
  yield next;
};

/**
 * List
 */

exports.index = function *() {
  this.body = yield this.model.list();
};

/**
 * Create
 */

exports.create = function *() {
  var post = new this.model(this.request.body);
  try {
    this.body = yield post.save();
  } catch (err) {
    this.body = err;
  }
};

/**
 * Show
 */

exports.show = function *() {
  this.body = this.post;
};

/**
 * Update
 */

exports.update = function *() {
  var post = extend(this.post, this.request.body);
  try {
    this.body = yield post.save();
  } catch (err) {
    this.body = err;
  }
};

/**
 * Destroy
 */

exports.destroy = function *() {
  try {
    yield this.post.remove();
    this.status = 204;
  } catch (err) {
    this.body = err;
  }
};
