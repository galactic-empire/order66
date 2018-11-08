'use strict';

require('mocha');
const assert = require('assert');
const order66 = require('./')

describe('order66', function () {
  it('should be executed', function () {
    assert.equal(order66.execute(), 'It will be done, My Lord.')
  })
});
