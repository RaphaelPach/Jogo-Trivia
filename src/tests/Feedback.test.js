import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Testa funcionamento da tela de feedbacks', () => {
    test('Verfica funcionalidade do botão ranking', () => {
    const player = {
     name: 'RaphaelGRUPO27',
     gravatarEmail: 'raphaelgrupo27@gmail.com',
     assertions: 3,
     score: 127,
    }
    renderWithRouterAndRedux(<App />, { player }, '/feedback');
    const hitQuestions = screen.getByTestId('feedback-total-question');
    const feedText = screen.getAllByTestId('feedback-text');
    const btnRank = screen.getByRole('button', {  name: /ranking/i});
    expect(hitQuestions.innerHTML).toBe("3");
    expect(feedText[1].innerHTML).toBe("Well Done!");
    expect(btnRank).toBeInTheDocument();
    userEvent.click(btnRank);
    const rankText = screen.getByRole('heading', {  name: /ranking/i});
    expect(rankText).toBeInTheDocument();
    })
    test('Testando Play Again', () => {
        const player = {
            name: 'RaphaelGRUPO27',
            gravatarEmail: 'raphaelgrupo27@gmail.com',
            assertions: 2,
            score: 63,
           }
        const { history } = renderWithRouterAndRedux(<App />, {player}, '/feedback');
        const hitQuestions = screen.getByTestId('feedback-total-question');
        const feedbackText = screen.getAllByTestId('feedback-text');
        expect(hitQuestions.innerHTML).toBe('2');
        expect(feedbackText[1].innerHTML).toBe('Could be better...');
        const btnAgain = screen.getByRole('button', {  name: /play again/i});
        userEvent.click(btnAgain);
        const { pathname } = history.location;
        expect(pathname).toBe('/');
        })

})
