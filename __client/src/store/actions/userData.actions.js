import { useEffect } from 'react';
import Axios from 'axios';
import {
  FETCH_USER_DATA_PROMISE,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAIL,
  ADD_MARKED_ARTICLE_PROMISE,
  ADD_MARKED_ARTICLE_SUCCESS,
  ADD_MARKED_ARTICLE_FAIL,
  REMOVE_MARKED_ARTICLE_PROMISE,
  REMOVE_MARKED_ARTICLE_SUCCESS,
  REMOVE_MARKED_ARTICLE_FAIL,
} from 'constants';
import { useSelector } from 'react-redux';

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

export const addMarkedArticle = (articleId) => (dispatch) => {
  const userData = useSelector((state) => state.userData);
  const newMarkedArticles = [...userData.markedArticles, articleId];
  const user = {
    ...userData,
    markedArticles: newMarkedArticles,
  };
  // useEffect(() => {
  dispatch({
    type: ADD_MARKED_ARTICLE_PROMISE,
  });
  Axios.put(`/api/users/${userData._id}`, {
    user,
  })
    .then((res) => {
      dispatch({
        type: ADD_MARKED_ARTICLE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_MARKED_ARTICLE_FAIL,
      });
      throw err;
    });
  // }, []);
};

export const removeMarkedArticle = (articleId) => (dispatch) => {
  const userData = useSelector((state) => state.userData);
  const newMarkedArticles = userData.markedArticles.filter(
    (article) => article !== articleId
  );
  const user = {
    ...userData,
    markedArticles: newMarkedArticles,
  };
  // useEffect(() => {
  dispatch({
    type: REMOVE_MARKED_ARTICLE_PROMISE,
  });
  Axios.put(`/api/users/${userData._id}`, {
    user,
  })
    .then((res) => {
      dispatch({
        type: REMOVE_MARKED_ARTICLE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: REMOVE_MARKED_ARTICLE_FAIL,
      });
      throw err;
    });
  // }, []);
};
