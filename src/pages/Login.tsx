import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmail } from '../redux/actions';
import {
  Form, InputsContainer, Heading,
  ImgLogin, WalletSpan, InputLabel, ButtonLogin,
} from '../styles/Login.styled';

const initialState = {
  email: '',
  password: '',
};
function Login() {
  const [login, setLogin] = useState(initialState);
  const navigate = useNavigate();
  const dispach = useDispatch();
  const handleChangeLogin = (event:
    React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };
  const validateLogin = () => {
    const re = /\S+@\S+\.\S+/;
    return re.test(login.email) && login.password.length >= 6;
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/carteira');
    dispach((addEmail(login.email)));
  };

  return (
    <Form action="" onSubmit={handleSubmit}>
      <InputsContainer>
        <Heading>
          <ImgLogin src="/dolar.png" alt="" />
          <span>
            Wallet
            <WalletSpan>App</WalletSpan>
          </span>
        </Heading>
        <InputLabel htmlFor="">
          <span>Login :</span>
          <input
            type="text"
            data-testid="email-input"
            onChange={handleChangeLogin}
            value={login.email}
            name="email"
          />
        </InputLabel>
        <InputLabel htmlFor="">
          <span>Senha:</span>
          <input
            type="password"
            data-testid="password-input"
            onChange={handleChangeLogin}
            value={login.password}
            name="password"
          />
        </InputLabel>
        <ButtonLogin disabled={!validateLogin()}>Entrar</ButtonLogin>
      </InputsContainer>
    </Form>
  );
}

export default Login;
