import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

const SectionContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

SectionContainer.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default SectionContainer;
