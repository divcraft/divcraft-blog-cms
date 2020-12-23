import React from 'react';
import PropTypes from 'prop-types';
import { AppHeader, AppMenu, AppLayout } from 'components';
import { Container } from './style';

const AppContainer = ({ title, requiresName, children }) => {
  return (
    <Container>
      <AppHeader />
      <AppMenu />
      <AppLayout title={title} requiresName={requiresName}>
        {children}
      </AppLayout>
    </Container>
  );
};

AppContainer.propTypes = {
  title: PropTypes.string.isRequired,
  requiresName: PropTypes.bool,
  children: PropTypes.instanceOf(Object).isRequired,
};

AppContainer.default = {
  isRequired: false,
};

export default AppContainer;
