import { LOAD_USER_DATA } from '../constants';

const loadUsersData = () => ({
  type: LOAD_USER_DATA,
  payload: {
    client: 'default',
    request: {
      method: 'GET',
      url: 'users',
    },
  },
});

export default loadUsersData;
