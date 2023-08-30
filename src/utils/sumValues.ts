import { ExpenseType } from '../types';

const sumValues = (expenses: ExpenseType[]) => {
  console.log(expenses);
  const value = expenses.reduce((acc, curr) => {
    const coinValue = Number(curr.exchangeRates[curr.currency].ask);
    acc += (Number(curr.value) * coinValue);
    return acc;
  }, 0);
  // console.log(value);
  return value.toFixed(2);
};

export default sumValues;
