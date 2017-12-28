/**
 * Test module
 */

// Module
// import * as Module from './module.js';
var assert = require('assert');
var module = require('./../tmp/src/module');
// Suite
describe('Module', function () {

  // Test
  it('is available', function () {
    assert.equal(module.getEventName(),'_test');
    assert.equal([1, 2, 3].indexOf(4), -1);
  });

});