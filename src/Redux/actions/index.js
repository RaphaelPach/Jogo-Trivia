<<<<<<< HEAD
import { SCORE, EMAIL, GET_TOKEN } from './actionTypes';
=======
const GET_TOKEN = 'GET_TOKEN';
const GET_NAME = 'GET_NAME';
>>>>>>> 7c43170b4a1477625ce628b1924807a4441ba788

const getToken = (payload) => ({
  type: GET_TOKEN,
  payload,
});

<<<<<<< HEAD
const scoreAct = (payload) => ({
  type: SCORE,
  assertions: payload.assertions,
  score: payload.score,
});

const email = (payload) => ({
  type: EMAIL,
  email: payload.email,
  user: payload.user,
});

export { getToken, scoreAct, email };
=======
export { GET_TOKEN, GET_NAME, getToken };
>>>>>>> 7c43170b4a1477625ce628b1924807a4441ba788
