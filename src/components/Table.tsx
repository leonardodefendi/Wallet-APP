import { useSelector, useDispatch } from 'react-redux';
import { GlobalStateType } from '../types';
import currencyAtt from '../utils/currencyAtt';
import { deleteExpense } from '../redux/actions';

function Table() {
  const { wallet: { expenses } } = useSelector((state:GlobalStateType) => state);
  const dispatch = useDispatch();
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const newExpense = expenses
      .filter((expense) => (expense.id).toString() !== target.id);
    dispatch(deleteExpense(newExpense));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>
            Descrição
          </th>
          <th>
            Tag
          </th>
          <th>
            Método de pagamento
          </th>
          <th>
            Valor
          </th>
          <th>
            Moeda
          </th>
          <th>
            Câmbio utilizado
          </th>
          <th>
            Valor convertido
          </th>
          <th>
            Moeda de conversão
          </th>
          <th>
            Editar/Excluir
          </th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>
              {expense.description}
            </td>
            <td>
              {expense.tag}
            </td>
            <td>
              {expense.method}
            </td>
            <td>
              {(Number(expense.value)).toFixed(2)}
            </td>
            <td>
              {currencyAtt(expense)}
            </td>
            <td>
              {(Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)}
            </td>
            <td>
              {(Number(expense.exchangeRates[expense.currency].ask)
              * Number(expense.value)).toFixed(2)}
            </td>
            <td>
              Real
            </td>
            <td>
              <button
                id={ (expense.id).toString() }
                onClick={ handleDelete }
                data-testid="delete-btn"
              >
                Excluir

              </button>

            </td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
