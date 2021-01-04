import {
  FETCH_USER_DATA_PROMISE,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAIL,
  LOADING,
  SUCCESSED,
  FAILED,
} from 'constants';

const initialState = {
  loadingState: null,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_PROMISE:
      return {
        ...state,
        loadingState: LOADING,
      };
    case FETCH_USER_DATA_SUCCESS:
      return {
        loadingState: SUCCESSED,
        user: action.payload,
      };
    case FETCH_USER_DATA_FAIL:
      return {
        ...state,
        loadingState: FAILED,
      };
    default:
      return state;
  }
};
