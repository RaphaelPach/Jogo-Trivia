import React from "react";
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import Login from "../pages/Login";
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste o componente <Login />', () => {
    test('Verifique LOGIN', () => {
        renderWithRouterAndRedux(<Login />);
        const userText = screen.getByText(/usuario:/i)
        expect(userText).toBeInTheDocument();
    });
   test('Verifica Email', () => {
     renderWithRouterAndRedux(<Login />);
     const textEmail = screen.getByText(/email:/i);
     expect(textEmail).toBeInTheDocument();
   })
   test('redirecionamento para game', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const getUser = screen.getByTestId("input-player-name");
    userEvent.type(getUser, 'Raphael');
    expect(getUser).toHaveValue('Raphael');
    const getEmail = screen.getByTestId("input-gravatar-email");
    userEvent.type(getEmail, 'lindo@gmail.com');
    const btnPlay = screen.getByRole('button', {  name: /play/i})
    expect(btnPlay).toBeEnabled();
    userEvent.click(btnPlay);
    /* await new Promise((r) => setTimeout(r, 2000)); */
    // await screen.findByText('Trivia');
    const { pathname } = history.location;
    expect(pathname).toBe('/')
  });
});  
