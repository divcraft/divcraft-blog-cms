import React from 'react';
import PropTypes from 'prop-types';
import { MainTitle as StyledMainTitle } from './style';

const MainTitle = ({ children, ...props }) => {
  return <StyledMainTitle {...props}>{children}</StyledMainTitle>;
};

MainTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MainTitle;
