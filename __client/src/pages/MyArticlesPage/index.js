import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TitleContainer, Wrapper, LoadingIndicator } from 'components';
import { SUCCESSED } from 'constants';
import {
  fetchPublishedArticles,
  clearPublishedArticles,
  fetchComments,
  clearComments,
} from 'store/actions';
import { PublishedArticleList } from './components';

const MyArticlesPage = () => {
  const publishedArticlesLoadingState = useSelector(
    (state) => state.publishedArticles.loadingState
  );
  const commentsLoadingState = useSelector(
    (state) => state.comments.loadingState
  );
  const isDataLoaded = useMemo(
    () =>
      publishedArticlesLoadingState === SUCCESSED &&
      commentsLoadingState === SUCCESSED,
    [publishedArticlesLoadingState, commentsLoadingState]
  );
  const dispatch = useDispatch();
  dispatch(fetchPublishedArticles());
  dispatch(fetchComments());
  useEffect(() => {
    return () => {
      dispatch(clearPublishedArticles);
      dispatch(clearComments);
    };
  }, []);
  return (
    <>
      <TitleContainer title="Moje artykuły" />
      {isDataLoaded ? (
        <Wrapper>
          <PublishedArticleList />
        </Wrapper>
      ) : (
        <LoadingIndicator pattern="page" />
      )}
    </>
  );
};

export default MyArticlesPage;
