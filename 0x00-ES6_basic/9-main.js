import getFullBudgetObject from './9-getFullBudget';

const fullBudget = getFullBudgetObject(20, 50, 10);
// new Object
console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));
