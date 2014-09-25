
/*!
 * Module dependencies.
 */

var mongoose = require('mongoose');
var defaults = require('mongoose-load-list');
var Schema = mongoose.Schema;

/**
 * Schema
 */

var UserSchema = new Schema({
  name: { type: String, default: '', required: true },
  username: { type: String, default: '', required: true },
  email: { type: String, default: '', required: true },
  password: { type: String, default: '', required: true },
  created_at: { type: Date, default: Date.now }
});

/**
 * Plugins
 */

UserSchema.plugin(defaults, {
  select: 'name username email created_at',
  sort: {
    name: 1
  }
});

/**
 * Register
 */

mongoose.model('User', UserSchema);
