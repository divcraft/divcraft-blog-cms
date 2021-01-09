import { useEffect } from 'react';
import Axios from 'axios';
import { useSelector } from 'react-redux';

import {
  FETCH_FINISHED_ARTICLES_PROMISE,
  FETCH_FINISHED_ARTICLES_SUCCESS,
  FETCH_FINISHED_ARTICLES_FAIL,
  CLEAR_FINISHED_ARTICLES,
} from 'constants';

export const fetchFinishedArticles = () => (dispatch) => {
  const userId = useSelector((state) => state.userData.user._id);
  useEffect(() => {
    dispatch({
      type: FETCH_FINISHED_ARTICLES_PROMISE,
    });
    Axios.get(`/api/articles?userId=${userId}&isFinished=true`)
      .then((res) => {
        const { data } = res;
        dispatch({
          type: FETCH_FINISHED_ARTICLES_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_FINISHED_ARTICLES_FAIL,
        });
        throw err;
      });
  }, []);
};

export const clearFinishedArticles = {
  type: CLEAR_FINISHED_ARTICLES,
};
