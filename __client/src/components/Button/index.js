import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { LoadingIndicator } from 'components';
import { BoxButton, TextButton } from './style';

const Button = ({ box, text, children, ...props }) => {
  const isFormLoading = useSelector((state) => state.formLoader);
  return (
    <>
      {box ? (
        <BoxButton {...props} disabled={isFormLoading && true}>
          <div>
            {children}
            {isFormLoading && <LoadingIndicator pattern="button" />}
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
