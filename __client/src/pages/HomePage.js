import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Banner } from 'layouts';
import { getBannerApi } from 'store/actions';

const HomePage = () => {
  const api = useSelector((state) => state.banner);
  const dispatch = useDispatch();
  dispatch(getBannerApi());
  return <>{api && <Banner api={api} />}</>;
};

export default HomePage;
