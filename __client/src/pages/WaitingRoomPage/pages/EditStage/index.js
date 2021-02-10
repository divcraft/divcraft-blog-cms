import React, { useEffect, useMemo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, LoadingIndicator } from 'components';
// import { SUCCESSED } from 'constants';
// import {
//   fetchPublishedArticles,
//   clearPublishedArticles,
//   fetchComments,
//   clearComments,
// } from 'store/actions';
// import { ToGettingPublicArticleList } from './components';

const EditStagePage = () => {
  // const publishedArticlesLoadingState = useSelector(
  //   (state) => state.publishedArticles.loadingState
  // );
  // const commentsLoadingState = useSelector(
  //   (state) => state.comments.loadingState
  // );
  // const isDataLoaded = useMemo(
  //   () =>
  //     publishedArticlesLoadingState === SUCCESSED &&
  //     commentsLoadingState === SUCCESSED,
  //   [publishedArticlesLoadingState, commentsLoadingState]
  // );
  const isDataLoaded = useMemo(() => true, []);
  // const dispatch = useDispatch();
  // dispatch(fetchPublishedArticles());
  // dispatch(fetchComments());
  useEffect(() => {
    return () => {
      // dispatch(clearPublishedArticles);
      // dispatch(clearComments);
    };
  }, []);
  return (
    <>
      {isDataLoaded ? (
        <Wrapper>
          {/* <PublishedArticleList /> */}
          <div>edit stage</div>
        </Wrapper>
      ) : (
        <LoadingIndicator pattern="main" />
      )}
    </>
  );
};

export default EditStagePage;
