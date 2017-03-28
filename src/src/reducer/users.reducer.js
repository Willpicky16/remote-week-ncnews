import * as types from '../actions/types';

const initialState = {
  users: [],
  loading: false,
  error: null
};

function usersReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  if (action.type === types.FETCH_USERS_REQUEST) {
    newState.loading = true;
  }

  if (action.type === types.FETCH_USERS_SUCCESS) {
    newState.comments = action.data;
    newState.loading = false;
  }

  if (action.type === types.FETCH_USERS_ERROR) {
    newState.error = action.data;
    newState.loading = false;
  }

  return newState;
}

export default usersReducer;
