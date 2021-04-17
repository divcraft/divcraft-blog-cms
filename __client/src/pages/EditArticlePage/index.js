import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticleData } from 'store/actions';
import { SUCCESSED } from 'constants';
import { ArticleEditor } from 'layouts';
import { TitleContainer, LoadingIndicator } from 'components';
import { TitleButtons } from './components';

const EditArticlePage = () => {
  const dispatch = useDispatch();
  const articleDataLoadingState = useSelector(
    (state) => state.articleData.loadingState
  );
  const articleTitle = useSelector(
    (state) => state.articleData.article.header.title
  );
  const { id } = useParams();
  const isDataLoaded = useMemo(() => articleDataLoadingState === SUCCESSED, [
    articleDataLoadingState,
  ]);
  useEffect(() => {
    dispatch(fetchArticleData(id));
  }, []);
  return (
    <>
      <TitleContainer
        title={isDataLoaded ? articleTitle : 'Ładowanie...'}
        hasButtons
        TitleButtons={TitleButtons}
      />
      {isDataLoaded ? <ArticleEditor /> : <LoadingIndicator pattern="page" />}
    </>
  );
};

export default EditArticlePage;
