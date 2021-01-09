import {
  FETCH_FINISHED_ARTICLES_PROMISE,
  FETCH_FINISHED_ARTICLES_SUCCESS,
  FETCH_FINISHED_ARTICLES_FAIL,
  CLEAR_FINISHED_ARTICLES,
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
    case FETCH_FINISHED_ARTICLES_PROMISE:
      return {
        ...state,
        loadingState: LOADING,
      };
    case FETCH_FINISHED_ARTICLES_SUCCESS:
      return {
        loadingState: SUCCESSED,
        articles: action.payload,
      };
    case FETCH_FINISHED_ARTICLES_FAIL:
      return {
        ...state,
        loadingState: FAILED,
      };
    case CLEAR_FINISHED_ARTICLES:
      return {
        loadingState: null,
        articles: null,
      };
    default:
      return state;
  }
};
