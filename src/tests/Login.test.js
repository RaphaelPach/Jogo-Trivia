import React from "react";
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
/* import Login from "../pages/Login"; */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { token, player } from '../tests/mockAPI'

describe('Teste o componente <Login />', () => {
    test('Verifique LOGIN', () => {
        renderWithRouterAndRedux(<App />);
        const userText = screen.getByText(/usuario:/i)
        expect(userText).toBeInTheDocument();
    });
   test('Verifica Email', () => {
     renderWithRouterAndRedux(<App />);
     const textEmail = screen.getByText(/email:/i);
     expect(textEmail).toBeInTheDocument();
   })
  test('Verifica Configurações', () => {
    const { history } = renderWithRouterAndRedux(<App />);
   const btnConfig = screen.getByTestId("btn-settings");
   expect(btnConfig).toBeInTheDocument();
   userEvent.click(btnConfig);
   
   const { pathname } = history.location;
    expect(pathname).toBe('/settings');
   })
   
  /*  test('redirecionamento para game', async () => {
    renderWithRouterAndRedux(<App />, player);
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(token),
    });
    const getUser = screen.getByTestId("input-player-name");
    userEvent.type(getUser, 'Raphael');
    expect(getUser).toHaveValue('Raphael');
    const getEmail = screen.getByTestId("input-gravatar-email");
    userEvent.type(getEmail, 'lindo@gmail.com');
    const btnPlay = screen.getByRole('button', {  name: /play/i})
    expect(btnPlay).toBeEnabled();
    expect(btnPlay).toBeInTheDocument();
    userEvent.click(btnPlay);
     await new Promise((r) => setTimeout(r, 2000)); */
    /* const { pathname } = history.location;
    expect(pathname).toBe('/game') */
   /*  expect(global.fetch).toHaveBeenCalledTimes(2);
  }); */
  it('teste de novas functions', () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(token),
    });
    renderWithRouterAndRedux(<App />, { initialEntries: ['/'] });
    const getUser = screen.getByTestId("input-player-name");
    userEvent.type(getUser, 'Raphael');
    expect(getUser).toHaveValue('Raphael');
    const getEmail = screen.getByTestId("input-gravatar-email");
    userEvent.type(getEmail, 'lindo@gmail.com');
    const btnPlay = screen.getByRole('button', {  name: /play/i})
    expect(btnPlay).toBeEnabled();
    expect(btnPlay).toBeInTheDocument();
    userEvent.click(btnPlay);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

});  
