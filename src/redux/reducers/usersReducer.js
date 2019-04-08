import {
  LOAD_USER_DATA, PENDING, SUCCESS, FAIL,
} from '../constants';

export const initialState = {
  loadingData: false,
  usersDataSet: [],
};

const loadUsersDataActionMap = {

  [LOAD_USER_DATA + PENDING]: state => ({
    ...state,
    loadingData: true,
  }),
  [LOAD_USER_DATA + FAIL]: state => ({
    ...state,
    loadingData: false,
  }),
  [LOAD_USER_DATA + SUCCESS]: (state, action) => {
    const { payload: { data } } = action;

    return {
      ...state,
      usersDataSet: data || [],
      loadingData: false,
    };
  },
};


const actionsMap = {
  ...loadUsersDataActionMap,
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
