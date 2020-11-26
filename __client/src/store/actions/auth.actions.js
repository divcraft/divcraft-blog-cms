import Axios from 'axios';
import { AUTH } from 'constants';

export const checkAuthentication = () => (dispatch) => {
  Axios.get('/api/authentication')
    .then((res) => console.log(res))
    .catch((err) => {
      throw err;
    });
  dispatch({
    type: AUTH.CHECK_AUTHENTICATION,
    payload: {
      isAuthenticated: false,
      userData: undefined,
    },
  });
};

export const logInUser = (userData) => {
  return {
    type: AUTH.LOG_IN_USER,
    payload: {
      isAuthenticated: true,
      userData,
    },
  };
};
