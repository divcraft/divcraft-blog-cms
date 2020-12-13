import React from 'react';
import PropTypes from 'prop-types';
import { LoadingIndicator } from 'components';
import { BoxButton, TextButton } from './style';

const Button = ({ box, text, children, ...props }) => {
  return (
    <>
      {box ? (
        <BoxButton {...props}>
          <div>
            {children}
            <LoadingIndicator pattern="button" />
          </div>
        </BoxButton>
      ) : (
        <TextButton {...props}>{children}</TextButton>
      )}
    </>
  );
};

Button.propTypes = {
  box: PropTypes.bool,
  text: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

export default Button;
