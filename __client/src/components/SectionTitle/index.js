import React from 'react';
import PropTypes from 'prop-types';
import { SectionTitle as StyledSectionTitle } from './style';

const SectionTitle = ({ children }) => {
  return <StyledSectionTitle>{children}</StyledSectionTitle>;
};

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionTitle;
