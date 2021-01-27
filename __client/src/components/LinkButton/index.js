import React from 'react';
import PropTypes from 'prop-types';
import { LinkButton as StyledLinkButton } from './style';

const LinkButton = ({ children, ...props }) => {
  return <StyledLinkButton {...props}>{children}</StyledLinkButton>;
};

LinkButton.propTypes = {
  pattern: PropTypes.oneOf(['blue', 'blueWide', 'white']).isRequired,
  children: PropTypes.string.isRequired,
};

export default LinkButton;
