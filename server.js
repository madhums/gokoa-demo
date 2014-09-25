
/*!
 * gokoa-demo
 * Copyright(c) 2014 Madhusudhan Srinivasa <madhums8@gmail.com>
 * MIT Licensed
 */

var config = require('./config');
var app = require('gokoa')(config);
var port = process.env.PORT || 3000;
var modules = [
  require('users'),
  require('posts')
];

app.use(modules).listen(port);

console.log('gokoa started on port %s', port);
