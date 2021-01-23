import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TitleContainer, Wrapper, LoadingIndicator } from 'components';
import { SUCCESSED } from 'constants';
import {
  fetchFinishedArticles,
  clearFinishedArticles,
  fetchNotifications,
  clearNotifications,
} from 'store/actions';
import { YourEffortsSection, NotificationsSection } from './components';

const OverviewPage = () => {
  const firstName = useSelector((state) => state.userData.user.firstName);
  const finishedArticlesLoadingState = useSelector(
    (state) => state.finishedArticles.loadingState
  );
  const notificationsLoadingState = useSelector(
    (state) => state.notifications.loadingState
  );
  const isDataLoaded =
    finishedArticlesLoadingState === SUCCESSED &&
    notificationsLoadingState === SUCCESSED;
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
        </Wrapper>
      ) : (
        <LoadingIndicator pattern="main" />
      )}
    </>
  );
};

export default OverviewPage;
