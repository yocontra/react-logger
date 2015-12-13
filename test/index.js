'use strict';

var should = require('should');
var logger = require('../');

var dummy = {
  constructor: {
    displayName: 'test'
  }
};

describe('logger', function() {
  it('should be able to call log', function(done) {
    logger.log.call(dummy, 'test', 123);
    done();
  });
  it('should be able to call dir', function(done) {
    logger.dir.call(dummy, 'test', 123);
    done();
  });
  it('should be able to call error', function(done) {
    //logger.error.call(dummy, 'test', 123);
    done();
  });
});
