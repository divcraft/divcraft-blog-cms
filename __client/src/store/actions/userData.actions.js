import { useEffect } from 'react';
import Axios from 'axios';
import {
  FETCH_USER_DATA_PROMISE,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAIL,
} from 'constants';

export const fetchUserData = (id) => (dispatch) => {
  useEffect(() => {
    dispatch({
      type: FETCH_USER_DATA_PROMISE,
    });
    Axios.get(`/api/users/${id}`)
      .then((res) => {
        dispatch({
          type: FETCH_USER_DATA_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_USER_DATA_FAIL,
        });
        throw err;
      });
  }, []);
};
