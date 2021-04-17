import { useEffect } from 'react';
import Axios from 'axios';
import { useSelector } from 'react-redux';

import {
  FETCH_TO_EDIT_ARTICLES_PROMISE,
  FETCH_TO_EDIT_ARTICLES_SUCCESS,
  FETCH_TO_EDIT_ARTICLES_FAIL,
  CLEAR_TO_EDIT_ARTICLES,
} from 'constants';

export const fetchToEditArticles = () => (dispatch) => {
  const userId = useSelector((state) => state.userData.user._id);
  useEffect(() => {
    dispatch({
      type: FETCH_TO_EDIT_ARTICLES_PROMISE,
    });
    Axios.get(
      `/api/articles?user_id=${userId}&isPublished=false&isFinished=false`
    )
      .then((res) => {
        const { data } = res;
        const regroupedData = data.map((article) => ({
          ...article,
          header: article.article.header,
          sections: article.article.sections,
        }));
        dispatch({
          type: FETCH_TO_EDIT_ARTICLES_SUCCESS,
          payload: regroupedData,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_TO_EDIT_ARTICLES_FAIL,
        });
        throw err;
      });
  }, []);
};

export const clearToEditArticles = {
  type: CLEAR_TO_EDIT_ARTICLES,
};
