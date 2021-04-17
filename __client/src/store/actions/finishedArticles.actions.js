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
    Axios.get(`/api/articles?user_id=${userId}&isFinished=true`)
      .then((res) => {
        const { data } = res;
        const regroupedData = data.map((article) => ({
          ...article,
          header: article.article.header,
          sections: article.article.sections,
        }));
        dispatch({
          type: FETCH_FINISHED_ARTICLES_SUCCESS,
          payload: regroupedData,
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
