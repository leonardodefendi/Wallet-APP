import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type ActionUser = {
  type:string,
  payload: string
};

export type WalletType = {
  currencies: string[],
  expenses: ExpenseType[],
  editor: boolean,
  idToEdit: number,
};

export type GlobalStateType = {
  user: {
    email: string,
  }
  wallet: WalletType,
};

export type Dispatch = ThunkDispatch<WalletType, null, AnyAction>;

type CoinType = {
  code: string,
  codein: string,
  name: string,
  high: string,
  low: string,
  varBid: string,
  pctChange: string,
  bid: string,
  ask: string,
  timestamp: string,
  create_date: string,
};

export type ExchangeType = {
  USD: CoinType,
  CAD: CoinType
  GBP: CoinType,
  ARS: CoinType,
  BTC: CoinType,
  LTC: CoinType,
  EUR: CoinType,
  JPY: CoinType,
  CHF: CoinType,
  AUD: CoinType,
  CNY: CoinType,
  ILS: CoinType,
  ETH: CoinType,
  XRP: CoinType,
  DOGE: CoinType,
};

export type AddCurenciesType = {
  currencies: string[],
  data?:ExchangeType,
  expense?: FormValuesType
};

export type ActionWalletType = {
  type: string,
  payload: AddCurenciesType
};

export type FormValuesType = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
};

export type AddExchangeType = {
  data: ExchangeType,
  expense: FormValuesType,
};

export type ExpenseType = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: { USD: CoinType,
    CAD: CoinType
    GBP: CoinType,
    ARS: CoinType,
    BTC: CoinType,
    LTC: CoinType,
    EUR: CoinType,
    JPY: CoinType,
    CHF: CoinType,
    AUD: CoinType,
    CNY: CoinType,
    ILS: CoinType,
    ETH: CoinType,
    XRP: CoinType,
    DOGE: CoinType, },
};
