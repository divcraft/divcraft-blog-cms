import React from 'react';
import PropTypes from 'prop-types';
import { BoxButton, TextButton } from './style';

const Button = ({ box, text, ...props }) => {
  return box ? <BoxButton {...props} /> : <TextButton {...props} />;
};

Button.propTypes = {
  box: PropTypes.bool,
  text: PropTypes.bool,
};

export default Button;
