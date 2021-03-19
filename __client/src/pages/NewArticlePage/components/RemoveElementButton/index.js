import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './style';

const RemoveElementButton = ({ pattern, ...props }) => {
  return <StyledButton type="button" pattern={pattern} {...props} />;
};

RemoveElementButton.propTypes = {
  pattern: PropTypes.oneOf(['section', 'item']).isRequired,
};

export default RemoveElementButton;
