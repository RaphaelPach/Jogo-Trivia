import { SCORE, EMAIL, GET_TOKEN, URL_PIC } from './actionTypes';

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

const urlAction = (payload) => ({
  type: URL_PIC,
  url: payload,
});

export { getToken, scoreAct, emailAction, urlAction };
