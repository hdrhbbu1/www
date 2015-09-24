/**
 * Dependencies
 */
var lodash = require('lodash');

/**
 * Acetate Configuration
 */
module.exports = function (acetate) {
  acetate.layout('**.*', '_layout:body');

  acetate.helper('active_link', function (context, path) {
    var current = context.url.replace('/', '')
    ,   link    = path.replace('/', '');

    if (current === link) return 'active';
    return 'inactive';
  });

  acetate.filter('to_json', function (input) {
    return JSON.stringify(input);
  });

  acetate.query('notebook', 'notebook/entries/*', function (pages) {
    console.log(pages);
    return pages;
  });
};
