import { GET_TOKEN, EMAIL, SCORE } from '../actions/actionTypes';

const initialState = {
  data: [],
  player: {
    name: '',
    assertions: 0,
    score: 0,
    gravatarEmail: '',
  },
};

function tokenApi(state = initialState, action) {
  switch (action.type) {
  case GET_TOKEN:
    return { ...state, data: action.payload };
  case EMAIL:
    return { ...state, gravatarEmail: action.email, name: action.user };
  case SCORE:
    return {
      ...state,
      player: {
        assertions: action.assertions,
        score: action.score,
      },
    };
  default:
    return state;
  }
}

/* function nameUser(state = initialState, action) {
  switch (action.type) {
  case GET_NAME:
    return { ...state, data: action.payload };
  case 'EMAIL':
    return { ...state, email: action.email, userName: action.user };
  default:
    return state;
  }
} */
export default tokenApi;
