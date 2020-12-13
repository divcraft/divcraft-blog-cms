import React from 'react';
import PropTypes from 'prop-types';
import { Inner, Outer } from './style';

const LoadingIndicator = ({ pattern }) => {
  const inner = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 12; i++) {
    inner.push(<Inner pattern={pattern} key={i} />);
  }
  return <Outer pattern={pattern}>{inner}</Outer>;
};

LoadingIndicator.propTypes = {
  pattern: PropTypes.oneOf(['main', 'button']),
};

export default LoadingIndicator;
