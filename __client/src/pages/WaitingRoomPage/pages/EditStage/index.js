import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, LoadingIndicator, UnpublishedArticleList } from 'components';
import { SUCCESSED } from 'constants';
import { fetchToEditArticles, clearToEditArticles } from 'store/actions';

const EditStagePage = () => {
  const toEditArticlesLoadingState = useSelector(
    (state) => state.toEditArticles.loadingState
  );
  const isDataLoaded = useMemo(() => toEditArticlesLoadingState === SUCCESSED, [
    toEditArticlesLoadingState,
  ]);
  const dispatch = useDispatch();
  dispatch(fetchToEditArticles());
  useEffect(() => {
    return () => {
      dispatch(clearToEditArticles);
    };
  }, []);
  return (
    <>
      {isDataLoaded ? (
        <Wrapper>
          <UnpublishedArticleList pattern="toEdit" />
        </Wrapper>
      ) : (
        <LoadingIndicator pattern="main" />
      )}
    </>
  );
};

export default EditStagePage;
