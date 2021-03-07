import React from 'react';
import PropTypes from 'prop-types';
import { SectionContainer as StyledSectionContainer } from 'components';
import { SectionTitle } from './style';

const SectionContainer = ({ title, children }) => {
  return (
    <StyledSectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </StyledSectionContainer>
  );
};

SectionContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export default SectionContainer;
