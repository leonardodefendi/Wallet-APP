import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';
import sumValues from '../utils/sumValues';
import { WalletSpan, ImgLogin } from '../styles/Login.styled';
import {
  HeaderContainer, TrybeWalletContainer,
  ExpensesContainer, EmailText,
} from '../styles/Heading.styled';

function Header() {
  const rootState = useSelector((state: GlobalStateType) => state);
  return (
    <HeaderContainer>

      <ExpensesContainer>
        <span>Total de despesas:</span>
        <span data-testid="total-field">
          {rootState.wallet.expenses.length > 0
            ? sumValues(rootState.wallet.expenses) : (0).toFixed(2)}

        </span>
        <span data-testid="header-currency-field">BRL</span>
      </ExpensesContainer>
      <TrybeWalletContainer>
        <ImgLogin src="/dolar.png" alt="" />
        <span>
          Wallet
          <WalletSpan>Trybe</WalletSpan>
        </span>
      </TrybeWalletContainer>
      <EmailText data-testid="email-field">{rootState.user.email}</EmailText>

    </HeaderContainer>
  );
}

export default Header;
