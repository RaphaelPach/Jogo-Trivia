import { GET_TOKEN } from '../actions';

const initialState = {
  data: [],
};

function tokenApi(state = initialState, action) {
  switch (action.type) {
  case GET_TOKEN:
    return { ...state, data: action.payload };
  default:
    return state;
  }
}
export default tokenApi;
