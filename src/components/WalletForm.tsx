import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { GlobalStateType, FormValuesType, Dispatch } from '../types';
import { newExpenses, finishEditExpense } from '../redux/actions';
import { InputForm, SelectForm, ButtonAdd } from '../styles/Wallet.styled';

const initialState = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: '',
  tag: '',
};

function WalletForm() {
  const rootState = useSelector((state: GlobalStateType) => state);
  const dispatch: Dispatch = useDispatch();
  const [formValues, setFormValues] = useState<FormValuesType>(initialState);
  const handleChange = (event:
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const idNumber = rootState.wallet.expenses.length - 1;
    if (rootState.wallet.editor) {
      const newArray = rootState.wallet.expenses.map((expense) => {
        if (expense.id === rootState.wallet.idToEdit) {
          return { ...expense,
            ...formValues,
            id: rootState.wallet.idToEdit };
        }
        return expense;
      });
      return dispatch(finishEditExpense(newArray));
    }
    if (rootState.wallet.expenses.length === 0) {
      dispatch(newExpenses(formValues));
    } else {
      dispatch(newExpenses({ ...formValues,
        id: rootState.wallet.expenses[idNumber].id + 1 }));
    }
    setFormValues(initialState);
  };

  return (
    <form action="" onSubmit={ handleSubmit }>
      <label htmlFor="value">
        Valor da Despesa:
        <InputForm
          type="text"
          data-testid="value-input"
          name="value"
          onChange={ handleChange }
          value={ formValues.value }
          placeholder="Digite o valor da despesa"
        />
      </label>
      <label htmlFor="description">
        Descrição da Despesa:
        <InputForm
          type="text"
          data-testid="description-input"
          name="description"
          onChange={ handleChange }
          value={ formValues.description }
          placeholder="Digite uma Descrição"
        />
      </label>
      <SelectForm
        name="currency"
        id=""
        data-testid="currency-input"
        onChange={ handleChange }
      >
        {rootState.wallet.currencies.map((currency) => (
          <option value={ currency } key={ currency }>{currency}</option>
        ))}
      </SelectForm>
      <SelectForm
        name="method"
        id=""
        data-testid="method-input"
        onChange={ handleChange }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </SelectForm>
      <SelectForm name="tag" id="" data-testid="tag-input" onChange={ handleChange }>
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </SelectForm>
      {!rootState.wallet.editor
        ? <ButtonAdd>Adicionar despesa</ButtonAdd>
        : <ButtonAdd>Editar despesa</ButtonAdd>}
    </form>
  );
}

export default WalletForm;
