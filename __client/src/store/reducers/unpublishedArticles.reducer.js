import {
  FETCH_UNPUBLISHED_ARTICLES_PROMISE,
  FETCH_UNPUBLISHED_ARTICLES_SUCCESS,
  FETCH_UNPUBLISHED_ARTICLES_FAIL,
  CLEAR_UNPUBLISHED_ARTICLES,
  LOADING,
  SUCCESSED,
  FAILED,
} from 'constants';

const initialState = {
  loadingState: null,
  articles: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UNPUBLISHED_ARTICLES_PROMISE:
      return {
        ...state,
        loadingState: LOADING,
      };
    case FETCH_UNPUBLISHED_ARTICLES_SUCCESS:
      return {
        loadingState: SUCCESSED,
        articles: action.payload,
      };
    case FETCH_UNPUBLISHED_ARTICLES_FAIL:
      return {
        ...state,
        loadingState: FAILED,
      };
    case CLEAR_UNPUBLISHED_ARTICLES:
      return {
        loadingState: null,
        articles: null,
      };
    default:
      return state;
  }
};
