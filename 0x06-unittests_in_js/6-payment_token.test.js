const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a successful response when success is true', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.have.property('data').that.equals('Successful response from the API');
        done();
      })
      .catch((err) => done(err));
  }));

  it('should not return anything when success is false', () => new Promise((done) => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        expect(response).to.be.undefined;
        done();
      })
      .catch((err) => done(err));
  }));
});
