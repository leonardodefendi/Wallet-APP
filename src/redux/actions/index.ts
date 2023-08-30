// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addEmail = (email: string) => ({
  type: ADD_EMAIL,
  payload: email,
});
// addExpense provisoria, somente para utilizar o combine
export const addExpense = () => ({
  type: ADD_EXPENSE,
});
