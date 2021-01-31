import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TitleContainer, Wrapper, LoadingIndicator } from 'components';
import { SUCCESSED } from 'constants';
import { fetchPublishedArticles, clearPublishedArticles } from 'store/actions';
import { PublishedArticleList } from './components';

const MyArticlesPage = () => {
  const publishedArticlesLoadingState = useSelector(
    (state) => state.publishedArticles.loadingState
  );
  const isDataLoaded = useMemo(
    () => publishedArticlesLoadingState === SUCCESSED,
    [publishedArticlesLoadingState]
  );
  const dispatch = useDispatch();
  dispatch(fetchPublishedArticles());
  useEffect(() => {
    return () => {
      dispatch(clearPublishedArticles);
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
        <LoadingIndicator pattern="main" />
      )}
    </>
  );
};

export default MyArticlesPage;
