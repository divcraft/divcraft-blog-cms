import {
  FETCH_COMMENTS_PROMISE,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
  CLEAR_COMMENTS,
  LOADING,
  SUCCESSED,
  FAILED,
} from 'constants';

const initialState = {
  loadingState: null,
  comments: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_PROMISE:
      return {
        ...state,
        loadingState: LOADING,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        loadingState: SUCCESSED,
        comments: action.payload,
      };
    case FETCH_COMMENTS_FAIL:
      return {
        ...state,
        loadingState: FAILED,
      };
    case CLEAR_COMMENTS:
      return {
        loadingState: null,
        comments: null,
      };
    default:
      return state;
  }
};
