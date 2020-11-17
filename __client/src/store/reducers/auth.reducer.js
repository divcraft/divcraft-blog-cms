import { AUTH } from 'constants';

const initialState = {
  isAuthenticated: false,
  userData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH.CHECK_AUTHENTICATION:
      return action.payload;
    default:
      return state;
  }
};
