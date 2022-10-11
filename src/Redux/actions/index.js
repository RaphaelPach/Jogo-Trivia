const GET_TOKEN = 'GET_TOKEN';
const GET_NAME = 'GET_NAME';

const getToken = (payload) => ({
  type: GET_TOKEN,
  payload,
});

export { GET_TOKEN, GET_NAME, getToken };
