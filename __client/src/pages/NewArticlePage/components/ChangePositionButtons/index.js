import React from 'react';
import PropTypes from 'prop-types';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { StyledFontAwesome, ArrowButton } from './style';

const ChangePositionButtons = ({
  handleMoveElementUp,
  handleMoveElementDown,
}) => {
  return (
    <div>
      <ArrowButton type="button" onClick={handleMoveElementUp}>
        <StyledFontAwesome icon={faSortUp} />
      </ArrowButton>
      <ArrowButton type="button" onClick={handleMoveElementDown}>
        <StyledFontAwesome icon={faSortDown} />
      </ArrowButton>
    </div>
  );
};

ChangePositionButtons.propTypes = {
  handleMoveElementUp: PropTypes.func.isRequired,
  handleMoveElementDown: PropTypes.func.isRequired,
};
export default ChangePositionButtons;
