/**
 * Dependencies
 */
var express = require('express')
,   config  = require('config')
,   app     = express();

/**
 * Middleware
 */
app.use(express.static(config.get('build')));

/**
 * Boot/Expose
 */
if (!module.parent) {
  app.listen(config.get('port'));
}

module.exports = app;
