'use strict';

var slice = require('array-slice');
var console = require('console');

var levels = ['log', 'dir', 'error', 'count', 'info'];

var logger = {};

levels.forEach(function (level) {
  logger[level] = function() {
    var args = slice(arguments);
    args.unshift('[' + this.constructor.displayName + ']');
    console[level].apply(console, args);
  };
});

module.exports = logger;
