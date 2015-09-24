/**
 * Dependencies
 */
var app    = require('koa')()
,   serve  = require('koa-static')
,   config = require('config');

/**
 * Middleware
 */
app.use(serve(config.get('build')));

/**
 * Boot/Expose
 */
if (!module.parent) {
  app.listen(config.get('port'));
}

module.exports = app;
