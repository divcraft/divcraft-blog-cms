import React from 'react';
import PropTypes from 'prop-types';
import { LoadingIndicator } from 'components';
import { Button as StyledButton } from './style';

const Button = ({ isFormLoading, children, ...props }) => {
  return (
    <>
      <StyledButton {...props}>
        <div>
          {children}
          {isFormLoading && <LoadingIndicator pattern="button" />}
        </div>
      </StyledButton>
    </>
  );
};

Button.propTypes = {
  pattern: PropTypes.oneOf(['blue', 'text']).isRequired,
  isFormLoading: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  isFormLoading: false,
};

export default Button;
