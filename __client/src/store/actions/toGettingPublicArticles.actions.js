import { useEffect } from 'react';
import Axios from 'axios';
import { useSelector } from 'react-redux';

import {
  FETCH_TO_GETTING_PUBLIC_ARTICLES_PROMISE,
  FETCH_TO_GETTING_PUBLIC_ARTICLES_SUCCESS,
  FETCH_TO_GETTING_PUBLIC_ARTICLES_FAIL,
  REMOVE_TO_GETTING_PUBLIC_ARTICLE,
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
        const regroupedData = data.map((article) => ({
          ...article,
          header: article.article.header,
          sections: article.article.sections,
        }));
        dispatch({
          type: FETCH_TO_GETTING_PUBLIC_ARTICLES_SUCCESS,
          payload: regroupedData,
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
        const regroupedData = data.map((article) => ({
          ...article,
          header: article.article.header,
          sections: article.article.sections,
        }));
        const payload = regroupedData.filter(
          (article) => article.user_id !== userId
        );
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

export const removeToGettingPublicArticle = (articleId) => ({
  type: REMOVE_TO_GETTING_PUBLIC_ARTICLE,
  payload: articleId,
});

export const clearToGettingPublicArticles = {
  type: CLEAR_TO_GETTING_PUBLIC_ARTICLES,
};
