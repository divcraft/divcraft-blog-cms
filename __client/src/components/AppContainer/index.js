import React from 'react';
import PropTypes from 'prop-types';
import { AppHeader, AppMenu, AppLayout } from 'components';
import { Container } from './style';

const AppContainer = ({ children }) => {
  return (
    <Container>
      <AppHeader />
      <AppMenu />
      <AppLayout>{children}</AppLayout>
    </Container>
  );
};

AppContainer.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default AppContainer;
