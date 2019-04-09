// import {
//   ADD_USER_DATA, PENDING, SUCCESS, FAIL,
// } from '../constants';


// export const initialState = {
//   loadingData: false,
//   usersData: [],
//   userData: {},
// };

// const submitUserDataActionMap = {

//   [ADD_USER_DATA + PENDING]: state => ({
//     ...state,
//     loadingData: true,
//   }),
//   [ADD_USER_DATA + FAIL]: state => ({
//     ...state,
//     loadingData: false,
//   }),
//   [ADD_USER_DATA + SUCCESS]: (state, action) => {
//     const { payload: { data } } = action;
//     let id = 1;
//     return {
//       userData: { 'data.id': id++, ...data },
//       ...state,
//       usersData: [...state.usersData, { 'data.id': id++, ...data }],
//       loadingData: false,
//     };
//   },
// };

// const actionsMap = {
//   ...submitUserDataActionMap,
// };

// export default function reducer(state = initialState, action = {}) {
//   const fn = actionsMap[action.type];
//   return fn ? fn(state, action) : state;
// }
