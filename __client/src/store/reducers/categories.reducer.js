import {
  FETCH_CATEGORIES_PROMISE,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAIL,
  LOADING,
  SUCCESSED,
  FAILED,
} from 'constants';

const initialState = {
  loadingState: null,
  categories: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_PROMISE:
      return {
        ...state,
        loadingState: LOADING,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        loadingState: SUCCESSED,
        categories: action.payload,
      };
    case FETCH_CATEGORIES_FAIL:
      return {
        ...state,
        loadingState: FAILED,
      };
    default:
      return state;
  }
};
