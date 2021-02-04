import { useEffect } from 'react';
import Axios from 'axios';
import { useSelector } from 'react-redux';

import {
  FETCH_COMMENTS_PROMISE,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
  CLEAR_COMMENTS,
} from 'constants';

export const fetchComments = () => (dispatch) => {
  const userId = useSelector((state) => state.userData.user._id);
  useEffect(() => {
    dispatch({
      type: FETCH_COMMENTS_PROMISE,
    });
    Axios.get(`/api/comments?userId=${userId}`)
      .then((res) => {
        const { data } = res;
        dispatch({
          type: FETCH_COMMENTS_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_COMMENTS_FAIL,
        });
        throw err;
      });
  }, []);
};

export const clearComments = {
  type: CLEAR_COMMENTS,
};
