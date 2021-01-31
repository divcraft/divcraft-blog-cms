import {
  FETCH_PUBLISHED_ARTICLES_PROMISE,
  FETCH_PUBLISHED_ARTICLES_SUCCESS,
  FETCH_PUBLISHED_ARTICLES_FAIL,
  CLEAR_PUBLISHED_ARTICLES,
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
    case FETCH_PUBLISHED_ARTICLES_PROMISE:
      return {
        ...state,
        loadingState: LOADING,
      };
    case FETCH_PUBLISHED_ARTICLES_SUCCESS:
      return {
        loadingState: SUCCESSED,
        articles: action.payload,
      };
    case FETCH_PUBLISHED_ARTICLES_FAIL:
      return {
        ...state,
        loadingState: FAILED,
      };
    case CLEAR_PUBLISHED_ARTICLES:
      return {
        loadingState: null,
        articles: null,
      };
    default:
      return state;
  }
};
