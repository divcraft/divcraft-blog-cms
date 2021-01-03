import React from 'react';
import PropTypes from 'prop-types';
import { Container, SectionTitle } from './style';

const SectionContainer = ({ title, children }) => {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Container>
  );
};

SectionContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export default SectionContainer;
