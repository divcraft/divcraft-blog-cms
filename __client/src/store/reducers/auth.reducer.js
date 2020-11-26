import { AUTH } from 'constants';

const initialState = {
  isAuthenticated: undefined,
  userData: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH.CHECK_AUTHENTICATION:
      return action.payload;
    case AUTH.LOG_IN_USER:
      return action.payload;
    default:
      return state;
  }
};
