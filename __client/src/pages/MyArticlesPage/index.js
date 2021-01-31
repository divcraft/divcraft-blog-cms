import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TitleContainer,
  Wrapper,
  LoadingIndicator,
  ListContainer,
} from 'components';
import { SUCCESSED } from 'constants';
import { fetchPublishedArticles, clearPublishedArticles } from 'store/actions';
import { PublishedArticle } from './components';

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
          <ListContainer>
            <PublishedArticle>Artykuł</PublishedArticle>
            <PublishedArticle>Artykuł</PublishedArticle>
            <PublishedArticle>Artykuł</PublishedArticle>
            <PublishedArticle>Artykuł</PublishedArticle>
            <PublishedArticle>Artykuł</PublishedArticle>
          </ListContainer>
        </Wrapper>
      ) : (
        <LoadingIndicator pattern="main" />
      )}
    </>
  );
};

export default MyArticlesPage;
