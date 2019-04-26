import {
  LOAD_USER_DATA, ADD_USER_DATA, FETCH_USER_DATA, EDIT_USER_DATA, DELETE_USER_DATA,
  PENDING, SUCCESS, FAIL,
} from '../constants';

export const initialState = {
  loadingData: false,
  usersData: [],
  userData: {},
  confirmSubmit: false,
};

const usersDataActionMap = {

  /* Load users */
  [`${LOAD_USER_DATA}${PENDING}`]: state => ({
    ...state,
    loadingData: true,
  }),
  [`${LOAD_USER_DATA}${FAIL}`]: state => ({
    ...state,
    loadingData: false,
  }),
  [`${LOAD_USER_DATA}${SUCCESS}`]: (state, action) => {
    const { payload: { data } } = action;

    return {
      ...state,
      usersData: data || [],
      loadingData: false,
    };
  },

  /* Add user */
  [`${ADD_USER_DATA}${PENDING}`]: state => ({
    ...state,
    loadingData: true,
  }),
  [`${ADD_USER_DATA}${FAIL}`]: state => ({
    ...state,
    loadingData: false,
    confirmSubmit: true,
  }),
  [`${ADD_USER_DATA}${SUCCESS}`]: (state, action) => {
    const { payload: { data } } = action;
    return {
      ...state,
      // userData: data,
      usersData: [...state.usersData, data],
      loadingData: false,
      confirmSubmit: true,
    };
  },

  // Fetch post
  [`${FETCH_USER_DATA}`]: (state, action) => {
    const { data } = action;

    return {
      ...state,
      userData: data,

      loadingData: false,
    };
  },


  /* Edit user */
  [`${EDIT_USER_DATA}${PENDING}`]: state => ({
    ...state,
    loadingData: true,
  }),
  [`${EDIT_USER_DATA}${FAIL}`]: state => ({
    ...state,
    loadingData: false,
  }),
  [`${EDIT_USER_DATA}${SUCCESS}`]: (state, action) => {
    const { payload: { data } } = action;
    return {
      ...state,
      usersData: state.usersData.map(d => (d.id === data.id ? data : d)),
      loadingData: false,
    };
  },


  /* Delete user */
  [`${DELETE_USER_DATA}${PENDING}`]: state => ({
    ...state,
    loadingData: true,
  }),
  [`${DELETE_USER_DATA}${FAIL}`]: state => ({
    ...state,
    loadingData: false,
  }),
  [`${DELETE_USER_DATA}${SUCCESS}`]: (state, action) => {
    // Check API to find out  why data is empty
    const { payload: { /* data */ config } } = action;
    return {
      ...state,
      usersData: state.usersData.filter(d => d.id !== config.dataVal.id),
      loadingData: false,
    };
  },
};

const actionsMap = {
  ...usersDataActionMap,
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
