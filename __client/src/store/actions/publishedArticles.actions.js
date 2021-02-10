import { useEffect } from 'react';
import Axios from 'axios';
import { useSelector } from 'react-redux';

import {
  FETCH_PUBLISHED_ARTICLES_PROMISE,
  FETCH_PUBLISHED_ARTICLES_SUCCESS,
  FETCH_PUBLISHED_ARTICLES_FAIL,
  CLEAR_PUBLISHED_ARTICLES,
} from 'constants';

export const fetchPublishedArticles = () => (dispatch) => {
  const userId = useSelector((state) => state.userData.user._id);
  useEffect(() => {
    dispatch({
      type: FETCH_PUBLISHED_ARTICLES_PROMISE,
    });
    Axios.get(`/api/articles?user_id=${userId}&isPublished=true`)
      .then((res) => {
        const { data } = res;
        dispatch({
          type: FETCH_PUBLISHED_ARTICLES_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_PUBLISHED_ARTICLES_FAIL,
        });
        throw err;
      });
  }, []);
};

export const clearPublishedArticles = {
  type: CLEAR_PUBLISHED_ARTICLES,
};
