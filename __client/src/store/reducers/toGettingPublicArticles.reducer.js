import {
  FETCH_TO_GETTING_PUBLIC_ARTICLES_PROMISE,
  FETCH_TO_GETTING_PUBLIC_ARTICLES_SUCCESS,
  FETCH_TO_GETTING_PUBLIC_ARTICLES_FAIL,
  CLEAR_TO_GETTING_PUBLIC_ARTICLES,
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
    case FETCH_TO_GETTING_PUBLIC_ARTICLES_PROMISE:
      return {
        ...state,
        loadingState: LOADING,
      };
    case FETCH_TO_GETTING_PUBLIC_ARTICLES_SUCCESS:
      return {
        loadingState: SUCCESSED,
        articles: action.payload,
      };
    case FETCH_TO_GETTING_PUBLIC_ARTICLES_FAIL:
      return {
        ...state,
        loadingState: FAILED,
      };
    case CLEAR_TO_GETTING_PUBLIC_ARTICLES:
      return {
        loadingState: null,
        articles: null,
      };
    default:
      return state;
  }
};
