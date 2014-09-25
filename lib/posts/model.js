
/*!
 * Module dependencies.
 */

var mongoose = require('mongoose');
var defaults = require('mongoose-load-list');
var Schema = mongoose.Schema;

/**
 * Schema
 */

var PostSchema = new Schema({
  title: { type: String, default: '', required: true },
  body: { type: String, default: '', required: true },
  user: { type: Schema.ObjectId, ref: 'User', required: true },
  created_at: { type: Date, default: Date.now }
});

/**
 * Plugins
 */

PostSchema.plugin(defaults, {
  select: 'title body user created_at',
  populate: [
    { path: 'user', select: 'user name' }
  ],
  sort: {
    created_at: -1
  },
  lean: true
});

/**
 * Register
 */

mongoose.model('Post', PostSchema);
