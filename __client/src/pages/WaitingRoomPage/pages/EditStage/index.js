import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, LoadingIndicator } from 'components';
import { SUCCESSED } from 'constants';
import { fetchToEditArticles, clearToEditArticles } from 'store/actions';
// import { ToGettingPublicArticleList } from './components';

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
          {/* <ToEditArticleList /> */}
          <div>edit stage</div>
        </Wrapper>
      ) : (
        <LoadingIndicator pattern="main" />
      )}
    </>
  );
};

export default EditStagePage;
