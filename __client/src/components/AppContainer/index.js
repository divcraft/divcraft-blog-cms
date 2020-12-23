import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Menu, Layout } from './style';

const AppContainer = ({ title, requiresName, children }) => {
  return (
    <Container>
      <Header>aa</Header>
      <Menu>bb</Menu>
      <Layout title={title} requiresName={requiresName}>
        {children}
      </Layout>
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
