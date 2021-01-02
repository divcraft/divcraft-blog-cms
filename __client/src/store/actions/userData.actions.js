import { useEffect } from 'react';
import Axios from 'axios';
import { FETCH_USER_DATA } from 'constants';

export const fetchUserData = (id) => (dispatch) => {
  useEffect(() => {
    Axios.get(`/api/users/${id}`)
      .then((res) => {
        dispatch({
          type: FETCH_USER_DATA,
          payload: res.data,
        });
      })
      .catch((err) => {
        throw err;
      });
  }, []);
};
