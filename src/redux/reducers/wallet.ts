import { ActionWalletType } from '../../types';
import { REQUESTED_API, newExpenses, ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const walletReducer = (state = INITIAL_STATE, action: ActionWalletType) => {
  switch (action.type) {
    case REQUESTED_API:
      return {
        ...state,
        currencies: action.payload.currencies,
      };
    case ADD_EXPENSE: {
      return {
        ...state,
        expenses: [...state.expenses, { ...action.payload.expense,
          exchangeRates: action.payload.data }],
      };
    }
    default:
      return state;
  }
};

export default walletReducer;
