// Coloque aqui suas actions
import { Dispatch, AddCurenciesType, AddExchangeType, FormValuesType,
  GlobalStateType } from '../../types';

export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REQUESTED_API = 'REQUESTED_API';
export const ERROR_API = 'ERROR_API';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const FINISH_EDIT_EXPENSE = 'FINISH_EDIT_EXPENSE';

export const addEmail = (email: string) => ({
  type: ADD_EMAIL,
  payload: email,
});

const addCurrencies = (currencies: AddCurenciesType) => ({
  type: REQUESTED_API,
  payload: {
    currencies: currencies.currencies,
  },
});
const addExpense = (exchanges: AddExchangeType) => ({
  type: ADD_EXPENSE,
  payload: exchanges,
});

const errorApi = (error: string) => ({
  type: ERROR_API,
  payload: error,
});

export const deleteExpense = (newArray: FormValuesType) => ({
  type: DELETE_EXPENSE,
  payload: newArray,
});

export const editExpense = (id: string) => ({
  type: EDIT_EXPENSE,
  payload: id,
});

export const finishEditExpense = (newArray: GlobalStateType) => ({
  type: FINISH_EDIT_EXPENSE,
  payload: newArray,
});

export const fetchCurrencies = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const { USDT, ...rest } = data;
      const currencies = Object.keys(rest);
      dispatch(addCurrencies({ currencies }));
    } catch (error: any) {
      dispatch(errorApi(error.message));
    }
  };
};

export const newExpenses = (expense: FormValuesType) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      // const { USDT, ...rest } = data;
      dispatch(addExpense({ data, expense }));
    } catch (error: any) {
      dispatch(errorApi(error.message));
    }
  };
};
