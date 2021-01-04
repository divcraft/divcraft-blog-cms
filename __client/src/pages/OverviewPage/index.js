import React from 'react';
import { useSelector } from 'react-redux';
import { TitleContainer, Wrapper } from 'components';
import { YourEffortsSection } from './components';

const OverviewPage = () => {
  const firstName = useSelector((state) => state.userData.user.firstName);
  return (
    <>
      <TitleContainer username={firstName} />
      <Wrapper>
        <YourEffortsSection />
      </Wrapper>
    </>
  );
};

export default OverviewPage;
