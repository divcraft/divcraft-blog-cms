import React from 'react';
import PropTypes from 'prop-types';
import { MOVE_UP, MOVE_DOWN } from 'constants';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { StyledFontAwesome, ArrowButton } from './style';

const ChangePositionButtons = ({
  handleMoveElement,
  // handleMoveElementUp,
  // handleMoveElementDown,
}) => {
  return (
    <div>
      <ArrowButton type="button" onClick={() => handleMoveElement(MOVE_UP)}>
        <StyledFontAwesome icon={faSortUp} />
      </ArrowButton>
      <ArrowButton type="button" onClick={() => handleMoveElement(MOVE_DOWN)}>
        <StyledFontAwesome icon={faSortDown} />
      </ArrowButton>
    </div>
  );
};

ChangePositionButtons.propTypes = {
  handleMoveElement: PropTypes.func.isRequired,
  // handleMoveElementUp: PropTypes.func.isRequired,
  // handleMoveElementDown: PropTypes.func.isRequired,
};
export default ChangePositionButtons;
