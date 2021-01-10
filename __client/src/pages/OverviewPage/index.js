import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TitleContainer, Wrapper, LoadingIndicator } from 'components';
import { SUCCESSED } from 'constants';
import { fetchFinishedArticles } from 'store/actions';
import { YourEffortsSection, NewsSection } from './components';

const OverviewPage = () => {
  const firstName = useSelector((state) => state.userData.user.firstName);
  const loadingState = useSelector(
    (state) => state.finishedArticles.loadingState
  );
  const dispatch = useDispatch();
  dispatch(fetchFinishedArticles());
  return (
    <>
      <TitleContainer username={firstName} />
      {loadingState === SUCCESSED ? (
        <Wrapper>
          <YourEffortsSection />
          <NewsSection />
        </Wrapper>
      ) : (
        <LoadingIndicator pattern="main" />
      )}
    </>
  );
};

export default OverviewPage;
