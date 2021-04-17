import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './style';

const AddElementButton = ({ pattern, children, ...props }) => {
  return (
    <StyledButton type="button" pattern={pattern} {...props}>
      {children}
    </StyledButton>
  );
};

AddElementButton.propTypes = {
  pattern: PropTypes.oneOf(['blue', 'gray']).isRequired,
  children: PropTypes.string.isRequired,
};

export default AddElementButton;
