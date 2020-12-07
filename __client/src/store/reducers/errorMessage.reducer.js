import {
  SET_AUTHENTICATION_ERROR,
  SET_EMAIL_NOT_FOUND_ERROR,
  SET_INCORRECT_EMAIL_ERROR,
  SET_INTERNAL_SERVER_ERROR,
  CLEAR_ERROR_MESSAGE,
} from 'constants';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION_ERROR:
      return action.payload;
    case SET_EMAIL_NOT_FOUND_ERROR:
      return action.payload;
    case SET_INCORRECT_EMAIL_ERROR:
      return action.payload;
    case SET_INTERNAL_SERVER_ERROR:
      return action.payload;
    case CLEAR_ERROR_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};
