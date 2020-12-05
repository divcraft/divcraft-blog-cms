import React from 'react';
import { useSelector } from 'react-redux';

const OverviewPage = () => {
  const userData = useSelector((state) => state.auth.userData);
  return (
    <>
      <div>OverviewPage</div>
      <h1>Hello {userData.username}</h1>
    </>
  );
};

export default OverviewPage;
