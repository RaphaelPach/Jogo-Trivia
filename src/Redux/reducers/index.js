import { GET_TOKEN } from '../actions';

const initialState = {
  data: [],
};

function tokenApi(state = initialState, action) {
  switch (action.type) {
  case GET_TOKEN:
    return { ...state, data: action.payload };
  case 'EMAIL':
    return { ...state, email: action.email, userName: action.user };
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
