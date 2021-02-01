import { useEffect } from 'react';
import Axios from 'axios';
import {
  FETCH_CATEGORIES_PROMISE,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAIL,
} from 'constants';

export const fetchCategories = () => (dispatch) => {
  useEffect(() => {
    dispatch({
      type: FETCH_CATEGORIES_PROMISE,
    });
    Axios.get(`/api/categories`)
      .then((res) => {
        dispatch({
          type: FETCH_CATEGORIES_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_CATEGORIES_FAIL,
        });
        throw err;
      });
  }, []);
};
