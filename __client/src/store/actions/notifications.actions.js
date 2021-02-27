import { useEffect } from 'react';
import Axios from 'axios';
import { useSelector } from 'react-redux';

import {
  FETCH_NOTIFICATION_PROMISE,
  FETCH_NOTIFICATION_SUCCESS,
  FETCH_NOTIFICATION_FAIL,
  CLEAR_NOTIFICATION,
} from 'constants';

export const fetchNotifications = () => (dispatch) => {
  const userId = useSelector((state) => state.userData.user._id);
  useEffect(() => {
    dispatch({
      type: FETCH_NOTIFICATION_PROMISE,
    });
    Axios.get(`/api/notifications?userId=${userId}`)
      .then((res) => {
        const { data } = res;
        dispatch({
          type: FETCH_NOTIFICATION_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_NOTIFICATION_FAIL,
        });
        throw err;
      });
  }, []);
};

export const fetchReportsAllUsers = () => (dispatch) => {
  const userId = useSelector((state) => state.userData.user._id);
  useEffect(() => {
    dispatch({
      type: FETCH_NOTIFICATION_PROMISE,
    });
    Axios.get('/api/notifications?notificationType=report')
      .then((res) => {
        const { data } = res;
        const payload = data.filter((item) => item.user_id !== userId);
        dispatch({
          type: FETCH_NOTIFICATION_SUCCESS,
          payload,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_NOTIFICATION_FAIL,
        });
        throw err;
      });
  }, []);
};

export const clearNotifications = {
  type: CLEAR_NOTIFICATION,
};
