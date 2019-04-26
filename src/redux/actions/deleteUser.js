import { DELETE_USER_DATA } from '../constants';

const deleteUserData = values => ({
  type: DELETE_USER_DATA,
  payload: {
    client: 'default',
    request: {
      method: 'DELETE',
      url: `users/${values.id}`,
      dataVal: {
        ...values,
      },
    },
  },
});

export default deleteUserData;
