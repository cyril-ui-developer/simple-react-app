import { EDIT_USER_DATA } from '../constants';

const editUserData = values => ({
  type: EDIT_USER_DATA,
  payload: {
    client: 'default',
    request: {
      method: 'PUT',
      url: `users/${values.id}`,
      data: {
        ...values,
      },
    },
  },
});

export default editUserData;
