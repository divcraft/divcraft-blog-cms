import React from 'react';
import PropTypes from 'prop-types';
import { LoginTitle as StyledLoginTitle } from './style';

const LoginTitle = ({ children, ...props }) => {
  return <StyledLoginTitle {...props}>{children}</StyledLoginTitle>;
};

LoginTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default LoginTitle;
