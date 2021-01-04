import React from 'react';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeader, AppMenu, AppLayout, LoadingIndicator } from 'components';
import { SUCCESSED } from 'constants';
import { fetchUserData } from 'store/actions';
import { Container } from './style';

const AppContainer = ({ children }) => {
  const cookieId = Cookies.get('user').slice(3).slice(0, -1);
  const dispatch = useDispatch();
  dispatch(fetchUserData(cookieId));
  const loadingState = useSelector((state) => state.userData.loadingState);
  return loadingState === SUCCESSED ? (
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
