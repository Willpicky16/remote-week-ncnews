import * as types from '../actions/types';

const initialState = {
  users: [],
  loading: false,
  error: null
};

// function usersReducer (prevState = initialState, action) {
//   const newState = Object.assign({}, prevState);
//
//   if (action.type === types.FETCH_USERS_REQUEST) {
//     newState.loading = true;
//   }
//
//   if (action.type === types.FETCH_USERS_SUCCESS) {
//     newState.users = action.data;
//     newState.loading = false;
//   }
//
//   if (action.type === types.FETCH_USERS_ERROR) {
//     newState.error = action.data;
//     newState.loading = false;
//   }
//
//   return newState;
// }

function usersReducer (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_USERS_REQUEST:
      return Object.assign({}, prevState, {
        loading: true
      });
      case types.FETCH_USERS_SUCCESS:
        return Object.assign({}, prevState, {
          users: action.data,
          loading: false
        });
      case types.FETCH_USERS_ERROR:
        return Object.assign({}, prevState, {
          error: action.error,
          loading: false
        });
      default:
        return prevState;
    }
  }

export default usersReducer;
