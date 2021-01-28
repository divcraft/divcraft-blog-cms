import React from 'react';
import PropTypes from 'prop-types';
import { TileListItem as StyledTileListItem } from './style';

const TileListItem = ({ children, ...props }) => {
  return <StyledTileListItem {...props}>{children}</StyledTileListItem>;
};

TileListItem.propTypes = {
  pattern: PropTypes.oneOf(['small', 'big']).isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export default TileListItem;
