import { useEffect } from 'react';
import Axios from 'axios';
import { useSelector } from 'react-redux';

import {
  FETCH_TO_GETTING_PUBLIC_ARTICLES_PROMISE,
  FETCH_TO_GETTING_PUBLIC_ARTICLES_SUCCESS,
  FETCH_TO_GETTING_PUBLIC_ARTICLES_FAIL,
  CLEAR_TO_GETTING_PUBLIC_ARTICLES,
} from 'constants';

export const fetchToGettingPublicArticlesOneUser = () => (dispatch) => {
  const userId = useSelector((state) => state.userData.user._id);
  useEffect(() => {
    dispatch({
      type: FETCH_TO_GETTING_PUBLIC_ARTICLES_PROMISE,
    });
    Axios.get(
      `/api/articles?user_id=${userId}&isPublished=false&isFinished=true`
    )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: FETCH_TO_GETTING_PUBLIC_ARTICLES_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_TO_GETTING_PUBLIC_ARTICLES_FAIL,
        });
        throw err;
      });
  }, []);
};

export const fetchToGettingPublicArticlesAllUsers = () => (dispatch) => {
  const userId = useSelector((state) => state.userData.user._id);
  useEffect(() => {
    dispatch({
      type: FETCH_TO_GETTING_PUBLIC_ARTICLES_PROMISE,
    });
    Axios.get(`/api/articles?isPublished=false&isFinished=true`)
      .then((res) => {
        const { data } = res;
        const payload = data.filter((article) => article.user_id !== userId);
        dispatch({
          type: FETCH_TO_GETTING_PUBLIC_ARTICLES_SUCCESS,
          payload,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_TO_GETTING_PUBLIC_ARTICLES_FAIL,
        });
        throw err;
      });
  }, []);
};

export const clearToGettingPublicArticles = {
  type: CLEAR_TO_GETTING_PUBLIC_ARTICLES,
};
