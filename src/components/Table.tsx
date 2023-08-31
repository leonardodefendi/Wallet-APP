import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';
import currencyAtt from '../utils/currencyAtt';

function Table() {
  const { wallet: { expenses } } = useSelector((state:GlobalStateType) => state);
  console.log(expenses);
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
            <button>Edditar</button>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
