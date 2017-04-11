import * as types from '../actions/types';

const initialState = {
  comments: [],
  loading: false,
  error: null
};

// function commentsReducer (prevState = initialState, action) {
//   const newState = Object.assign({}, prevState);
//
//   if (action.type === types.FETCH_COMMENTS_REQUEST) {
//     newState.loading = true;
//   }
//
//   if (action.type === types.FETCH_COMMENTS_SUCCESS) {
//     newState.comments = action.data;
//     newState.loading = false;
//   }
//
//   if (action.type === types.FETCH_COMMENTS_ERROR) {
//     newState.error = action.data;
//     newState.loading = false;
//   }
//
//   return newState;
// }

function commentsReducer (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_COMMENTS_REQUEST:
      return Object.assign({}, prevState, {
        loading: true
      });
    case types.FETCH_COMMENTS_SUCCESS:
      return Object.assign({}, prevState, {
        comments: action.data,
        loading: false
      });
    case types.FETCH_COMMENTS_ERROR:
      return Object.assign({}, prevState, {
        error: action.error,
        loading: false
      });
    default:
      return prevState;
  }
}

export default commentsReducer;
