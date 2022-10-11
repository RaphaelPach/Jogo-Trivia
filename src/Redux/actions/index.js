import { SCORE, EMAIL, GET_TOKEN } from './actionTypes';

const getToken = (payload) => ({
  type: GET_TOKEN,
  payload,
});

const scoreAct = (payload) => ({
  type: SCORE,
  assertions: payload.assertions,
  score: payload.score,
});

const emailAction = (payload) => ({
  type: EMAIL,
  email: payload.email,
  user: payload.user,
});

export { getToken, scoreAct, emailAction };
