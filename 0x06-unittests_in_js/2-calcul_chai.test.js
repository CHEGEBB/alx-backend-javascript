const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 0 when inputs are -1.4 and 1.4', () => {
      expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
    });
  });

  describe('sUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return -1 when inputs are -1.4 and -0.4', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -0.4)).to.equal(-1);
    });
  });

  describe('dIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when b is 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return -2 when inputs are -4.5 and 2', () => {
      expect(calculateNumber('DIVIDE', -4.5, 2)).to.equal(-2);
    });

    it('should return "Error" when rounded b is 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
    });
  });
});
