import {
  FETCH_NOTIFICATION_PROMISE,
  FETCH_NOTIFICATION_SUCCESS,
  FETCH_NOTIFICATION_FAIL,
  CLEAR_NOTIFICATION,
  LOADING,
  SUCCESSED,
  FAILED,
} from 'constants';

const initialState = {
  loadingState: null,
  notifications: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATION_PROMISE:
      return {
        ...state,
        loadingState: LOADING,
      };
    case FETCH_NOTIFICATION_SUCCESS:
      return {
        loadingState: SUCCESSED,
        notifications: action.payload,
      };
    case FETCH_NOTIFICATION_FAIL:
      return {
        ...state,
        loadingState: FAILED,
      };
    case CLEAR_NOTIFICATION:
      return {
        loadingState: null,
        notifications: null,
      };
    default:
      return state;
  }
};
