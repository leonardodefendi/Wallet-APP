import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmail } from '../redux/actions';

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
    <form action="" onSubmit={ handleSubmit }>
      <label htmlFor="">
        Login :
        <input
          type="text"
          data-testid="email-input"
          onChange={ handleChangeLogin }
          value={ login.email }
          name="email"
        />
      </label>
      <label htmlFor="">
        <input
          type="password"
          data-testid="password-input"
          onChange={ handleChangeLogin }
          value={ login.password }
          name="password"
        />
      </label>
      <button disabled={ !validateLogin() }>Entrar</button>
    </form>
  );
}

export default Login;
