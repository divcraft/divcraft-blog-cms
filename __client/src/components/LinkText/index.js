import React from 'react';
import PropTypes from 'prop-types';
import { LinkText as StyledLinkText } from './style';

const LinkText = ({ children, ...props }) => {
  return <StyledLinkText {...props}>{children}</StyledLinkText>;
};

LinkText.propTypes = {
  pattern: PropTypes.oneOf(['underline', 'noUnderline']).isRequired,
  children: PropTypes.string.isRequired,
};

export default LinkText;
