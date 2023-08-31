import { ExpenseType } from '../types';

const sumValues = (expenses: ExpenseType[]) => {
  console.log(expenses);
  if (expenses.length > 0) {
    const value = expenses.reduce((acc, curr) => {
      const coinValue = Number(curr.exchangeRates[curr.currency].ask);
      acc += (Number(curr.value) * coinValue);
      return acc;
    }, 0);
    // console.log(value);
    return value.toFixed(2);
  }
  return 0.00;
};

export default sumValues;
