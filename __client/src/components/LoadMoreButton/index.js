import React from 'react';
import PropTypes from 'prop-types';
import { LoadMoreButton as StyledLoadMoreButton } from './style';

const LoadMoreButton = ({ onClick }) => {
  return (
    <StyledLoadMoreButton type="button" onClick={onClick}>
      Załaduj więcej
    </StyledLoadMoreButton>
  );
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.instanceOf(Object).isRequired,
};

export default LoadMoreButton;
