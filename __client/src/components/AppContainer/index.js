import React, { useMemo } from 'react';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeader, AppMenu, AppLayout, LoadingIndicator } from 'components';
import { SUCCESSED } from 'constants';
import { fetchUserData, fetchCategories } from 'store/actions';
import { Container } from './style';

const AppContainer = ({ children }) => {
  const cookieId = Cookies.get('user').slice(3).slice(0, -1);
  const dispatch = useDispatch();
  dispatch(fetchUserData(cookieId));
  dispatch(fetchCategories());
  const userDataLoader = useSelector((state) => state.userData.loadingState);
  const categoriesLoader = useSelector(
    (state) => state.categories.loadingState
  );
  const isDataLoaded = useMemo(
    () => userDataLoader === SUCCESSED && categoriesLoader === SUCCESSED,
    [userDataLoader, categoriesLoader]
  );
  return isDataLoaded ? (
    <Container>
      <AppHeader />
      <AppMenu />
      <AppLayout>{children}</AppLayout>
    </Container>
  ) : (
    <LoadingIndicator pattern="main" />
  );
};

AppContainer.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default AppContainer;
