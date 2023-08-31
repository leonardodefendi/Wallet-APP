import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { screen } from '@testing-library/react';
import { $CombinedState } from 'redux';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';
import mockFetch from './mockFetch';
import { INITIAL_STATE, INITIAL_STATE_EXPENSES } from './mockExpense';
import sumValues from '../../utils/sumValues';
import currencyAtt from '../../utils/currencyAtt';
import { deleteExpense } from '../../redux/actions';
import { store } from '../../redux';

vi.mock('../../utils/sumValues');
vi.mock('../../utils/currencyAtt');
// vi.mock(deleteExpense());
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
  afterEach(() => {
    vi.restoreAllMocks();
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
  test('Verifica o estado do redux tendo expenses', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'], initialState: INITIAL_STATE });
    const change = screen.getByRole('cell', { name: /dólar americano\/real brasileiro/i });
    const btnExcluir = screen.getByRole('button', { name: /excluir/i });
    const btnEditar = screen.getByRole('button', { name: /editar/i });
    expect(change).toBeInTheDocument();
  });
  test('Verifica o estado do redux sem expenses', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'], initialState: INITIAL_STATE_EXPENSES });
    const headingValue = screen.getByText(/0\.00/i);

    expect(headingValue).toBeInTheDocument();
  });
  test('Testa se os valores são adicionados a carteira correatmente', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    const inputValor = screen.getByTestId('value-input');
    expect(inputValor).toBeInTheDocument();
    const inputDespesa = screen.getByTestId('description-input');
    expect(inputDespesa).toBeInTheDocument();
    const selectMoeda = screen.getByTestId('currency-input');
    expect(selectMoeda).toBeInTheDocument();
    const selectMetodo = screen.getByTestId('method-input');
    expect(selectMetodo).toBeInTheDocument();

    const btnEnviar = screen.getByRole('button', { name: /adicionar despesa/i });
    expect(btnEnviar).toBeInTheDocument();

    await userEvent.type(inputValor, '10');
    await userEvent.type(inputDespesa, 'teste');
    await userEvent.selectOptions(selectMoeda, 'USD');
    await userEvent.selectOptions(selectMetodo, 'Dinheiro');
    await userEvent.click(btnEnviar);

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    expect(sumValues).toHaveBeenCalled();
    expect(currencyAtt).toHaveBeenCalled();

    const btnExcluir = screen.getByRole('button', { name: /excluir/i });
    expect(btnEnviar).toBeInTheDocument();
    userEvent.click(btnExcluir);

    await userEvent.type(inputValor, '10');
    await userEvent.type(inputDespesa, 'teste');
    await userEvent.selectOptions(selectMoeda, 'USD');
    await userEvent.selectOptions(selectMetodo, 'Dinheiro');
    await userEvent.click(btnEnviar);
    expect(btnEnviar).toBeInTheDocument();

    const btnEditar = screen.getByRole('button', { name: /editar/i });
    expect(btnEditar).toBeInTheDocument();
    await userEvent.click(btnEditar);

    const btnSave = screen.getByRole('button', { name: /editar despesa/i });
    expect(btnSave).toBeInTheDocument();

    await userEvent.type(inputValor, '15');
  });
  test('Testa o estado global do redux', async () => {
    expect(sumValues([])).toBe(0.00);
  });
});
