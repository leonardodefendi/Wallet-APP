import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { screen } from '@testing-library/react';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';
import mockFetch from './mockFetch';
import { INITIAL_STATE } from './mockExpense';

describe('1- Verifica a página de login', () => {
  test('Verifica se é renderizada da maneira correta', () => {
    renderWithRouterAndRedux(<App />);
    const textoLogin = screen.getByText(/login :/i);
    expect(textoLogin).toBeInTheDocument();
  });
  test('Verifica se ao digitar o login e a senha é possivel clicar no botão é levado para a rota /carteira', async () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByRole('textbox');
    const inputPassword = screen.getByTestId('password-input');
    const btnEnviar = screen.getByRole('button');

    await userEvent.type(inputEmail, 'teste@teste.com');
    await userEvent.type(inputPassword, '1234567');
    await userEvent.click(btnEnviar);

    const headingText = screen.getByText(/trybewallet/i);
    expect(headingText).toBeInTheDocument();
  });
});

describe('2 - Verifica a pagina da carteira', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockImplementation(mockFetch as any);
  });
  test('Verificar se a tabela está sendo renderizada corretamente', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    const headingText = screen.getByText(/trybewallet/i);
    expect(headingText).toBeInTheDocument();
    const tabela = screen.queryAllByRole('table');
    expect(tabela).toHaveLength(1);
  });
  test('Verifica se a função fetch é chamada', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    expect(global.fetch).toHaveBeenCalled();
  });
  test('Verifica o estado do redux', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'], initialState: INITIAL_STATE });
    const change = screen.getByRole('cell', { name: /dólar americano\/real brasileiro/i });
    expect(change).toBeInTheDocument();
  });
});
