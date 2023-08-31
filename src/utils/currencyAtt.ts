import { ExpenseType } from '../types';

const currencyAtt = (teste: ExpenseType) => {
  const moeda = teste.currency;
  const change = teste.exchangeRates[moeda].name;
  return change;
};

export default currencyAtt;
