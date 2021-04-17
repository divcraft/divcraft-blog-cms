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
        const regroupedData = data.map((article) => ({
          ...article,
          header: article.article.header,
          sections: article.article.sections,
        }));
        dispatch({
          type: FETCH_PUBLISHED_ARTICLES_SUCCESS,
          payload: regroupedData,
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

export const fetchPublishedArticlesAllUsers = () => (dispatch) => {
  const userId = useSelector((state) => state.userData.user._id);
  useEffect(() => {
    dispatch({
      type: FETCH_PUBLISHED_ARTICLES_PROMISE,
    });
    Axios.get(`/api/articles?&isPublished=true`)
      .then((res) => {
        const { data } = res;
        const regroupedData = data.map((article) => ({
          ...article,
          header: article.article.header,
          sections: article.article.sections,
        }));
        const payload = regroupedData.filter(
          (article) => article.user_id !== userId
        );
        dispatch({
          type: FETCH_PUBLISHED_ARTICLES_SUCCESS,
          payload,
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
