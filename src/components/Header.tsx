import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';

function Header() {
  const rootState = useSelector((state: GlobalStateType) => state);
  return (
    <header>
      <div>
        <p data-testid="email-field">{rootState.user.email}</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    </header>
  );
}

export default Header;
