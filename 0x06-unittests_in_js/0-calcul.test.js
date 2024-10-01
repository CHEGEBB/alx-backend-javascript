const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when inputs are 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are 1 and 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when inputs are 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when inputs are 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Additional edge cases
  it('should return 0 when inputs are 0 and 0', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return 1 when inputs are 0.4 and 0.6', function() {
    assert.strictEqual(calculateNumber(0.4, 0.6), 1);
  });

  it('should return -1 when inputs are -0.4 and -0.6', function() {
    assert.strictEqual(calculateNumber(-0.4, -0.6), -1);
  });

  it('should return -5 when inputs are -2.4 and -2.6', function() {
    assert.strictEqual(calculateNumber(-2.4, -2.6), -5);
  });
});
