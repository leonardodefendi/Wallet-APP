import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';
import sumValues from '../utils/sumValues';

function Header() {
  const rootState = useSelector((state: GlobalStateType) => state);
  return (
    <header>
      <div>
        <p data-testid="email-field">{rootState.user.email}</p>
        <p data-testid="total-field">
          {rootState.wallet.expenses.length > 0
            ? sumValues(rootState.wallet.expenses) : (0).toFixed(2)}

        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    </header>
  );
}

export default Header;
