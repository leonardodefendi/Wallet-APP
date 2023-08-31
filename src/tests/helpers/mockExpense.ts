import Wallet from '../../pages/Wallet';
import mockData from './mockData';

export const expense = {
  id: 0,
  value: '2',
  description: 'teste',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Teste',
  exchangeRates: mockData,
};

export const INITIAL_STATE = {
  user: {
    email: 'teste@teste.com',
  },
  wallet: {
    currencies: ['USD', 'CAD', 'GBP', 'ARS', 'BTC',
      'LTC', 'EUR', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP', 'DOGE'],
    expenses: [{ id: 0,
      value: '20',
      description: 'teste',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
      exchangeRates: mockData },
    ],
    editor: false,
    idToEdit: 0,
  },
};
