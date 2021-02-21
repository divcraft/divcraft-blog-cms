import {
  FETCH_USER_DATA_PROMISE,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAIL,
  ADD_MARKED_ARTICLE_PROMISE,
  ADD_MARKED_ARTICLE_SUCCESS,
  ADD_MARKED_ARTICLE_FAIL,
  REMOVE_MARKED_ARTICLE_PROMISE,
  REMOVE_MARKED_ARTICLE_SUCCESS,
  REMOVE_MARKED_ARTICLE_FAIL,
  LOADING,
  SUCCESSED,
  FAILED,
} from 'constants';

const initialState = {
  userLoadingState: null,
  markedArticlesLoadingState: null,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_PROMISE:
      return {
        ...state,
        userLoadingState: LOADING,
      };
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,

        userLoadingState: SUCCESSED,
        user: action.payload,
      };
    case FETCH_USER_DATA_FAIL:
      return {
        ...state,
        userLoadingState: FAILED,
      };
    case ADD_MARKED_ARTICLE_PROMISE:
      return {
        ...state,
        markedArticlesLoadingState: LOADING,
      };
    case ADD_MARKED_ARTICLE_SUCCESS:
      return {
        ...state,
        markedArticlesLoadingState: SUCCESSED,
        user: action.payload,
      };
    case ADD_MARKED_ARTICLE_FAIL:
      return {
        ...state,
        markedArticlesLoadingState: FAILED,
      };
    case REMOVE_MARKED_ARTICLE_PROMISE:
      return {
        ...state,
        markedArticlesLoadingState: LOADING,
      };
    case REMOVE_MARKED_ARTICLE_SUCCESS:
      return {
        ...state,
        markedArticlesLoadingState: SUCCESSED,
        user: action.payload,
      };
    case REMOVE_MARKED_ARTICLE_FAIL:
      return {
        ...state,
        markedArticlesLoadingState: FAILED,
      };
    default:
      return state;
  }
};
