import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, LoadingIndicator, NotificationsList } from 'components';
import { SUCCESSED } from 'constants';
import {
  fetchPublishedArticles,
  fetchNotifications,
  clearPublishedArticles,
  clearNotifications,
} from 'store/actions';

const Reports = () => {
  const publishedArticlesLoadingState = useSelector(
    (state) => state.publishedArticles.loadingState
  );
  const notificationsLoadingState = useSelector(
    (state) => state.notifications.loadingState
  );
  const isDataLoaded = useMemo(
    () =>
      publishedArticlesLoadingState === SUCCESSED &&
      notificationsLoadingState === SUCCESSED,
    [publishedArticlesLoadingState, notificationsLoadingState]
  );
  const dispatch = useDispatch();
  dispatch(fetchPublishedArticles());
  dispatch(fetchNotifications());
  useEffect(() => {
    return () => {
      dispatch(clearPublishedArticles);
      dispatch(clearNotifications);
    };
  }, []);
  return (
    <>
      {isDataLoaded ? (
        <Wrapper>
          <NotificationsList pattern="allUsers" />
        </Wrapper>
      ) : (
        <LoadingIndicator pattern="page" />
      )}
    </>
  );
};

export default Reports;
