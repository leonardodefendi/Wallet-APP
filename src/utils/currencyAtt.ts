import { ExpenseType } from '../types';

const currencyAtt = (expense: ExpenseType) => {
  const moeda = expense.currency;
  const change = expense.exchangeRates[moeda].name;
  return change;
};

export default currencyAtt;
