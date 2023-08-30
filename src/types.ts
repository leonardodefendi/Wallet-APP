export type ActionUser = {
  type:string,
  payload: string
};

export type WalletType = {
  currencies: any[],
  expenses: any[],
  editor: boolean,
  idToEdit: number,
};

export type GlobalStateType = {
  user: {
    email: string,
  }
  wallet: WalletType,
};
