import { ADD_USER_DATA } from '../constants';

const submitUserData = values => ({
  type: ADD_USER_DATA,
  payload: {
    client: 'default',
    request: {
      method: 'POST',
      url: 'users',
      data: {
        ...values,
      },
    },
  },
});

export default submitUserData;
