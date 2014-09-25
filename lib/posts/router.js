
/*!
 * Module dependencies.
 */

var Router = require('koa-router');
var api = require('./api');
var router = new Router();

/*!
 * Expose
 */

module.exports = router;

/**
 * Routes
 */

router
  .param('id', api.load)
  .get('/', api.index)
  .post('/', api.create)
  .get('/:id', api.show)
  .put('/:id', api.update)
  .del('/:id', api.destroy);
