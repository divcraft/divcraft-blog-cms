import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, LoadingIndicator } from 'components';
import { SUCCESSED } from 'constants';
import {
  fetchToGettingPublicArticles,
  clearToGettingPublicArticles,
} from 'store/actions';
import { UnpublishedArticleList } from 'pages/WaitingRoomPage/components';

const ToGettingPublicPage = () => {
  const toGettingPublicArticlesLoadingState = useSelector(
    (state) => state.toGettingPublicArticles.loadingState
  );
  const isDataLoaded = useMemo(
    () => toGettingPublicArticlesLoadingState === SUCCESSED,
    [toGettingPublicArticlesLoadingState]
  );
  const dispatch = useDispatch();
  dispatch(fetchToGettingPublicArticles());
  useEffect(() => {
    return () => {
      dispatch(clearToGettingPublicArticles);
    };
  }, []);
  return (
    <>
      {isDataLoaded ? (
        <Wrapper>
          <UnpublishedArticleList pattern="toGettingPublic" />
        </Wrapper>
      ) : (
        <LoadingIndicator pattern="main" />
      )}
    </>
  );
};

export default ToGettingPublicPage;
