import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, LoadingIndicator } from 'components';
import { SUCCESSED } from 'constants';
import {
  fetchUnpublishedArticles,
  clearUnpublishedArticles,
} from 'store/actions';
// import { ToGettingPublicArticleList } from './components';

const ToGettingPublicPage = () => {
  const unpublishedArticlesLoadingState = useSelector(
    (state) => state.unpublishedArticles.loadingState
  );
  const isDataLoaded = useMemo(
    () => unpublishedArticlesLoadingState === SUCCESSED,
    [unpublishedArticlesLoadingState]
  );
  const dispatch = useDispatch();
  dispatch(fetchUnpublishedArticles());
  useEffect(() => {
    return () => {
      dispatch(clearUnpublishedArticles);
    };
  }, []);
  return (
    <>
      {isDataLoaded ? (
        <Wrapper>
          {/* <PublishedArticleList /> */}
          <div>to getting public</div>
        </Wrapper>
      ) : (
        <LoadingIndicator pattern="main" />
      )}
    </>
  );
};

export default ToGettingPublicPage;
