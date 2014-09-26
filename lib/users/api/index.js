
/*!
 * Module dependencies.
 */

var extend = require('util')._extend;

/**
 * Load
 */

exports.load = function *(id, next) {
  this.user = yield this.model.load(id);
  if (!this.user) return this.status = 404;
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
  var user = new this.model(this.request.body);
  try {
    this.body = yield user.save();
  } catch (err) {
    this.body = err;
  }
};

/**
 * Show
 */

exports.show = function *() {
  this.body = this.user;
};

/**
 * Update
 */

exports.update = function *() {
  var user = extend(this.user, this.request.body);
  try {
    this.body = yield user.save();
  } catch (err) {
    this.body = err;
  }
};

/**
 * Destroy
 */

exports.destroy = function *() {
  try {
    yield this.user.remove();
    this.status = 204;
  } catch (err) {
    this.body = err;
  }
};
