import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (newAmount === 'number') {
      this._amount = newAmount;
    } else {
      throw new Error('amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Amount must be a Currency instance');
    }
    this._amount = newCurrency;
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency.name} (${this._currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    if ((typeof amount !== 'number')) {
      throw new TypeError('Amount must be a number');
    }
    if ((typeof conversionRate !== 'number')) {
      throw new TypeError('Conversion rate must be a number');
    }
    return (amount * conversionRate);
  }
}
export default Pricing;
