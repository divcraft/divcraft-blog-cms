import React from 'react';
import PropTypes from 'prop-types';
import { Inner, Outer } from './style';

const LoadingIndicator = ({ pattern, ...props }) => {
  const inner = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 12; i++) {
    inner.push(<Inner pattern={pattern} key={i} {...props} />);
  }
  return (
    <Outer pattern={pattern} {...props}>
      {inner}
    </Outer>
  );
};

LoadingIndicator.propTypes = {
  pattern: PropTypes.oneOf(['main', 'page', 'button']),
};

export default LoadingIndicator;
