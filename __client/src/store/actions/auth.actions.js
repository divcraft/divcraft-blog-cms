import Axios from 'axios';
import { AUTH } from 'constants';
import { useEffect } from 'react';

export const checkAuthentication = () => (dispatch) => {
  useEffect(() => {
    Axios.get('/api/authentication')
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: AUTH.CHECK_AUTHENTICATION,
            payload: {
              isAuthenticated: true,
              userData: res.data,
            },
          });
        } else if (res.status === 401) {
          return res.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  }, []);
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
