'use strict';

var slice = require('array-slice');
var console = require('console');

module.exports = {
  dir: function() {
    var args = slice(arguments);
    args.unshift('[' + this.constructor.displayName + ']');
    console.dir.apply(console, args);
  },
  log: function() {
    var args = slice(arguments);
    args.unshift('[' + this.constructor.displayName + ']');
    console.log.apply(console, args);
  },
  error: function() {
    var args = slice(arguments);
    args.unshift('[' + this.constructor.displayName + ']');
    console.error.apply(console, args);
  }
};
