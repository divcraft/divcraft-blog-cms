import React from 'react';
import PropTypes from 'prop-types';
import { SectionContainer as StyledSectionContainer } from './style';

const SectionContainer = ({ pattern, children }) => {
  return (
    <StyledSectionContainer pattern={pattern}>
      {children}
    </StyledSectionContainer>
  );
};

SectionContainer.propTypes = {
  pattern: PropTypes.oneOf(['overview', 'articleEditor']).isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export default SectionContainer;
