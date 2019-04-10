import {
  LOAD_USER_DATA, ADD_USER_DATA, EDIT_USER_DATA, PENDING, SUCCESS, FAIL,
} from '../constants';

export const initialState = {
  loadingData: false,
  usersData: [],
  userData: {},
};

const loadUsersDataActionMap = {

  /* Load users */
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
      usersData: data || [],
      loadingData: false,
    };
  },

  /* Add user */
  [ADD_USER_DATA + PENDING]: state => ({
    ...state,
    loadingData: true,
  }),
  [ADD_USER_DATA + FAIL]: state => ({
    ...state,
    loadingData: false,
  }),
  [ADD_USER_DATA + SUCCESS]: (state, action) => {
    const { payload: { data } } = action;
    const id = 1;
    return {
      userData: { 'data.id': id, ...data },
      ...state,
      usersData: [...state.usersData, { 'data.id': id, ...data }],
      loadingData: false,
    };
  },

  /* Edit user */
  [EDIT_USER_DATA + PENDING]: state => ({
    ...state,
    loadingData: true,
  }),
  [EDIT_USER_DATA + FAIL]: state => ({
    ...state,
    loadingData: false,
  }),
  [EDIT_USER_DATA + SUCCESS]: (state, action) => {
    const { payload: { data } } = action;
    return {
      ...state,
      usersData: state.usersData.map(d => (d.id === data.id ? data : d)),
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
