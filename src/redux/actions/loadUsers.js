import { LOAD_USER_DATA } from '../constants';

const loadUsersData = () => ({
  type: LOAD_USER_DATA,
  payload: {
    client: 'default',
    request: {
      method: 'GET',
      url: 'users/users', // added /users here to handle actual GET request, remove /users to use mock server
    },
  },
});

export default loadUsersData;
