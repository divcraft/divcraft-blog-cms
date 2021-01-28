import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TitleContainer, Wrapper, LoadingIndicator } from 'components';
import { SUCCESSED } from 'constants';
import {
  fetchFinishedArticles,
  clearFinishedArticles,
  fetchNotifications,
  clearNotifications,
} from 'store/actions';
import {
  YourEffortsSection,
  NotificationsSection,
  AwaitingArticlesSection,
} from './components';

const OverviewPage = () => {
  const firstName = useSelector((state) => state.userData.user.firstName);
  const finishedArticlesLoadingState = useSelector(
    (state) => state.finishedArticles.loadingState
  );
  const notificationsLoadingState = useSelector(
    (state) => state.notifications.loadingState
  );
  const isDataLoaded = useMemo(
    () =>
      finishedArticlesLoadingState === SUCCESSED &&
      notificationsLoadingState === SUCCESSED,
    [finishedArticlesLoadingState, notificationsLoadingState]
  );
  const dispatch = useDispatch();
  dispatch(fetchFinishedArticles());
  dispatch(fetchNotifications());
  useEffect(() => {
    return () => {
      dispatch(clearFinishedArticles);
      dispatch(clearNotifications);
    };
  }, []);
  return (
    <>
      <TitleContainer username={firstName} />
      {isDataLoaded ? (
        <Wrapper>
          <YourEffortsSection />
          <NotificationsSection />
          <AwaitingArticlesSection />
        </Wrapper>
      ) : (
        <LoadingIndicator pattern="main" />
      )}
    </>
  );
};

export default OverviewPage;
