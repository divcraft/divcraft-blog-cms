import { useEffect } from 'react';
import Axios from 'axios';
import { useSelector } from 'react-redux';

import {
  FETCH_UNPUBLISHED_ARTICLES_PROMISE,
  FETCH_UNPUBLISHED_ARTICLES_SUCCESS,
  FETCH_UNPUBLISHED_ARTICLES_FAIL,
  CLEAR_UNPUBLISHED_ARTICLES,
} from 'constants';

export const fetchUnpublishedArticles = () => (dispatch) => {
  const userId = useSelector((state) => state.userData.user._id);
  useEffect(() => {
    dispatch({
      type: FETCH_UNPUBLISHED_ARTICLES_PROMISE,
    });
    Axios.get(`/api/articles?userId=${userId}&isPublished=false`)
      .then((res) => {
        const { data } = res;
        dispatch({
          type: FETCH_UNPUBLISHED_ARTICLES_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_UNPUBLISHED_ARTICLES_FAIL,
        });
        throw err;
      });
  }, []);
};

export const clearUnpublishedArticles = {
  type: CLEAR_UNPUBLISHED_ARTICLES,
};
